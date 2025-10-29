"use client"

import { Card, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <CardFooter className="p-4 pt-0">
        {/* PayPal Add to Cart Button in production, custom button in development */}
        {isProduction ? (
          <div id={paypalButtonId} className="w-full"></div>
        ) : (
          <div className="w-full space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start justify-center space-x-2">
                <div>
                  <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
                    <Image
                      src={"/placeholder.svg"}
                      alt={`Product ${productId}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Product {productIndex + 1}
                  </h3>
                  <p className="text-xs text-blue-700 font-medium">
                    This section is in development mode
                  </p>
                  <p className="text-xs text-blue-600">
                    More information will show when published.
                  </p>
                </div>
              </div>
            </div>
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
              onClick={() => console.log(`Add to cart: ${productId}`)}
            >
              Add to cart
            </Button>
          </div>
        )}
      </CardFooter>
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
