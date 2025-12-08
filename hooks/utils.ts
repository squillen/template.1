import { useEffect, useState } from "react";

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
