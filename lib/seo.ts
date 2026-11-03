import type { Metadata } from "next"

export const SITE_URL = "https://mishkaapp.com"
export const SITE_NAME = "Mishka"

export const TITLE = "Mishka — AI-Guided Courses for Your Digital Career"

export const DESCRIPTION =
  "Build job-ready skills in product design, UX research, branding, and marketing with AI-guided, bite-sized courses from Mishka. Learn by doing. Earn certificates."

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

export function pageMetadata(path: string, name: string, description: string): Metadata {
  const title = `${name} — ${SITE_NAME}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: SITE_NAME, type: "website", locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  }
}
