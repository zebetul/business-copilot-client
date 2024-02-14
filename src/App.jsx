import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Documents from "./pages/Documents";
import History from "./pages/History";
import InteractionRecord from "./pages/InteractionRecord";

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
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
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
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
