"use client"

import type { FormEvent } from "react"

const FIELD = "block min-h-[52px] w-full rounded-[14px] border border-input bg-white px-4 text-base text-ink"
const LABEL = "mb-2 block text-sm font-semibold"

// There is no form backend yet, so submitting opens the visitor's email app with the message filled in.
function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const subject = `${data.get("topic")} from ${data.get("name")}`
  const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`
  window.clarity?.("event", "contact_form_submit")
  window.location.href = `mailto:info@mishkaapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function ContactForm() {
  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="flex flex-col gap-[22px] rounded-[28px] border border-field bg-white p-7 desk:p-9"
    >
      <div>
        <label htmlFor="c-name" className={LABEL}>Name</label>
        <input id="c-name" name="name" type="text" autoComplete="name" required className={FIELD} />
      </div>
      <div>
        <label htmlFor="c-email" className={LABEL}>Email</label>
        <input id="c-email" name="email" type="email" autoComplete="email" required className={FIELD} />
      </div>
      <div>
        <label htmlFor="c-topic" className={LABEL}>Topic</label>
        <select id="c-topic" name="topic" className={FIELD}>
          <option>General question</option>
          <option>Teams and employers</option>
          <option>Partnerships</option>
        </select>
      </div>
      <div>
        <label htmlFor="c-msg" className={LABEL}>Message</label>
        <textarea id="c-msg" name="message" rows={5} required className={`${FIELD} min-h-[140px] resize-y py-3.5`} />
      </div>
      <button
        type="submit"
        className="min-h-[54px] cursor-pointer rounded-[40px] border-0 bg-brand text-[17px] font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Send message
      </button>
    </form>
  )
}
