/**
 * ============================================================================
 * QUEUE-ZERO (Q0) - QUEUE & LOCALSTORAGE HELPER FUNCTIONS
 * ============================================================================
 * 
 * BEGINNER GUIDE TO THIS FILE:
 * These are standard JavaScript helper functions that do 3 simple jobs:
 * 1. Generate unique ticket numbers (like "CD-42" or "QZ-88").
 * 2. Calculate how long a customer will wait based on their position in line.
 * 3. Save and load the customer's ticket from the browser's "LocalStorage".
 * 
 * WHAT IS LOCALSTORAGE?
 * LocalStorage is a built-in browser database. It lets your website save data 
 * on the user's computer (like a text file) so when they refresh the page,
 * their ticket number is still there!
 * 
 * - localStorage.setItem(key, value) -> Saves data
 * - localStorage.getItem(key)        -> Reads saved data
 * - localStorage.removeItem(key)     -> Deletes saved data
 * ============================================================================
 */

import { QueueTicket, TicketStatus } from '../types/queue';

// The key name we use to store the active ticket in LocalStorage
const STORAGE_KEY_TICKET = 'Q0_active_ticket';

// The key prefix we use to store a bank branch's queue list
const STORAGE_KEY_BRANCH_QUEUE_PREFIX = 'Q0_branch_queue_';

/**
 * Generates a unique ticket number like "CD-42" or "QZ-88".
 * 
 * @param prefix The two letters at the start (e.g. "CD" for card, "CS" for cash)
 * @returns A string like "CD-42"
 */
export function generateTicketNumber(prefix: string = 'QZ'): string {
  // Math.random() creates a decimal between 0 and 1 (e.g. 0.456)
  // Multiplying by 90 and adding 10 gives a random two-digit number between 10 and 99
  const randomDigits = Math.floor(10 + Math.random() * 90);
  return `${prefix}-${randomDigits}`;
}

/**
 * Calculates estimated wait time in minutes.
 * 
 * Formula: (Number of people ahead of you) multiplied by (Average minutes per person)
 * 
 * @param position Current position in line (e.g. 3 means 3rd in line)
 * @param avgMinutesPerCustomer How long a teller spends with each person (default: 4 mins)
 * @returns Estimated waiting minutes (e.g. 12 mins)
 */
export function calculateEstimatedWait(position: number, avgMinutesPerCustomer: number = 4): number {
  if (position <= 0) return 0;
  if (position === 1) return 2; // Next up has almost zero wait
  return position * avgMinutesPerCustomer;
}

/**
 * Formats a date into clean Nigerian time (e.g. "09:45 AM").
 * 
 * @param dateInput A Date object or timestamp string
 * @returns Formatted time string
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
 * Saves the active ticket object into the browser's LocalStorage.
 * Because LocalStorage can only store plain text, we use JSON.stringify()
 * to turn our JavaScript object into a text string before saving.
 */
export function setActiveTicket(ticket: QueueTicket): void {
  try {
    const textData = JSON.stringify(ticket);
    localStorage.setItem(STORAGE_KEY_TICKET, textData);

    // Also register this ticket inside the branch queue so tellers can see it
    addTicketToBranchQueue(ticket);
  } catch (err) {
    console.warn('Failed to save active ticket to localStorage:', err);
  }
}

/**
 * Reads the active ticket from browser LocalStorage.
 * We use JSON.parse() to turn the saved text string back into a JavaScript object.
 * 
 * @returns The active QueueTicket object, or null if no ticket is saved
 */
export function getActiveTicket(): QueueTicket | null {
  try {
    const textData = localStorage.getItem(STORAGE_KEY_TICKET);
    if (!textData) return null;
    return JSON.parse(textData) as QueueTicket;
  } catch (err) {
    console.warn('Failed to retrieve active ticket from localStorage:', err);
    return null;
  }
}

/**
 * Cancels and deletes the active ticket from LocalStorage.
 */
export function clearActiveTicket(): void {
  try {
    const current = getActiveTicket();
    if (current) {
      // Mark it as cancelled in the branch queue records
      updateTicketStatusInQueue(current.id, 'cancelled');
    }
    // Delete it from LocalStorage
    localStorage.removeItem(STORAGE_KEY_TICKET);
  } catch (err) {
    console.warn('Failed to clear active ticket from localStorage:', err);
  }
}

/**
 * Reads all tickets waiting at a specific branch.
 */
export function getBranchQueue(branchId: string): QueueTicket[] {
  try {
    const textData = localStorage.getItem(`${STORAGE_KEY_BRANCH_QUEUE_PREFIX}${branchId}`);
    if (!textData) return [];
    return JSON.parse(textData) as QueueTicket[];
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
    // Check if the ticket is already in the list
    const alreadyExists = list.some((t) => t.id === ticket.id);
    if (!alreadyExists) {
      list.push(ticket);
      localStorage.setItem(
        `${STORAGE_KEY_BRANCH_QUEUE_PREFIX}${ticket.branchId}`,
        JSON.stringify(list)
      );
    }
  } catch (err) {
    console.warn('Failed to add ticket to branch queue:', err);
  }
}

/**
 * Updates a ticket's status (e.g. from 'waiting' to 'called' or 'completed').
 */
export function updateTicketStatusInQueue(
  ticketId: string, 
  newStatus: TicketStatus, 
  counterNumber?: number
): void {
  try {
    // 1. Update the active ticket if it matches
    const current = getActiveTicket();
    if (current && current.id === ticketId) {
      current.status = newStatus;
      if (counterNumber !== undefined) {
        current.counterNumber = counterNumber;
      }
      localStorage.setItem(STORAGE_KEY_TICKET, JSON.stringify(current));
    }

    // 2. Also update it inside the branch queues
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_KEY_BRANCH_QUEUE_PREFIX)) {
        const textData = localStorage.getItem(key);
        if (textData) {
          const list = JSON.parse(textData) as QueueTicket[];
          const updatedList = list.map((item) => {
            if (item.id === ticketId) {
              return { 
                ...item, 
                status: newStatus, 
                counterNumber: counterNumber ?? item.counterNumber 
              };
            }
            return item;
          });
          localStorage.setItem(key, JSON.stringify(updatedList));
        }
      }
    }
  } catch (err) {
    console.warn('Failed to update ticket status in queue:', err);
  }
}
