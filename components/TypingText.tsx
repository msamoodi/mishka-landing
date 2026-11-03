"use client"

import { useEffect, useState } from "react"

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1800
const GAP_MS = 300

export default function TypingText({
  phrases,
  onPhraseChange,
}: {
  phrases: string[]
  onPhraseChange?: (index: number) => void
}) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(phrases[0].length)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const atEnd = length === phrases[index].length
    const delay = deleting ? (length === 0 ? GAP_MS : DELETE_MS) : atEnd ? HOLD_MS : TYPE_MS

    const timer = setTimeout(() => {
      if (!deleting && atEnd) {
        setDeleting(true)
      } else if (deleting && length === 0) {
        setDeleting(false)
        const next = (index + 1) % phrases.length
        setIndex(next)
        onPhraseChange?.(next)
      } else {
        setLength(length + (deleting ? -1 : 1))
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [phrases, onPhraseChange, index, length, deleting])

  return (
    <span className="grid">
      <span className="sr-only">{phrases[index]}</span>
      {/* The longest phrase holds the height, so the card doesn't jump as the text changes. */}
      {phrases.map((phrase) => (
        <span key={phrase} aria-hidden className="invisible col-start-1 row-start-1 pr-1">
          {phrase}
        </span>
      ))}
      <span aria-hidden className="col-start-1 row-start-1">
        {phrases[index].slice(0, length)}
        <span className="ml-0.5 inline-block h-[0.85em] w-0.5 translate-y-[0.08em] animate-pulse bg-brand motion-reduce:hidden" />
      </span>
    </span>
  )
}
