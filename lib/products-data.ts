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
  },
  EYB6C2PGKL448: {
    id: "EYB6C2PGKL448",
    name: "Chocolate Slice",
    description:
      "Individual chocolate cake slice with layers of moist cake and rich frosting. Perfect for a personal treat.",
    image: "/products/chocolate-slice.jpg",
    color: "dark_brown",
    quantity: 1,
    price: 9.99,
    category: "Slices",
  },
  SYFWNAR6JAPK6: {
    id: "SYFWNAR6JAPK6",
    name: "Peanut Butter Mousse",
    description:
      "Creamy peanut butter mousse with a smooth texture and rich flavor. A delightful twist on a classic favorite.",
    image: "/products/peanut-butter-mousse.jpg",
    color: "light_brown",
    quantity: 1,
    price: 13.99,
    category: "Desserts",
  },
  TWWHS4N6SCSUJ: {
    id: "TWWHS4N6SCSUJ",
    name: "Chocolate Truffles",
    description: "Handcrafted chocolate truffles with a velvety ganache center. Each piece is a work of art.",
    image: "/products/chocolate-truffles.jpg",
    color: "dark_brown",
    quantity: 8,
    price: 24.99,
    category: "Truffles",
  },
  "24B642WVFKELY": {
    id: "24B642WVFKELY",
    name: "Ice Cream",
    description: "Artisan ice cream made with premium ingredients. Smooth, creamy, and full of flavor.",
    image: "/products/ice-cream.jpg",
    color: "light_brown",
    quantity: 2,
    price: 7.99,
    category: "Frozen Desserts",
  },
  T28CPS7LK39XS: {
    id: "T28CPS7LK39XS",
    name: "Sponge Cake",
    description:
      "Light and fluffy sponge cake with a delicate texture. Perfect as a base for custom creations or enjoyed on its own.",
    image: "/products/sponge-cake.jpg",
    color: "golden_yellow",
    quantity: 1,
    price: 32.99,
    category: "Cakes",
  },
}

export function getProductData(buttonId: string): ProductData | undefined {
  return productsData[buttonId]
}
