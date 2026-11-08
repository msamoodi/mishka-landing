// Shared by the interest form and its API route, so both accept the same values.
// The source is the button that opened the form.
export const SOURCES = ["Google Play", "App Store", "Join as a learner"] as const

export const INTERESTS = ["Product Design", "UX Research", "Design & Branding", "Digital Marketing", "Data & AI Literacy"] as const

export const CAREER_STAGES = ["Student", "Career changer", "Working professional", "Team lead"] as const

export type Source = (typeof SOURCES)[number]

export type InterestSubmission = {
  source: Source
  name: string
  email: string
  interests: string[]
  stage: string
}
