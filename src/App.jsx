import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DarkModeProvider } from "./contexts/DarkModeContext";
import { CompanyProvider } from "./contexts/CompanyContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import ErrorBoundaryLayout from "./ui/ErrorBoundaryLayout";
import CustomToaster from "./ui/CustomToaster";

import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Assistant from "./pages/Assistant";
import Documents from "./pages/Documents";
import History from "./pages/History";
import InteractionRecord from "./pages/InteractionRecord";
import PageNotFound from "./pages/PageNotFound";
import Company from "./pages/Company";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // refetchOnWindowFocus: false
        staleTime: 0,
        retry: false,
      },
    },
  });

  const router = createBrowserRouter([
    {
      element: <ErrorBoundaryLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
          index: true,
        },
        {
          element: (
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/",
              element: <Company />,
            },
            {
              path: "/company",
              element: <Company />,
            },
            {
              path: "/assistant",
              element: <Assistant />,
            },
            {
              path: "/documents",
              element: <Documents />,
            },

            {
              path: "/history",
              element: <History />,
            },
            {
              path: "/history/:id",
              element: <InteractionRecord />,
            },
          ],
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <CompanyProvider>
          <ReactQueryDevtools />

          <RouterProvider router={router} />
          <CustomToaster />
        </CompanyProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
