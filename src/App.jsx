import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DarkModeProvider } from "./context/DarkModeContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Assistant from "./pages/Assistant";
import Documents from "./pages/Documents";
import History from "./pages/History";
import InteractionRecord from "./pages/InteractionRecord";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
      path: "/",
      element: <Login />,
    },
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
  ]);

  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

        <RouterProvider router={router} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
