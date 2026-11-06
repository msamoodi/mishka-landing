import type { Metadata } from "next"

export const SITE_URL = "https://mishkaapp.com"
export const SITE_NAME = "Mishka"

export const TITLE = "Mishka — AI-Guided Courses for Your Digital Career"

export const DESCRIPTION =
  "Build job-ready skills in product design, UX research, branding, marketing and data & AI. An AI coach guides every lesson, and real projects earn a certificate."

export const CONTACT_EMAIL = "info@mishkaapp.com"

// Update this list as course tracks, campaigns, or target searches change —
// every file that needs SEO metadata reads from here instead of hardcoding its own copy.
export const KEYWORDS = [
  "Mishka app",
  "AI-guided courses",
  "digital skills courses",
  "job-ready skills course",
  "AI skills course",
  "AI for product design",
  "product design course online",
  "UX research course",
  "AI for UX research",
  "branding course",
  "AI branding course",
  "digital marketing course",
  "AI marketing course",
  "data and AI course",
  "microlearning app",
]

export const SUBPAGES = ["/solutions", "/employers", "/pricing", "/about", "/contact"]

// Setting openGraph or twitter on a page replaces the parent's, including the root image.
const OG_IMAGE = "/opengraph-image"

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: SITE_NAME, type: "website", locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  }
}

export const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.jpg`,
      email: CONTACT_EMAIL,
      description: DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
}

export function breadcrumbJsonLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  }
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}
