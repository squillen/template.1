"use client";
import { useRouter } from "next/navigation";
import { Button } from "./button";

/**
 * A button component that adds a product or service to the cart. It uses the `useAddToCart` hook to perform the add to cart action and emits an event to update the cart button when an item is added. The button text changes based on the type of item being added (product or service).
 */
export default function BookAppointmentButton({
  productId,
  variantId,
}: {
  readonly productId: string;
  readonly variantId: string;
}) {
  const router = useRouter();

  const handleSetAppointment = () => {
    router.push(`/services/${productId}/appointment?variantId=${variantId}`);
  };

  return (
    <Button
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all h-11"
      onClick={handleSetAppointment}
    >
      Book Appointment
    </Button>
  );
}
