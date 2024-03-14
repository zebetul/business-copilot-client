import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DarkModeProvider } from "./context/DarkModeContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import Loading from "./ui/Loading";
import ErrorBoundaryLayout from "./ui/ErrorBoundaryLayout";
import CustomToaster from "./ui/CustomToaster";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Assistant = lazy(() => import("./pages/Assistant"));
const Documents = lazy(() => import("./pages/Documents"));
const History = lazy(() => import("./pages/History"));
const InteractionRecord = lazy(() => import("./pages/InteractionRecord"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 0,
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
        },
        {
          path: "/signup",
          element: <SignUp />,
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
              element: <Assistant />,
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
        <ReactQueryDevtools />

        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
          <CustomToaster />
        </Suspense>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
