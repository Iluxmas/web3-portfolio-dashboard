import { QueryProvider, RouterProvider } from './providers';
import './styles';

export function App() {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
}
