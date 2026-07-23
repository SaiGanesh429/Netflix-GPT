import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "../Browse/Browse";

import { Suspense, useEffect } from "react";
import "./Body.css";
import Header from "../Header/Header";
import Login from "../Login/login";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/redux/userSlice";
// import { Provider } from "react-redux";
// import appStore from "../utils/redux/appStore";

const Body = () => {

  const dispatch = useDispatch();

  return (

    <div className="body-container">
      <Login></Login>
    </div>

  );
};

export default Body;
