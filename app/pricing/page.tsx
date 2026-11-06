import Footer from "@/components/Footer"
import JsonLd from "@/components/JsonLd"
import PricingPlans from "@/components/PricingPlans"
import { Button, CONTAINER, DarkCta, Eyebrow, FaqList } from "@/components/ui"
import { EARLY_ACCESS_URL } from "@/lib/links"
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/pricing",
  "Pricing: Pro & Teams Plans, 3 Days Free — Mishka",
  "Start with 3 days of full access for free. Then choose Pro for individuals or Teams for companies upskilling 20 or more people, with certificates included.",
)

const FAQS = [
  { q: "Is the free trial really free?", a: "Yes. You get 3 days of full access with no charge. You can cancel at any time before the trial ends." },
  { q: "Can I switch between monthly and annual billing?", a: "Yes. You can change your billing period from your account at any time." },
  { q: "What does a Teams plan include?", a: "Everything in Pro for each learner, plus team dashboards and progress tracking. Teams plans start at 20 seats." },
  { q: "Do certificates cost extra?", a: "No. Certificates are included in Pro and Teams for every path you complete." },
]

export default function PricingPage() {
  return (
    <main>
      <PricingPlans />

      {/* ── Employer matching ────────────────────────────────────────────── */}
      <section>
        <div className={`${CONTAINER} pb-28`}>
          <div className="flex flex-wrap items-center justify-between gap-7 rounded-[32px] bg-lavender p-7 desk:p-12">
            <div className="flex max-w-[680px] flex-col gap-3">
              <p className="self-start rounded-[20px] bg-white px-3 py-1.5 text-xs font-semibold tracking-[1.2px] text-brand-dark">COMING NEXT</p>
              <h2 className="text-[30px] leading-[1.15] font-semibold tracking-[-0.03em]">Employer matching</h2>
              <p className="text-[17px] leading-[1.6] text-ink-soft">
                Post roles and meet candidates matched on proven skills. Pricing is being shaped with our first pilot partners.
              </p>
            </div>
            <Button href="/employers" variant="ink" size="md" fluid={false}>Explore For Employers</Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-white">
        <div className={`${CONTAINER} grid grid-cols-1 items-start gap-8 py-16 desk:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] desk:gap-16 desk:py-28`}>
          <div className="flex flex-col gap-4">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-[28px] leading-[1.08] font-semibold tracking-[-0.03em] desk:text-[clamp(30px,3.6vw,44px)]">Good to know before you start.</h2>
          </div>
          <FaqList items={FAQS} large />
        </div>
      </section>

      <DarkCta
        title={<>Build skills. Shape your future. <span className="text-coral">Start today.</span></>}
        text="Three days, full access, no charge."
      >
        <Button href={EARLY_ACCESS_URL} variant="light" clarityEvent="pricing_cta_early_access_click">Early Access</Button>
      </DarkCta>

      <Footer />
      <JsonLd data={breadcrumbJsonLd("/pricing", "Pricing")} />
      <JsonLd data={faqJsonLd(FAQS)} />
    </main>
  )
}
