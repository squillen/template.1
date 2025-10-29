export interface ServiceData {
  id: string
  name: string
  description: string
  image: string
  price: number
  category: string
  features?: string[]
  duration?: string
}

// THIS WILL CHANGE BASED ON THE UPLOADED SERVICE INFORMATION
export const servicesData: Record<string, ServiceData> = {
  ahjksdf: {
    id: "ahjksdf",
    name: "Custom Cake Making",
    description:
      "Our signature custom cake making service brings your vision to life. From elegant wedding cakes to whimsical birthday creations, our master pastry chefs craft each cake with meticulous attention to detail using only the finest ingredients.",
    image: "/services/cake-making.jpg",
    price: 100.0,
    category: "Custom Services",
    features: [
      "Personalized design consultation",
      "Premium ingredients and flavors",
      "Custom decorations and themes",
      "Professional delivery and setup",
      "Serves 10-12 people (base size)",
    ],
    duration: "2-3 weeks lead time",
  },
}

export function getServiceData(buttonId: string): ServiceData | undefined {
  return servicesData[buttonId]
}
