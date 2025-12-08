"use client";
import { useEffect, useState } from "react";
import { useAddToCart } from "@/hooks/storefront/cart";
import { Button } from "./button";

export default function AddToCartButton({
  quantity,
  productId,
  variantId,
  type,
}: {
  quantity: number;
  productId: string;
  variantId: string;
  type: "products" | "services";
}) {
  const [isStage, setIsStage] = useState(true);
  const { makeRequest: addToCart } = useAddToCart();

  useEffect(() => {
	const hostname = window.location.hostname;
    setIsStage(hostname.endsWith("vusercontent.net") || hostname === "localhost");
  }, []);

  return (
    <Button
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all h-11"
      onClick={
        isStage
          ? () =>
              console.log("Add to Cart clicked in development mode", productId)
          : () =>
              addToCart({
                quantity,
                productId,
                variantId,
              })
      }
    >
      {type === "services" ? "Book Service" : "Add to Cart"}
    </Button>
  );
}
