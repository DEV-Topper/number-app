import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "@/components/landing-page/styles.css"
import { Suspense } from "react"
import dynamic from "next/dynamic"

// Google Font
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

// Metadata (Server-side)
export const metadata: Metadata = {
  title: "VirtualSMS - Global Virtual Numbers & eSIM Platform",
  description:
    "Rent virtual numbers globally for SMS verification, get instant eSIM activation, and manage your communications with our secure wallet system. Fast, reliable, worldwide coverage.",
  icons: {
    icon: [{ url: "/automatic-favicon-no-bg.png", type: "image/png" }],
    apple: [{ url: "/automatic-favicon-no-bg.png" }],
  },
  generator: "v0.app",
}

// Client-only Analytics (dynamic import)
const AnalyticsWrapper = dynamic(
  () => import("@vercel/analytics/react").then(mod => mod.Analytics),
  { ssr: false }
)

// Root Layout (Server Component)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <Suspense fallback={null}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <AnalyticsWrapper />
        </Suspense>
      </body>
    </html>
  )
}
