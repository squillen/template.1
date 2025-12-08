import { Item } from "@/components/ui/product-or-service-card";

export interface ProductData {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  quantity: number;
  price?: number;
  category: string;
}

// THIS WILL CHANGE BASED ON THE UPLOADED PRODUCT INFORMATION
export const mockProductsData: Item[] = [
  {
    id: "7E9TJFN7KJTYW",
    name: "Crème Brûlée",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description:
      "Classic French dessert with a rich vanilla custard base and a perfectly caramelized sugar crust. A timeless indulgence.",
    image: { default: "/products/creme-brulee.jpg" },
    variants: [
      {
        id: "7E9TJFN7KJTYW",
        name: "Crème Brûlée",
        description:
          "Classic French dessert with a rich vanilla custard base and a perfectly caramelized sugar crust. A timeless indulgence.",
        prices: [
          {
            currency_code: "USD",
            value: "12.99",
          },
        ],
        image: { default: "/products/creme-brulee.jpg" },
        images: [{ default: "/products/creme-brulee.jpg" }],
      },
    ],
  },
  {
    id: "MB38UZWEWT6HS",
    name: "Brownies",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description:
      "Decadent fudgy brownies made with premium dark chocolate. Rich, moist, and utterly irresistible.",
    image: { default: "/products/brownies.jpg" },
    variants: [
      {
        id: "MB38UZWEWT6HS",
        name: "Brownies",
        description:
          "Decadent fudgy brownies made with premium dark chocolate. Rich, moist, and utterly irresistible.",
        prices: [
          {
            currency_code: "USD",
            value: "8.99",
          },
        ],
        image: { default: "/products/brownies.jpg" },
        images: [{ default: "/products/brownies.jpg" }],
      },
    ],
  },
  {
    id: "RSNZTN5ZLYFG6",
    name: "Chocolate Cake",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description:
      "Luxurious multi-layer chocolate cake with silky chocolate ganache. A chocolate lover's dream come true.",
    image: { default: "/products/chocolate-cake.jpg" },
    variants: [
      {
        id: "RSNZTN5ZLYFG6",
        name: "Chocolate Cake",
        description:
          "Luxurious multi-layer chocolate cake with silky chocolate ganache. A chocolate lover's dream come true.",
        prices: [
          {
            currency_code: "USD",
            value: "29.99",
          },
        ],
        image: { default: "/products/chocolate-cake.jpg" },
        images: [{ default: "/products/chocolate-cake.jpg" }],
      },
    ],
  },
  {
    id: "WYUTA3UWHGN88",
    name: "Chocolate Mousse",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description:
      "Light and airy chocolate mousse with a perfect balance of rich chocolate and delicate cream. Elegantly presented.",
    image: { default: "/products/chocolate-mousse.jpg" },
    variants: [
      {
        id: "WYUTA3UWHGN88",
        name: "Chocolate Mousse",
        description:
          "Light and airy chocolate mousse with a perfect balance of rich chocolate and delicate cream. Elegantly presented.",
        prices: [
          {
            currency_code: "USD",
            value: "9.99",
          },
        ],
        image: { default: "/products/chocolate-mousse.jpg" },
        images: [{ default: "/products/chocolate-mousse.jpg" }],
      },
    ],
  },
];
