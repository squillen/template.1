"use client"

import { ProductCard } from "@/components/product-card"
import { productButtonIds } from "@/lib/config";

export function ProductsSection({ type = "services" }) {
  const { headerText, noInventoryText } = {
    services: {
      headerText: "Our Services",
      noInventoryText: "No services yet",
    },
    products: {
      headerText: "Our Products",
      noInventoryText: "No products yet",
    },
  }[type];

  return productButtonIds?.length ? (
    <section className="p-[2rem]">
      <h2 className="text-2xl font-bold text-foreground mb-6">{headerText}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productButtonIds.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    </section>
  ) : (
    <section className="text-2xl h-[80vh] font-bold text-foreground mb-6 flex justify-center p-[2rem] content-center items-center">
      {noInventoryText}
    </section>
  );
}
