"use client"

import { Card, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductionProductCard } from "./ui/production-product-card";
import { PreviewProductCard } from "./ui/preview-product-card";

interface ProductCardProps {
  productId: string;
  productIndex: number;
}

export function ProductCard({ productId, productIndex }: ProductCardProps) {
  const paypalButtonId = `paypal-add-to-cart-${productId}`;
  const [isProduction, setIsProduction] = useState(true);

  useEffect(() => {
    setIsProduction(window.location.hostname.endsWith(".vercel.app"));
  }, []);

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow relative">
      {/* PayPal Add to Cart Button in production, custom button in development */}
      {isProduction ? (
        <ProductionProductCard
          paypalButtonId={paypalButtonId}
          productId={productId}
        />
      ) : (
        <div className="p-4 pt-0">
          <PreviewProductCard
            productId={productId}
            productIndex={productIndex}
          />
        </div>
      )}
      <div className="p-4 pt-0 absolute bottom-px">
        <Link
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:underline"
          href={`/products/${productId}`}
        >
          See more
          <svg
            className="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
}
