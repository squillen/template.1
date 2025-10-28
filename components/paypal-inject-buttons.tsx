"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation";
import { storeConfig, productButtonIds, serviceButtonIds } from "@/lib/config";

export function PayPalInjectButtons() {
  const pathname = usePathname();

  useEffect(() => {
    const injectPayPalButtons = () => {
      if (typeof window !== "undefined" && (window as any).cartPaypal) {
        console.log("[PayPal] Injecting buttons...");

        // Add a small delay to ensure DOM elements are ready
        setTimeout(() => {
          // Inject View Cart button
          const viewCartContainer = document.getElementById(
            "paypal-view-cart-container"
          );
          if (viewCartContainer) {
            viewCartContainer.innerHTML =
              '<paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>';
            (window as any).cartPaypal.Cart({ id: "pp-view-cart" });
            console.log("[PayPal] View Cart button injected");
          }

          // Inject Add to Cart buttons for all products using configuration
          productButtonIds.forEach((productButtonId) => {
            const container = document.getElementById(
              `paypal-add-to-cart-${productButtonId}`
            );

            if (container) {
              container.innerHTML = `<paypal-add-to-cart-button data-id="${productButtonId}"></paypal-add-to-cart-button>`;
              (window as any).cartPaypal.AddToCart({ id: productButtonId });
              console.log(
                `[PayPal] Add to Cart button injected for product ${productButtonId}`
              );
            }
          });

          serviceButtonIds.forEach((serviceButtonId) => {
            const container = document.getElementById(
              `paypal-add-to-cart-${serviceButtonId}`
            );

            if (container) {
              container.innerHTML = `<paypal-add-to-cart-button data-id="${serviceButtonId}"></paypal-add-to-cart-button>`;
              (window as any).cartPaypal.AddToCart({ id: serviceButtonId });
              console.log(
                `[PayPal] Add to Cart button injected for product ${serviceButtonId}`
              );
            }
          });
        }, 100); // Small delay to ensure DOM is ready
      }
    };

    // Check if PayPal is loaded, if not wait for it
    if (typeof window !== "undefined" && (window as any).cartPaypal) {
      injectPayPalButtons();
    } else {
      let attempts = 0;
      const maxAttempts = 30; // 3 seconds max wait

      const checkPayPal = setInterval(() => {
        attempts++;

        if (typeof window !== "undefined" && (window as any).cartPaypal) {
          clearInterval(checkPayPal);
          injectPayPalButtons();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkPayPal);
          console.error(
            "[PayPal] Cart script failed to load - check network connection"
          );
        }
      }, 100);

      return () => clearInterval(checkPayPal);
    }
  }, [pathname]); // Re-run when pathname changes

  return null;
}
