"use client"

import { useState } from "react"
import { JOB_TITLES, JOBS } from "./JobMatchCard"
import TypingText from "./TypingText"
import { CheckIcon, IllustrativeBadge } from "./ui"

export default function EmployerFitCard() {
  const [index, setIndex] = useState(0)
  const job = JOBS[index]

  return (
    <div className="flex flex-col gap-[22px] rounded-[28px] bg-white p-6 text-ink desk:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <IllustrativeBadge />
        <p className="text-sm text-subtle">Candidate view</p>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <p className="text-[68px] leading-none font-semibold tracking-[-0.04em] text-brand">{job.fit}%</p>
        <p className="text-[17px] leading-[1.3] font-semibold">
          fit for <TypingText phrases={JOB_TITLES} onPhraseChange={setIndex} className="inline-grid" />
          <br />
          <span className="font-normal text-muted">scored on proven skills</span>
        </p>
      </div>
      <ul className="flex flex-col gap-3 border-t border-line pt-[18px] text-base">
        {[`${job.path} path: 4 of 4 courses`, `Practice project: ${job.project}/10`, `Final test: ${job.test}%`, "Mishka certificate earned"].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckIcon className="text-brand" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
