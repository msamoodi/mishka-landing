"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef } from "react"
import TrackedLink from "./TrackedLink"
import { CONTAINER, Logo } from "./ui"
import { EARLY_ACCESS_URL } from "@/lib/links"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "For Employers", href: "/employers" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDetailsElement>(null)

  const trackContact = (href: string) => {
    if (href === "/contact") window.clarity?.("event", "nav_contact_click")
  }

  return (
    <header id="top" className="border-b border-line bg-white">
      <nav aria-label="Main" className={`${CONTAINER} flex min-h-[76px] items-center justify-between gap-6`}>
        <Logo />

        <div className="hidden items-center gap-1.5 desk:flex">
          {NAV_ITEMS.map((item) => {
            const current = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => trackContact(item.href)}
                className={`inline-flex min-h-10 items-center rounded-[40px] px-4 text-[15px] transition-colors hover:text-brand ${
                  current ? "bg-brand-tint font-semibold text-brand-dark" : "font-medium text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <TrackedLink
            clarityEvent="nav_early_access_click"
            href={EARLY_ACCESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] items-center rounded-[40px] bg-brand px-[22px] text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-dark"
          >
            Early Access
          </TrackedLink>

          <details ref={menuRef} className="relative desk:hidden">
            <summary
              aria-label="Open menu"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-[40px] border border-field"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E1033" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <div className="absolute top-14 right-0 z-20 flex w-[230px] flex-col rounded-[14px] border border-line bg-white p-2 shadow-[0_12px_32px_rgba(14,16,51,.12)]">
              {NAV_ITEMS.map((item) => {
                const current = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    onClick={() => {
                      trackContact(item.href)
                      if (menuRef.current) menuRef.current.open = false
                    }}
                    className={`rounded-xl px-3.5 py-[13px] text-base ${
                      current ? "bg-brand-tint font-semibold text-brand-dark" : "font-medium text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </details>
        </div>
      </nav>
    </header>
  )
}
