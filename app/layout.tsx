import "./globals.css";
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { CartProvider } from "@/context/cart-context";
import { PayPalScript } from "@/components/paypal-scripts";
import { PayPalInjectButtons } from "@/components/paypal-inject-buttons";
import { Header } from "@/components/header";
import { BackButton } from "@/components/ui/back-button";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "__", // Replace with business name
  description: "Created by PayPal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <PayPalScript />
        <div className="min-h-screen">
          <CartProvider>
            <Header />
            <main className="p-[2rem]">
              <BackButton />
              {children}
            </main>
            <Footer />
          </CartProvider>
        </div>
        <PayPalInjectButtons />
      </body>
    </html>
  );
}
