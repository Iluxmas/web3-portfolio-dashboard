# Implementation Plan (Milestones)

Each milestone must result in a runnable application.
No broken states between steps.

---

## Milestone 0 — Project Initialization & Tooling

**Goal:** Stable dev environment with enforced code quality.

- [x] Initialize monorepo (frontend + backend)
- [x] Setup frontend:
  - [x] Vite + React + TypeScript
  - [x] Tailwind CSS
- [x] Setup backend:
  - [x] Node.js + Express
- [x] Configure:
  - [x] ESLint
  - [x] Prettier
  - [x] TypeScript strict mode
- [x] Setup Husky:
  - [x] pre-commit hook
  - [x] lint + format checks
- [x] Setup basic Docker configuration
- [x] Add `.env.example`
- [x] Verify:
  - [x] frontend starts (`npm run dev`)
  - [x] backend starts (`npm run dev`)

---

## Milestone 1 — Base App Skeleton (FSD)

**Goal:** App shell with correct architecture and routing.

- [x] Define Feature-Sliced Design (FSD) structure:
  - [x] `app`
  - [x] `pages`
  - [x] `widgets`
  - [x] `features`
  - [x] `entities`
  - [x] `shared`
- [x] Setup:
  - [x] app initialization layer
  - [x] global providers (QueryClient, Router)
- [x] Create base layout:
  - [x] header
  - [x] content area
- [x] Add placeholder home page
- [x] Verify:
  - [x] app renders layout correctly
  - [x] navigation works

---

## Milestone 2 — Wallet Connection (Read-only UI)

**Goal:** Wallet can connect and state is visible.

- [x] Integrate `viem`
- [x] Implement wallet connection logic
- [ ] Create Zustand store:
  - [ ] wallet address
  - [ ] connection status
- [ ] Create UI:
  - [ ] connect wallet button
  - [ ] connected state display
- [ ] Handle:
  - [ ] disconnect
  - [ ] rejected connection
- [ ] Verify:
  - [ ] wallet connects
  - [ ] state persists on refresh

---

## Milestone 3 — Network Validation

**Goal:** Correct network handling and user feedback.

- [ ] Detect current chain
- [ ] Validate Ethereum mainnet
- [ ] Handle wrong network case
- [ ] Display network error UI
- [ ] Store chain state in Zustand
- [ ] Verify:
  - [ ] network mismatch is detected
  - [ ] app recovers after switching network

---

## Milestone 4 — Backend API (Indexer Proxy)

**Goal:** Backend returns normalized portfolio data.

- [ ] Integrate indexer API (e.g. Covalent / Alchemy)
- [ ] Create backend endpoints:
  - [ ] `GET /portfolio/:address`
- [ ] Normalize response shape
- [ ] Add basic error handling
- [ ] Verify:
  - [ ] endpoint works independently
  - [ ] returns predictable JSON

---

## Milestone 5 — Portfolio Data (Read-only)

**Goal:** Display balances using TanStack Query.

- [ ] Setup TanStack Query
- [ ] Create query functions for portfolio data
- [ ] Connect frontend to backend API
- [ ] Map and normalize token balances
- [ ] Display:
  - [ ] ETH balance
  - [ ] ERC-20 token list
- [ ] Handle loading and error states
- [ ] Verify:
  - [ ] portfolio updates on wallet change

---

## Milestone 6 — Transaction History

**Goal:** Show recent wallet activity.

- [ ] Add backend endpoint:
  - [ ] `GET /transactions/:address`
- [ ] Add query for transactions
- [ ] Normalize transaction data
- [ ] Display transaction list:
  - [ ] direction
  - [ ] value
  - [ ] status
- [ ] Verify:
  - [ ] transactions load correctly
  - [ ] empty state works

---

## Milestone 7 — State Persistence & UX Polish

**Goal:** Stable app behavior across sessions.

- [ ] Persist wallet & chain state
- [ ] Improve loading states (skeletons)
- [ ] Improve error UI
- [ ] Handle edge cases:
  - [ ] wallet disconnect
  - [ ] API failure
- [ ] Verify:
  - [ ] app survives refresh
  - [ ] no broken states

---

## Milestone 8 — Testing Foundation

**Goal:** Core logic is test-covered.

- [ ] Setup Vitest
- [ ] Add tests for:
  - [ ] Zustand stores
  - [ ] data mappers / normalizers
  - [ ] query functions (mocked)
- [ ] Verify:
  - [ ] tests run in CI-like mode
  - [ ] no flaky tests

---

## Milestone 9 — Documentation & Cleanup

**Goal:** Repo is understandable and presentable.

- [ ] Update README:
  - [ ] setup instructions
  - [ ] architecture overview
  - [ ] FSD explanation
- [ ] Clean unused code
- [ ] Validate Docker setup
- [ ] Final manual QA

---

## Notes

- No milestone introduces unfinished or broken flows
- Each step extends the previous one
- Future features (multi-chain, NFTs, PnL) are intentionally excluded
