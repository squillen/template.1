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
  return useStorefrontMethod("getCart", { autoFetch: true, ...options });
}

/**
 * Fetch all storefront products
 */
export function useViewCart(
  options: UseStorefrontMethodOptions<any> = {}
) {
  return useStorefrontMethod("viewCart", { autoFetch: false, ...options });
}

/**
 * Fetch all storefront products
 */
export function useAddToCart(
  options: UseStorefrontMethodOptions<any> = {}
) {
  return useStorefrontMethod("addToCart", { autoFetch: false, ...options });
}
