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

### 4.
