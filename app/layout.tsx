import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CampusCareer | Your Daily Career Companion",
  description:
    "CampusCareer helps college students with daily career tips, skill roadmaps, placement preparation, resume building, and internship & placement updates.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: "/Campus-career-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Campus-career-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Campus-career-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/Campus-career-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
