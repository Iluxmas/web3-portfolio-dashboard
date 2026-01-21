import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Web3 Portfolio Dashboard
          </Link>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            {/* Future navigation items will go here */}
          </nav>
        </div>
      </div>
    </header>
  );
}
