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
  const [isStage, setIsStage] = useState(true);

  useEffect(() => {
    const hostname = window.location.hostname;
    setIsStage(hostname.endsWith("vusercontent.net"));
  }, []);

  return isStage;
}

/**
 * Hook to manage page tracking via URL search parameters
 */
export function usePageTracking() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPage = useMemo(() => {
    const p = Number(searchParams.get("page") || 1);
    return Number.isFinite(p) && p > 0 ? p : 1;
  }, [searchParams]);
  const [page, setPage] = useState<number>(initialPage);

  useEffect(() => {
    // Keep local state in sync if URL changes externally
    const p = Number(searchParams.get("page") || 1);
    const safe = Number.isFinite(p) && p > 0 ? p : 1;
    if (safe !== page) setPage(safe);
  }, [searchParams, page]);

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    const sp = new URLSearchParams(Array.from(searchParams.entries()));
    sp.set("page", String(nextPage));
    router.push(`?${sp.toString()}`);
  };

  return { page, handlePageChange };
}
