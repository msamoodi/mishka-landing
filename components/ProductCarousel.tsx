"use client"

import Image from "next/image"
import { useState } from "react"

const SCREENS = [
  {
    title: "Course details",
    text: "Level, topic and duration up front, plus clear takeaways before you start.",
    image: "/images/screen-course-details.png",
  },
  {
    title: "Lesson",
    text: "Audio narration, read-along text and “Ask Mishka” to guide.",
    image: "/images/screen-lesson.png",
  },
  {
    title: "Learning path",
    text: "Your learning path with selected courses by AI, leading to practice and certificate.",
    image: "/images/screen-learning-path.png",
  },
  {
    title: "Practice review",
    text: "Mishka (AI) reviews your project: a score with written feedback.",
    image: "/images/screen-practice-review.png",
  },
  {
    title: "Certification",
    text: "A shareable certificate with practice score and final test result.",
    image: "/images/screen-certification.png",
  },
]

const COUNT = SCREENS.length

function Arrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1033" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  )
}

export default function ProductCarousel() {
  const [active, setActive] = useState(0)
  const go = (index: number) => setActive(((index % COUNT) + COUNT) % COUNT)

  return (
    <div className="flex flex-col items-center gap-7 overflow-hidden rounded-[40px] bg-mist pt-10 pb-8 desk:pt-14 desk:pb-11">
      <div role="group" aria-roledescription="carousel" aria-label="Mishka app screens" className="relative h-[690px] w-full max-w-[1100px]">
        {SCREENS.map((screen, i) => {
          // Signed distance from the active slide, wrapped so slides sit on both sides of it.
          const distance = ((i - active + COUNT + 2) % COUNT) - 2
          const away = Math.abs(distance)
          const on = distance === 0
          const scale = on ? 1 : away === 1 ? 0.82 : 0.64
          const shift = on ? 0 : Math.sign(distance) * (away === 1 ? 300 : 520)
          const opacity = on ? 1 : away === 1 ? 0.8 : 0.35

          return (
            <button
              key={screen.image}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show screen ${i + 1}: ${screen.title}`}
              aria-current={on ? "true" : "false"}
              className="absolute top-1.5 left-1/2 w-80 cursor-pointer border-0 bg-transparent p-0 transition-[transform,opacity] duration-[550ms] ease-[cubic-bezier(.3,.7,.2,1)]"
              style={{
                transform: `translateX(calc(-50% + ${shift}px)) scale(${scale})`,
                opacity,
                zIndex: 10 - away,
              }}
            >
              <span
                className={`relative block w-full rounded-[52px] p-2.5 transition-[background,box-shadow] duration-500 ${
                  on ? "bg-ink shadow-[0_36px_70px_rgba(14,16,51,.28),inset_0_0_0_2px_#2B2E5E]" : "bg-transparent"
                }`}
              >
                <span className={`absolute top-[120px] -left-[3px] h-9 w-1 rounded-sm bg-ink transition-opacity duration-400 ${on ? "opacity-100" : "opacity-0"}`} />
                <span className={`absolute top-[170px] -left-[3px] h-9 w-1 rounded-sm bg-ink transition-opacity duration-400 ${on ? "opacity-100" : "opacity-0"}`} />
                <span className={`absolute top-[150px] -right-[3px] h-[72px] w-1 rounded-sm bg-ink transition-opacity duration-400 ${on ? "opacity-100" : "opacity-0"}`} />
                <span className={`absolute top-[22px] left-1/2 z-[2] -ml-[46px] h-[26px] w-[92px] rounded-[13px] bg-ink transition-opacity duration-400 ${on ? "opacity-100" : "opacity-0"}`} />
                <Image
                  src={screen.image}
                  alt={`Mishka app screen: ${screen.title}`}
                  width={300}
                  height={654}
                  sizes="300px"
                  loading="eager"
                  className={`block h-auto w-full transition-[border-radius,box-shadow] duration-500 ${
                    on ? "rounded-[42px]" : "rounded-[28px] shadow-[0_14px_34px_rgba(14,16,51,.14)]"
                  }`}
                />
              </span>
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous screen"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-white"
        >
          <Arrow direction="prev" />
        </button>
        <div className="flex items-center">
          {SCREENS.map((screen, i) => (
            <button
              key={screen.image}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to screen ${i + 1}: ${screen.title}`}
              className="flex h-11 w-[30px] cursor-pointer items-center justify-center border-0 bg-transparent p-0"
            >
              <span className={`block h-2.5 rounded-[5px] transition-all duration-300 ${i === active ? "w-[26px] bg-brand" : "w-2.5 bg-input"}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next screen"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-white"
        >
          <Arrow direction="next" />
        </button>
      </div>

      <div aria-live="polite" className="flex max-w-[560px] flex-col items-center gap-2 px-8 text-center">
        <p className="text-[13px] font-semibold tracking-[1.4px] text-brand">
          SCREEN {active + 1} OF {COUNT}
        </p>
        <p className="text-2xl font-semibold tracking-[-0.02em] text-ink">{SCREENS[active].title}</p>
        <p className="text-[17px] leading-[1.55] text-muted">{SCREENS[active].text}</p>
      </div>
    </div>
  )
}
