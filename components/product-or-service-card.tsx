"use client"

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductionProductOrServiceCard } from "./ui/production-product-or-service-card";
import { PreviewProductOrServiceCard } from "./ui/preview-product-or-service-card";

interface ProductOrServiceCardProps {
  buttonId: string;
  productIndex: number;
  type: 'products' | 'services'
}

export function ProductOrServiceCard({ buttonId, productIndex, type }: ProductOrServiceCardProps) {
  const paypalButtonId = `paypal-add-to-cart-${buttonId}`;
  const [isProduction, setIsProduction] = useState(true);

  useEffect(() => {
    setIsProduction(window.location.hostname.endsWith(".vercel.app"));
  }, []);

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow relative">
      {/* PayPal Add to Cart Button in production, custom button in development */}
      {isProduction ? (
        <ProductionProductOrServiceCard
          paypalButtonId={paypalButtonId}
          buttonId={buttonId}
          type={type}
        />
      ) : (
        <div className="p-4 pt-0">
          <PreviewProductOrServiceCard
            buttonId={buttonId}
            productIndex={productIndex}
            type={type}
          />
        </div>
      )}
      <div className="p-4 pt-0 absolute bottom-px">
        <Link
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:underline"
          href={`/${type}/${buttonId}`}
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
