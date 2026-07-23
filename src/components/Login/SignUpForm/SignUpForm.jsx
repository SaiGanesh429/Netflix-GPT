import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AVATAR_URL } from "../../../utils/constants/image_constants";
import { auth } from "../../../utils/firebase";
import { addUser } from "../../../utils/redux/userSlice";
import validateFormFields from "../../../utils/validateFormFields";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const handleSignUpForm = () => {
    const signUpFormErrors = validateFormFields(email.current.value, password.current.value)
    setFormErrors(signUpFormErrors);
    if (signUpFormErrors) return;

    // calling createUser with Email and Password FireBase API and registering the user
    createUserWithEmailAndPassword(auth, email.current.value,
      password.current.value
    ).then((userCredential) => {
      const user = userCredential.user;
      //Once the user is registered successfully,
      // updating the displayName and photo by calling the updateProfile predefined API given by firebase
      updateProfile(user,
        {
          displayName: displayName.current.value,
          photoURL: AVATAR_URL
        }
      ).then(() => {
        //After updating the name and photo,setting those details to the react Store
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      }).catch((error) => {
        setFormErrors(error.message);
      });
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFormErrors(errorMessage);
      });
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center p-4">
        <input
          ref={displayName} type="text"
          className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
          placeholder="Name"
        />
        <input
          ref={email} type="email"
          className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
          placeholder="Email or mobile number"
        />
        <input
          ref={password} type="password"
          className="m-4 w-64 h-10 text-white bg-gray-500 text-black p-2"
          placeholder="Password"
        />
        <label className="text-red-700 text-sm font-semibold">{formErrors}</label>
        <button
          className="cursor-pointer m-4 w-64 h-10 bg-red-600 text-white rounded border-solid border-2"
          type="submit" onClick={handleSignUpForm}>
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
