import { useEffect, useState } from "react";
import {
  FetchOptions,
  useStorefrontMethod,
  UseStorefrontMethodOptions,
} from "@/context/storefront-context";
import { filterInventoryResponseFor, useFetchProduct } from "./products";
import { useIsStageEnvironment } from "../utils";
import { mockServicesData } from "@/lib/services-data";
import type { StorefrontGetProductsResponse } from "@/app/types/requests/storefront";

/**
 * Fetch all storefront services
 */
export function useFetchServices(
  options: UseStorefrontMethodOptions<any> = {}
) {
  const { fetchOptions, ...restOptions } = options;

  let result = useStorefrontMethod<StorefrontGetProductsResponse>("getProducts", {
    fetchOptions: {
      includeTotalCount: true,
      // filter: `type:SERVICE`,
      ...(fetchOptions as FetchOptions),
    },
    ...restOptions,
  });

  if (result.data && result.data.products) {
    const products = filterInventoryResponseFor('services', result.data.products);
    result = {
      data: { 
        products: products.map(p => ({...p, type: "SERVICES"})),
        totalItems: result.data.totalItems,
        totalPages: result.data.totalPages ?? 1
      },
      isLoading: false,
      error: null,
    } as typeof result;
  }

  if (useIsStageEnvironment()) {
    result = {
      data: {
        products: mockServicesData,
        totalItems: mockServicesData.length,
      },
      isLoading: false,
      error: null,
    } as typeof result;
  }

  return result

}

export const useServicesCount = (
  options: UseStorefrontMethodOptions<any> = {}
) => {
  const { data } = useFetchServices(options);

  return data?.totalItems ?? 0;
};

export { useFetchProduct as useFetchService } from "./products";
