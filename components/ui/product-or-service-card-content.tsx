"use client";

import Image from "next/image";
import { useState } from "react";
import { Item } from "./product-or-service-card";
import AddToCartButton from "./add-to-cart-button";

export function ProductOrServiceCardContent({
  item,
  productIndex,
  type = "products",
}: {
  item: Item;
  productIndex: number;
  type?: "products" | "services";
}) {
  // todo move this to its own component so that only it will use state
  const [quantity, setQuantity] = useState(1);

  const variant = item?.variants?.[0] || {};
  const name = variant.name || item.name;
  const description = variant.description || item.description;
  const price = variant.prices?.[0]?.value || 0;
  const image = (item?.image || variant?.image)?.default;
  const itemLabel = type === "services" ? "Service" : "Product";

  return (
    <div className="w-full space-y-3">
      <div className="bg-card border border-border rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
        <div className="flex items-start justify-center space-x-2">
          <div className="w-full">
            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg ring-1 ring-border/50">
              <Image
                src={image || "/placeholder.svg"}
                alt={name || `${itemLabel} ${variant.id}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2 text-lg">
              {name || `${itemLabel} ${productIndex + 1}`}
            </h3>
            {price && (
              <p className="text-xl font-bold text-secondary mb-3">
                ${Number(price || 0)?.toFixed(2)}
              </p>
            )}
            {description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
            {variant?.quantity && (
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Available: {variant.quantity}
              </p>
            )}
            {variant?.duration && (
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Lead time: {variant.duration}
              </p>
            )}
            {variant?.features && variant.features.length > 0 && (
              <ul className="text-xs text-muted-foreground mb-3 space-y-1">
                {variant.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <AddToCartButton
        quantity={quantity}
        productId={variant.id}
        variantId={variant.id}
        type={type}
      />
    </div>
  );
}
