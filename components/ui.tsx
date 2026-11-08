import Link from "next/link"
import type { ReactNode } from "react"
import TrackedLink from "./TrackedLink"

export const CONTAINER = "mx-auto max-w-[1240px] px-5 desk:px-8"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-[28px] font-bold tracking-[-0.04em] text-ink">
      <span aria-hidden className="block h-3 w-3 rotate-45 rounded-[2px] bg-logo" />
      Mishka
    </Link>
  )
}

export function Eyebrow({
  children,
  rule = false,
  dark = false,
}: {
  children: ReactNode
  rule?: boolean
  dark?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[1.6px] ${
        dark ? "text-periwinkle" : "text-brand"
      }`}
    >
      {rule && <span aria-hidden className={`block h-0.5 w-7 ${dark ? "bg-periwinkle" : "bg-brand"}`} />}
      {children}
    </p>
  )
}

const BUTTON_VARIANTS = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-line-strong text-ink hover:border-ink",
  outlineInk: "border border-ink text-ink",
  light: "bg-white text-ink",
  outlineDark: "border border-line-dark text-white",
  ink: "bg-ink text-white",
}

export type ButtonStyle = {
  variant?: keyof typeof BUTTON_VARIANTS
  size?: "sm" | "md" | "lg"
  /** Full width on phones, sized to its label from the `sm` breakpoint up. */
  fluid?: boolean
  className?: string
}

export function buttonClasses({ variant = "primary", size = "lg", fluid = true, className = "" }: ButtonStyle) {
  const sizing = {
    sm: "min-h-12 px-6 text-base",
    md: "min-h-[52px] px-7 text-base",
    lg: "min-h-[54px] px-7 text-[17px]",
  }[size]
  return `items-center justify-center gap-2.5 rounded-[40px] font-semibold transition-colors ${
    fluid ? "flex w-full sm:inline-flex sm:w-auto" : "inline-flex"
  } ${sizing} ${BUTTON_VARIANTS[variant]} ${className}`
}

export function Button({
  href,
  children,
  clarityEvent,
  ...style
}: ButtonStyle & {
  href: string
  children: ReactNode
  clarityEvent?: string
}) {
  const classes = buttonClasses(style)

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  const external = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}
  if (clarityEvent) {
    return (
      <TrackedLink clarityEvent={clarityEvent} href={href} className={classes} {...external}>
        {children}
      </TrackedLink>
    )
  }
  return (
    <a href={href} className={classes} {...external}>
      {children}
    </a>
  )
}

export function CheckIcon({ className = "", size = 20, strokeWidth = 2.6 }: { className?: string; size?: number; strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`flex-none ${className}`}
    >
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

export function DotList({ items, dotClassName, className = "" }: { items: string[]; dotClassName: string; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3 text-[17px] leading-normal ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className={`mt-[9px] h-2 w-2 flex-none rounded-full ${dotClassName}`} />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`text-xs font-semibold tracking-[1px] rounded-[20px] px-2.5 py-1 whitespace-nowrap ${className}`}>{children}</span>
}

export function IllustrativeBadge() {
  return (
    <p className="rounded-md bg-brand-tint px-2.5 py-1.5 text-xs font-semibold tracking-[1.2px] text-brand-dark">
      ILLUSTRATIVE CONCEPT
    </p>
  )
}

export function NumberedColumns({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="grid grid-cols-1 gap-7 desk:grid-cols-3 desk:gap-0">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`flex flex-col gap-3.5 border-t-2 border-ink pt-7 ${i < items.length - 1 ? "pr-5 desk:pr-8" : ""}`}
        >
          <p className="text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="text-[26px] font-semibold tracking-[-0.03em]">{item.title}</h3>
          <p className="text-[17px] leading-[1.6] text-muted">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}

export function FaqList({ items, large = false }: { items: { q: string; a: string }[]; large?: boolean }) {
  return (
    <div className="border-b border-line-strong">
      {items.map((item) => (
        <details key={item.q} className={`border-t border-line-strong ${large ? "py-[22px]" : "py-5"}`}>
          <summary
            className={`flex items-center justify-between gap-4 font-semibold ${
              large ? "text-[19px] tracking-[-0.01em]" : "text-lg"
            }`}
          >
            {item.q}
            <span aria-hidden className="flex-none text-[26px] font-normal text-brand">
              +
            </span>
          </summary>
          <p className={`max-w-[720px] leading-[1.6] text-muted ${large ? "mt-3.5 text-[17px]" : "mt-3 text-base"}`}>{item.a}</p>
        </details>
      ))}
    </div>
  )
}

export function DarkCta({
  title,
  text,
  children,
  className = "py-16 desk:py-28",
}: {
  title: ReactNode
  text: string
  children: ReactNode
  className?: string
}) {
  return (
    <section>
      <div className={`${CONTAINER} ${className}`}>
        <div className="flex flex-col items-start gap-6 rounded-[28px] bg-ink px-6 py-11 text-white desk:rounded-[40px] desk:px-14 desk:py-[72px]">
          <h2 className="max-w-[720px] text-[30px] leading-[1.05] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(32px,3.8vw,52px)]">
            {title}
          </h2>
          <p className="max-w-[560px] text-[19px] leading-[1.6] text-on-dark">{text}</p>
          <div className="flex w-full flex-wrap gap-3.5">{children}</div>
        </div>
      </div>
    </section>
  )
}
