import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { PayPalButtons } from "@/components/paypal-buttons"
import { PayPalScript } from "@/components/paypal-script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "E-Commerce Template - Modern Online Store",
  description: "A modern, responsive e-commerce template with PayPal integration. Perfect for any online store.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>

        <PayPalScript />

        {/* PayPal Buttons Component - Injects the exact HTML from PayPal image */}
        <PayPalButtons />
      </body>
    </html>
  )
}
