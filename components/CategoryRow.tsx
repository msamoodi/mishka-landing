"use client"

import { useEffect, useRef, useState } from "react"

interface Category {
  label: string
  gradient: string
  description: string
}

const DESKTOP_QUERY = "(min-width: 768px)"

export default function CategoryRow({ categories }: { categories: Category[] }) {
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
      const progress = Math.min(1, Math.max(0, traveled / total))
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
          ? "relative mt-12 overflow-visible pl-6 sm:pl-12"
          : "relative mt-12 overflow-x-auto pl-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      }
    >
      <div
        ref={rowRef}
        className="flex w-max snap-x snap-mandatory gap-4 pr-6"
        style={isDesktop ? { transform: `translateX(${offset}px)` } : undefined}
      >
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex h-[244px] w-[400px] shrink-0 snap-start flex-col gap-6 rounded-2xl p-6 ring-1 ring-black/5"
            style={{ background: cat.gradient }}
          >
            <h3 className="text-[30px] font-normal text-white">{cat.label}</h3>
            <p className="text-sm leading-relaxed text-white/90">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
