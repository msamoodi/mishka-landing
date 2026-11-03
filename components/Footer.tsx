import Link from "next/link"
import { CONTAINER, Logo } from "./ui"

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

const PLATFORM_COLUMN: FooterColumn = {
  title: "Platform",
  links: [
    { label: "Solutions", href: "/solutions" },
    { label: "For Employers", href: "/employers" },
    { label: "Pricing", href: "/pricing" },
  ],
}

const COMPANY_COLUMN: FooterColumn = {
  title: "Company",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function Footer({
  primary = PLATFORM_COLUMN,
  company = COMPANY_COLUMN,
}: {
  primary?: FooterColumn
  company?: FooterColumn
}) {
  return (
    <footer className="border-t border-line bg-white">
      <div className={`${CONTAINER} flex flex-col gap-14 pt-14 pb-9 desk:pt-[72px]`}>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 desk:grid-cols-4 desk:gap-10">
          <div className="col-span-2 flex min-w-0 flex-col gap-4">
            <Logo />
            <p className="max-w-[360px] text-base leading-[1.6] text-muted">
              An AI-powered learning platform for practical, job-ready digital skills. Made for lifelong learners.
            </p>
          </div>
          {[primary, company].map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-subtle uppercase">{column.title}</p>
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-base">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6">
          <p className="text-sm text-subtle">© {new Date().getFullYear()} Mishka. All rights reserved.</p>
          <a href="mailto:info@mishkaapp.com" className="text-sm text-subtle">
            info@mishkaapp.com
          </a>
        </div>
      </div>
    </footer>
  )
}
