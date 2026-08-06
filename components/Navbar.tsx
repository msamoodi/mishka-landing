const EARLY_ACCESS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMYLJafbt3OfP6j27nDodYDfJQ2GmDqehb2lY1NgiLDfcE2w/viewform?usp=dialog"

export default function Navbar() {
  return (
    <div className="relative flex items-center justify-between gap-3 pt-6 sm:pt-8 min-[1340px]:pt-[42px]">
      <a href="#top" className="shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="Mishka" className="h-6 w-auto sm:h-7 min-[1340px]:h-[30px] min-[1340px]:w-[170px]" />
      </a>

      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="mailto:info@mishkaapp.com"
          className="hidden h-10 items-center rounded-full border border-white/10 bg-white/10 px-5 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:flex min-[1340px]:h-14 min-[1340px]:px-6 min-[1340px]:text-base"
        >
          Contact
        </a>
        <a
          href={EARLY_ACCESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 cursor-pointer items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#5A2BAA] transition-transform hover:scale-105 sm:px-5 min-[1340px]:h-14 min-[1340px]:px-6 min-[1340px]:text-base"
        >
          Early Access
        </a>
      </div>
    </div>
  )
}
