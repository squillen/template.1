"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { CartSidebar, type CartItem } from "@/components/cart-sidebar"
// import { CheckoutModal } from "@/components/checkout-modal"
// import type { Product } from "@/components/products-section"

export default function HomePage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id)
      if (existingItem) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(productId)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  const handleOrderComplete = () => {
    setCartItems([])
    setTimeout(() => {
      setIsCheckoutOpen(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen">
      <Header>
        {/* <CartSidebar
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        /> */}
      </Header>
      <main>
        <HeroSection />
      </main>
      <Footer />

      {/* <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderComplete={handleOrderComplete}
      /> */}
    </div>
  )
}
