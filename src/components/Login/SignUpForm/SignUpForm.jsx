import { useRef, useState } from "react";
import validateFormFields from "../../../utils/validateFormFields";

const SignUpForm = () => {

  const [formErrors, setFormErrors] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUpForm = () => {
    const signUpFormErrors = validateFormFields(email.current.value, password.current.value)
    setFormErrors(signUpFormErrors);
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center p-4">
        <input

          className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
          type="text"
          placeholder="Name"
        />
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
          type="submit" onClick={handleSignUpForm}
        >
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
