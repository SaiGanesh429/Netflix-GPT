import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { Suspense } from "react";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: (
        <Suspense>
          <Browse />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={appRouter}> </RouterProvider>;
};

export default App;