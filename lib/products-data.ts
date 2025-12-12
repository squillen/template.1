import { Product } from "@/app/types/requests/storefront";

// THIS WILL CHANGE BASED ON THE UPLOADED PRODUCT INFORMATION
export const mockProductsData: Product[] = [
  {
    id: "7E9TJFN7KJTYW",
    name: "Product 1",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 1 description.",
    image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
    variants: [
      {
        id: "7E9TJFN7KJTYW",
        name: "Product 1",
        description: "Product 1 description.",
        prices: [
          {
            currency_code: "USD",
            value: "12.99",
          },
        ],
        image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
        images: [{ default: "/placeholder.jpg" }], // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
      },
    ],
  },
  {
    id: "MB38UZWEWT6HS",
    name: "Product 2",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 2 description.",
    image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
    variants: [
      {
        id: "MB38UZWEWT6HS",
        name: "Product 2",
        description: "Product 2 description.",
        prices: [
          {
            currency_code: "USD",
            value: "8.99",
          },
        ],
        image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
        images: [{ default: "/placeholder.jpg" }], // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
      },
    ],
  },
  {
    id: "RSNZTN5ZLYFG6",
    name: "Product 3",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 3 description.",
    image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
    variants: [
      {
        id: "RSNZTN5ZLYFG6",
        name: "Product 3",
        description: "Product 3 description.",
        prices: [
          {
            currency_code: "USD",
            value: "29.99",
          },
        ],
        image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
        images: [{ default: "/placeholder.jpg" }], // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
      },
    ],
  },
  {
    id: "WYUTA3UWHGN88",
    name: "Product 4",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 4 description.",
    image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
    variants: [
      {
        id: "WYUTA3UWHGN88",
        name: "Product 4",
        description: "Product 4 description.",
        prices: [
          {
            currency_code: "USD",
            value: "9.99",
          },
        ],
        image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
        images: [{ default: "/placeholder.jpg" }], // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
      },
    ],
  },
];
