import { FaGoogle } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnimationData from "../../assets/lottie/loginjson.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log("sign in", result.user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6 relative overflow-hidden">
      {/* Lottie Animation Background (Full Page) */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Lottie
          animationData={loginAnimationData}
          className="w-full h-full"
          loop={true}
        />
      </div>

      {/* Login Form (Left Side) */}
      <div className="bg-transparent p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 relative z-10 mx-4">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-100 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Sign in to continue to your account
        </p>

        {/* Google Sign-In Button */}
        <button className="btn btn-outline w-full mb-4 flex items-center justify-center gap-2 bg-gray-700 text-white hover:bg-gray-600">
          <i className="text-lg text-white">
            <FaGoogle />
          </i>
          <span>Sign in with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">Or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-amber-900 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full px-4 py-2 border border-amber-900 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:text-blue-400 text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-400">Don't have an account?</span>
          <a href="#" className="text-blue-500 hover:text-blue-400 ml-2">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
