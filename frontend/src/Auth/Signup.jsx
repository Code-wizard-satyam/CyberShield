import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side: Login Content */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-purple-700 relative">
        {/* Logo - positioned at corner */}
        <div className="absolute top-0 left-0">
          <span className="text-3xl font-bold text-cyan-400 mr-1">cyber</span>
          <span className="text-3xl font-bold text-fuchsia-500">.shield</span>
        </div>
        <div className="w-full max-w-md p-8 flex flex-col items-center">
          {/* Welcome Text */}
          <h2 className="text-white text-3xl font-bold mb-4 text-center">Welcome Back!</h2>
          <p className="text-purple-200 text-center mb-8">
            To keep connected with us keep login with your personal information
          </p>
          {/* Sign In Button */}
          <button className="mt-4 px-8 py-2 border-2 border-purple-200 text-purple-200 rounded-full hover:bg-purple-800 transition-all" onClick={handleSignIn}>
            SIGN IN
          </button>
        </div>
      </div>
      {/* Right Side: Signup Form */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white min-h-screen">
        <div className="w-full max-w-md p-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-2 text-black text-center">Create Account</h2>
          <p className="text-gray-500 text-center mb-8">
            Create your account and be part of the mission to secure cyberspace
          </p>
          <form className="w-full flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded bg-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="User Name"
              className="w-full px-4 py-3 rounded bg-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded bg-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button type="submit" className="mt-4 px-8 py-2 bg-cyan-400 text-white rounded-full font-semibold hover:bg-cyan-500 transition-all">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup; 