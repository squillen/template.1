"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  category: string
  featured?: boolean
}

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Premium Service Package",
    description: "Our most comprehensive service offering with premium features and dedicated support.",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 127,
    category: "Premium",
    featured: true,
  },
  {
    id: "2",
    name: "Standard Service Package",
    description: "Perfect for growing businesses with essential features and reliable support.",
    price: 199,
    rating: 4.7,
    reviews: 89,
    category: "Standard",
  },
  {
    id: "3",
    name: "Basic Service Package",
    description: "Great starting point for small businesses with core features included.",
    price: 99,
    rating: 4.5,
    reviews: 156,
    category: "Basic",
  },
  {
    id: "4",
    name: "Enterprise Solution",
    description: "Custom enterprise solution with advanced features and priority support.",
    price: 599,
    rating: 5.0,
    reviews: 43,
    category: "Enterprise",
    featured: true,
  },
  {
    id: "5",
    name: "Consultation Service",
    description: "One-on-one consultation to help you choose the right solution for your needs.",
    price: 149,
    rating: 4.8,
    reviews: 92,
    category: "Consultation",
  },
  {
    id: "6",
    name: "Add-on Package",
    description: "Additional features and services to enhance your existing package.",
    price: 79,
    rating: 4.6,
    reviews: 67,
    category: "Add-on",
  },
]

export function ProductsSection({ onAddToCart }: ProductsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(sampleProducts.map((p) => p.category)))]

  const filteredProducts =
    selectedCategory === "All" ? sampleProducts : sampleProducts.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Products & Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of carefully crafted solutions designed to meet your specific needs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="relative group hover:shadow-lg transition-shadow">
              {product.featured && (
                <Badge className="absolute -top-2 -right-2 z-10 bg-secondary text-secondary-foreground">Featured</Badge>
              )}

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => onAddToCart(product)}
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
