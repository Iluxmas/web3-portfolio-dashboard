import { createPublicClient, http, createWalletClient } from 'viem';
import { mainnet } from 'viem/chains';

// a read‑only RPC client for requests to your backend/indexer,
// or (later) for on‑chain reads if you go that route
export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(
    import.meta.env.VITE_RPC_URL ?? 'https://mainnet.infura.io/v3/...',
  ),
});

// the connector we'll use to talk to MetaMask, Trust, etc.
export const client = createPublicClient({ chain: mainnet, transport: http() });

// returns a wallet client bound to whatever provider the user has injected
export function getWalletClient() {
  return createWalletClient({
    chain: mainnet,
    transport: client.connect(), // this returns a provider
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
