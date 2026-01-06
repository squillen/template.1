import {
  FetchOptions,
  useStorefrontMethod,
  type UseStorefrontMethodOptions,
} from "@/context/storefront-context";
import { useIsStageEnvironment } from "../utils";
import { mockProductsData } from "@/lib/products-data";
import { mockServicesData } from "@/lib/services-data";
import {
  StorefrontGetProductResponse,
  StorefrontGetProductsResponse,
} from "@/app/types/requests/storefront";

/**
 * Fetch all storefront products
 */
export function useFetchProducts(
  options: UseStorefrontMethodOptions<any> = {}
) {
  const { fetchOptions, ...restOptions } = options;

  let result = useStorefrontMethod<StorefrontGetProductsResponse>(
    "getProducts",
    {
      fetchOptions: {
        includeTotalCount: true,
        ...(fetchOptions as FetchOptions),
      },
      ...restOptions,
    }
  );

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
  const { data } = useFetchProducts(options);

  return data?.totalItems ?? 0;
};

/**
 * Fetch a single product by its ID
 */
export function useFetchProduct(
  idToFetch?: string,
  options: UseStorefrontMethodOptions<any> = {}
) {
  const modifiedOptions = { ...options };

  if (idToFetch) {
    modifiedOptions.fetchOptions = idToFetch;
    modifiedOptions.autoFetch = true;
  }

  let result = useStorefrontMethod<StorefrontGetProductResponse>("getProduct", {
    autoFetch: false,
    ...modifiedOptions,
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
