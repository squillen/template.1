"use client"

import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "react-day-picker";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const paypalButtonId = `paypal-add-to-cart-${productId}`;
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
            <CardFooter className="p-4 pt-0">
              {/* PayPal Add to Cart Button in production, custom button in development */}
              {isProduction ? (
                <div id={paypalButtonId} className="w-full"></div>
              ) : (
                <div className="w-full space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-blue-500 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-blue-700 font-medium">
                          Development Mode
                        </p>
                        <p className="text-xs text-blue-600">
                          More details will be available once your site is
                          published!
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
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
