"use client";
import { useAddToCart } from "@/hooks/storefront/cart";
import { Button } from "./button";
import { useIsStageEnvironment } from "@/hooks/utils";
import { cartEvents } from "@/lib/events/cart";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

/**
 * A button component that adds a product or service to the cart. It uses the `useAddToCart` hook to perform the add to cart action and emits an event to update the cart button when an item is added. The button text changes based on the type of item being added (product or service).
 */
export default function AddToCartButton({
  quantity,
  productId,
  variantId,
  type,
}: {
  readonly quantity: number;
  readonly productId: string;
  readonly variantId: string;
  readonly type: "products" | "services";
}) {
  const isStage = useIsStageEnvironment();
  const { makeRequest: addToCart, isLoading } = useAddToCart();
  const handleAddToCart = async () => {
    try {
      await addToCart({
        quantity,
        productId,
        variantId,
      });

      cartEvents.emit();
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  const buttonText = type === "services" ? "Book Service" : "Add to Cart";

  return (
    <Button
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all h-11"
      onClick={
        isStage
          ? () =>
              console.log("Add to Cart clicked in development mode", productId)
          : handleAddToCart
      }
      disabled={isLoading}
    >
      {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : buttonText}
    </Button>
  );
}
