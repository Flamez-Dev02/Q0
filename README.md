# Queue-Zero (Q0)
## Smart Banking Queue Management and Customer Assistance Platform

Queue-Zero (Q0) is a demonstration prototype designed to reduce congestion and waiting times across commercial bank branches in Nigeria.

The platform helps everyday customers plan branch visits, join a simulated virtual queue before leaving home, and confirm required documentation in advance to avoid wasted trips.

---

## Important Prototype Notice

This application is a demonstration prototype for research, design validation, and bank partnership proposals.
- It uses sample branches, sample customers, and simulated queue activity.
- It is NOT connected to live banking ledgers or real customer accounts.
- It will NEVER request or store sensitive banking details: no BVN, no ATM PINs, no OTPs, and no passwords.

---

## How This Project Connects HTML, CSS, and JS to React

If you already understand HTML, CSS, and JavaScript, here is how each concept translates into this modern application:

```javascript
// 1. HTML -> TSX (JSX with TypeScript)
// In traditional HTML: <div class="header"><button>Click Me</button></div>
// In React TSX: We write the exact same tags inside JavaScript functions.
// The only syntax change is using 'className' instead of 'class'.

// 2. CSS -> Tailwind CSS Utility Classes
// In traditional CSS: You created a separate styles.css file and wrote:
// .card { background-color: #059669; padding: 24px; border-radius: 16px; }
// In Tailwind CSS: You apply utilities directly to the element:
// <div className="bg-emerald-600 p-6 rounded-2xl">

// 3. JavaScript -> React State and Event Handlers
// In traditional JS:
// const btn = document.querySelector("#menuBtn");
// btn.addEventListener("click", function() { menu.classList.toggle("open"); });
// In React:
// const [isOpen, setIsOpen] = useState(false);
// <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
```

---

## Project Structure Overview

```text
Q0/
├── index.html              // The single HTML host file for the entire application
├── package.json            // Dependency list, scripts, and project metadata
├── vite.config.ts          // Vite build tool and Tailwind CSS plugin configuration
├── tsconfig.json           // Root TypeScript compiler settings
├── vercel.json             // Routing rules for seamless Vercel hosting
├── src/
│   ├── main.tsx            // Kickoff script that mounts React to index.html
│   ├── App.tsx             // Root application component and route definitions
│   ├── index.css           // Global styles and Tailwind CSS import
│   ├── types/
│   │   └── queue.ts        // TypeScript interfaces for tickets, branches, and services
│   ├── utils/
│   │   └── queueHelpers.ts // Standard JavaScript helper functions for queue logic
│   ├── components/
│   │   └── common/
│   │       ├── DemoBanner.tsx // Persistent prototype security disclaimer
│   │       ├── Navbar.tsx     // Responsive navigation bar with mobile menu
│   │       └── Footer.tsx     // Institutional footer and disclaimer
│   └── pages/
│       ├── LandingPage.tsx          // Phase 2 homepage
│       ├── SimpleModePage.tsx       // Phase 2 accessibility view for seniors
│       ├── BranchFinderPage.tsx     // Phase 3 placeholder (Bank Branch Discovery)
│       ├── ServiceSelectionPage.tsx // Phase 3 placeholder (Document Checklist)
│       ├── QueueTicketPage.tsx      // Phase 4 placeholder (Virtual Ticket Tracker)
│       └── StaffDashboardPage.tsx   // Phase 6 placeholder (Teller Console)
```

---

## Phase 1 Explanation: Setup and Project Foundation

Phase 1 established the technical foundation with Vite, React 19, TypeScript, Tailwind CSS v4, and React Router v7.

```typescript
// File: src/main.tsx
// Explanation of how the application initializes:

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Line 1: Grab the empty <div id="root"> element from index.html.
// Line 2: Mount the React virtual DOM tree inside it.
// Line 3: Wrap App with BrowserRouter so client-side URL routing is enabled.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

```typescript
// File: src/types/queue.ts
// Explanation of TypeScript types ensuring zero runtime data errors:

// Define the exact allowed banking service categories
export type ServiceType = 
  | 'cash-deposit'
  | 'cash-withdrawal'
  | 'customer-service'
  | 'account-opening'
  | 'foreign-exchange';

// Define the exact lifecycle states a ticket can enter
export type TicketStatus = 'waiting' | 'called' | 'in-service' | 'completed' | 'cancelled';

