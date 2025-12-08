interface CacheEntry<T> {
  data: T;
  timestamp: number;
  fetchOptions?: any;
}

class CacheManager {
  private cache: Map<string, CacheEntry<any>> = new Map();
  private readonly CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

  /**
   * Generate a cache key from method name and fetch options
   */
  private generateKey(methodName: string, fetchOptions?: any): string {
    if (!fetchOptions) {
      return methodName;
    }

    // Create a stable string representation of fetchOptions
    const optionsString = JSON.stringify(fetchOptions, Object.keys(fetchOptions).sort());
    return `${methodName}:${optionsString}`;
  }

  /**
   * Check if cache entry is still valid (less than 10 minutes old)
   */
  private isValid(entry: CacheEntry<any>): boolean {
    const now = Date.now();
    return (now - entry.timestamp) < this.CACHE_DURATION;
  }

  /**
   * Get cached data if available and valid
   */
  get<T>(methodName: string, fetchOptions?: any): T | null {
    const key = this.generateKey(methodName, fetchOptions);
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    if (!this.isValid(entry)) {
      this.cache.delete(key);
      return null;
    }

    return entry.data as T;
  }

  /**
   * Store data in cache
   */
  set<T>(methodName: string, data: T, fetchOptions?: any): void {
    const key = this.generateKey(methodName, fetchOptions);
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      fetchOptions,
    });
  }

  /**
   * Invalidate specific cache entry
   */
  invalidate(methodName: string, fetchOptions?: any): void {
    const key = this.generateKey(methodName, fetchOptions);
    this.cache.delete(key);
  }

  /**
   * Invalidate all cache entries matching a method name
   */
  invalidateAll(methodName: string): void {
    const keysToDelete: string[] = [];

    this.cache.forEach((_, key) => {
      if (key.startsWith(methodName)) {
        keysToDelete.push(key);
      }
    });

    keysToDelete.forEach(key => this.cache.delete(key));
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys()),
    };
  }
}

// Export singleton instance
export const cacheManager = new CacheManager();
