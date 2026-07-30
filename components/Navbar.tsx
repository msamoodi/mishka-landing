const APP_URL = "https://mishkaapp.com/app"

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
          href={APP_URL}
          className="flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-[#5A2BAA] transition-transform hover:scale-105 sm:px-5 min-[1340px]:h-14 min-[1340px]:px-6 min-[1340px]:text-base"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download App
        </a>
      </div>
    </div>
  )
}
