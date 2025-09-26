"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/config"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // Create unique PayPal button ID for each product
  const paypalButtonId = `paypal-add-to-cart-${product.id}`

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative mb-4 overflow-hidden rounded-md cursor-pointer">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </Link>
        <h3 className="font-semibold text-card-foreground mb-2">
          <Link href={`/products/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 space-y-2">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        {/* PayPal Add to Cart Button - Unique ID for each product */}
        <div id={paypalButtonId} className="w-full"></div>
      </CardFooter>
    </Card>
  )
}
