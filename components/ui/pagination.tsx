"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalItems, pageSize, onPageChange }: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  // Create a compact page range (1 ... current-1, current, current+1 ... total)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxShown = 5; // max numeric buttons shown
    if (totalPages <= maxShown) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>, page: number) => {
    if (e.key === "Enter" || e.key === " ") {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Pagination" className="mt-6 flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="Previous page"
        disabled={!canPrev}
        onClick={() => canPrev && onPageChange(currentPage - 1)}
        className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-background hover:bg-muted"
      >
        <ChevronLeft className="h-4 w-4" />
        Prev
      </button>
      <div className="flex items-center gap-1">
        {getPageNumbers().map((p, idx) =>
          typeof p === "number" ? (
            <button
              key={`${p}-${idx}`}
              type="button"
              aria-current={p === currentPage ? "page" : undefined}
              onClick={() => onPageChange(p)}
              onKeyDown={(e) => handleKey(e, p)}
              className={
                "min-w-[2.25rem] rounded-md border px-3 py-2 text-sm transition-colors " +
                (p === currentPage
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted")
              }
            >
              {p}
            </button>
          ) : (
            <span key={`dots-${idx}`} className="px-2 text-muted-foreground">
              {p}
            </span>
          )
        )}
      </div>
      <button
        type="button"
        aria-label="Next page"
        disabled={!canNext}
        onClick={() => canNext && onPageChange(currentPage + 1)}
        className="inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-background hover:bg-muted"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
