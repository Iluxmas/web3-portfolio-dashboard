import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  // Routes will be defined here
  {
    path: '/',
    element: <div>Home Page Placeholder</div>,
  },
]);

export function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}
