"use client";
import { ProductOrServiceCard } from "@/components/ui/product-or-service-card";
import { useFetchProduct } from "@/hooks/storefront/products";
import { useParams } from "next/navigation";
import { Loading } from "./loading";
import { Error } from "./error";

/**
 * A page component that displays a product or service based on the provided type and ID from the URL.
 */
export default function ProductOrServicePage({
  type,
}: {
  readonly type: "products" | "services";
}) {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchProduct(id as string);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <section className="p-8 w-full md:w-[50%] mx-auto">
      {data?.id ? (
        <ProductOrServiceCard
          type={type}
          key={data.id}
          item={data}
          showFooter={false}
        />
      ) : (
        <Error
          message={`${type === "products" ? "Product" : "Service"} not found.`}
        />
      )}
    </section>
  );
}
