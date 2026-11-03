import Image from "next/image"
import Footer from "@/components/Footer"
import JobMatchCard from "@/components/JobMatchCard"
import ProductCarousel from "@/components/ProductCarousel"
import TrackedLink from "@/components/TrackedLink"
import { Button, CONTAINER, Eyebrow } from "@/components/ui"
import { EARLY_ACCESS_URL } from "@/lib/links"

const APPROACH = [
  {
    title: "Structured learning paths",
    text: "Guided paths based on your goals and experience, so every lesson leads somewhere.",
  },
  {
    title: "Guidance from Mishka AI",
    text: "Explanations, personalised plans and progress coaching, trained on our course content and on your own journey.",
  },
  {
    title: "Practice on real projects",
    text: "Apply what you learn to a real-world brief, with scored, written feedback and the chance to revise.",
  },
  {
    title: "Certificates that mean something",
    text: "Earned through a reviewed project and a final test across the whole path.",
  },
]

const STEPS = [
  { title: "Courses and quizzes", text: "Structured lessons with automatic progress tracking." },
  { title: "Practice project", text: "A real brief, reviewed and scored within hours." },
  { title: "Final test and certificate", text: "A test across the whole path, then your Mishka certificate." },
]

const TRACKS = [
  { title: "Product Design", text: "Shape digital products people enjoy using, from research to polished screens.", bg: "bg-lavender" },
  { title: "UX Research", text: "Understand users, run studies and turn what you learn into decisions.", bg: "bg-butter" },
  { title: "Design & Branding", text: "Build visual identities and brand systems that hold together.", bg: "bg-blush" },
  { title: "Digital Marketing", text: "Plan campaigns, grow audiences and measure what works.", bg: "bg-lavender" },
  { title: "Data & AI Literacy", text: "Read data, work with AI tools and make confident, informed choices.", bg: "bg-butter" },
]

const STORE_LINKS = [
  { eyebrow: "GET IT ON", label: "Google Play", clarityEvent: "footer_google_play_click" },
  { eyebrow: "DOWNLOAD ON THE", label: "App Store", clarityEvent: "footer_app_store_click" },
]

const H2 = "text-[30px] leading-[1.04] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(34px,3.8vw,52px)]"

