"use client"

import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/config"

export function ServicesGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
