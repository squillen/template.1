import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { CartProvider } from "@/context/cart-context";
import "./globals.css";
import { PayPalScript } from "@/components/paypal-scripts";
import { PayPalInjectButtons } from "@/components/paypal-inject-buttons";

export const metadata: Metadata = {
  title: "__", // Replace with business name
  description: "Created with PayPal and v0",
  generator: "v0.app",
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

        <CartProvider>{children}</CartProvider>

        <PayPalInjectButtons />
      </body>
    </html>
  );
}
