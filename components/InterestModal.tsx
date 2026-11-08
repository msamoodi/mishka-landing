"use client"

import { createContext, useContext, useId, useRef, useState, type FormEvent, type ReactNode } from "react"
import { EARLY_ACCESS_URL } from "@/lib/links"
import { CAREER_STAGES, INTERESTS, type Source } from "@/lib/interest"

const FIELD = "min-h-12 w-full rounded-xl border border-field bg-white px-4 text-base text-ink placeholder:text-subtle focus:border-brand focus:outline-none"
const LEGEND = "mb-3 text-[15px] font-semibold text-ink"
const CHIP =
  "flex min-h-11 cursor-pointer items-center rounded-[40px] border border-line-strong px-4 text-[15px] text-ink transition-colors has-checked:border-brand has-checked:bg-brand-tint has-checked:font-semibold has-checked:text-brand-dark has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand"

type Status = "idle" | "sending" | "sent" | "error"

function copyFor(source: Source) {
  if (source === "Join as a learner") {
    return {
      eyebrow: "Join as a learner",
      title: "Join Mishka as a learner.",
      intro: "Tell us what you want to learn and we will keep you posted on early access and job matching.",
      thanks: "We will be in touch soon. Until then, you can start learning on the web.",
    }
  }
  // "Coming to the App Store" but "Coming to Google Play".
  const store = source === "App Store" ? "the App Store" : source
  return {
    eyebrow: `Coming to ${store}`,
    title: `Be first to get Mishka on ${store}.`,
    intro: "Tell us a little about you and we will let you know the moment it is ready.",
    thanks: `We will email you as soon as Mishka is on ${store}. Until then, you can start learning on the web.`,
  }
}

const InterestModalContext = createContext<(source: Source, clarityEvent: string) => void>(() => {})

/** Opens the shared interest form, remembering which button opened it. */
export function InterestButton({
  source,
  clarityEvent,
  className,
  children,
}: {
  source: Source
  clarityEvent: string
  className: string
  children: ReactNode
}) {
  const open = useContext(InterestModalContext)
  return (
    <button type="button" onClick={() => open(source, clarityEvent)} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  )
}

export function InterestModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [source, setSource] = useState<Source>("Google Play")
  const [status, setStatus] = useState<Status>("idle")
  const [firstName, setFirstName] = useState("")
  const id = useId()
  const copy = copyFor(source)

  const open = (next: Source, clarityEvent: string) => {
    window.clarity?.("event", clarityEvent)
    setSource(next)
    if (status !== "sending") setStatus("idle")
    dialogRef.current?.showModal()
  }

  const close = () => dialogRef.current?.close()

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()

    setStatus("sending")
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name,
          email: data.get("email"),
          interests: data.getAll("interests"),
          stage: data.get("stage") ?? "",
          website: data.get("website"),
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      window.clarity?.("event", "interest_form_submit")
      setFirstName(name.split(" ")[0])
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <InterestModalContext.Provider value={open}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby={`${id}-title`}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
        className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-[560px] overflow-y-auto rounded-[28px] bg-white p-0 text-ink shadow-[0_24px_64px_rgba(14,16,51,.28)] backdrop:bg-ink/60"
      >
        <div className="relative flex flex-col gap-6 p-6 desk:p-9">
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-canvas hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {status === "sent" ? (
            <div className="flex flex-col gap-4 pt-4 pr-8" role="status">
              <h2 id={`${id}-title`} className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em]">
                {firstName ? `Thanks, ${firstName}!` : "Thanks!"} You are on the list.
              </h2>
              <p className="text-[17px] leading-[1.6] text-muted">{copy.thanks}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <a href={EARLY_ACCESS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-[40px] bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-dark">
                  Open Mishka on the web
                </a>
                <button type="button" onClick={close} className="inline-flex min-h-12 cursor-pointer items-center rounded-[40px] border border-line-strong px-6 font-semibold transition-colors hover:border-ink">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2 pr-10">
                <p className="text-[13px] font-semibold tracking-[1.4px] text-brand uppercase">{copy.eyebrow}</p>
                <h2 id={`${id}-title`} className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em]">
                  {copy.title}
                </h2>
                <p className="text-base leading-[1.6] text-muted">{copy.intro}</p>
              </div>

              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-[15px] font-semibold">
                    First name <span className="sr-only">(optional)</span>
                    <input name="name" autoComplete="given-name" maxLength={100} placeholder="Optional" className={`${FIELD} font-normal`} />
                  </label>
                  <label className="flex flex-col gap-2 text-[15px] font-semibold">
                    Email
                    <input name="email" type="email" required autoComplete="email" maxLength={254} placeholder="you@example.com" className={`${FIELD} font-normal`} />
                  </label>
                </div>

                <fieldset>
                  <legend className={LEGEND}>What do you want to learn?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {INTERESTS.map((interest) => (
                      <label key={interest} className={CHIP}>
                        <input type="checkbox" name="interests" value={interest} className="sr-only" />
                        {interest}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className={LEGEND}>Where are you in your career?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {CAREER_STAGES.map((stage) => (
                      <label key={stage} className={CHIP}>
                        <input type="radio" name="stage" value={stage} className="sr-only" />
                        {stage}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-px w-px" />

                {status === "error" && (
                  <p role="alert" className="rounded-xl bg-blush px-4 py-3 text-[15px] text-ink">
                    Something went wrong and we could not save your details. Please try again, or email us at info@mishkaapp.com.
                  </p>
                )}

                <div className="flex flex-col gap-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex min-h-[54px] cursor-pointer items-center justify-center rounded-[40px] bg-brand px-7 text-[17px] font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === "sending" ? "Sending…" : "Notify me"}
                  </button>
                  <p className="text-[13px] leading-normal text-subtle">
                    We only use your details to tell you about Mishka. You can ask us to delete them at any time.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </dialog>
    </InterestModalContext.Provider>
  )
}
