import Image from "next/image";
import { Button } from "./button";
import { getProductData } from "@/lib/products-data";
import { getServiceData } from "@/lib/services-data";

export function PreviewProductOrServiceCard({
  buttonId,
  productIndex,
  type = "products",
}: {
  buttonId: string;
  productIndex: number;
  type?: "products" | "services";
}) {
  const productData = type === "products" ? getProductData(buttonId) : null;
  const serviceData = type === "services" ? getServiceData(buttonId) : null;
  const data = productData || serviceData;

  const itemLabel = type === "services" ? "Service" : "Product";

  return (
    <div className="w-full space-y-3">
      <div className="bg-card border border-border rounded-lg p-4 shadow-md hover:shadow-lg transition-all">
        <div className="flex items-start justify-center space-x-2">
          <div className="w-full">
            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg ring-1 ring-border/50">
              <Image
                src={data?.image || "/placeholder.svg"}
                alt={data?.name || `${itemLabel} ${buttonId}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2 text-lg">
              {data?.name || `${itemLabel} ${productIndex + 1}`}
            </h3>
            {data?.price && (
              <p className="text-xl font-bold text-secondary mb-3">
                ${data.price.toFixed(2)}
              </p>
            )}
            {data?.description && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                {data.description}
              </p>
            )}
            {productData?.quantity && (
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Available: {productData.quantity}
              </p>
            )}
            {serviceData?.duration && (
              <p className="text-xs text-muted-foreground mb-2 font-medium">
                Lead time: {serviceData.duration}
              </p>
            )}
            {serviceData?.features && serviceData.features.length > 0 && (
              <ul className="text-xs text-muted-foreground mb-3 space-y-1">
                {serviceData.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-secondary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Button
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all h-11"
        onClick={() =>
          console.log(
            `${
              type === "services" ? "Book service" : "Add to cart"
            }: ${buttonId}`
          )
        }
      >
        {type === "services" ? "Book Service" : "Add to Cart"}
      </Button>
    </div>
  );
}
