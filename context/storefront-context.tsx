"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
  useCallback,
} from "react";
import { cacheManager } from "@/lib/cache-manager";

interface StorefrontSDKConfig {
  merchantId: string;
  storefrontToken: string;
  salesChannelId: string;
}

interface StorefrontContextValue {
  sdk: any | null;
  isLoading: boolean;
  error: Error | null;
  config: StorefrontSDKConfig;
  // Cache management methods (not the data itself)
  invalidateCache: (methodName: string, fetchOptions?: any) => void;
  clearCache: () => void;
  getCacheStats: () => { size: number; entries: string[] };
}

const StorefrontContext = createContext<StorefrontContextValue | undefined>(
  undefined
);

export function StorefrontProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: StorefrontSDKConfig;
}) {
  const [sdk, setSdk] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let attempts = 0;
    const maxAttempts = 50;

    const initializeSDK = () => {
      if (
        typeof window !== "undefined" &&
        (window as any).PayPalStorefrontSDK
      ) {
        try {
          console.log("PayPal SDK loaded successfully");
          const storefront = (window as any).PayPalStorefrontSDK;
          const sdkInstance = new storefront.StorefrontSDK(
            config.storefrontToken,
            config.merchantId
          );
          setSdk(sdkInstance);
          setIsLoading(false);
        } catch (err) {
          console.error("Error initializing SDK:", err);
          setError(err as Error);
          setIsLoading(false);
        }
      } else if (attempts < maxAttempts) {
        attempts++;
        console.log(
          `Waiting for PayPal SDK... (attempt ${attempts}/${maxAttempts})`
        );
        timeoutId = setTimeout(initializeSDK, 100);
      } else {
        const err = new Error(
          "PayPal SDK failed to load after maximum attempts"
        );
        console.error(err);
        setError(err);
        setIsLoading(false);
      }
    };

    initializeSDK();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [config.merchantId, config.storefrontToken]);

  // Cache management methods
  const invalidateCache = useCallback((methodName: string, fetchOptions?: any) => {
    if (fetchOptions) {
      cacheManager.invalidate(methodName, fetchOptions);
    } else {
      cacheManager.invalidateAll(methodName);
    }
  }, []);

  const clearCache = useCallback(() => {
    cacheManager.clear();
  }, []);

  const getCacheStats = useCallback(() => {
    return cacheManager.getStats();
  }, []);

  const value = {
    sdk,
    isLoading,
    error,
    config,
    invalidateCache,
    clearCache,
    getCacheStats,
  };

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  );
}

export function useStorefront() {
  const context = useContext(StorefrontContext);

  if (context === undefined) {
    throw new Error("useStorefront must be used within a StorefrontProvider");
  }

  return context;
}

export interface FetchOptions {
  pageSize?: number;
  page?: number;
  includeTotalCount?: boolean;
  sort?: string;
  search?: string;
  filter?: string;
}

export interface UseStorefrontMethodOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  autoFetch?: boolean;
  fetchOptions?: string | FetchOptions;
  useCache?: boolean; // Add cache option
}

export function useStorefrontMethod<T>(
  methodName: string,
  options: UseStorefrontMethodOptions<T> = {}
) {
  const { sdk, isLoading: sdkLoading, error: sdkError } = useStorefront();
  const [data, setData] = useState<T | null>({} as T);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const {
    onSuccess,
    onError,
    autoFetch = true,
    fetchOptions,
    useCache = true, // Default to caching
  } = options;

  const isMountedRef = useRef(true);
  const onSuccessRef = useRef(onSuccess);
  const onErrorRef = useRef(onError);

  useEffect(() => {
    onSuccessRef.current = onSuccess;
    onErrorRef.current = onError;
  }, [onSuccess, onError]);


  const makeRequest = useCallback(
    async (args: any[] | any = []) => {
      args = Array.isArray(args) ? args : [args];

      if (!sdk) {
        console.log(`Fetch skipped - SDK: ${!!sdk}`);
        return;
      }

      if (typeof sdk[methodName] !== "function") {
        const err = new Error(`Method '${methodName}' does not exist on SDK`);
        console.error(err);
        setError(err);
        return;
      }

      // Check cache first if enabled
      if (useCache) {
        const cachedData = cacheManager.get<T>(methodName, args[0]);
        if (cachedData !== null) {
          console.log(`Using cached data for ${methodName}`);
          setData(cachedData);
          setError(null);
          onSuccessRef.current?.(cachedData);
          return;
        }
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await sdk[methodName](...args);

        if (isMountedRef.current) {
          setData(result);

          // Cache the result if caching is enabled
          if (useCache) {
            cacheManager.set(methodName, result, args[0]);
          }

          onSuccessRef.current?.(result);
        }
      } catch (err) {
        console.error(`Error fetching ${methodName}:`, err);
        const error = err as Error;

        if (isMountedRef.current) {
          setError(error);
          onErrorRef.current?.(error);
        }
      } finally {
        if (isMountedRef.current) {
          setIsLoading(false);
        }
      }
    },
    [sdk, methodName, useCache]
  );

  useEffect(() => {
    isMountedRef.current = true;

    if (sdk && autoFetch) {
      makeRequest([fetchOptions]);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [sdk, autoFetch, makeRequest, fetchOptions]);

  return {
    data,
    isLoading: sdkLoading || isLoading,
    error: sdkError || error,
    makeRequest,
  };
}
