import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { requestAccounts, getChainId } from '@shared/lib/viem';

type WalletState = {
  address: string | null;
  chainId: number | null;
  status: 'disconnected' | 'connecting' | 'connected' | 'error';
  connect: () => Promise<void>;
  disconnect: () => void;
  validateNetwork: () => Promise<void>;
};

export const useWalletStore = create<WalletState>()(
  persist(
    (set) => ({
      address: null,
      chainId: null,
      status: 'disconnected',
      connect: async () => {
        set({ status: 'connecting' });
        try {
          const [addr] = await requestAccounts();
          const chain = await getChainId();
          set({ address: addr, chainId: chain, status: 'connected' });
        } catch (e) {
          set({ status: 'error' });
          console.error(e);
        }
      },
      disconnect: () => {
        set({ address: null, chainId: null, status: 'disconnected' });
        // nothing to “call” on MetaMask; we just clear local state
      },
      validateNetwork: async () => {
        const chain = await getChainId();
        if (chain !== 1) {
          set({ status: 'error' });
          // optionally throw or keep a separate network‑error flag
        } else {
          set({ chainId: chain });
        }
      },
    }),
    { name: 'wallet' },
  ),
);
