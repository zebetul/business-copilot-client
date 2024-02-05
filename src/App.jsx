import { createBrowserRouter } from "react-router-dom";

createBrowserRouter([
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/about",
        component: About,
      },
      {
        path: "/contact",
        component: Contact,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <h1>Hello, world!</h1>
    </>
  );
}

export default App;
