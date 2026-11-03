"use client"

import { useState } from "react"
import { Button, CheckIcon, CONTAINER, Eyebrow } from "./ui"
import { EARLY_ACCESS_URL } from "@/lib/links"

const FREE_FEATURES = ["3 days of full access", "All learning paths and lessons", "AI coach and practice projects", "Cancel any time"]
const PRO_FEATURES = [
  "Everything in the free trial, without limits",
  "All current and new learning paths",
  "Reviewed practice projects and final tests",
  "Mishka certificates for every completed path",
  "Profile ready for employer matching",
]
const TEAMS_FEATURES = [
  "Everything in Pro for every learner",
  "Team dashboards and progress tracking",
  "Skills overview across your team",
  "Onboarding support from the Mishka team",
]

function Features({ items, checkClassName }: { items: string[]; checkClassName: string }) {
  return (
    <ul className="flex flex-col gap-3.5 text-base leading-normal">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckIcon className={`mt-0.5 ${checkClassName}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PricingPlans() {
  const [annual, setAnnual] = useState(true)

  const toggleClasses = (on: boolean) =>
    `inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[40px] border-0 px-5 text-[15px] ${
      on ? "bg-ink font-semibold text-white" : "bg-transparent font-medium text-ink-soft"
    }`

  return (
    <>
      <section>
        <div className={`${CONTAINER} flex flex-col items-center gap-6 pt-16 pb-12 text-center desk:pt-24`}>
          <Eyebrow rule>Pricing</Eyebrow>
          <h1 className="max-w-[820px] text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(36px,4.6vw,64px)]">
            Simple plans. Start with three days free.
          </h1>
          <p className="max-w-[600px] text-xl leading-[1.6] text-muted">
            Try every path, lesson and tool first. Keep going only if Mishka works for you.
          </p>
          <div role="group" aria-label="Billing period" className="mt-2 inline-flex gap-1 rounded-[40px] border border-field bg-white p-[5px]">
            <button type="button" onClick={() => setAnnual(false)} aria-pressed={!annual} className={toggleClasses(!annual)}>
              Monthly
            </button>
            <button type="button" onClick={() => setAnnual(true)} aria-pressed={annual} className={toggleClasses(annual)}>
              Annual
              <span className={`rounded-[20px] px-2 py-[3px] text-xs font-semibold text-ink ${annual ? "bg-gold" : "bg-butter"}`}>Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className={`${CONTAINER} grid grid-cols-1 items-stretch gap-5 pt-6 pb-16 desk:grid-cols-3 desk:pb-24`}>
          <article className="flex flex-col gap-6 rounded-[28px] border border-field bg-white p-7 desk:p-9">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">Free trial</h2>
              <p className="text-base leading-normal text-muted">See if Mishka fits how you learn.</p>
            </div>
            <p className="flex items-baseline gap-2">
              <span className="text-[52px] leading-none font-semibold tracking-[-0.04em]">€0</span>
              <span className="text-base text-muted">for 3 days</span>
            </p>
            <Features items={FREE_FEATURES} checkClassName="text-brand" />
            <Button href={EARLY_ACCESS_URL} variant="outlineInk" size="md" fluid={false} clarityEvent="pricing_free_trial_click" className="mt-auto w-full">
              Start free trial
            </Button>
          </article>

          <article className="relative flex flex-col gap-6 rounded-[28px] bg-ink p-7 text-white desk:p-9">
            <p className="absolute top-6 right-6 rounded-[20px] bg-gold px-3 py-1.5 text-xs font-semibold tracking-[1.2px] text-ink">MOST POPULAR</p>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">Pro</h2>
              <p className="text-base leading-normal text-on-dark">For individuals who want a real career move.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-baseline gap-2">
                <span className="text-[52px] leading-none font-semibold tracking-[-0.04em]">€{annual ? "11.99" : "14.99"}</span>
                <span className="text-base text-on-dark">per month</span>
              </p>
              <p className="min-h-5 text-sm text-periwinkle">{annual ? "Billed as €143.88 per year" : "Billed monthly"}</p>
            </div>
            <Features items={PRO_FEATURES} checkClassName="text-coral" />
            <Button href={EARLY_ACCESS_URL} variant="light" size="md" fluid={false} clarityEvent="pricing_get_pro_click" className="mt-auto w-full">
              Get Pro
            </Button>
          </article>

          <article className="flex flex-col gap-6 rounded-[28px] border border-field bg-white p-7 desk:p-9">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">Teams</h2>
              <p className="text-base leading-normal text-muted">For companies upskilling groups of 20 or more.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-baseline gap-2">
                <span className="text-[52px] leading-none font-semibold tracking-[-0.04em]">€40</span>
                <span className="text-base text-muted">per user, per year</span>
              </p>
              <p className="text-sm text-subtle">From 20 seats</p>
            </div>
            <Features items={TEAMS_FEATURES} checkClassName="text-brand" />
            <Button href="/contact" variant="outlineInk" size="md" fluid={false} className="mt-auto w-full">
              Talk to us
            </Button>
          </article>

          <p className="col-span-full mt-2 text-center text-sm leading-normal text-subtle">
            Prices shown are our current proposal for launch and may change before general availability.
          </p>
        </div>
      </section>
    </>
  )
}
