import { CAREER_STAGES, INTERESTS, SOURCES, type InterestSubmission } from "@/lib/interest"
import { CONTACT_EMAIL } from "@/lib/seo"

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function parse(body: unknown): InterestSubmission | null {
  if (!body || typeof body !== "object") return null
  const { source, name, email, interests, stage } = body as Record<string, unknown>

  if (!SOURCES.includes(source as InterestSubmission["source"])) return null
  if (typeof email !== "string" || email.length > 254 || !EMAIL.test(email.trim())) return null
  if (name !== undefined && (typeof name !== "string" || name.length > 100)) return null
  if (!Array.isArray(interests) || !interests.every((i) => (INTERESTS as readonly string[]).includes(i))) return null
  if (stage !== "" && !(CAREER_STAGES as readonly string[]).includes(stage as string)) return null

  return {
    source: source as InterestSubmission["source"],
    name: (name ?? "").trim(),
    email: email.trim().toLowerCase(),
    interests,
    stage: stage as string,
  }
}

const TO = process.env.INTEREST_EMAIL_TO || CONTACT_EMAIL

const escape = (text: string) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

function emailFor(s: InterestSubmission) {
  const rows: [string, string][] = [
    ["Source", s.source],
    ["First name", s.name || "—"],
    ["Email", s.email],
    ["Interests", s.interests.join(", ") || "—"],
    ["Career stage", s.stage || "—"],
  ]
  return {
    subject: `New sign-up: ${s.source}${s.name ? ` – ${s.name}` : ""}`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `<table cellpadding="6">${rows
      .map(([label, value]) => `<tr><td><b>${label}</b></td><td>${escape(value)}</td></tr>`)
      .join("")}</table>`,
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.INTEREST_EMAIL_FROM
  if (!apiKey || !from) {
    console.error("Interest form is not configured: set RESEND_API_KEY and INTEREST_EMAIL_FROM.")
    return Response.json({ ok: false }, { status: 503 })
  }

  const body = await request.json().catch(() => null)

  // Bots fill every field, including this one, which people never see.
  if (body?.website) return Response.json({ ok: true })

  const submission = parse(body)
  if (!submission) return Response.json({ ok: false }, { status: 400 })

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      // Replying to the email goes straight to the person who signed up.
      body: JSON.stringify({ from, to: [TO], reply_to: submission.email, ...emailFor(submission) }),
    })
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`)
  } catch (error) {
    console.error("Could not send interest email:", error)
    return Response.json({ ok: false }, { status: 502 })
  }

  return Response.json({ ok: true })
}
