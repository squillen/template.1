// Product interface
export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category?: string
  inStock?: boolean
  sku?: string
}


export const storeConfig = {
  name: "Your Company Name",
  tagline: "Your Company Tagline",
  description: "Your company description.",
  currency: "USD",
  currencySymbol: "$",
  storefront: {
    merchantId: process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID || "",
    storefrontToken: process.env.NEXT_PUBLIC_PAYPAL_STOREFRONT_TOKEN || "",
    salesChannelId: process.env.NEXT_PUBLIC_PAYPAL_SALES_CHANNEL_ID || "",
  },
};

