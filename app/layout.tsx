import "./globals.css";
import type { Metadata } from "next";
import { PayPalScripts } from "@/components/paypal-scripts";
import { Header } from "@/components/header";
import { BackButton } from "@/components/ui/back-button";
import { Footer } from "@/components/footer";
import { storeConfig } from "@/lib/config";
import { StorefrontProvider } from "../context/storefront-context";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "__", // Replace with business name
  description: "___", // Replace with business description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { merchantId, storefrontToken, salesChannelId } =
    storeConfig.storefront;

  return (
    <html lang="en">
      <body>
        <PayPalScripts />
        <div className="min-h-screen">
          <StorefrontProvider
            config={{
              merchantId,
              storefrontToken,
              salesChannelId,
            }}
          >
            <Header />
            <main className="p-[2rem]">
              <BackButton />
              {children}
            </main>
            <Footer />
          </StorefrontProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
