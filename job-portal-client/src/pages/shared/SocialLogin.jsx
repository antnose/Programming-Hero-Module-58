import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn btn-outline w-full mb-4 flex items-center justify-center gap-2 bg-gray-700 text-white hover:bg-gray-600"
    >
      <i className="text-lg text-white">
        <FaGoogle />
      </i>
      <span>Continue with Google</span>
    </button>
  );
};

export default SocialLogin;
