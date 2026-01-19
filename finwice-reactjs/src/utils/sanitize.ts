import DOMPurify from "dompurify";

export const sanitizeHTML = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, { USE_PROFILES: { html: true } });
};
