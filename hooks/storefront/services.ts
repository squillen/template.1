import { useEffect, useState } from "react";
import {
  FetchOptions,
  useStorefrontMethod,
  UseStorefrontMethodOptions,
} from "@/context/storefront-context";
import { useFetchProduct } from "./products";
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
      filter: `type:SERVICE`,
      ...(fetchOptions as FetchOptions),
    },
    ...restOptions,
  });

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

export const useFetchService = useFetchProduct;
