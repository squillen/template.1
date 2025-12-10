import {
  FetchOptions,
  useStorefrontMethod,
  type UseStorefrontMethodOptions,
} from "@/context/storefront-context";
import { useEffect, useState } from "react";
import { useIsStageEnvironment } from "../utils";
import { mockProductsData } from "@/lib/products-data";
import { mockServicesData } from "@/lib/services-data";

/**
 * Fetch all storefront products
 */
export function useFetchProducts(
  options: UseStorefrontMethodOptions<any> = {}
) {
  const { fetchOptions, ...restOptions } = options;

  let result = useStorefrontMethod("getProducts", {
    fetchOptions: {
      includeTotalCount: true,
      ...(fetchOptions as FetchOptions),
    },
    ...restOptions,
  });

  if (useIsStageEnvironment()) {
    result = {
      data: { products: mockProductsData, totalItems: mockProductsData.length },
      isLoading: false,
      error: null,
    } as typeof result;
  }

  return result;
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

  let result = useStorefrontMethod("getProduct", {
    autoFetch: false,
    ...options,
  });

  if (useIsStageEnvironment()) {
    result = {
      data:
        [...mockProductsData, ...mockServicesData].find(
          (product) => product.id === idToFetch
        ) || null,
      isLoading: false,
      error: null,
    } as typeof result;
  }

  return result;
}
