import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #5A2BAA 0%, #FF5C01 100%)",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700, color: "white" }}>Mishka</div>
        <div style={{ fontSize: 42, fontWeight: 600, color: "white", marginTop: 28, maxWidth: 920, lineHeight: 1.2 }}>
          Build Your Digital Career with AI-Guided Courses
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.85)", marginTop: 24 }}>
          Product Design · UX Research · Branding · Marketing · Data &amp; AI
        </div>
      </div>
    ),
    { ...size },
  )
}
