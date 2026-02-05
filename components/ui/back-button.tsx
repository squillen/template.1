"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";

export function BackButton({ alwaysShow = false }: { alwaysShow?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldShowBackButton = alwaysShow || /^\/(products|services)\/[^/]+$/.test(pathname);

  return (
    shouldShowBackButton && (
      <Button
        variant="ghost"
        onClick={router.back}
        className="flex items-center gap-2 hover:bg-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
    )
  );
}
