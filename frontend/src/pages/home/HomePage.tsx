import { BaseLayout } from '@/shared/ui/layout';

export function HomePage() {
  return (
    <BaseLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Web3 Portfolio Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Track your Web3 investments and portfolio performance
        </p>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>📊 Portfolio Overview</li>
            <li>💰 Asset Tracking</li>
            <li>📈 Performance Analytics</li>
            <li>🔗 Wallet Integration</li>
            <li>🔔 Price Alerts</li>
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
}
