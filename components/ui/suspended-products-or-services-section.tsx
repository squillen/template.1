import { Suspense } from "react";
import { ProductsOrServicesSection } from "./products-or-services-section";
import { Loading } from "./loading";

/**
 * Wraps ProductsOrServicesSection component in a Suspense to satisfy the
 * useSearchParams Suspense requirement
 */
export default function SuspendedProductsOrServicesSection({
  type,
  withSearch,
}: {
  readonly type?: "products" | "services";
  readonly withSearch?: boolean;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsOrServicesSection type={type} withSearch={withSearch} />
    </Suspense>
  );
}
