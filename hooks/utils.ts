import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

/**
 * Custom hook to determine if the viewport is mobile-sized
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
}

/**
 * Checks if the current environment is a staging environment
 */
export function useIsStageEnvironment() {
  const isStage = useMemo(() => {
    if (typeof window === 'undefined') return true;
    const hostname = window.location.hostname;
    return hostname.endsWith("vusercontent.net");
  }, []);

  return isStage;
}

/**
 * Hook to manage page tracking via URL search parameters
 */
export function usePageTracking() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = useMemo(() => {
    const p = Number(searchParams.get("page") || 1);
    return Number.isFinite(p) && p > 0 ? p : 1;
  }, [searchParams]);

  const handlePageChange = (nextPage: number) => {
    const sp = new URLSearchParams(Array.from(searchParams.entries()));
    sp.set("page", String(nextPage));
    router.push(`?${sp.toString()}`);
  };

  return { page, handlePageChange };
}

/**
 * Custom hook to debounce a function call by a specified delay
 */
export function useDebounce(fnToInvoke: () => void, delay: number) {
  useEffect(() => {
    const handler = setTimeout(() => {
      fnToInvoke();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [fnToInvoke, delay]);
}

