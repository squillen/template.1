"use client";

import { ProductCard } from "@/components/product-card";
import { dynamicServiceButtonIds } from "@/lib/config";

export function ServicesSection() {
  const serviceButtonIdsArray =
    dynamicServiceButtonIds && Object.values(dynamicServiceButtonIds);
  console.log("serviceButtonIdsArray :::::>> ", serviceButtonIdsArray);
  return serviceButtonIdsArray?.length ? (
    <section>
      <h2 className="text-2xl font-bold text-foreground mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {serviceButtonIdsArray.map((productId) => (
          <ProductCard key={productId} productId={productId} />
        ))}
      </div>
    </section>
  ) : (
    <section className="text-2xl font-bold text-foreground mb-6 display:flex justify-content:center">
      No services yet
    </section>
  );
}
