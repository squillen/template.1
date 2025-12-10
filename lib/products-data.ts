import { Item } from "@/components/ui/product-or-service-card";

// THIS WILL CHANGE BASED ON THE UPLOADED PRODUCT INFORMATION
export const mockProductsData: Item[] = [
  {
    id: "7E9TJFN7KJTYW",
    name: "Product 1",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 1 description.",
    image: { default: "/products/product-1.jpg" },
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
        image: { default: "/products/product-1.jpg" },
        images: [{ default: "/products/product-1.jpg" }],
      },
    ],
  },
  {
    id: "MB38UZWEWT6HS",
    name: "Product 2",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 2 description.",
    image: { default: "/products/product-2.jpg" },
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
        image: { default: "/products/product-2.jpg" },
        images: [{ default: "/products/product-2.jpg" }],
      },
    ],
  },
  {
    id: "RSNZTN5ZLYFG6",
    name: "Product 3",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 3 description.",
    image: { default: "/products/product-3.jpg" },
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
        image: { default: "/products/product-3.jpg" },
        images: [{ default: "/products/product-3.jpg" }],
      },
    ],
  },
  {
    id: "WYUTA3UWHGN88",
    name: "Product 4",
    status: "ACTIVE",
    type: "PHYSICAL_GOODS",
    description: "Product 4 description.",
    image: { default: "/products/product-4.jpg" },
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
        image: { default: "/products/product-4.jpg" },
        images: [{ default: "/products/product-4.jpg" }],
      },
    ],
  },
];
