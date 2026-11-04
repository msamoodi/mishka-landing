"use client"

import { useEffect, useRef, useState } from "react"
import { IllustrativeBadge } from "./ui"

const DURATION_MS = 1600

const STATS = [
  { label: "Learners enrolled", value: 248, suffix: "" },
  { label: "Avg. progress", value: 56, suffix: "%", accent: true },
  { label: "Certificates", value: 37, suffix: "" },
]

const PATHS = [
  { label: "Product Design path", value: 72 },
  { label: "Digital Marketing path", value: 48 },
  { label: "Data & AI Literacy path", value: 30 },
]

export default function TeamOverviewCard() {
  const ref = useRef<HTMLDivElement>(null)
  // 0 to 1. The numbers and bars all read from this, so they finish together.
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setProgress(1)
          return
        }

        const start = performance.now()
        const tick = (now: number) => {
          const elapsed = Math.min((now - start) / DURATION_MS, 1)
          setProgress(1 - (1 - elapsed) ** 3)
          if (elapsed < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-5 rounded-[26px] bg-white p-[22px] text-ink desk:gap-[22px] desk:rounded-[28px] desk:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[17px] font-semibold">Team overview</p>
        <IllustrativeBadge />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(130px,100%),1fr))] gap-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 rounded-[18px] bg-canvas p-[18px]">
            <p className="text-[13px] text-subtle">{stat.label}</p>
            <p className={`text-[30px] font-semibold tracking-[-0.03em] tabular-nums ${stat.accent ? "text-brand" : ""}`}>
              {Math.round(stat.value * progress)}
              {stat.suffix}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {PATHS.map((path) => (
          <div key={path.label} className="flex flex-col gap-2">
            <div className="flex justify-between text-[15px] font-medium">
              <span>{path.label}</span>
              <span className="text-subtle tabular-nums">{Math.round(path.value * progress)}%</span>
            </div>
            <div className="h-2.5 rounded-[5px] bg-lavender">
              <div className="h-2.5 rounded-[5px] bg-brand" style={{ width: `${path.value * progress}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm leading-normal text-subtle">Sample layout with example figures.</p>
    </div>
  )
}
