"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Screen {
  image: string
  alt: string
}

const DESKTOP_QUERY = "(min-width: 768px)"

export default function ScreensRow({ screens }: { screens: Screen[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rowRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY)
    setIsDesktop(mql.matches)
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      setOffset(0)
      return
    }

    const container = containerRef.current
    const row = rowRef.current
    if (!container || !row) return

    let maxOffset = 0
    const measure = () => {
      maxOffset = Math.max(0, row.scrollWidth - container.clientWidth)
    }

    let ticking = false
    const update = () => {
      ticking = false
      const rect = container.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh
      const traveled = vh - rect.top
      const SPEED = 2.5
      const progress = Math.min(1, Math.max(0, (traveled / total) * SPEED))
      setOffset(-progress * maxOffset)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    measure()
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", measure)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
    }
  }, [isDesktop])

  return (
    <div
      ref={containerRef}
      className={
        isDesktop
          ? "relative mt-14 overflow-visible pl-6 sm:pl-12"
          : "relative mt-14 overflow-x-auto pl-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      }
    >
      <div
        ref={rowRef}
        className="flex w-max snap-x snap-mandatory gap-5 pr-6"
        style={isDesktop ? { transform: `translateX(${offset}px)` } : undefined}
      >
        {screens.map((screen) => (
          <div
            key={screen.image}
            className="relative h-[693px] w-[316.5px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-white shadow-xl"
          >
            <Image src={screen.image} alt={screen.alt} fill sizes="317px" loading="eager" className="object-cover object-top" />
          </div>
        ))}
      </div>
    </div>
  )
}
