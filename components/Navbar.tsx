"use client"

import { useState } from "react"

const NAV_LINKS = ["About", "Technology", "Industries", "Resources"]
const APP_URL = "https://mishkaapp.com/app"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex items-center justify-between gap-3 pt-6 sm:pt-8 min-[1340px]:pt-[42px]">
      <a href="#top" className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="Mishka" className="h-6 w-auto sm:h-7 min-[1340px]:h-[30px] min-[1340px]:w-[170px]" />
      </a>

      <nav className="hidden h-14 items-center gap-8 rounded-full border border-white/10 bg-white/10 px-8 backdrop-blur-md min-[1340px]:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-base text-white/90 transition-colors hover:text-white"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 min-[1340px]:flex">
        <a
          href="mailto:info@mishkaapp.com"
          className="flex h-14 items-center rounded-full border border-white/10 bg-white/10 px-6 text-base text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          Contact
        </a>
        <a
          href={APP_URL}
          className="flex h-14 items-center gap-2 rounded-full bg-white px-6 text-base font-semibold text-[#5A2BAA] transition-transform hover:scale-105"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download App
        </a>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white min-[1340px]:hidden"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+12px)] z-30 rounded-2xl border border-white/10 bg-[#3a1b73]/95 p-4 backdrop-blur-md min-[1340px]:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
              >
                {link}
              </a>
            ))}
            <a
              href="mailto:info@mishkaapp.com"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
            >
              Contact
            </a>
          </div>
          <a
            href={APP_URL}
            className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#5A2BAA]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download App
          </a>
        </div>
      )}
    </div>
  )
}
