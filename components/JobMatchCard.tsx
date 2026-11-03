"use client"

import { useState } from "react"
import TypingText from "./TypingText"
import { CheckIcon, IllustrativeBadge } from "./ui"

const JOBS = [
  { title: "Junior Product Designer", path: "Product Design", fit: 92, project: 9, test: 100 },
  { title: "Senior UX Researcher", path: "UX Research", fit: 88, project: 8, test: 94 },
  { title: "Mid-Level Digital Marketer", path: "Digital Marketing", fit: 95, project: 9, test: 96 },
]

const TITLES = JOBS.map((job) => job.title)

export default function JobMatchCard() {
  const [index, setIndex] = useState(0)
  const job = JOBS[index]

  return (
    <div className="flex flex-col gap-6 rounded-[28px] bg-white p-6 text-ink desk:p-9">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <IllustrativeBadge />
        <p className="text-sm text-subtle">Posted directly on Mishka</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[30px] leading-[1.1] font-semibold tracking-[-0.03em]">
          <TypingText phrases={TITLES} onPhraseChange={setIndex} />
        </p>
        <p className="text-base text-muted">Helsinki-area employer</p>
      </div>
      <div className="flex items-center gap-5 border-y border-line py-5">
        <p className="text-[60px] leading-none font-semibold text-brand">{job.fit}%</p>
        <p className="text-[17px] leading-[1.3] font-semibold">
          fit for your profile,
          <br />
          <span className="font-normal text-muted">based on skills you have proven</span>
        </p>
      </div>
      <ul className="flex flex-col gap-3 text-base">
        {[`${job.path} path: 4 of 4 courses`, `Practice project: ${job.project}/10`, `Final test: ${job.test}%`].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckIcon className="text-brand" />
            {item}
          </li>
        ))}
      </ul>
      <p className="rounded-[40px] bg-brand p-[15px] text-center text-base font-semibold text-white">Apply with your Mishka profile</p>
    </div>
  )
}