// Define the contract for a customer ticket
export interface Ticket {
  id: string;                    // Unique identifier
  ticketNumber: string;          // Formatted number like QZ-042
  customerName: string;          // Name of the customer
  serviceType: ServiceType;      // Service selected
  status: TicketStatus;          // Current status in line
  issuedAt: string;              // Timestamp created
  estimatedWaitMinutes: number;  // Wait calculation
  counterNumber?: number;        // Assigned teller counter
}
```

---

## Phase 2 Explanation: Design System, Navigation, and Landing Page

Phase 2 built the customer-facing interface, brand design system, responsive navigation, and accessible Simple Mode.

### 1. Navigation and Mobile Responsiveness Explained

```typescript
// File: src/components/common/Navbar.tsx
// Explanation of how the mobile menu and active link tracking work:

// Step 1: Create a state variable to hold whether the mobile menu is open or closed
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Step 2: Read the current browser URL path (e.g. "/" or "/branches")
const location = useLocation();

// Step 3: Function to check if a link is currently active to highlight it
const isActive = (path: string) => {
  if (path === '/' && location.pathname !== '/') return false;
  return location.pathname.startsWith(path);
};

// Step 4: The button toggles the boolean state when clicked
<button
  type="button"
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  aria-expanded={isMobileMenuOpen}
>
  {/* If open show X icon, if closed show hamburger Menu icon */}
  {isMobileMenuOpen ? <X /> : <Menu />}
</button>

// Step 5: Conditional rendering displays the mobile menu only when state is true
{isMobileMenuOpen && (
  <div className="md:hidden border-t ...">
    {/* Navigation links */}
  </div>
)}
```

### 2. Standard JavaScript Helper Utilities Explained

```typescript
// File: src/utils/queueHelpers.ts
// Standard JavaScript functions handling queue logic and LocalStorage:

// Function 1: Generate a random demo ticket number
export function generateTicketNumber(prefix: string = 'QZ'): string {
  // Generate random two-digit number between 10 and 99
  const randomDigits = Math.floor(10 + Math.random() * 90);
  // Return formatted string like "QZ-42"
  return `${prefix}-${randomDigits}`;
}

// Function 2: Calculate wait time based on queue position
export function calculateEstimatedWait(position: number, avgMinutesPerCustomer: number = 4): number {
  // If customer is first in line, wait is practically 0
  if (position <= 0) return 0;
  // If customer is next up, estimated wait is 2 minutes
  if (position === 1) return 2;
  // Otherwise multiply number of customers ahead by average service time
  return position * avgMinutesPerCustomer;
}

// Function 3: Store data in browser LocalStorage
export function saveToDemoStorage<T>(key: string, data: T): void {
  // Convert JavaScript object to JSON string and save
  localStorage.setItem(`Q0_${key}`, JSON.stringify(data));
}
```

### 3. Accessible Simple Mode Explained

Simple Mode is tailored for senior citizens, pensioners, and customers who are uncomfortable with complex mobile apps:
- Text is increased to 20px - 28px for readability.
- Screens present a maximum of 3 direct choices to prevent cognitive overload.
- Includes an Assisted Booking pathway so relatives or bank greeters can secure a ticket on someone else's behalf.
- 100% plain, clear English without confusing financial jargon.

---

## How to Run the Application Locally

### Prerequisites
- Node.js (version 18 or newer)
- npm (comes with Node.js)

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Check TypeScript types and build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

When `npm run dev` is running, open `http://localhost:5173` in your browser.

---

## Deployment to Vercel

The application is deployed using Vercel connected to GitHub:
- Continuous Deployment is active: every commit pushed to the `main` branch automatically triggers a new live build.
- `vercel.json` provides client-side single-page application (SPA) rewrite rules so that direct links to subpages (like `/branches` or `/simple-mode`) work without 404 errors.

---

## Project Roadmap

- [x] Phase 1: Project Setup, Tooling & Architecture Baseline (Completed)
- [x] Phase 2: Design System, Navigation, Landing Page & Simple Mode (Completed)
- [ ] Phase 3: Sample Bank Branch Discovery & Service Preparation Guidance
- [ ] Phase 4: Virtual Queue Simulation & LocalStorage Ticket Generation
- [ ] Phase 5: Complete Accessible Simple Mode with Assisted Booking Flow
- [ ] Phase 6: Staff Teller Queue Dashboard (Call Next, Served, Skip, Recall)
- [ ] Phase 7: Branch Queue Analytics and Statistics
- [ ] Phase 8: Testing, Edge Cases & Mobile Validation
- [ ] Phase 9: Final Deployment Documentation and Peer Review
- [ ] Phase 10: Bank Pilot Proposal & Live Demonstration Script
