"use client"

import { ProductOrServiceCard } from "@/components/ui/product-or-service-card"
import { useFetchProducts } from "@/hooks/storefront/products";
import { useFetchServices } from "@/hooks/storefront/services";
import { Loading } from "./loading";
import { Error } from "./error";

/**
 * A section component that displays a list of products or services.
 */
export function ProductsOrServicesSection({
  type = "products",
}: {
  type?: "products" | "services";
}) {
  const isProducts = type === "products";
  const toFetch = isProducts ? useFetchProducts : useFetchServices;
  const { data, error, isLoading } = toFetch();

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

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message="Error loading products or services." />;
  }

  return data?.products?.length ? (
    <section className="p-[2rem]">
      <h2 className="text-2xl font-bold text-foreground mb-6">{headerText}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.products.map((item, productIndex) => (
          <ProductOrServiceCard
            key={item.id}
            item={item}
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
