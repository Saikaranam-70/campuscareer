import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "CampusCareer | Your Daily Career Companion",
  description:
    "CampusCareer helps college students with daily career tips, skill roadmaps, placement preparation, resume building, and internship & placement updates.",
    other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google AdSense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6563298862178501"
          crossOrigin="anonymous"
        />
        

        
      </head>

      <body className="font-sans antialiased">
        <Navigation />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
