import { FetchOptions, useStorefrontMethod, UseStorefrontMethodOptions } from "@/context/storefront-context";
import { useFetchProduct } from "./products";
import { useEffect, useState } from "react";

/**
 * Fetch all storefront services
 */
export function useFetchServices(
  options: UseStorefrontMethodOptions<any> = {}
) {
  const { fetchOptions, ...restOptions } = options;

  return useStorefrontMethod("getProducts", {
	fetchOptions: {
	  includeTotalCount: true,
	  filter: `type:SERVICES`,
	  ...(fetchOptions as FetchOptions),
	},
	...restOptions,
  });
}

export const useServicesCount = (
  options: UseStorefrontMethodOptions<any> = {}
) => {
  const [servicesCount, setServicesCount] = useState<number>(0);
  const { data } = useFetchServices(options);

  useEffect(() => {
	if (data?.totalItems !== undefined) {
	  setServicesCount(data.totalItems);
	}
  }, [data?.totalItems]);

  return servicesCount;
};

export const useFetchService = useFetchProduct
