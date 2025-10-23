"use client"
import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Your Company Tagline
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your company description.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden mb-16 rounded-xl">
          <div className="w-3/4 mx-auto">
            <div className="relative h-96 md:h-150 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black/10 z-10 rounded-lg"></div>
              <Image
                src="/placeholder.jpg"
                alt="Company Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        <ProductGrid />
      </main>
    </div>
  );
}
