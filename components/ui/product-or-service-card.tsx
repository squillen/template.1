"use client"

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ProductOrServiceCardContent } from "./product-or-service-card-content";
import { Product } from "@/app/types/requests/storefront";


interface ProductOrServiceCardProps {
  item: Product;
  productIndex?: number;
  type: "products" | "services";
  showFooter?: boolean;
}

export function ProductOrServiceCard({
  item,
  productIndex = 1,
  type,
  showFooter = true,
}: ProductOrServiceCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow relative">
      <div className="p-4 pt-0">
        <ProductOrServiceCardContent
          item={item}
          productIndex={productIndex}
          type={type}
        />
      </div>
      {showFooter && (
        <div className="p-4 pt-0 absolute bottom-px">
          <Link
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:underline"
            href={`/${type}/${item.id}`}
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
      )}
    </Card>
  );
}
