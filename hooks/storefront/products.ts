import {
  FetchOptions,
  useStorefrontMethod,
  type UseStorefrontMethodOptions,
} from "@/context/storefront-context";
import { useEffect, useState } from "react";

/**
 * Fetch all storefront products
 */
export function useFetchProducts(
  options: UseStorefrontMethodOptions<any> = {}
) {
  const { fetchOptions, ...restOptions } = options;

  return useStorefrontMethod("getProducts", {
    fetchOptions: {
      includeTotalCount: true,
      ...(fetchOptions as FetchOptions),
    },
    ...restOptions,
  });
}

export const useProductsCount = (
  options: UseStorefrontMethodOptions<any> = {}
) => {
  const [productsCount, setProductsCount] = useState<number>(0);
  const { data } = useFetchProducts(options);

  useEffect(() => {
    if (data?.totalItems !== undefined) {
      setProductsCount(data.totalItems);
    }
  }, [data?.totalItems]);

  return productsCount;
};

/**
 * Fetch a single product by its ID
 */
export function useFetchProduct(
  idToFetch?: string,
  options: UseStorefrontMethodOptions<any> = {}
) {
  if (idToFetch) {
    options.fetchOptions = idToFetch;
    options.autoFetch = true;
  }

  return useStorefrontMethod("getProduct", { autoFetch: false, ...options });
}
