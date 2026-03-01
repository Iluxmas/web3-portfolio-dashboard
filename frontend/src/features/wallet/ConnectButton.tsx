import { useWalletStore } from '@app/providers/wallet-store';

export function ConnectButton() {
  const { address, status, connect, disconnect } = useWalletStore();
  const hasProvider =
    typeof window !== 'undefined' && (window as any).ethereum !== undefined;

  if (status === 'connecting') {
    return (
      <button disabled className="opacity-50 cursor-not-allowed">
        Connecting…
      </button>
    );
  }

  if (status === 'error') {
    if (!hasProvider) {
      return (
        <a
          href="https://metamask.io/download.html"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-400 underline"
        >
          Install a wallet
        </a>
      );
    }

    return (
      <button onClick={connect} className="text-red-500">
        Retry connect
      </button>
    );
  }

  if (status === 'connected' && address) {
    return (
      <button onClick={disconnect} className="font-mono">
        {address.slice(0, 6)}…{address.slice(-4)} (disconnect)
      </button>
    );
  }

  return <button onClick={connect}>Connect wallet</button>;
}
