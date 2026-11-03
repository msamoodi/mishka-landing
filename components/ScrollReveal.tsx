"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

// Only blocks below the fold get hidden, so nothing on screen flickers and pages
// stay fully visible if this script never runs. The first section animates in CSS.
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const pending = Array.from(document.querySelectorAll<HTMLElement>("main > section > * > *")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.remove("reveal-pending")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    )

    for (const el of pending) {
      el.classList.add("reveal", "reveal-pending")
      observer.observe(el)
    }

    return () => {
      observer.disconnect()
      for (const el of pending) el.classList.remove("reveal-pending")
    }
  }, [pathname])

  return null
}
