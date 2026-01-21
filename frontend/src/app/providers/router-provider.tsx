import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/home';

const router = createBrowserRouter([
  // Routes will be defined here
  {
    path: '/',
    element: <HomePage />,
  },
]);

export function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}
