import { Suspense } from "react";
import { ProductsOrServicesSection } from "./products-or-services-section";
import { Loading } from "./loading";

/**
 * Wraps ProductsOrServicesSection component in a Suspense to satisfy the
 * useSearchParams Suspense requirement
 */
export default function SuspendedProductsOrServicesSection({
  type,
}: {
  type?: "products" | "services";
}) {
	return (
		<Suspense fallback={<Loading />}>
			<ProductsOrServicesSection type={type} />
		</Suspense>
	)
}
