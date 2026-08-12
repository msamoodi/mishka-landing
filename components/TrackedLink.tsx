"use client"

import type { AnchorHTMLAttributes } from "react"

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void
  }
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  clarityEvent: string
}

export default function TrackedLink({ clarityEvent, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        window.clarity?.("event", clarityEvent)
        onClick?.(e)
      }}
    />
  )
}
