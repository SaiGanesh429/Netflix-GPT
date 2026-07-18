import { useRef, useState } from "react";
import validateFormFields from "../../../utils/validateFormFields";

const SignInForm = () => {
  const [formErrors, setFormErrors] = useState(null);
  const email = useRef(null);
  const password = useRef(null);


  const validateSignInForm = () => {
    const signInFormErrors = validateFormFields(email.current.value, password.current.value);
    console.log(signInFormErrors);
    setFormErrors(signInFormErrors);

  };

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col items-center p-4"
    >
      <input
        ref={email}
        className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
        type="email"
        placeholder="Email or mobile number"
      />
      <input
        ref={password}
        className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
        type="password"
        placeholder="Password"
      />
      <label className="text-red-700 text-sm font-semibold">{formErrors}</label>
      <button
        className="m-4 w-64 h-10 bg-red-600 text-white rounded border-solid border-2"
        type="submit"
        onClick={validateSignInForm}
      >
        Login
      </button>
    </form>
  );
};

export default SignInForm;
