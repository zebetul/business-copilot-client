import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Documents, {
  loader as documentsLoader,
} from "./pages/documents/Documents";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/documents",
        element: <Documents />,
        loader: documentsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
