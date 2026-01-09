/**
 * Sanitize search input to prevent XSS, SQL injection, and other attacks
 */
export function sanitizeSearchInput(input: string | null): string {
  if (!input) return "";

  let sanitized = input
    .trim()
    .replace(/[^a-zA-Z0-9\s\-_.,!?@#$%&*()]/g, "")
    .slice(0, 200)
    .replace(/\s+/g, " ");

  // 1. Trim whitespace
  sanitized = sanitized.trim();

  // 2. Remove HTML tags (XSS prevention)
  sanitized = sanitized.replace(/<[^>]*>/g, "");

  // 3. Remove script tags specifically (extra layer)
  sanitized = sanitized.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  // 4. Encode special characters that could be used in XSS
  sanitized = sanitized
    .replace(/[<>]/g, "") // Remove < and >
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, ""); // Remove inline event handlers

  // 5. Remove SQL injection attempts (basic)
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
    /(--|;|\/\*|\*\/|xp_|sp_)/gi, // SQL comments and stored procedures
    /(\bOR\b.*=.*|1=1|'=')/gi, // Common SQL injection patterns
  ];

  sqlPatterns.forEach((pattern) => {
    sanitized = sanitized.replace(pattern, "");
  });

  // 6. Limit length to prevent DoS
  const MAX_LENGTH = 200;
  sanitized = sanitized.slice(0, MAX_LENGTH);

  // 7. Remove excessive whitespace
  sanitized = sanitized.replace(/\s+/g, " ");

  // 8. Remove null bytes
  sanitized = sanitized.replace(/\0/g, "");

  // 9. Escape quotes (but keep single quotes that might be in product names)
  // Only remove dangerous quote patterns
  sanitized = sanitized.replace(/['"]{2,}/g, "'"); // Multiple quotes to single

  return sanitized;
}

/**
 * Validate search input doesn't contain malicious patterns
 */
export function isSearchInputSafe(input: string): boolean {
  if (!input) return true;

  const dangerousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /\bEXEC\b/i,
    /\bSELECT\b.*\bFROM\b/i,
    /\bDROP\b.*\bTABLE\b/i,
    /\bUNION\b.*\bSELECT\b/i,
  ];

  return !dangerousPatterns.some((pattern) => pattern.test(input));
}
