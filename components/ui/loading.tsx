import { Loader2 } from "lucide-react"

interface LoadingProps {
  text?: string
}

/**
 * A simple loading component that displays a spinner and optional text.
 */
export function Loading({ text = "Loading..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="text-muted-foreground text-sm font-medium">{text}</p>
    </div>
  );
}
