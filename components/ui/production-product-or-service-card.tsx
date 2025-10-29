import Image from "next/image";

export function ProductionProductOrServiceCard({
  paypalButtonId,
  buttonId,
}: {
  paypalButtonId: string;
  buttonId: string;
}) {
  return (
    <div className="p-[1rem]">
      <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
        <Image
          src={"/placeholder.svg"}
          alt={`Product ${buttonId}`}
          fill
          className="object-cover"
        />
      </div>
      <div id={paypalButtonId} className="w-full"></div>
    </div>
  );
}
