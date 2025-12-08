import { AlertCircle } from "lucide-react"

interface ErrorProps {
  message?: string
}

export function Error({
  message = "There was an error, please try again.",
}: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4 p-6">
      <div className="rounded-full bg-destructive/10 p-3">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-semibold text-lg text-foreground">
          Something went wrong
        </h3>
        <p className="text-muted-foreground text-sm max-w-md">{message}</p>
      </div>
    </div>
  )
}
