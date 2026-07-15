import { useState } from "react";
import Header from "../Header/Header";
import "./Login.css";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div className="login-page">
      <div className="main-background-image">
        <img
          className="h-screen w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/IN-en-20260706-TRIFECTA-perspective_2f2fae68-6962-4d52-8cc2-1fe6ef5c6a56_large.jpg"
          alt="Background"
        />

        <Header></Header>

        <div className="p-24 absolute bg-white login-container">
          <h1 className="text-white header text-xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? <SignInForm /> : <SignUpForm />}
          {isSignInForm ? (
            <div
              className="text-white"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              New to Netflix ? SignUp Now
            </div>
          ) : (
            <div
              className="text-white"
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