export default function LandingPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-center gap-6 pt-10 pb-6 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] desk:gap-8 desk:pt-[72px] desk:pb-16`}>
          <div className="flex flex-col gap-7">
            <Eyebrow rule>AI-guided career learning</Eyebrow>
            <h1 className="text-[clamp(36px,10.5vw,44px)] leading-[1.06] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(40px,5vw,68px)]">
              Build your digital career, <span className="text-brand">with proof.</span>
            </h1>
            <p className="max-w-[540px] text-[17px] leading-[1.6] text-muted desk:text-xl">
              Mishka is an AI career coach. Structured learning paths, guidance inside every lesson and real projects that end in a certificate you can stand behind.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-3.5">
              <Button href={EARLY_ACCESS_URL} clarityEvent="hero_early_access_click">
                Early Access
              </Button>
              <Button href="#product" variant="outline">
                See the product
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E1033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Button>
            </div>
          </div>

          <div className="flex justify-center desk:mx-auto desk:w-full desk:max-w-[635px]">
            <Image
              src="/images/hero-app-screens.png"
              alt="Two Mishka app screens: a chat with Mishka AI recommending a course, and the home screen with learning path cards"
              width={1421}
              height={1394}
              sizes="(min-width: 901px) 700px, 100vw"
              priority
              className="-mx-5 block h-auto w-[calc(100%+40px)] max-w-[520px] desk:mx-0 desk:-mr-6 desk:w-[calc(100%+48px)] desk:max-w-[760px]"
            />
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────────────────── */}
      <section id="approach">
        <div className={`${CONTAINER} grid grid-cols-1 items-start gap-10 py-16 desk:grid-cols-2 desk:gap-[72px] desk:py-32`}>
          <div className="flex flex-col gap-6 desk:sticky desk:top-12">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className={H2}>A coach, not a course library.</h2>
            <p className="max-w-[460px] text-[19px] leading-[1.6] text-muted">
              Most platforms hand you a catalogue. Mishka learns your level and goals, builds your path, guides you through it and verifies your skill with real work, not multiple-choice quizzes.
            </p>
          </div>

          <div className="flex flex-col border-t border-line-strong">
            {APPROACH.map((item, i) => (
              <div key={item.title} className="grid grid-cols-[40px_1fr] gap-3 border-b border-line-strong py-6 desk:grid-cols-[56px_1fr] desk:gap-4 desk:py-8">
                <p className="pt-1.5 text-sm font-semibold text-brand">{String(i + 1).padStart(2, "0")}</p>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[26px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="text-[17px] leading-[1.6] text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product ──────────────────────────────────────────────────────── */}
      <section id="product" className="border-y border-line bg-white">
        <div className={`${CONTAINER} flex flex-col gap-9 py-16 desk:gap-14 desk:py-28`}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex max-w-[720px] flex-col gap-5">
              <Eyebrow>The product</Eyebrow>
              <h2 className={H2}>From first lesson to certificate, in one place.</h2>
            </div>
            <p className="max-w-[420px] text-lg leading-[1.6] text-muted">
              Available on Android, iOS and the web. Your progress follows you across devices.
            </p>
          </div>

          <ProductCarousel />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 desk:grid-cols-4 desk:gap-0">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-2 border-t-2 border-ink pt-6 desk:pr-6">
                <p className="text-[13px] font-semibold tracking-[1.4px] text-brand">STEP {i + 1}</p>
                <p className="text-lg font-semibold">{step.title}</p>
                <p className="text-[15px] leading-[1.55] text-muted">{step.text}</p>
              </div>
            ))}
            <div className="flex flex-col gap-2 border-t-2 border-line-strong pt-6">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-subtle">STEP 4 · COMING NEXT</p>
              <p className="text-lg font-semibold">Matched to a vacancy</p>
              <p className="text-[15px] leading-[1.55] text-muted">Roles that fit your verified skills and profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Learning paths ───────────────────────────────────────────────── */}
      <section id="paths">
        <div className={`${CONTAINER} flex flex-col gap-9 py-16 desk:gap-14 desk:pt-32 desk:pb-28`}>
          <div className="flex max-w-[720px] flex-col gap-5">
            <Eyebrow>Built for future professionals</Eyebrow>
            <h2 className={H2}>Career tracks for every level.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 desk:grid-cols-3">
            {TRACKS.map((track, i) => (
              <div key={track.title} className={`flex flex-col justify-between gap-9 rounded-[26px] p-8 desk:gap-14 ${track.bg}`}>
                <p className="text-[13px] font-semibold tracking-[1.4px] text-subtle">TRACK 0{i + 1}</p>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-[30px] font-semibold tracking-[-0.02em]">{track.title}</h3>
                  <p className="text-base leading-[1.55] text-muted">{track.text}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-between gap-9 rounded-[26px] bg-ink p-8 text-white desk:gap-14">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-periwinkle">NEXT</p>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[30px] font-semibold tracking-[-0.02em]">More tracks coming</h3>
                <p className="text-base leading-[1.55] text-on-dark">Product &amp; Growth, Business, Finance, Communication &amp; Leadership, Technology &amp; AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Employers ────────────────────────────────────────────────────── */}
      <section id="employers" className="bg-ink text-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-center gap-10 py-16 desk:grid-cols-2 desk:gap-[72px] desk:py-32`}>
          <div className="flex flex-col gap-7">
            <Eyebrow rule dark>Coming next · Profiles &amp; job matching</Eyebrow>
            <h2 className="text-[34px] leading-none font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(38px,4.4vw,60px)]">
              Learn it. Prove it. <span className="text-coral">Get hired.</span>
            </h2>
            <p className="max-w-[520px] text-[19px] leading-[1.65] text-on-dark">
              Mishka will match your professional profile and verified learning path to the vacancies that fit you. Employers meet pre-qualified talent, backed by proof rather than keywords.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href="mailto:info@mishkaapp.com" variant="light">Hiring? Talk to us</Button>
              <Button href={EARLY_ACCESS_URL} variant="outlineDark" clarityEvent="employers_join_learner_click">Join as a learner</Button>
            </div>
          </div>

          <JobMatchCard />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section id="get-started">
        <div className={`${CONTAINER} py-16 desk:py-28`}>
          <div className="rounded-[32px] border border-line bg-white px-[22px] py-8 desk:rounded-[40px] desk:p-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-[34px] leading-none font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(38px,4.2vw,56px)]">
                Build skills. <span className="text-brand">Shape your future.</span>
              </h2>
              <p className="max-w-[480px] text-[19px] leading-[1.6] text-muted">
                Try every learning path, the AI coach and the practice projects with 3 days of full access. Your first 3 days are on us.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {STORE_LINKS.map((store) => (
                  <TrackedLink
                    key={store.label}
                    clarityEvent={store.clarityEvent}
                    href={EARLY_ACCESS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 items-center gap-3 rounded-2xl bg-ink px-6 text-white transition-colors hover:bg-brand-dark"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
                    </svg>
                    <span className="flex flex-col leading-[1.15]">
                      <span className="text-[11px] font-semibold tracking-[1px]">{store.eyebrow}</span>
                      <span className="text-[17px] font-semibold">{store.label}</span>
                    </span>
                  </TrackedLink>
                ))}
                <TrackedLink
                  clarityEvent="footer_web_click"
                  href={EARLY_ACCESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center rounded-2xl border border-line-strong px-6 text-[17px] font-semibold transition-colors hover:border-ink"
                >
                  Open on the web
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        primary={{
          title: "Product",
          links: [
            { label: "Solutions", href: "/solutions" },
            { label: "How it works", href: "#product" },
            { label: "Learning paths", href: "#paths" },
            { label: "Pricing", href: "/pricing" },
          ],
        }}
        company={{
          title: "Company",
          links: [
            { label: "About", href: "/about" },
            { label: "For employers", href: "/employers" },
            { label: "Contact", href: "/contact" },
          ],
        }}
      />
    </main>
  )
}
