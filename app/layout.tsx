import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "./globals.css"

const TITLE = "Mishka — AI-Guided Courses for Your Digital Career"
const DESCRIPTION =
  "Build job-ready skills in product design, UX research, branding, and marketing with AI-guided, bite-sized courses from Mishka. Learn by doing. Earn certificates."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://mishkaapp.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://mishkaapp.com",
    siteName: "Mishka",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A24",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xy1nt5u87n");
          `}
        </Script>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Mishka",
              url: "https://mishkaapp.com",
              description: DESCRIPTION,
            }),
          }}
        />
      </body>
    </html>
  )
}
