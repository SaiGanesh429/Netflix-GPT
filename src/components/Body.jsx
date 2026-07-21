import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";

import { Suspense, useEffect } from "react";
import "./Body.css";
import Header from "./Header/Header";
import Login from "./Login/login";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/redux/userSlice";
// import { Provider } from "react-redux";
// import appStore from "../utils/redux/appStore";

const Body = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    // The onAuthStateChanged API will be called when the user 
    // 1. signUp to the Account, 
    // 2. SignIn to the Account or 
    // 3. SignOut from the account


    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user,"setting to store")
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        console.log("set data to the store")
        // navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser())
        // navigate("/")
      }
    });
  }, []);


  return (

    <div className="body-container">
      <Login></Login>
    </div>

  );
};

export default Body;
