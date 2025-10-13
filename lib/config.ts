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

// Store configuration
export const storeConfig = {
  name: "Pet Supplies Co.",
  tagline: "High Quality Pet Supplies",
  description:
    "Your one-stop shop for all your pet needs. From food to toys, we have everything to keep your furry friends happy and healthy.",
  logo: "/placeholder-logo.svg",
  currency: "USD",
  currencySymbol: "$",
  paypal: {
    merchantId: process.env.PAYPAL_MERCHANT_ID,
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    environment:
      (process.env.NEXT_PUBLIC_PAYPAL_ENVIRONMENT as
        | "sandbox"
        | "production") || "sandbox",
    buttonIds: {
      1: "CDM23NV2A24BE",
      2: "GPCAKRAAPJ62Q",
      3: "DTFTJ3STWNJTL",
      4: "MC9H3C2WS7VV4",
      5: "V95LVXVUFMJLS",
      6: "JANQEGJ64FMA8",
      7: "D297EUU3DA6G6",
      8: "CBQRKBJQ9EJJS",
      9: "UEWJUA4MBLNUC",
      10: "GH3AQEQWPQ9MN",
    },
  },
};

// Default products data
export const products: Product[] = [
  {
    id: 1,
    name: "dog leash",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Strong and durable nylon dog leash with comfortable grip handle",
    category: "Accessories",
    inStock: true,
    sku: "TOM-001",
  },
  {
    id: 2,
    name: "dog bed",
    price: 49.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Soft and comfortable orthopedic dog bed with washable cover",
    category: "Bedding",
    inStock: true,
    sku: "CAR-002",
  },
  {
    id: 3,
    name: "cat halloween string toy",
    price: 6.99,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Fun Halloween-themed string toy with feathers and bells for cats",
    category: "Toys",
    inStock: true,
    sku: "SPI-003",
  },
  {
    id: 4,
    name: "cat litter box",
    price: 34.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Large covered litter box with odor control and easy cleaning",
    category: "Litter & Cleanup",
    inStock: true,
    sku: "PEP-004",
  },
  {
    id: 5,
    name: "cat nip",
    price: 8.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Premium organic catnip to stimulate and entertain your cat",
    category: "Treats & Supplements",
    inStock: true,
    sku: "BRO-005",
  },
  {
    id: 6,
    name: "dog food",
    price: 42.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "High-quality dry dog food with real chicken and vegetables",
    category: "Food",
    inStock: true,
    sku: "SWE-006",
  },
  {
    id: 7,
    name: "kong dog toy",
    price: 12.99,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Durable rubber Kong toy for interactive play and treat dispensing",
    category: "Toys",
    inStock: true,
    sku: "LET-007",
  },
  {
    id: 8,
    name: "brush",
    price: 18.99,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Professional pet grooming brush for reducing shedding and matting",
    category: "Grooming",
    inStock: true,
    sku: "CUC-008",
  },
  {
    id: 9,
    name: "fish aquarium",
    price: 89.99,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Complete 10-gallon fish aquarium starter kit with filter and heater",
    category: "Aquarium",
    inStock: true,
    sku: "AQU-009",
  },
  {
    id: 10,
    name: "hamster ball",
    price: 14.99,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Clear exercise ball for hamsters and small pets to explore safely",
    category: "Small Pet Accessories",
    inStock: true,
    sku: "HAM-010",
  },
];
