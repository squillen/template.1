import Image from "next/image";

export function ProductionProductCard({
  paypalButtonId,
  productId,
}: {
  paypalButtonId: string;
  productId: string;
}) {
  return (
    <div className="p-[1rem]">
      <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
        <Image
          src={"/placeholder.svg"}
          alt={`Product ${productId}`}
          fill
          className="object-cover"
        />
      </div>
      <div id={paypalButtonId} className="w-full"></div>
    </div>
  );
}
