/**
 * ============================================================================
 * QUEUE-ZERO (Q0) - DOMAIN TYPES & INTERFACES
 * ============================================================================
 * 
 * BEGINNER GUIDE TO TYPESCRIPT IN THIS FILE:
 * If you know JavaScript, think of TypeScript as "JavaScript with safety labels".
 * In plain JS, an object can be anything, which causes bugs when you misspell a word.
 * In TypeScript:
 * 
 * 1. "type Something = 'a' | 'b' | 'c'" is a "Union Type".
 *    It works like a dropdown menu. It says: this variable CAN ONLY be one of 
 *    these exact choices, and nothing else.
 * 
 * 2. "interface Something { name: string; age: number; }" is an "Interface".
 *    It works like a checklist or blueprint for an object. It says: any object 
 *    created using this blueprint MUST have a text 'name' and a number 'age'.
 * ============================================================================
 */

// Dropdown menu of the 5 allowed banking service IDs in our app
export type ServiceType = 
  | 'card-services'       // Debit card collection or replacement
  | 'cash-transactions'   // Cash deposits and large withdrawals
  | 'customer-support'    // POS disputes and transaction issues
  | 'account-update'      // Reactivating dormant accounts and updating info
  | 'account-opening';    // Opening a new bank account

// Dropdown menu of the 5 possible states a ticket can have in line
export type TicketStatus = 
  | 'waiting'             // Sitting in the queue waiting for turn
  | 'called'              // Teller has called this number to the counter
  | 'in-service'          // Currently standing at the counter being served
  | 'completed'           // Finished transaction and leaving hall
  | 'cancelled';          // Customer chose to cancel their ticket

// Blueprint for a single required document (e.g., Valid ID, Utility bill)
export interface DocumentItem {
  id: string;             // A unique ID, e.g. "card-id"
  label: string;          // Human-readable title, e.g. "Valid Government Issued ID"
  required: boolean;      // true if customer MUST bring it; false if optional
  notes?: string;         // Optional extra helpful tip (the '?' means optional)
}

// Blueprint for a Banking Service Category
export interface BankingService {
  id: ServiceType;                    // Must match one of our ServiceType choices
  title: string;                      // Display name (e.g. "ATM Debit Card Collection")
  category: string;                   // Tag name (e.g. "Cards & Channels")
  description: string;                // Short explanation of what the counter does
  estimatedServiceMinutes: number;    // Average minutes teller spends with 1 customer
  prefix: string;                     // 2-letter ticket prefix (e.g. "CD", "CS", "AC")
  requiredDocuments: DocumentItem[];  // Array/List of required documents to check
}

// Blueprint for a Bank Branch
export interface BankBranch {
  id: string;                         // Unique ID (e.g. "fb-dugbe")
  bankName: string;                   // Name of the bank (e.g. "First Bank of Nigeria")
  branchName: string;                 // Branch identifier (e.g. "Dugbe Commercial Branch")
  area: string;                       // Neighborhood (e.g. "Dugbe", "Bodija", "Challenge")
  city: string;                       // City ("Ibadan")
  state: string;                      // State ("Oyo State")
  address: string;                    // Street address (marked as demo data)
  activeCounters: number;             // Number of tellers working
  waitingCustomers: number;           // Number of customers currently waiting
  averageWaitMinutes: number;         // Estimated wait time in minutes
  status: 'Open' | 'Crowded' | 'Normal'; // Visual traffic status badge
  supportedServices: ServiceType[];   // Which services this branch handles
}

// Blueprint for an Active Customer Queue Ticket
export interface QueueTicket {
  id: string;                         // Unique ID (e.g. "ticket-170000000")
  ticketNumber: string;               // Display number (e.g. "CD-42")
  customerName: string;               // Customer's name or alias
  phone?: string;                     // Optional phone number for SMS alert demo
  branchId: string;                   // Which branch this ticket belongs to
  branchName: string;                 // Name of branch (e.g. "Dugbe Commercial")
  bankName: string;                   // Name of bank (e.g. "First Bank")
  serviceId: ServiceType;             // The service category chosen
  serviceName: string;                // Title of service (e.g. "ATM Debit Card Replacement")
  status: TicketStatus;               // Current status (waiting, called, completed, etc.)
  issuedAt: string;                   // Exact time ticket was created (ISO format)
  position: number;                   // Position in line (e.g. #3)
  estimatedWaitMinutes: number;       // Calculated wait time in minutes (e.g. 12 mins)
  counterNumber?: number;             // Counter assigned when called (e.g. Counter 03)
  documentsConfirmed: boolean;        // Whether the customer checked off the documents
}
