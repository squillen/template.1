import { useGetCart, useViewCart } from "@/hooks/storefront/cart";
import { cartEvents } from "@/lib/events/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

/**
 * Displays a cart button with the number of items in the cart.
 */
export default function CartButton() {
  const { data: cartLink, makeRequest: refetchCartLink } = useViewCart();
  const { data, makeRequest: refetchCart } = useGetCart();
  const { items = [] } = data || {};
  const totalItems = items.length;
  const cartCount = useRef(totalItems);

  useEffect(() => {
    const unsubscribe = cartEvents.subscribe(() => {
      console.log("Cart updated, refetching...");
      refetchCart?.();
      refetchCartLink?.();
    });

    // Refetch cart when window regains focus
    const handleFocus = () => {
      console.log("Window focused, refetching cart...");
      refetchCart?.();
      refetchCartLink?.();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      unsubscribe();
      window.removeEventListener("focus", handleFocus);
    };
  }, [refetchCart, refetchCartLink]);

  useEffect(() => {
    if (cartCount.current < totalItems) {
      toast.success("Added to cart!");
    } else if (cartCount.current !== 0) {
      toast.success("Cart updated!");
    }
    cartCount.current = totalItems;
  }, [totalItems]);

  const shoppingCart = (
    <>
      <ShoppingCart className="w-6 h-6 text-foreground hover:text-secondary transition-colors" />
      {totalItems >= 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </>
  );

  return typeof cartLink !== "string" ? (
    <button
      className="relative flex-shrink-0 ml-auto bg-transparent border-none p-0 cursor-pointer"
      onClick={() => {
        if (!totalItems) {
          toast.info("Your cart is empty");
        }
      }}
    >
      {shoppingCart}
    </button>
  ) : (
    <Link
      href={cartLink}
      target="_blank"
      className="relative flex-shrink-0 ml-auto cursor-pointer"
    >
      {shoppingCart}
    </Link>
  );
}
