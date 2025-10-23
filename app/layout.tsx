import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { PayPalScript } from "@/components/paypal-script"
import { PayPalInjectButtons } from "@/components/paypal-inject-buttons"

export const metadata: Metadata = {
  title: "Your Company Name - Your Products",
  description: "Your company description",
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
        {/* PayPal Cart Script - Loads PayPal embedded cart SDK */}
        <PayPalScript />

        <CartProvider>{children}</CartProvider>

        {/* PayPal Button Injection - Injects Add to Cart and View Cart buttons */}
        <PayPalInjectButtons />
      </body>
    </html>
  );
}
