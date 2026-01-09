import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { useDebounce } from "@/hooks/utils";
import { sanitizeSearchInput } from "@/lib/sanitize";

/**
 * A search bar component that allows users to input search queries. It debounces the input to prevent excessive API calls.
 * It also provides a clear button to reset the search input.
 */
export default function SearchBar({
  placeholder,
  searchInput,
  setSearchInput,
}: {
  readonly placeholder?: string;
  readonly searchInput: string | null;
  readonly setSearchInput: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [localInput, setLocalInput] = useState<string | null>(searchInput);
  const fnToInvoke = () => {
    if (localInput !== null) {
      const sanitizedInput = sanitizeSearchInput(localInput);
      setSearchInput(sanitizedInput);
    }
  };
  useDebounce(fnToInvoke, 500);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const sanitizedInput = sanitizeSearchInput(localInput);

      setSearchInput(sanitizedInput);
    }
  };

  const handleClear = () => {
    setLocalInput(null);
    setSearchInput(null);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={localInput || ""}
          onChange={(e) => setLocalInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Enter search input here"}
          className="w-full pl-12 pr-12 py-3 text-base border-2 border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 shadow-sm hover:shadow-md"
        />
        {localInput && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
