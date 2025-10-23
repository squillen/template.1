"use client"
import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Your Company Tagline</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your company description.
            </p>
          </div>
        </section>

        <ProductGrid />
      </main>
    </div>
  )
}
