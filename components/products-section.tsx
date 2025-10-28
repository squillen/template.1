"use client"

import { ProductCard } from "@/components/product-card"
import { dynamicButtonIds } from "@/lib/config";

export function ProductsSection() {
  const productButtonIdsArray =
    dynamicButtonIds && Object.values(dynamicButtonIds);
  console.log("productButtonIdsArray :::::>> ", productButtonIdsArray);
  return productButtonIdsArray?.length ? (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productButtonIdsArray.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    </section>
  ) : (
    <section className="text-2xl font-bold text-foreground mb-6 display:flex justify-content:center">
      No products yet
    </section>
  );
}
