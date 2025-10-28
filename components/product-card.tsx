"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  productId: string
}

export function ProductCard({ productId }: ProductCardProps) {
  // Create unique PayPal button ID for each product
  const paypalButtonId = `paypal-add-to-cart-${productId}`
  const [isProduction, setIsProduction] = useState(true);

  useEffect(() => {
    setIsProduction(
      window.location.hostname.endsWith('.vercel.app')
    );
  }, []);

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow">
      <CardFooter className="p-4 pt-0">
        {/* PayPal Add to Cart Button in production, custom button in development */}
        {isProduction ? (
          <div id={paypalButtonId} className="w-full"></div>
        ) : (
          <Button
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
            onClick={() => console.log(`Add to cart: ${productId}`)}
          >
            Add to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
