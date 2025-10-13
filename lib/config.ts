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
  name: "VeggieFresh",
  tagline: "Fresh Organic Vegetables",
  description: "Farm-fresh, organic vegetables delivered straight to your door. Sustainably grown with care for you and the environment.",
  currency: "USD",
  currencySymbol: "$",
  paypal: {
    merchantId: "PRBQR9MAHMDL6", // Your PayPal merchant ID
    // Each product needs a unique PayPal button ID from PayPal Business account
    buttonIds: {
      1: "HBV9P6CL2FPJ8",  // Organic Tomatoes
      2: "QF4JAPCKSZ972",  // Fresh Carrots
      3: "A9ZZ7Y9AENR76",  // Organic Spinach
      4: "JP46X5AZGAB7A",  // Bell Peppers
      5: "RQNZ5GRDPRUY2",  // Organic Broccoli
      6: "YYZSAERVFLBDC",  // Sweet Potatoes
      7: "PPFCRBR5W59RG",  // Organic Lettuce
      8: "8H2XH6LR4HV4C",  // Fresh Cucumbers
    }
  }
}

// Default products data
export const products: Product[] = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 4.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Vine-ripened organic tomatoes, perfect for salads and cooking",
    category: "Vegetables",
    inStock: true,
    sku: "TOM-001"
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: 2.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Sweet, crunchy carrots packed with vitamins",
    category: "Vegetables",
    inStock: true,
    sku: "CAR-002"
  },
  {
    id: 3,
    name: "Organic Spinach",
    price: 3.49,
    image: "/placeholder.svg?height=200&width=200",
    description: "Nutrient-rich baby spinach leaves, perfect for salads",
    category: "Leafy Greens",
    inStock: true,
    sku: "SPI-003"
  },
  {
    id: 4,
    name: "Bell Peppers",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Crisp, colorful bell peppers in red, yellow, and green",
    category: "Vegetables",
    inStock: true,
    sku: "PEP-004"
  },
  {
    id: 5,
    name: "Organic Broccoli",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Fresh, organic broccoli crowns rich in vitamins",
    category: "Vegetables",
    inStock: true,
    sku: "BRO-005"
  },
  {
    id: 6,
    name: "Sweet Potatoes",
    price: 3.79,
    image: "/placeholder.svg?height=200&width=200",
    description: "Naturally sweet potatoes, perfect for roasting",
    category: "Root Vegetables",
    inStock: true,
    sku: "SWE-006"
  },
  {
    id: 7,
    name: "Organic Lettuce",
    price: 2.49,
    image: "/placeholder.svg?height=200&width=200",
    description: "Crisp romaine lettuce, ideal for salads and wraps",
    category: "Leafy Greens",
    inStock: true,
    sku: "LET-007"
  },
  {
    id: 8,
    name: "Fresh Cucumbers",
    price: 2.79,
    image: "/placeholder.svg?height=200&width=200",
    description: "Cool, refreshing cucumbers perfect for snacking",
    category: "Vegetables",
    inStock: true,
    sku: "CUC-008"
  },
]

