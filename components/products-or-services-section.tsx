"use client"

import { ProductOrServiceCard } from "@/components/product-or-service-card"
import { productButtonIds, serviceButtonIds } from "@/lib/config";

export function ProductsOrServicesSection({ type = "products" }: { type?: 'products' | 'services' }) {
  const { headerText, noInventoryText, buttonIds } = {
    services: {
      headerText: "Our Services",
      noInventoryText: "No services yet",
      buttonIds: serviceButtonIds,
    },
    products: {
      headerText: "Our Products",
      noInventoryText: "No products yet",
      buttonIds: productButtonIds,
    },
  }[type] as {
    headerText: string;
    noInventoryText: string;
    buttonIds: string[];
  };

  return buttonIds?.length ? (
    <section className="p-[2rem]">
      <h2 className="text-2xl font-bold text-foreground mb-6">{headerText}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {buttonIds.map((buttonId, productIndex) => (
          <ProductOrServiceCard
            key={buttonId}
            buttonId={buttonId}
            productIndex={productIndex}
            type={type}
          />
        ))}
      </div>
    </section>
  ) : (
    <section className="text-2xl h-[80vh] font-bold text-foreground mb-6 flex justify-center p-[2rem] content-center items-center">
      {noInventoryText}
    </section>
  );
}
