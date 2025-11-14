export interface ProductData {
  id: string
  name: string
  description: string
  image: string
  color: string
  quantity: number
  price?: number
  category: string
}

// THIS WILL CHANGE BASED ON THE UPLOADED PRODUCT INFORMATION
export const productsData: Record<string, ProductData> = {
  "7E9TJFN7KJTYW": {
    id: "7E9TJFN7KJTYW",
    name: "Crème Brûlée",
    description:
      "Classic French dessert with a rich vanilla custard base and a perfectly caramelized sugar crust. A timeless indulgence.",
    image: "/products/creme-brulee.jpg",
    color: "golden_brown",
    quantity: 4,
    price: 12.99,
    category: "Desserts",
  },
  MB38UZWEWT6HS: {
    id: "MB38UZWEWT6HS",
    name: "Brownies",
    description: "Decadent fudgy brownies made with premium dark chocolate. Rich, moist, and utterly irresistible.",
    image: "/products/brownies.jpg",
    color: "dark_brown",
    quantity: 6,
    price: 8.99,
    category: "Brownies",
  },
  RSNZTN5ZLYFG6: {
    id: "RSNZTN5ZLYFG6",
    name: "Chocolate Cake",
    description:
      "Luxurious multi-layer chocolate cake with silky chocolate ganache. A chocolate lover's dream come true.",
    image: "/products/chocolate-cake.jpg",
    color: "brown",
    quantity: 1,
    price: 45.99,
    category: "Cakes",
  },
  WYUTA3UWHGN88: {
    id: "WYUTA3UWHGN88",
    name: "Chocolate Mousse",
    description:
      "Light and airy chocolate mousse with a perfect balance of rich chocolate and delicate cream. Elegantly presented.",
    image: "/products/chocolate-mousse.jpg",
    color: "brown_and_white",
    quantity: 3,
    price: 14.99,
    category: "Desserts",
  }
}

export function getProductData(buttonId: string): ProductData | undefined {
  return productsData[buttonId]
}
