# Web3 Portfolio Dashboard

## Overview
Web3 Portfolio Dashboard is a pet project aimed at learning modern Web3 frontend architecture and data flows.  
The project focuses on production-style frontend engineering rather than DeFi or protocol complexity.

The app allows a user to connect a wallet and view their on-chain portfolio and recent activity using an indexer API.

---

## Goals
- Learn Web3 data access patterns using indexer APIs
- Practice scalable frontend architecture with React and TypeScript
- Apply proper async state management with Zustand and TanStack Query
- Build testable, maintainable frontend logic
- Use Docker for reproducible local development

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand (application and UI state)
- TanStack Query (async data fetching and caching)
- viem (wallet and RPC interactions)
- Vitest (unit testing)

### Backend
- Node.js
- Express
- Indexer API (e.g. Covalent or Alchemy)
- Docker

---

## Architecture Principles
- **Read operations**: Frontend → Backend → Indexer API
- **Write operations (wallet actions)**: Frontend → Wallet (via viem)
- Zustand manages wallet, chain, and UI state
- TanStack Query manages async data and caching
- Single-chain support (Ethereum mainnet) with multi-chain extensibility in mind

---

## MVP v0 — Feature Scope

### 1. Wallet Connection
- Connect injected wallet (MetaMask)
- Display connected wallet address (shortened)
- Handle:
  - disconnected state
  - rejected connection
  - unsupported network

---

### 2. Network Handling
- Ethereum mainnet only
- Detect and handle wrong network
- Display clear error state when network is unsupported

---

### 3. Portfolio Overview
- Display native ETH balance
- Display ERC-20 token balances:
  - symbol
  - balance
  - correct decimals handling
- Loading and empty states

---

### 4. Transaction History
- Display recent transactions for the connected wallet:
  - transaction hash
  - timestamp
  - direction (incoming / outgoing)
  - value
  - status (success / failed)
- Limited list (e.g. last 10–20 transactions)

---

### 5. Backend API (Minimal)
- Proxy requests to the indexer API
- Hide API keys from the frontend
- Normalize indexer responses
- Minimal endpoints:
  - `GET /portfolio/:address`
  - `GET /transactions/:address`

No authentication or database in MVP v0.

---

### 6. State Management

#### Zustand
- Wallet connection state
- Selected chain
- UI state (errors, modals, loading flags)
- Persist wallet-related state to localStorage

#### TanStack Query
- Portfolio data
- Transaction history
- Automatic refetch on wallet or network change

---

### 7. Error Handling
- Wallet connection rejection
- Network mismatch
- Indexer API errors
- Rate limiting
- Graceful fallback UI states

---

### 8. Testing (Minimum Required)
- Zustand stores (pure logic)
- Data normalization and mapping utilities
- Query functions with mocked backend responses

UI snapshot testing is not required for MVP v0.

---

### 9. Developer Experience
- Dockerized frontend and backend
- `.env.example` files
- Typed environment variables
- README documentation:
  - project setup
  - architecture overview
  - known limitations

---

## Explicit Non-Goals for MVP v0
- NFT support
- Fiat prices or PnL calculations
- Multi-chain UI
- Multiple wallet management
- User authentication
- Smart contract development

---

## Success Criteria
- Wallet connection works reliably
- Portfolio and transaction data load correctly
- Application handles refreshes and disconnects gracefully
- Clear separation between state management and async data
- Codebase is readable, testable, and easy to extend
