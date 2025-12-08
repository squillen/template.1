import { Item } from "@/components/ui/product-or-service-card";

// THIS WILL CHANGE BASED ON THE UPLOADED SERVICE INFORMATION
// todo update this format to reflect the sdk data structure
export const mockServicesData: Item[] = [
  {
    id: "ahjksdf",
    name: "Custom Cake Making",
    status: "ACTIVE",
    type: "SERVICE",
    description:
      "Our signature custom cake making service brings your vision to life. From elegant wedding cakes to whimsical birthday creations, our master pastry chefs craft each cake with meticulous attention to detail using only the finest ingredients.",
    image: { default: "/services/cake-making.jpg" },
    variants: [
      {
        id: "ahjksdf",
        name: "Custom Cake Making",
        description:
          "Our signature custom cake making service brings your vision to life. From elegant wedding cakes to whimsical birthday creations, our master pastry chefs craft each cake with meticulous attention to detail using only the finest ingredients.",
        prices: [
          {
            currency_code: "USD",
            value: "100.00",
          },
        ],
        image: { default: "/services/cake-making.jpg" },
        images: [{ default: "/services/cake-making.jpg" }],
      },
    ],
  },
];
