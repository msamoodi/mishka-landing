import EmployerFitCard from "@/components/EmployerFitCard"
import Footer from "@/components/Footer"
import JsonLd from "@/components/JsonLd"
import { Button, CONTAINER, DarkCta, DotList, Eyebrow, NumberedColumns } from "@/components/ui"
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/employers",
  "Upskill Your Team & Hire Verified Talent — Mishka",
  "Upskill your team with structured learning paths and progress dashboards, and join the pilot to hire candidates matched on proven skills and real project work.",
)

const H2 = "text-[28px] leading-[1.08] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(30px,3.6vw,48px)]"

const MATCHING_STEPS = [
  { title: "Proof of skill", text: "Courses completed, practice project scores out of 10, final test results and certificates." },
  { title: "Professional profile", text: "Experience, goals, location, availability and work preferences, in the learner's own words." },
  { title: "The Mishka fit engine", text: "AI scores every vacancy against skills a learner has proven, then ranks the matches and explains why." },
]

const REASONS = [
  { title: "Pre-qualified candidates", text: "Everyone you meet has completed a full learning path and passed a final test.", bg: "bg-lavender" },
  { title: "Evidence, not keywords", text: "Reviewed projects and scores show what a candidate can do before the first interview.", bg: "bg-butter" },
  { title: "A shorter route to the right hire", text: "Ranked matches with clear reasons save your team time at the top of the funnel.", bg: "bg-blush" },
]

export default function EmployersPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-ink text-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-center gap-8 py-16 desk:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] desk:gap-16 desk:pt-24 desk:pb-[104px]`}>
          <div className="flex flex-col gap-7">
            <Eyebrow rule dark>For employers</Eyebrow>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance desk:text-[clamp(36px,4.6vw,64px)]">
              Hire people who have <span className="text-coral">proven it.</span>
            </h1>
            <p className="max-w-[540px] text-xl leading-[1.6] text-on-dark">
              Mishka learners finish a structured path, a reviewed project and a final test. Soon, you will be able to post roles and meet candidates matched on skills they have actually shown.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href="mailto:info@mishkaapp.com" variant="light">Become a pilot partner</Button>
              <Button href="#matching" variant="outlineDark">See how matching works</Button>
            </div>
          </div>

          <EmployerFitCard />
        </div>
      </section>

      {/* ── Two ways ─────────────────────────────────────────────────────── */}
      <section>
        <div className={`${CONTAINER} flex flex-col gap-14 pt-16 pb-14 desk:pt-[120px]`}>
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow>Two ways to work with Mishka</Eyebrow>
            <h2 className={H2}>Build the skills you need. Find the people who have them.</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 desk:grid-cols-2">
            <article className="flex flex-col gap-[22px] rounded-[26px] bg-lavender p-7 desk:p-10">
              <p className="self-start rounded-[20px] bg-white px-3 py-1.5 text-xs font-semibold tracking-[1.2px] text-brand-dark">AVAILABLE NOW</p>
              <h3 className="text-[30px] leading-[1.15] font-semibold tracking-[-0.03em]">Upskill your team</h3>
              <p className="text-[17px] leading-[1.6] text-ink-soft">Give your people structured paths in design, research, marketing and data, and see how they are doing.</p>
              <DotList dotClassName="bg-brand" items={["Team plans with dashboards and progress tracking", "Skills assessed through reviewed practice projects", "Certificates for every completed path"]} />
              <Button href="/pricing" variant="outlineInk" size="sm" className="mt-1 self-stretch sm:self-start">See team pricing</Button>
            </article>
            <article className="flex flex-col gap-[22px] rounded-[26px] bg-ink p-7 text-white desk:p-10">
              <p className="self-start rounded-[20px] bg-gold px-3 py-1.5 text-xs font-semibold tracking-[1.2px] text-ink">COMING NEXT</p>
              <h3 className="text-[30px] leading-[1.15] font-semibold tracking-[-0.03em]">Hire verified talent</h3>
              <p className="text-[17px] leading-[1.6] text-on-dark">Post your vacancies on Mishka and meet candidates whose skills are backed by a certificate and real project work.</p>
              <DotList dotClassName="bg-coral" className="text-on-dark-soft" items={["Post and manage roles in one place", "Candidates ranked by fit, with the reason why", "Employer-posted roles first, partner job boards later"]} />
              <Button href="mailto:info@mishkaapp.com" variant="light" size="sm" className="mt-1 self-stretch sm:self-start">Join the pilot</Button>
            </article>
          </div>
        </div>
      </section>

      {/* ── How matching works ───────────────────────────────────────────── */}
      <section id="matching">
        <div className={`${CONTAINER} flex flex-col gap-14 pt-14 pb-16 desk:pt-[72px] desk:pb-[120px]`}>
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow>How matching works</Eyebrow>
            <h2 className={H2}>Evidence in, ranked matches out.</h2>
          </div>
          <NumberedColumns items={MATCHING_STEPS} />
        </div>
      </section>

      {/* ── Why ──────────────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-white">
        <div className={`${CONTAINER} flex flex-col gap-12 py-16 desk:py-28`}>
          <h2 className={`${H2} max-w-[760px]`}>Why employers choose Mishka.</h2>
          <div className="grid grid-cols-1 gap-5 desk:grid-cols-3">
            {REASONS.map((reason) => (
              <div key={reason.title} className={`flex flex-col gap-3 rounded-[26px] p-8 ${reason.bg}`}>
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{reason.title}</h3>
                <p className="text-base leading-[1.6] text-ink-soft">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCta
        title={<>We are building this with our first employer partners. <span className="text-coral">Join them.</span></>}
        text="Tell us about your team and the roles you hire for. We will get back to you personally."
      >
        <Button href="/contact" variant="light">Talk to us</Button>
        <Button href="mailto:info@mishkaapp.com" variant="outlineDark">info@mishkaapp.com</Button>
      </DarkCta>

      <Footer />
      <JsonLd data={breadcrumbJsonLd("/employers", "For Employers")} />
    </main>
  )
}
