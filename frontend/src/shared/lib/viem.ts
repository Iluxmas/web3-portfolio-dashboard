import { createPublicClient, http, createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

// a read‑only RPC client for requests to your backend/indexer,
// or (later) for on‑chain reads if you go that route
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    import.meta.env.VITE_RPC_URL ?? 'https://mainnet.infura.io/v3/...',
  ),
});

// helper for wallet interactions; we don't need a standalone public
// client here since we just wrap the injected provider directly.

// returns a wallet client bound to whatever provider the user has injected
export function getWalletClient() {
  if (typeof window === 'undefined' || !(window as any).ethereum) {
    throw new Error('No Ethereum provider available');
  }
  return createWalletClient({
    chain: mainnet,
    transport: custom((window as any).ethereum),
  });
}

// helpers you might reuse
export async function requestAccounts() {
  const wallet = getWalletClient();
  return wallet.request({ method: 'eth_requestAccounts' }) as Promise<string[]>;
}

export async function getChainId() {
  const wallet = getWalletClient();
  return wallet.getChainId();
}
