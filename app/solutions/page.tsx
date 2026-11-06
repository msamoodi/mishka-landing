import Image from "next/image"
import type { ReactNode } from "react"
import Footer from "@/components/Footer"
import JsonLd from "@/components/JsonLd"
import TeamOverviewCard from "@/components/TeamOverviewCard"
import { Badge, Button, CheckIcon, CONTAINER, DotList, Eyebrow } from "@/components/ui"
import { EARLY_ACCESS_URL } from "@/lib/links"
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/solutions",
  "AI Learning Paths, Coaching & Certificates — Mishka",
  "Structured learning paths, an AI coach in every lesson and certificates backed by reviewed projects. Mishka takes individuals and teams from learning to proof.",
)

const SCREEN = { width: 300, height: 654, sizes: "(min-width: 901px) 320px, 72vw" }
const SCREEN_SHADOW = "block h-auto rounded-t-[28px] shadow-[0_24px_60px_rgba(14,16,51,.16)]"
const H2 = "text-[28px] leading-[1.1] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(30px,3.4vw,44px)]"
const SECTION_H2 = "text-[28px] leading-[1.08] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(30px,3.6vw,48px)]"
const LEAD = "text-base leading-[1.6] text-muted desk:text-lg"
const ROW = "border-b border-line-strong py-4 text-[17px] leading-normal"
const PANEL = "flex items-end justify-center overflow-hidden rounded-[32px] px-4 pt-9 desk:rounded-[40px] desk:px-6 desk:pt-14"
const DETAIL = "grid grid-cols-1 items-center gap-7 desk:grid-cols-2 desk:gap-[72px]"
const LABEL = "text-[13px] font-semibold tracking-[1.6px] text-brand"

const COACH_CARDS = [
  { title: "Smart Q&A", text: "Stuck mid-lesson? Get it explained another way." },
  { title: "Personalised plans", text: "What to study next, and which roles it leads to." },
  { title: "Instant feedback", text: "A first-pass review of your practice projects." },
  { title: "Progress coaching", text: "A nudge when you have been away for a while." },
]

const COMING_NEXT = <Badge className="ml-1.5 bg-[#E3E0FF] text-brand-dark">COMING NEXT</Badge>

const COMPARISON: { label: string; typical: string; mishka: ReactNode }[] = [
  { label: "Your path", typical: "The same catalogue for everyone", mishka: "Adapts to your level and goals" },
  { label: "Guidance", typical: "Videos and discussion forums", mishka: "An AI coach inside every lesson" },
  { label: "Proof of skill", typical: "Watch time and multiple-choice quizzes", mishka: "A reviewed project and a final test" },
  { label: "What comes next", typical: "You are on your own", mishka: <>Matched to vacancies {COMING_NEXT}</> },
]

const TEAM_POINTS: { title: string; text: string; next?: boolean }[] = [
  { title: "Team dashboards.", text: "See enrolments, progress and completions in one place." },
  { title: "Assessed on real work.", text: "Practice projects reviewed and scored, not just quizzes." },
  { title: "Vacancies matched to proof.", text: "Post roles and meet pre-qualified talent.", next: true },
]

