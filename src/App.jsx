import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { auth } from "./utils/firebase";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/redux/appStore";

const App = () => {


  // const navigate = useNavigate();

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





  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}> </RouterProvider>;
    </Provider>
  )
};

export default App;