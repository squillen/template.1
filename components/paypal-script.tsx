"use client"
import Script from "next/script"

export function PayPalScript() {
  return (
    <Script
      src="https://www.sandbox.paypal.com/ncp/js/embedded/cart.js"
      data-merchant-id={process.env.PAYPAL_MERCHANT_ID}
      strategy="beforeInteractive"
      onLoad={() => console.log("[v0] PayPal script loaded successfully")}
      onError={(e) => console.error("[v0] PayPal script failed to load:", e)}
    />
  )
}
