/**
 * Core domain types for Queue-Zero (Q0)
 * These interfaces define the data shape for banking queues, tickets, and service counters.
 */

export type ServiceType = 
  | 'cash-deposit'
  | 'cash-withdrawal'
  | 'customer-service'
  | 'account-opening'
  | 'foreign-exchange';

export type TicketStatus = 'waiting' | 'called' | 'in-service' | 'completed' | 'cancelled';

export interface Ticket {
  id: string;
  ticketNumber: string; // e.g. "C-104" or "W-042"
  customerName: string;
  phone?: string;
  serviceType: ServiceType;
  status: TicketStatus;
  issuedAt: string;
  estimatedWaitMinutes: number;
  counterNumber?: number;
}

export interface BankBranch {
  id: string;
  name: string;
  location: string; // e.g. "Dugbe, Ibadan" or "Bodija, Ibadan"
  state: string; // "Oyo State"
  activeCounters: number;
  waitingCustomers: number;
}
