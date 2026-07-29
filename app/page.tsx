import Image from "next/image"
import Navbar from "@/components/Navbar"
import CategoryRow from "@/components/CategoryRow"
import ScreensRow from "@/components/ScreensRow"

const APP_URL = "https://mishkaapp.com/app"

const WHO_WE_ARE_FEATURES = [
  {
    icon: "/images/icons/structured-learning-paths.svg",
    title: "Structured Learning Paths",
    description: "Follow guided learning paths built around your goals and experience, so you always know what to learn next.",
  },
  {
    icon: "/images/icons/mishka-ai.svg",
    title: "Learn with Mishka AI",
    description: "Get instant explanations, personalised guidance, and support whenever you need it — right inside every lesson.",
  },
  {
    icon: "/images/icons/learn-by-doing.svg",
    title: "Learn by Doing",
    description: "Complete practical exercises and projects that help you apply your knowledge to real-world scenarios.",
  },
  {
    icon: "/images/icons/certificates.svg",
    title: "Earn Meaningful Certificates",
    description: "Show what you can do with certificates earned through completed coursework and practical assessments.",
  },
]

const CATEGORIES = [
  {
    label: "User Research",
    gradient: "var(--gradient-product-design)",
    description: "Discover user needs and turn research into meaningful product decisions.",
  },
  {
    label: "Product Design",
    gradient: "var(--gradient-product-design)",
    description: "Learn how to design intuitive digital products that solve real user problems.",
  },
  {
    label: "Branding & Design",
    gradient: "var(--gradient-product-design)",
    description: "Build memorable brands through strategy, identity, storytelling and design.",
  },
  {
    label: "Digital Marketing",
    gradient: "var(--gradient-product-design)",
    description: "Learn to grow audiences and drive business results through digital channels.",
  },
  {
    label: "Data & AI Literacy",
    gradient: "var(--gradient-product-design)",
    description: "Learn to grow audiences and drive business results through digital channels.",
  },
]

const APP_SCREENS = [
  { image: "/images/screen-1.png", alt: "The AI Marketing Playbook course detail screen" },
  { image: "/images/screen-2.png", alt: "Your personalised home feed" },
  { image: "/images/screen-3.png", alt: "Ask Mishka AI anytime" },
  { image: "/images/screen-4.png", alt: "Explore 44+ courses" },
  { image: "/images/screen-5.png", alt: "Your profile and progress" },
  { image: "/images/screen-6.png", alt: "Your personalised learning path" },
]

