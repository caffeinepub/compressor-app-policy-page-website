import { RouterProvider, createRouter, createRoute, createRootRoute, redirect, NotFoundRoute } from '@tanstack/react-router';
import PolicyPage from './pages/PolicyPage';

const rootRoute = createRootRoute({
  component: () => <PolicyPage />
});

const policyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/policy',
  component: PolicyPage
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    throw redirect({ to: '/policy' });
  }
});

// Catch-all route for 404s - redirect to policy page
const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => {
    // Redirect to policy page on unknown routes
    if (typeof window !== 'undefined') {
      window.location.href = '/policy';
    }
    return null;
  }
});

const routeTree = rootRoute.addChildren([policyRoute, indexRoute]);

const router = createRouter({ 
  routeTree,
  notFoundRoute,
  defaultPreload: 'intent'
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
