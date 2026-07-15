import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";

import { Suspense } from "react";
import "./Body.css";
import Header from "./Header/Header";
import Login from "./Login/login";

const Body = () => {
  return (
    <div class="body-container">
      <Login></Login>
    </div>
  );
};

export default Body;
