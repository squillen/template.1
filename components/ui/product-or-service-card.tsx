"use client"

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ProductOrServiceCardContent } from "./product-or-service-card-content";

type Image = {
  default?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  alt?: string;
};
export type Item = {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
  labels?: string[];
  seo?: boolean;
  image?: Image;
  images?: Image[];
  variants: [
    {
      id: string;
      sku?: string;
      name: string;
      description: string;
      prices: [
        {
          currency_code: string;
          value: string;
        }
      ];
      options?: [
        {
          name: string;
          value: string;
        }
      ];
      image: Image;
      images: Image[];
    }
  ];
};
interface ProductOrServiceCardProps {
  item: Item;
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
