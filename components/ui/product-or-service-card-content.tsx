"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "./add-to-cart-button";
import { Product } from "@/app/types/requests/storefront";
import Link from "next/link";
import BookAppointmentButton from "./book-appointment-button";

export function ProductOrServiceCardContent({
  item,
  productIndex,
  type = "products",
}: {
  readonly item: Product;
  readonly productIndex: number;
  readonly type?: "products" | "services";
}) {
  // todo move this to its own component so that only it will use state
  const [quantity, setQuantity] = useState(1);
  const variant = item?.variants?.[0] || {};
  const name = variant.name || item.name;
  const description = variant.description || item.description;
  const price = variant.prices?.[0]?.value || 0;
  const image = (item?.image || variant?.image)?.default;
  const isProduct = type === "products";
  const itemLabel = isProduct ? "Product" : "Service";
  const metadata = item?.metadata ?? null;

  return (
    <div className="flex flex-col w-full space-y-3 p-4">
      <Link href={`/${type}/${item.id}`}>
        <div className="transition-all min-h-[450px] cursor-pointer">
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
              {/* {variant?.quantity && (
                <p className="text-xs text-muted-foreground mb-2 font-medium">
                  Available: {variant.quantity}
                </p>
              )} */}
              {metadata?.duration && (
                <p className="text-xs text-muted-foreground mb-2 font-medium">
                  Session time: {metadata.duration} minutes
                </p>
              )}
              {/* {variant?.features && variant.features.length > 0 && (
                <ul className="text-xs text-muted-foreground mb-3 space-y-1">
                  {variant.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-secondary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )} */}
            </div>
          </div>
        </div>
      </Link>
      { isProduct
        ? <AddToCartButton
            quantity={quantity}
            productId={item.id}
            variantId={variant.id}
            type={type}
          />
        : <BookAppointmentButton
            productId={item.id}
            variantId={variant.id}
          />
      }
    </div>
  );
}
