import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/redux/userSlice";
import { NETFLIX_LOGO } from "../../utils/constants/image_constants";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector(store => store.user);


  const handleSignOut = () => {
    signOut(auth).then(() => { })
      .catch((error) => { });
  }


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
    <div className="flex justify-between h-24">
      <div className="">
        <img
          className="w-56 p-8 pl-12"
          src={NETFLIX_LOGO}
        />
      </div>
      <div className="flex w-[70%] flex-row justify-between text-center items-center text-base font-bold">
        <div>Home</div>
        <div>About Us</div>
        <div>Movies</div>
        <div>Web Series</div>
        <div>Welcome, {userDetails?.displayName}</div>

      </div>
      <div className="w-[9%] h-[20%]">
        <img
          className="w-56 p-8 pl-12"
          src={userDetails?.photoURL} />
      </div>
      {
        userDetails && (
          <div className="flex items-center justify-center text-center text-white bg-[#e50914] m-2 mt-8 w-16 h-8 text-[12px]"><button onClick={handleSignOut}>Sign Out</button></div>
        )
      }
    </div>
  );
};


export default Header;