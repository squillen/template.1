"use client"
import Script from "next/script"
import { storeConfig } from "@/lib/config"

export function PayPalScript() {
  return (
    <Script
      src="https://www.msmaster.qa.paypal.com/ncp/js/embedded/cart.js"
      data-merchant-id={storeConfig.paypal.merchantId}
      strategy="beforeInteractive"
      onLoad={() => console.log("[PayPal] Cart script loaded successfully")}
      onError={(e) => console.error("[PayPal] Cart script failed to load:", e)}
    />
  )
}
