import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Side: Login */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-purple-700">
        <div className="w-full flex-1 flex flex-col justify-center items-center">
          <Login />
        </div>
      </div>
      {/* Right Side: Signup */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white">
        <div className="w-full flex-1 flex flex-col justify-center items-center">
          <Signup />
        </div>
        {/* Toggle for mobile */}
        <div className="md:hidden mb-6">
          {!isSignIn && (
            <button
              className="text-fuchsia-500 underline"
              onClick={() => setIsSignIn(true)}
            >
              Already have an account? Sign In
            </button>
          )}
        </div>
      </div>
      {/* Desktop toggle inside panels */}
      <div className="hidden md:block absolute w-full top-8 left-0 text-center z-10">
        {!isSignIn && (
          <button
            className="text-fuchsia-500 underline"
            onClick={() => setIsSignIn(true)}
          >
            Already have an account? Sign In
          </button>
        )}
      </div>
      {/* Hide panels based on toggle */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:w-1\/2 { display: flex !important; }
          .md\\:hidden { display: none !important; }
          .md\\:block { display: block !important; }
        }
        @media (max-width: 767px) {
          .md\\:w-1\/2 { width: 100% !important; }
        }
        .md\\:w-1\/2 { width: 100%; }
        .md\\:hidden { display: none; }
        .md\\:block { display: block; }
      `}</style>
    </div>
  );
};

export default AuthPage; 