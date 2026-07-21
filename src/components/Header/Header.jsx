import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const userDetails = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {

    });
  }



  return (
    <div className="flex justify-between h-24">
      <div className="">
        <img
          className="w-56 p-8 pl-12"
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAeuLioOK1ZSC8bQbffYbz1gZFxugAQdkx7UsMvqKDtFJLk3EWkpY-w8IBimYy_0xmg1aTzugh7JDHsGzv6hqIL9_qklFo-PFSH81MwCe9rokU4kGkdki.svg"
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