export default function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-[#0A0A24]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="flex justify-center px-4 pt-4 sm:px-6 sm:pt-6 min-[1340px]:px-0 min-[1340px]:pt-0">
        <div
          className="relative min-h-screen w-full max-w-[1336px] overflow-hidden rounded-[24px] min-[1340px]:min-h-0 min-[1340px]:aspect-[1336/1200] min-[1340px]:rounded-[32px]"
          style={{ background: "linear-gradient(to bottom left, #5A2BAA 0%, #FF5C01 70%)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/background.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-full w-full select-none object-cover"
          />

          <div className="relative flex h-full flex-col px-5 pb-10 sm:px-8 min-[1340px]:px-[60px] min-[1340px]:pb-[60px]">
            <Navbar />

            <div className="relative mt-10 flex flex-1 flex-col justify-center gap-10 min-[1340px]:mt-0 min-[1340px]:block">
              <div className="min-[1340px]:absolute min-[1340px]:left-0 min-[1340px]:top-1/2 min-[1340px]:w-1/2 min-[1340px]:-translate-y-1/2 min-[1340px]:pr-6">
                <h1 className="text-[36px] font-bold leading-[1.15] text-white sm:text-[44px] min-[1340px]:text-[76px]!">
                  Build Your Digital Career with{" "}
                  <span
                    style={{
                      background: "linear-gradient(to right, #5A2BAA, #DA51CC, #5A2BAA)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gradient-pan 6s ease-in-out infinite",
                    }}
                  >
                    Mishka
                  </span>
                  .
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
                  Learn practical, job-ready skills with bite-sized courses, AI guidance, and structured learning paths designed to help you grow with confidence.
                </p>
              </div>

              {/* Desktop: exact-spec absolute composition, sized relative to the full 1336px box */}
              <div className="relative mt-4 hidden w-full min-[1340px]:mt-0 min-[1340px]:absolute min-[1340px]:inset-0 min-[1340px]:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/001.png"
                  alt="The Mishka app running on a phone"
                  className="absolute bottom-[-25px] right-0 h-auto w-[520px] max-w-none"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mishka-cat-jumping.png"
                  alt="Mishka, the grumpy Persian cat mascot, leaping"
                  className="absolute bottom-[150px] right-[70px] z-10 h-[534px] w-[534px] max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are: intro ────────────────────────────────────────────── */}
      <section id="about" className="bg-[#0f0d1a] px-6 py-[50px] sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#a3a9ff]">Who We Are</p>
            <h2 className="text-[48px] font-semibold leading-tight text-white">
              Learn the skills that move your career forward.
            </h2>
            <p className="mt-6 leading-relaxed text-white/60">
              Mishka is an AI-powered learning platform designed to help you build practical, job-ready skills. Whether you&apos;re starting your career or growing into your next role, every learning path combines expert lessons, hands-on practice, and personalised guidance from Mishka AI.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              Learn with confidence, practise what you learn, and earn certificates through real work, not just multiple-choice quizzes.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10 rounded-2xl border border-white/10 px-6">
            {WHO_WE_ARE_FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5 py-[50px]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5">
                  <Image src={feature.icon} alt="" width={28} height={28} aria-hidden />
                </div>
                <div>
                  <h3 className="text-[24px] font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-white/55">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Future Professionals ──────────────────────────────── */}
      <section id="industries" className="overflow-x-clip bg-[#0f0d1a] px-6 pb-24 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-7xl rounded-[2.5rem] bg-[#ECEAF6] py-14 sm:py-16 lg:min-h-[910px]">
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[470px] w-[470px] sm:block">
            <Image
              src="/images/mishka-cat-sitting.png"
              alt="Mishka, the grumpy Persian cat mascot, sitting"
              width={946}
              height={946}
              loading="eager"
              className="h-full w-full object-contain object-bottom"
            />
          </div>

          <div className="w-full px-6 sm:w-[70%] sm:px-12">
            <h2 className="text-[46px] font-semibold leading-tight text-[#14101f]">
              Built for Future Professionals
            </h2>
            <p className="mt-6 leading-relaxed text-[#5b5870]">
              Choose from career-focused learning paths across multiple disciplines, with courses designed for every level from beginners building foundations to professionals advancing their expertise.
            </p>
          </div>

          <CategoryRow categories={CATEGORIES} />
        </div>
      </section>

      {/* ── Everything You Need to Keep Learning ────────────────────────── */}
      <section id="technology" className="overflow-x-clip bg-[#0f0d1a] px-6 pb-24 sm:px-8 sm:pb-28">
        <div
          className="relative mx-auto max-w-7xl rounded-[2.5rem] py-16 sm:py-20"
          style={{ background: "linear-gradient(135deg, #6C4CF1 0%, #4C3FE0 55%, #3F4FE8 100%)" }}
        >
          <div className="mx-auto max-w-2xl px-6 text-center sm:px-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">How It Works</p>
            <h2 className="text-[46px] font-bold leading-tight text-white">
              Everything You Need to Keep Learning
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">
              From your first lesson to earning your certificate, Mishka provides the tools and support to help you learn with confidence.
            </p>
          </div>

          <ScreensRow screens={APP_SCREENS} />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section id="resources" className="px-6 pb-24 sm:px-8">
        <div
          className="mx-auto max-w-7xl rounded-[2.5rem] px-6 py-16 text-center sm:py-20"
          style={{ background: "linear-gradient(135deg, #676BEB 0%, #4C3FE0 100%)" }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Build Skills. Shape Your Future.</h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APP_URL}
              className="flex h-14 w-56 items-center justify-center gap-3 rounded-full bg-black px-6 text-white transition-transform hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-white/70">GET IT ON</span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </a>
            <a
              href={APP_URL}
              className="flex h-14 w-56 items-center justify-center gap-3 rounded-full bg-black px-6 text-white transition-transform hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.9-.15 1.75-.83 3.09-.85 1.6.03 2.81.67 3.61 1.95-3.3 2.03-2.63 6.44.29 7.79-.61 1.61-1.4 3.2-2.07 4.28zM12.03 7.25c-.15-2.23 1.66-4.09 3.74-4.25.29 2.28-2.06 4.42-3.74 4.25z" />
              </svg>
              <span className="text-left leading-tight">
                <span className="block text-[10px] text-white/70">DOWNLOAD ON THE</span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer id="contact" className="border-t border-white/10 bg-[#0f0d1a] px-6 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Mishka. All rights reserved. Built with ❤️ for lifelong learners.
          </p>
        </div>
      </footer>
    </div>
  )
}
