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

const defaultButtonIds = {
  1: "HBV9P6CL2FPJ8", // Product 1
  2: "QF4JAPCKSZ972", // Product 2
  3: "A9ZZ7Y9AENR76", // Product 3
  4: "JP46X5AZGAB7A", // Product 4
  5: "RQNZ5GRDPRUY2", // Product 5
  6: "YYZSAERVFLBDC", // Product 6
  7: "PPFCRBR5W59RG", // Product 7
  8: "8H2XH6LR4HV4C", // Product 8
};

export const dynamicButtonIds = process.env.NEXT_PUBLIC_PAYPAL_BUTTON_IDS?.split(
  ","
)?.reduce((acc: Record<number, string>, buttonId: string) => {
  acc[Object.keys(acc).length + 1] = buttonId;

  return acc;
}, {});

export const dynamicServiceButtonIds = process.env.NEXT_PUBLIC_PAYPAL_SERVICE_BUTTON_IDS?.split(
  ","
)?.reduce((acc: Record<number, string>, buttonId: string) => {
  acc[Object.keys(acc).length + 1] = buttonId;

  return acc;
}, {});

const buttonIds = dynamicButtonIds || defaultButtonIds;

console.log("buttonIds :::::::>> ", buttonIds);

// Store configuration
export const storeConfig = {
  name: "Your Company Name",
  tagline: "Your Company Tagline",
  description:
    "Your company description.",
  currency: "USD",
  currencySymbol: "$",
  paypal: {
    merchantId:
      process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID &&
      process.env.NEXT_PUBLIC_PAYPAL_BUTTON_IDS
        ? process.env.NEXT_PUBLIC_PAYPAL_MERCHANT_ID
        : "PRBQR9MAHMDL6",
    buttonIds,
    serviceButtonIds: dynamicServiceButtonIds
  },
};

// Default products data
export const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 1",
    category: "Category 1",
    inStock: true,
    sku: "TOM-001"
  },
  {
    id: 2,
    name: "Product 2",
    price: 2.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 2",
    category: "Category 1",
    inStock: true,
    sku: "CAR-002"
  },
  {
    id: 3,
    name: "Product 3",
    price: 3.49,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 3",
    category: "Category 2",
    inStock: true,
    sku: "SPI-003"
  },
  {
    id: 4,
    name: "Product 4",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 4",
    category: "Category 1",
    inStock: true,
    sku: "PEP-004"
  },
  {
    id: 5,
    name: "Product 5",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 5",
    category: "Category 1",
    inStock: true,
    sku: "BRO-005"
  },
  {
    id: 6,
    name: "Product 6",
    price: 3.79,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 6",
    category: "Category 3",
    inStock: true,
    sku: "SWE-006"
  },
  {
    id: 7,
    name: "Product 7",
    price: 2.49,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 7",
    category: "Category 2",
    inStock: true,
    sku: "LET-007"
  },
  {
    id: 8,
    name: "Product 8",
    price: 2.79,
    image: "/placeholder.svg?height=200&width=200",
    description: "Description for product 8",
    category: "Category 1",
    inStock: true,
    sku: "CUC-008"
  },
]
