"use client";

import { useState } from "react";

// COMPONENTS
import { Loading } from "./loading";
import { Error } from "./error";
import SearchBar from "./search-bar";
import { Pagination } from "./pagination";

// HOOKS
import { ProductOrServiceCard } from "@/components/ui/product-or-service-card";
import { useFetchProducts } from "@/hooks/storefront/products";
import { useFetchServices } from "@/hooks/storefront/services";
import { usePageTracking } from "@/hooks/utils";

/**
 * A section component that displays a list of products or services.
 */
export function ProductsOrServicesSection({
  type = "products",
  withSearch = true,
  pageSize = 8,
}: {
  readonly type?: "products" | "services";
  readonly withSearch?: boolean;
  readonly pageSize?: number;
}) {
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const { page, handlePageChange } = usePageTracking();
  const isProducts = type === "products";
  const toFetch = isProducts ? useFetchProducts : useFetchServices;

  const { data, error, isLoading } = toFetch({
    fetchOptions: {
      page,
      pageSize,
      search: searchInput || "",
    },
  });

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

  if (isLoading && searchInput === null) {
    return <Loading />;
  }

  if (error) {
    return <Error message="Error loading products or services." />;
  }

  return data?.products?.length || searchInput ? (
    <section className="p-[2rem]">
      <h2 className="text-2xl font-bold text-foreground mb-6">{headerText}</h2>
      {withSearch && (
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          placeholder={
            type === "products" ? "Search products..." : "Search services..."
          }
        />
      )}
      {isLoading && <Loading />}
      {!isLoading && withSearch && !data?.products?.length && (
        <section className="text-2xl h-[80vh] w-[50vw] mx-auto font-bold text-foreground flex p-[2rem] text-center">
          No results meeting that criteria. Please try searching something
          different.
        </section>
      )}
      {!isLoading && data?.products?.length && (
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
      )}
      <div className="mt-6">
        {handlePageChange && (
          <Pagination
            currentPage={page}
            totalItems={data?.totalItems ?? 0}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  ) : (
    <section className="text-2xl h-[80vh] font-bold text-foreground mb-6 flex justify-center p-[2rem] content-center items-center">
      {noInventoryText}
    </section>
  );
}
