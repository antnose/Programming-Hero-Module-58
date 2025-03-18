import Lottie from "lottie-react";
import registerAnimationData from "../../assets/lottie/register.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const [error, setError] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;
    console.log(name, email, userName, password, rePassword);

    if (password === rePassword) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6 relative overflow-hidden">
      {/* Lottie Animation Background */}
      <div className="absolute inset-0 z-0 opacity-30 ">
        <Lottie
          animationData={registerAnimationData}
          className="w-full h-full"
          loop={true}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
      </div>

      {/* Register Form */}
      <div className="bg-transparent p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 relative z-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-100 mb-2 text-center">
          Start for free Today
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Access to all features No credit card required
        </p>

        {/* Google Sign-Up Button */}
        <SocialLogin />

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-gray-400">Or continue with</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleRegisterUser} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Username
            </label>
            <input
              name="userName"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your username"
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
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Re-Password Field */}
          <div>
            <p>{error ? "Password must be same" : ""}</p>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Re-Password
            </label>
            <input
              name="rePassword"
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Re-enter your password"
              required
            />
          </div>

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
