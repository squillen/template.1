import Image from "next/image";
import { Button } from "./button";

export function PreviewProductCard({
  productId,
  productIndex,
}: {
  productId: string;
  productIndex: number;
}) {
  return (
    <div className="w-full space-y-3">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start justify-center space-x-2">
          <div>
            <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
              <Image
                src={"/placeholder.svg"}
                alt={`Product ${productId}`}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">
              Product {productIndex + 1}
            </h3>
            <p className="text-xs text-blue-700 font-medium">
              This section is in development mode
            </p>
            <p className="text-xs text-blue-600">
              More information will show when published.
            </p>
          </div>
        </div>
      </div>
      <Button
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
        onClick={() => console.log(`Add to cart: ${productId}`)}
      >
        Add to cart
      </Button>
    </div>
  );
}
