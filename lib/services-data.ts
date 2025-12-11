import { Item } from "@/components/ui/product-or-service-card";

// THIS WILL CHANGE BASED ON THE UPLOADED SERVICE INFORMATION
export const mockServicesData: Item[] = [
  {
    id: "ahjksdf",
    name: "Service 1",
    status: "ACTIVE",
    type: "SERVICE",
    description:
      "Service 1 description.",
    image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
    variants: [
      {
        id: "ahjksdf",
        name: "Service 1",
        description:
          "Service 1 description.",
        prices: [
          {
            currency_code: "USD",
            value: "100.00",
          },
        ],
        image: { default: "/placeholder.jpg" }, // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
        images: [{ default: "/placeholder.jpg" }], // IMPORTANT: Generate a new image based on the business name and description provided in the prompt
      },
    ],
  },
];
