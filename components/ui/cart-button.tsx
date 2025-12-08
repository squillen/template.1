import { useGetCart, useViewCart } from "@/hooks/storefront/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

/**
 * Displays a cart button with the number of items in the cart.
 */
export default function CartButton() {
  const { data: cartLink } = useViewCart();
  const {
    data,
  } = useGetCart();
  const { items = [] } = data || {};
  const totalItems = items.length;

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
    <div
      className="relative flex-shrink-0 ml-auto"
      onClick={() => {
        if (!totalItems) {
          toast.info("Your cart is empty");
          return;
        }
      }}
    >
      {shoppingCart}
    </div>
  ) : (
    <Link
      href={cartLink}
      target="_blank"
      className="relative flex-shrink-0 ml-auto"
      onClick={() => {}}
    >
      {shoppingCart}
    </Link>
  );
}
