import { Item } from "@/components/ui/product-or-service-card";

// THIS WILL CHANGE BASED ON THE UPLOADED SERVICE INFORMATION
// todo update this format to reflect the sdk data structure
export const mockServicesData: Item[] = [
  {
    id: "ahjksdf",
    name: "Service 1",
    status: "ACTIVE",
    type: "SERVICE",
    description:
      "Service 1 description.",
    image: { default: "/services/service-1.jpg" },
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
        image: { default: "/services/service-1.jpg" },
        images: [{ default: "/services/service-1.jpg" }],
      },
    ],
  },
];
