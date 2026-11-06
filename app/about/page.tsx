import Image from "next/image"
import Footer from "@/components/Footer"
import { Button, CONTAINER, DarkCta, Eyebrow, NumberedColumns } from "@/components/ui"
import { EARLY_ACCESS_URL } from "@/lib/links"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata(
  "/about",
  "About",
  "Mishka is an AI-powered learning platform for practical, job-ready digital skills, built for lifelong learners who want a clear path from learning to a real role.",
)

const H2 = "text-[28px] leading-[1.08] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(30px,3.6vw,48px)]"

const PRINCIPLES = [
  { title: "A coach, not a library", text: "A guided path and an AI coach that adapts to you beat a catalogue of videos you have to sort through yourself." },
  { title: "Proof over promises", text: "Reviewed projects, final tests and certificates show what someone can do, to employers and to themselves." },
  { title: "Learn by doing", text: "Short lessons, hands-on practice and real feedback, so skills stick and can be used at work." },
]

const TEAM = [
  {
    name: "Mohsen Samoudi",
    role: "CO-FOUNDER · CEO",
    image: "/images/team-mohsen-samoudi.jpg",
    bg: "bg-lavender",
    bio: "Entrepreneur with experience across fintech, FMCG, entertainment and digital products. Tech-savvy and hands on, with the ability to turn ideas into real products from concept to launch. At Mishka, building an AI-powered learning platform focused on practical, real-world skills.",
  },
  {
    name: "Samira Qayoumi",
    role: "CO-FOUNDER · CPO",
    image: "/images/team-samira-qayoumi.png",
    bg: "bg-lavender",
    bio: "Product expert with experience across fintech, logistics and digital platforms, specializing in product strategy and growth. At Mishka, focuses on product-market fit and growth by translating market insights and user feedback into improvements that increase adoption, engagement and success.",
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section>
        <div className={`${CONTAINER} py-16 desk:pt-24 desk:pb-[104px]`}>
          <div className="flex max-w-[860px] flex-col gap-7">
            <Eyebrow rule>About Mishka</Eyebrow>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance desk:text-[clamp(36px,4.6vw,64px)]">
              Learning that ends in proof, not just a certificate of attendance.
            </h1>
            <p className="max-w-[600px] text-xl leading-[1.6] text-muted">
              Mishka is an AI-powered learning platform for practical, job-ready digital skills. We are building it for lifelong learners who want a clear path from learning to a real role.
            </p>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-white">
        <div className={`${CONTAINER} flex flex-col gap-14 py-16 desk:py-28`}>
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className={H2}>Three principles behind every lesson we build.</h2>
          </div>
          <NumberedColumns items={PRINCIPLES} />
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section>
        <div className={`${CONTAINER} flex flex-col gap-14 py-16 desk:py-28`}>
          <div className="flex max-w-[760px] flex-col gap-5">
            <Eyebrow>Team</Eyebrow>
            <h2 className={H2}>Product and engineering, one team.</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 desk:grid-cols-2">
            {TEAM.map((person) => (
              <article key={person.name} className={`flex flex-col gap-[22px] rounded-[28px] p-8 ${person.bg}`}>
                <Image
                  src={person.image}
                  alt={`Portrait of ${person.name}`}
                  width={132}
                  height={132}
                  className="block h-[132px] w-[132px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[26px] font-semibold tracking-[-0.03em]">{person.name}</h3>
                  <p className="text-[13px] font-semibold tracking-[1.4px] text-brand-dark">{person.role}</p>
                </div>
                <p className="text-base leading-[1.65] text-ink-soft">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DarkCta
        title={<>Want to build with us? <span className="text-coral">Say hello.</span></>}
        text="Learners, employers and partners are all welcome. We read every message."
        className="pb-28"
      >
        <Button href="/contact" variant="light">Contact us</Button>
        <Button href={EARLY_ACCESS_URL} variant="outlineDark" clarityEvent="about_early_access_click">Early Access</Button>
      </DarkCta>

      <Footer />
    </main>
  )
}
