import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Documents from "./pages/Documents";
import History from "./pages/History";

function App() {
  const [assistantResponse, setAssistantResponse] = useState("");

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
          element: (
            <Assistant
              setAssistantResponse={setAssistantResponse}
              assistantResponse={assistantResponse}
            />
          ),
        },
        {
          path: "/documents",
          element: <Documents />,
        },
        {
          path: "/history",
          element: <History />,
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
