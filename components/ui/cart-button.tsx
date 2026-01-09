import { useGetCart, useViewCart } from "@/hooks/storefront/cart";
import { useIsStageEnvironment } from "@/hooks/utils";
import { cartEvents } from "@/lib/events/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

/**
 * Displays a cart button with the number of items in the cart.
 */
export default function CartButton() {
  const isStageEnv = useIsStageEnvironment();
  const [stageCartCount, setStageCartCount] = useState(0);
  const { data: cartLink, makeRequest: refetchCartLink } = useViewCart();
  const { data, makeRequest: refetchCart } = useGetCart();
  const { items = [] } = data || {};
  const totalItems = items.length || stageCartCount;
  const cartCount = useRef(totalItems);

  useEffect(() => {
    const refetchCartData = () => {
      if (isStageEnv) {
        setStageCartCount((prevCount) => prevCount + 1);
      } else {
        refetchCart?.();
        refetchCartLink?.();
      }
    };

    const unsubscribe = cartEvents.subscribe(refetchCartData);

    // Refetch cart when window regains focus
    const handleFocus = () => {
      if (!isStageEnv) {
        refetchCartData();
      }
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      unsubscribe();
      window.removeEventListener("focus", handleFocus);
    };
  }, [isStageEnv, refetchCart, refetchCartLink]);

  useEffect(() => {
    if (cartCount.current > totalItems && totalItems !== 0) {
      toast.success("Cart updated!");
    }

    cartCount.current = totalItems;
  }, [totalItems]);

  const handleCartClick = () => {
    if (isStageEnv) {
      toast.info(
        "Cart functionality is only available when your site is live."
      );
    } else if (!totalItems) {
      toast.info("Your cart is empty");
    }
  };

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

  return typeof cartLink === "string" ? (
    <Link
      href={cartLink}
      target="_blank"
      className="relative flex-shrink-0 ml-auto cursor-pointer"
    >
      {shoppingCart}
    </Link>
  ) : (
    <button
      className="relative flex-shrink-0 ml-auto bg-transparent border-none p-0 cursor-pointer"
      onClick={handleCartClick}
    >
      {shoppingCart}
    </button>
  );
}
