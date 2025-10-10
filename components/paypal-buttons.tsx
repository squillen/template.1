"use client"

import { useEffect } from "react"
import { storeConfig, products } from "@/lib/config"

export function PayPalButtons() {

  useEffect(() => {
    const injectPayPalButtons = () => {
      if (typeof window !== "undefined" && (window as any).cartPaypal) {
        // Inject View Cart button
        const viewCartContainer = document.getElementById("paypal-view-cart-container")
        if (viewCartContainer) {
          viewCartContainer.innerHTML = '<paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>'
          ;(window as any).cartPaypal.Cart({ id: "pp-view-cart" })
        }

        // Inject Add to Cart buttons for all products using configuration
        products.forEach((product) => {
          const paypalButtonId = storeConfig.paypal.buttonIds[product.id as keyof typeof storeConfig.paypal.buttonIds]
          if (paypalButtonId) {
            const container = document.getElementById(`paypal-add-to-cart-${product.id}`)
            const paypalCart = (window as any).cartPaypal
            if (container && paypalCart) {
              container.innerHTML = `<paypal-add-to-cart-button data-id="${paypalButtonId}"></paypal-add-to-cart-button>`;
              paypalCart.AddToCart({ id: paypalButtonId });
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
          console.error("[v0] PayPal script failed to load - check network connection")
        }
      }, 100)
    }
  }, [storeConfig, products])

  return null
}
