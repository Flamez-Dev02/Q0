/**
 * JavaScript & TypeScript Helper Utilities for Queue-Zero (Q0)
 * These standard functions handle queue math, ticket formatting, and LocalStorage persistence.
 */

/**
 * Generates a clean, unique banking demo ticket number (e.g. QZ-042).
 * @param prefix 2-letter branch or service prefix
 */
export function generateTicketNumber(prefix: string = 'QZ'): string {
  const randomDigits = Math.floor(10 + Math.random() * 90); // 2-digit number
  return `${prefix}-${randomDigits}`;
}

/**
 * Calculates estimated wait time in minutes based on current queue position.
 * @param position Customers ahead in line
 * @param avgMinutesPerCustomer Average teller service duration (default: 4 mins)
 */
export function calculateEstimatedWait(position: number, avgMinutesPerCustomer: number = 4): number {
  if (position <= 0) return 0;
  if (position === 1) return 2;
  return position * avgMinutesPerCustomer;
}

/**
 * Formats a Date object into standard readable Nigerian banking time (e.g. "10:15 AM").
 */
export function formatBankingTime(date: Date = new Date()): string {
  return date.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Saves demo queue state to browser LocalStorage.
 */
export function saveToDemoStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(`Q0_${key}`, JSON.stringify(data));
  } catch (err) {
    console.warn('LocalStorage write failed:', err);
  }
}

/**
 * Retrieves demo queue state from browser LocalStorage.
 */
export function getFromDemoStorage<T>(key: string, fallbackValue: T): T {
  try {
    const raw = localStorage.getItem(`Q0_${key}`);
    return raw ? (JSON.parse(raw) as T) : fallbackValue;
  } catch (err) {
    console.warn('LocalStorage read failed:', err);
    return fallbackValue;
  }
}
