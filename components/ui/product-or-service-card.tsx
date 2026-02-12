"use client"

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ProductOrServiceCardContent } from "./product-or-service-card-content";
import { Product } from "@/app/types/requests/storefront";


interface ProductOrServiceCardProps {
  readonly item: Product;
  readonly productIndex?: number;
  readonly type: "products" | "services";
  readonly showFooter?: boolean;
}

export function ProductOrServiceCard({
  item,
  productIndex = 1,
  type,
  showFooter = false,
}: ProductOrServiceCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow relative flex flex-col h-full min-h-[400px]">
      {/* <div className="p-4 pt-0 mb-15 flex-grow"> */}
        <ProductOrServiceCardContent
          item={item}
          productIndex={productIndex}
          type={type}
        />
      {/* </div> */}
      {/* {showFooter && (
        <div className="p-4 pt-0 absolute bottom-4 left-0 right-0">
          <Link
            className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-primary hover:text-primary-foreground bg-primary/10 hover:bg-primary rounded-lg transition-all duration-200 hover:gap-2.5 hover:shadow-md hover:scale-105 active:scale-100"
            href={`/${type}/${item.id}`}
          >
            See more
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
      )} */}
    </Card>
  );
}
