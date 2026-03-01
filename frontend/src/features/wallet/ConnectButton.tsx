import { useWalletStore } from '@app/providers/wallet-store';

export function ConnectButton() {
  const { address, status, connect, disconnect } = useWalletStore();
  if (status === 'connected' && address) {
    return (
      <button onClick={disconnect}>
        {address.slice(0, 6)}…{address.slice(-4)} (disconnect)
      </button>
    );
  }
  return <button onClick={connect}>Connect wallet</button>;
}
