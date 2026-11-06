import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import { CONTAINER, Eyebrow, FaqList } from "@/components/ui"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/contact",
  "Contact",
  "Questions about Mishka, team plans or becoming an employer partner? Write to us at info@mishkaapp.com and we will reply personally.",
)

const FAQS = [
  { q: "Is there a free trial?", a: "Yes. Every new learner gets 3 days of full access, free of charge." },
  { q: "Which platforms does Mishka run on?", a: "Mishka is available on Android, iOS and the web." },
  { q: "Do I get a certificate?", a: "Yes. Each completed learning path ends with a final test and a Mishka certificate." },
  { q: "Who reviews my practice projects?", a: "Projects are reviewed with the help of our AI coach, with feedback you can act on right away." },
  { q: "What language are the courses in?", a: "Courses are English-first for now. More languages are planned." },
]

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero and form ────────────────────────────────────────────────── */}
      <section>
        <div className={`${CONTAINER} grid grid-cols-1 items-start gap-8 py-16 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] desk:gap-16 desk:pt-24 desk:pb-28`}>
          <div className="flex flex-col gap-7">
            <Eyebrow rule>Contact</Eyebrow>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(36px,4.6vw,60px)]">Let&apos;s talk</h1>
            <p className="max-w-[480px] text-xl leading-[1.6] text-muted">
              Questions about Mishka, team plans or becoming an employer partner? Write to us and we will reply personally.
            </p>
            <div className="flex flex-col gap-1.5 border-t border-line-strong pt-6">
              <p className="text-[13px] font-semibold tracking-[1.4px] text-subtle uppercase">Email</p>
              <a href="mailto:info@mishkaapp.com" className="text-[22px] font-semibold tracking-[-0.01em] text-brand-dark">
                info@mishkaapp.com
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── Quick answers ────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-start gap-8 py-16 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] desk:gap-16 desk:py-[104px]`}>
          <div className="flex flex-col gap-4">
            <Eyebrow>Quick answers</Eyebrow>
            <h2 className="text-[28px] leading-[1.08] font-semibold tracking-[-0.03em] desk:text-[clamp(30px,3.6vw,44px)]">Before you write.</h2>
          </div>
          <FaqList items={FAQS} />
        </div>
      </section>
      <div aria-hidden className="h-24" />

      <Footer />
    </main>
  )
}
