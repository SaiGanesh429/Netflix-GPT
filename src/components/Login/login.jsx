import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import "./Login.css";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import { MAIN_BACKGROUND_IMAGE, NETFLIX_LOGO } from "../../utils/constants/image_constants"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    // The onAuthStateChanged API will be called when the user 
    // 1. signUp to the Account, 
    // 2. SignIn to the Account or 
    // 3. SignOut from the account

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe();

  }, []);


  return (
    <div className="login-page">
      <div className="main-background-image">
        <img
          className="h-screen w-full"
          src={MAIN_BACKGROUND_IMAGE}
          alt="Background"
        />

        <div className="side-logo absolute top-0 bg-gradient-to-b from-black">
          <img
            className="w-56 p-8 pl-12"
            src={NETFLIX_LOGO}
          />
        </div>

        <div className="p-24 absolute bg-white login-container">
          <h1 className="text-white header text-xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? <SignInForm /> : <SignUpForm />}
          {isSignInForm ? (
            <div
              className="text-white cursor-pointer"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              New to Netflix ? SignUp Now
            </div>
          ) : (
            <div
              className="text-white cursor-pointer"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              Already have an account? Sign In
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
