import {
  useStorefrontMethod,
  type UseStorefrontMethodOptions,
} from "@/context/storefront-context";

/**
 * Fetch all storefront products
 */
export function useGetCart(
  options: UseStorefrontMethodOptions<any> = {}
) {
  return useStorefrontMethod("getCart", { autoFetch: true, useCache: false, ...options });
}

/**
 * Fetch all storefront products
 */
export function useViewCart(
  options: UseStorefrontMethodOptions<any> = {}
) {
  return useStorefrontMethod("viewCart", { autoFetch: true, useCache: false, ...options });
}

/**
 * Fetch all storefront products
 */
export function useAddToCart(
  options: UseStorefrontMethodOptions<any> = {}
) {
  return useStorefrontMethod("addToCart", { autoFetch: false, useCache: false, ...options });
}