export default function SolutionsPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-center gap-8 pt-10 pb-12 desk:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] desk:gap-14 desk:pt-[88px] desk:pb-24`}>
          <div className="flex flex-col gap-7">
            <Eyebrow rule>Solutions</Eyebrow>
            <h1 className="text-[clamp(32px,9vw,40px)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance desk:text-[clamp(36px,4.6vw,64px)]">
              One platform for learning, proof and <span className="text-brand">your next job.</span>
            </h1>
            <p className="max-w-[540px] text-[17px] leading-[1.6] text-muted desk:text-xl">
              Mishka guides you from your first lesson to a certificate backed by real work. Whether you are starting out, changing roles or building a team, there is a path that fits.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Button href={EARLY_ACCESS_URL} clarityEvent="solutions_hero_early_access_click">Get Early Access</Button>
              <Button href="#employers" variant="outline">Solutions for teams</Button>
            </div>
          </div>
          <div className="flex min-h-[340px] items-end justify-center overflow-hidden rounded-[40px] bg-mist px-4 pt-8 desk:min-h-[520px] desk:px-6 desk:pt-12">
            <Image src="/images/screen-learning-path.png" alt="Mishka app screen: My Learning Path with four completed courses" {...SCREEN} priority className={`${SCREEN_SHADOW} -mb-px w-[46%]`} />
            <Image src="/images/screen-practice-review.png" alt="Mishka app screen: practice project reviewed with a score and written feedback" {...SCREEN} priority className={`${SCREEN_SHADOW} relative -top-10 -mb-px -ml-[8%] w-[46%]`} />
          </div>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────────────────── */}
      <section id="audiences">
        <div className={`${CONTAINER} flex flex-col gap-9 pt-16 pb-8 desk:gap-14 desk:pt-[120px] desk:pb-14`}>
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow>Who it is for</Eyebrow>
            <h2 className={SECTION_H2}>Built for people at every stage of a digital career.</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 desk:grid-cols-3">
            <article className="flex flex-col gap-5 rounded-[26px] bg-lavender p-[26px] desk:p-9">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-brand-dark">CAREER STARTERS</p>
              <h3 className="text-[28px] leading-[1.15] font-semibold tracking-[-0.03em]">Take your first steps with a clear path.</h3>
              <DotList dotClassName="bg-brand" items={["Guided paths from beginner level", "Practice projects that become your first portfolio pieces", "Certificates that show applied skill"]} />
            </article>
            <article className="flex flex-col gap-5 rounded-[26px] bg-butter p-[26px] desk:p-9">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-[#6B4E00]">CAREER CHANGERS</p>
              <h3 className="text-[28px] leading-[1.15] font-semibold tracking-[-0.03em]">Move into a new role with confidence.</h3>
              <DotList dotClassName="bg-ink" items={["Paths built around the role you are aiming for", "An AI coach that explains things at your level", "Bite-sized lessons that fit around your work"]} />
            </article>
            <article className="flex flex-col gap-5 rounded-[26px] bg-ink p-[26px] text-white desk:p-9">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-periwinkle">TEAMS AND EMPLOYERS</p>
              <h3 className="text-[28px] leading-[1.15] font-semibold tracking-[-0.03em]">Upskill your people and meet verified talent.</h3>
              <DotList dotClassName="bg-coral" className="text-on-dark-soft" items={["Team dashboards and progress tracking", "Skills assessed through real project work", "Vacancy posting and matching, coming next"]} />
            </article>
          </div>
        </div>
      </section>

      {/* ── Solution details ─────────────────────────────────────────────── */}
      <section id="how">
        <div className={`${CONTAINER} flex flex-col gap-16 pt-8 pb-[72px] desk:gap-28 desk:pt-14 desk:pb-[120px]`}>
          <div id="paths" className={DETAIL}>
            <div className={`${PANEL} bg-mist`}>
              <Image src="/images/screen-learning-path.png" alt="Mishka app screen: My Learning Path with the Product Design path and four completed courses" {...SCREEN} className={`${SCREEN_SHADOW} w-[min(320px,72%)]`} />
            </div>
            <div className="flex flex-col gap-6">
              <p className={LABEL}>01 · STRUCTURED LEARNING PATHS</p>
              <h2 className={H2}>A route that adapts to your level and goals.</h2>
              <p className={LEAD}>Mishka learns where you are and where you want to go, then builds the path: which courses, in what order, ending in a practice project and a certificate.</p>
              <ul className="border-t border-line-strong">
                <li className={ROW}><b className="font-semibold">Courses and quizzes.</b> Short lessons with progress tracked automatically.</li>
                <li className={ROW}><b className="font-semibold">Five career tracks.</b> Product Design, UX Research, Design &amp; Branding, Digital Marketing, Data &amp; AI Literacy.</li>
                <li className={ROW}><b className="font-semibold">Always a next step.</b> Your path shows what is done and what comes next.</li>
              </ul>
            </div>
          </div>

          <div id="coach" className={DETAIL}>
            <div className="flex flex-col gap-6">
              <p className={LABEL}>02 · AI COACH</p>
              <h2 className={H2}>Guidance inside every lesson.</h2>
              <p className={LEAD}>Mishka AI is trained on our course content and on your own journey, so it can explain, recommend and nudge at the right moment.</p>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {COACH_CARDS.map((card) => (
                  <div key={card.title} className="flex flex-col gap-1.5 rounded-[22px] border border-line bg-white p-[22px]">
                    <p className="text-[17px] font-semibold">{card.title}</p>
                    <p className="text-[15px] leading-normal text-muted">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${PANEL} bg-butter`}>
              <Image src="/images/screen-lesson.png" alt="Mishka app screen: a lesson with audio narration, read-along text and an Ask Mishka button" {...SCREEN} className={`${SCREEN_SHADOW} w-[min(320px,72%)]`} />
            </div>
          </div>

          <div id="proof" className={DETAIL}>
            <div className={`${PANEL} bg-lavender`}>
              <Image src="/images/screen-practice-review.png" alt="Mishka app screen: practice project reviewed with a score of 9 out of 10 and written feedback" {...SCREEN} className={`${SCREEN_SHADOW} relative -top-8 w-[46%]`} />
              <Image src="/images/screen-certification.png" alt="Mishka app screen: a certificate of completion for Junior Product Designer" {...SCREEN} className={`${SCREEN_SHADOW} -ml-[8%] w-[46%]`} />
            </div>
            <div className="flex flex-col gap-6">
              <p className={LABEL}>03 · PRACTICE AND CERTIFICATION</p>
              <h2 className={H2}>Skills proven with real work, not watch time.</h2>
              <p className={LEAD}>Every path ends with a project and a test. What you earn is a certificate you can share and stand behind.</p>
              <ol className="border-t border-line-strong">
                {[
                  ["A real-world brief.", "Apply what you learned to a practical project."],
                  ["Scored feedback.", "A score out of 10 with written guidance. Revise and resubmit."],
                  ["Final test and certificate.", "Pass across the whole path and earn your Mishka certificate."],
                ].map(([title, text], i) => (
                  <li key={title} className={`grid grid-cols-[40px_1fr] gap-3 ${ROW}`}>
                    <span className="pt-0.5 text-sm font-semibold text-brand">0{i + 1}</span>
                    <span><b className="font-semibold">{title}</b> {text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison ───────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-white">
        <div className={`${CONTAINER} flex flex-col gap-12 py-16 desk:py-28`}>
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow>Why Mishka</Eyebrow>
            <h2 className={SECTION_H2}>Most platforms sell courses. Mishka coaches you to the outcome.</h2>
          </div>

          {/* Phones get stacked cards; the table needs the width. */}
          <div className="flex flex-col gap-3.5 desk:hidden">
            {COMPARISON.map((row) => (
              <div key={row.label} className="overflow-hidden rounded-[22px] border border-line">
                <p className="bg-canvas px-5 py-4 text-[13px] font-semibold tracking-[1.4px] text-subtle uppercase">{row.label}</p>
                <div className="flex flex-col gap-1 px-5 py-4">
                  <p className="text-xs font-semibold tracking-[1.2px] text-subtle">TYPICAL COURSE LIBRARY</p>
                  <p className="text-base leading-[1.45] text-muted">{row.typical}</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#F6F5FF] px-5 py-4">
                  <p className="text-xs font-bold tracking-[1.2px] text-brand-dark">MISHKA</p>
                  <p className="text-base leading-[1.45] font-medium">{row.mishka}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-x-auto rounded-[26px] border border-line desk:block">
            <table className="w-full min-w-[640px] border-collapse text-[17px] leading-[1.45]">
              <thead>
                <tr className="bg-canvas">
                  <th scope="col" className="w-[22%] px-7 py-[22px] text-left text-[13px] font-semibold tracking-[1.4px] text-subtle"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="w-[34%] px-7 py-[22px] text-left text-[13px] font-semibold tracking-[1.4px] text-subtle">A TYPICAL COURSE LIBRARY</th>
                  <th scope="col" className="bg-brand-tint px-7 py-[22px] text-left text-[13px] font-bold tracking-[1.4px] text-brand-dark">MISHKA</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-t border-line">
                    <th scope="row" className="px-7 py-6 text-left font-semibold">{row.label}</th>
                    <td className="px-7 py-6 text-muted">{row.typical}</td>
                    <td className="bg-[#F6F5FF] px-7 py-6 font-medium">{row.mishka}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Teams & employers ────────────────────────────────────────────── */}
      <section id="employers" className="bg-ink text-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-center gap-9 py-16 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] desk:gap-[72px] desk:py-32`}>
          <div className="flex flex-col gap-7">
            <Eyebrow rule dark>For teams and employers</Eyebrow>
            <h2 className="text-[30px] leading-[1.05] font-semibold tracking-[-0.035em] text-balance desk:text-[clamp(32px,4vw,56px)]">
              Upskill your team. <span className="text-coral">Hire people who have proven it.</span>
            </h2>
            <p className="max-w-[520px] text-[17px] leading-[1.65] text-on-dark desk:text-[19px]">
              Give teams a structured way to build digital skills and see their progress. Soon, post roles and meet candidates matched on verified skills.
            </p>
            <ul className="flex flex-col gap-3.5 text-[17px] leading-normal">
              {TEAM_POINTS.map((point) => (
                <li key={point.title} className="flex gap-3.5">
                  <CheckIcon size={22} strokeWidth={2.4} className="mt-0.5 text-periwinkle" />
                  <span>
                    <b className="font-semibold">{point.title}</b> {point.text}
                    {point.next && <Badge className="ml-1 bg-gold text-ink">COMING NEXT</Badge>}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-1 flex flex-wrap gap-3.5">
              <Button href="mailto:info@mishkaapp.com" variant="light">Talk to us</Button>
            </div>
          </div>

          <TeamOverviewCard />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section id="get-started">
        <div className={`${CONTAINER} py-16 desk:py-28`}>
          <div className="grid grid-cols-1 items-center gap-7 overflow-hidden rounded-[32px] border border-line bg-white px-[22px] pt-8 desk:grid-cols-2 desk:gap-10 desk:rounded-[40px] desk:px-14 desk:pt-14">
            <div className="flex flex-col gap-5 desk:gap-6 desk:pb-14">
              <h2 className="text-[30px] leading-[1.05] font-semibold tracking-[-0.035em] text-balance desk:text-[clamp(32px,3.8vw,52px)]">
                Find the path that fits. <span className="text-brand">Start today.</span>
              </h2>
              <p className="max-w-[480px] text-[17px] leading-[1.6] text-muted desk:text-[19px]">
                Try every learning path, the AI coach and the practice projects with 3 days of full access. Your first 3 days are on us.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Button href={EARLY_ACCESS_URL} clarityEvent="solutions_cta_early_access_click">Get Early Access</Button>
                <Button href="mailto:info@mishkaapp.com" variant="outline">Talk to us</Button>
              </div>
            </div>
            <div className="flex justify-center self-end">
              <Image
                src="/images/hero-app-screens.png"
                alt="Two Mishka app screens: a chat with Mishka AI and the home screen with learning path cards"
                width={1421}
                height={1394}
                sizes="520px"
                className="block h-auto w-full max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer
        primary={{
          title: "Solutions",
          links: [
            { label: "Learning paths", href: "#paths" },
            { label: "AI coach", href: "#coach" },
            { label: "Practice and certificates", href: "#proof" },
            { label: "Teams and employers", href: "/employers" },
          ],
        }}
      />
      <JsonLd data={breadcrumbJsonLd("/solutions", "Solutions")} />
    </main>
  )
}
