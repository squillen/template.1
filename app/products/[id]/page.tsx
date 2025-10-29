"use client"

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "react-day-picker";
import { ProductionProductOrServiceCard } from "@/components/ui/production-product-or-service-card";
import { PreviewProductOrServiceCard } from "@/components/ui/preview-product-or-service-card";

export default function ProductPage() {
  const params = useParams();
  const buttonId = params.id as string;
  const paypalButtonId = `paypal-add-to-cart-${buttonId}`;
  const [isProduction, setIsProduction] = useState(true);

  useEffect(() => {
    setIsProduction(window.location.hostname.endsWith(".vercel.app"));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="flex h-screen w-screen items-center justify-center p-8">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow relative max-w-md w-full">
            {/* PayPal Add to Cart Button in production, custom button in development */}
            {isProduction ? (
              <ProductionProductOrServiceCard
                paypalButtonId={paypalButtonId}
                buttonId={buttonId}
                type={"products"}
              />
            ) : (
              <div className="p-4 pt-0">
                <PreviewProductOrServiceCard
                  buttonId={buttonId}
                  productIndex={0}
                  type="products"
                />
              </div>
            )}
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
