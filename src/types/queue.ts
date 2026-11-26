/**
 * Core domain types for Queue-Zero (Q0)
 * These interfaces define the data shape for banking queues, tickets, and service counters.
 */

export type ServiceType = 
  | 'card-services'
  | 'cash-transactions'
  | 'customer-support'
  | 'account-update'
  | 'account-opening';

export type TicketStatus = 'waiting' | 'called' | 'in-service' | 'completed' | 'cancelled';

export interface DocumentItem {
  id: string;
  label: string;
  required: boolean;
  notes?: string;
}

export interface BankingService {
  id: ServiceType;
  title: string;
  category: string;
  description: string;
  estimatedServiceMinutes: number;
  prefix: string; // e.g. "CD" for cards, "CS" for cash
  requiredDocuments: DocumentItem[];
}

export interface BankBranch {
  id: string;
  bankName: string;
  branchName: string;
  area: string; // e.g. "Dugbe", "Bodija", "Challenge", "Ring Road"
  city: string; // "Ibadan"
  state: string; // "Oyo State"
  address: string;
  activeCounters: number;
  waitingCustomers: number;
  averageWaitMinutes: number;
  status: 'Open' | 'Crowded' | 'Normal';
  supportedServices: ServiceType[];
}

export interface QueueTicket {
  id: string;
  ticketNumber: string; // e.g. "QZ-024" or "FB-042"
  customerName: string;
  phone?: string;
  branchId: string;
  branchName: string;
  bankName: string;
  serviceId: ServiceType;
  serviceName: string;
  status: TicketStatus;
  issuedAt: string; // ISO string
  position: number;
  estimatedWaitMinutes: number;
  counterNumber?: number;
  documentsConfirmed: boolean;
}
