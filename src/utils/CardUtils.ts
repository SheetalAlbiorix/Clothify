import { strings } from './strings';

export const detectCardType = (number: string): string | null => {
  const cleaned = number.replace(/\D/g, "");
  if (/^4/.test(cleaned)) return strings.visa;
  if (/^5[1-5]/.test(cleaned)) return strings.mastercard;
  if (/^3[47]/.test(cleaned)) return strings.americanexpress;
  if (/^6(?:011|5)/.test(cleaned)) return strings.discover;
  return null;
};

export const formatCardNumber = (text: string): string => {
  const cleaned = text.replace(/\D/g, "").substring(0, 16);
  return cleaned.match(/.{1,4}/g)?.join(" ") ?? "";
};

export const formatExpiryDate = (text: string): string => {
  const cleaned = text.replace(/\D/g, "").substring(0, 4);
  return cleaned.length > 2
    ? `${cleaned.substring(0, 2)}/${cleaned.substring(2)}`
    : cleaned;
};
