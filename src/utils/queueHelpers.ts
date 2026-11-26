import { QueueTicket, TicketStatus } from '../types/queue';

/**
 * JavaScript & TypeScript Helper Utilities for Queue-Zero (Q0)
 * These standard functions handle queue math, ticket formatting, and LocalStorage persistence.
 */

const STORAGE_KEY_TICKET = 'Q0_active_ticket';
const STORAGE_KEY_BRANCH_QUEUE_PREFIX = 'Q0_branch_queue_';

/**
 * Generates a clean, unique banking demo ticket number (e.g. QZ-042 or CD-18).
 * @param prefix 2-letter branch or service prefix
 */
export function generateTicketNumber(prefix: string = 'QZ'): string {
  const randomDigits = Math.floor(10 + Math.random() * 90); // 2-digit number (10-99)
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
 * Formats a Date object or ISO string into standard readable Nigerian banking time (e.g. "10:15 AM").
 */
export function formatBankingTime(dateInput: Date | string = new Date()): string {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return date.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

/**
 * Saves the customer's active ticket in browser LocalStorage.
 */
export function setActiveTicket(ticket: QueueTicket): void {
  try {
    localStorage.setItem(STORAGE_KEY_TICKET, JSON.stringify(ticket));
    // Also add to branch queue registry so staff portal sees it
    addTicketToBranchQueue(ticket);
  } catch (err) {
    console.warn('Failed to save active ticket to localStorage:', err);
  }
}

/**
 * Retrieves the currently active customer ticket from LocalStorage.
 */
export function getActiveTicket(): QueueTicket | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TICKET);
    return raw ? (JSON.parse(raw) as QueueTicket) : null;
  } catch (err) {
    console.warn('Failed to retrieve active ticket from localStorage:', err);
    return null;
  }
}

/**
 * Cancels or clears the active customer ticket from LocalStorage.
 */
export function clearActiveTicket(): void {
  try {
    const current = getActiveTicket();
    if (current) {
      updateTicketStatusInQueue(current.id, 'cancelled');
    }
    localStorage.removeItem(STORAGE_KEY_TICKET);
  } catch (err) {
    console.warn('Failed to clear active ticket from localStorage:', err);
  }
}

/**
 * Retrieves all tickets for a specific bank branch.
 */
export function getBranchQueue(branchId: string): QueueTicket[] {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_BRANCH_QUEUE_PREFIX}${branchId}`);
    return raw ? (JSON.parse(raw) as QueueTicket[]) : [];
  } catch (err) {
    console.warn('Failed to retrieve branch queue:', err);
    return [];
  }
}

/**
 * Appends a new ticket to the branch queue list.
 */
export function addTicketToBranchQueue(ticket: QueueTicket): void {
  try {
    const list = getBranchQueue(ticket.branchId);
    const exists = list.some((t) => t.id === ticket.id);
    if (!exists) {
      list.push(ticket);
      localStorage.setItem(`${STORAGE_KEY_BRANCH_QUEUE_PREFIX}${ticket.branchId}`, JSON.stringify(list));
    }
  } catch (err) {
    console.warn('Failed to append ticket to branch queue:', err);
  }
}

/**
 * Updates a ticket status in the branch queue.
 */
export function updateTicketStatusInQueue(ticketId: string, status: TicketStatus, counterNumber?: number): void {
  try {
    const current = getActiveTicket();
    if (current && current.id === ticketId) {
      current.status = status;
      if (counterNumber !== undefined) current.counterNumber = counterNumber;
      localStorage.setItem(STORAGE_KEY_TICKET, JSON.stringify(current));
    }

    // Also update in all branch queues
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_KEY_BRANCH_QUEUE_PREFIX)) {
        const raw = localStorage.getItem(key);
        if (raw) {
          const list = JSON.parse(raw) as QueueTicket[];
          const updated = list.map((item) => {
            if (item.id === ticketId) {
              return { ...item, status, counterNumber: counterNumber ?? item.counterNumber };
            }
            return item;
          });
          localStorage.setItem(key, JSON.stringify(updated));
        }
      }
    }
  } catch (err) {
    console.warn('Failed to update ticket status:', err);
  }
}
