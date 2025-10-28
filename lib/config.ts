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


// PRODUCT BUTTON ID CONFIGURATION
const defaultProductButtonIds = [
  "A9ZZ7Y9AENR76", // Product 3
  "JP46X5AZGAB7A", // Product 4
  "RQNZ5GRDPRUY2", // Product 5
  "YYZSAERVFLBDC", // Product 6
  "PPFCRBR5W59RG", // Product 7
  "8H2XH6LR4HV4C", // Product 8
];

const dynamicProductButtonIds =
  process.env.NEXT_PUBLIC_PAYPAL_BUTTON_IDS?.split(",").map((id) => id.trim());

export const productButtonIds =
  dynamicProductButtonIds || defaultProductButtonIds;

// SERVICE BUTTON ID CONFIGURATION
const defaultServiceButtonIds = [
  "HBV9P6CL2FPJ8", // Product 1
  "QF4JAPCKSZ972", // Product 2
];
 const dynamicServiceButtonIds =
  process.env.NEXT_PUBLIC_PAYPAL_SERVICE_BUTTON_IDS?.split(",").map((id) =>
    id.trim()
  );

export const serviceButtonIds = dynamicServiceButtonIds || defaultServiceButtonIds;

// Store configuration
export const storeConfig = {
  name: "Your Company Name",
  tagline: "Your Company Tagline",
  description: "Your company description.",
  currency: "USD",
  currencySymbol: "$",
  paypal: {
    merchantId:
      process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID &&
      process.env.NEXT_PUBLIC_PAYPAL_BUTTON_IDS
        ? process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID
        : "PRBQR9MAHMDL6",
    productButtonIds,
    serviceButtonIds,
  },
};
