import { getProductData } from "@/lib/products-data";
import { getServiceData } from "@/lib/services-data";
import Image from "next/image";

export function ProductionProductOrServiceCard({
  paypalButtonId,
  buttonId,
  type,
}: {
  paypalButtonId: string;
  buttonId: string;
  type: "products" | "services";
}) {
  const productData = type === "products" ? getProductData(buttonId) : null;
  const serviceData = type === "services" ? getServiceData(buttonId) : null;
  const data = productData || serviceData;

  return (
    <div className="p-[1rem]">
      <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
        <Image
          fill
          src={data?.image || "/placeholder.svg"}
          alt={`Product ${buttonId}`}
          className="object-cover"
        />
      </div>
      <div id={paypalButtonId} className="w-full"></div>
    </div>
  );
}
