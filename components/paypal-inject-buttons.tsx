"use client"

import { useEffect } from "react"
import { storeConfig, products } from "@/lib/config"

export function PayPalInjectButtons() {

  useEffect(() => {
    const injectPayPalButtons = () => {
      if (typeof window !== "undefined" && (window as any).cartPaypal) {
        console.log('[PayPal] Injecting buttons...')

        // Inject View Cart button
        const viewCartContainer = document.getElementById("paypal-view-cart-container")
        if (viewCartContainer) {
          viewCartContainer.innerHTML = '<paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>'
          ;(window as any).cartPaypal.Cart({ id: "pp-view-cart" })
          console.log('[PayPal] View Cart button injected')
        }

        // Inject Add to Cart buttons for all products using configuration
		console.log('storeConfig.paypal.buttonIds ::::::>> ', storeConfig.paypal.buttonIds);
		console.log('storeConfig.paypal.serviceButtonIds ::::::>> ', storeConfig.paypal.serviceButtonIds);
        products.forEach((product) => {
          const paypalButtonId = storeConfig.paypal.buttonIds[product.id as keyof typeof storeConfig.paypal.buttonIds]
          if (paypalButtonId) {
            const container = document.getElementById(`paypal-add-to-cart-${product.id}`)
            if (container) {
              container.innerHTML = `<paypal-add-to-cart-button data-id="${paypalButtonId}"></paypal-add-to-cart-button>`
              ;(window as any).cartPaypal.AddToCart({ id: paypalButtonId })
              console.log(`[PayPal] Add to Cart button injected for product ${product.id}`)
            }
          }
        })
      }
    }

    // Check if PayPal is loaded, if not wait for it
    if (typeof window !== "undefined" && (window as any).cartPaypal) {
      injectPayPalButtons()
    } else {
      let attempts = 0
      const maxAttempts = 30 // 3 seconds max wait

      const checkPayPal = setInterval(() => {
        attempts++

        if (typeof window !== "undefined" && (window as any).cartPaypal) {
          clearInterval(checkPayPal)
          injectPayPalButtons()
        } else if (attempts >= maxAttempts) {
          clearInterval(checkPayPal)
          console.error("[PayPal] Cart script failed to load - check network connection")
        }
      }, 100)

      return () => clearInterval(checkPayPal)
    }
  }, [])

  return null
}
