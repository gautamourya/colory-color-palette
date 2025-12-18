



import React, { useState } from "react";
import Link from "next/link";
import Signupform from "./Signupform";
import ResetPassword from "./ResetPassword";

const Signinform = () => {
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showPass, setShowPass] = useState(false);


  

  return (
    <>
      {!showForm ? (
        <div className="w-full max-w-sm text-center mx-auto mt-10">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-black">
            Sign in
          </h1>

          <p className="mt-2 text-base text-gray-600">
            Sign in with your email here.
          </p>

          {/* Form */}
          <div className="mt-6 space-y-4">
            {/* Email */}
            <input
              type="text"
              placeholder="Email / Username"
              className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-500"
            />

            {/* Password with show icon */}
            <div className="relative w-full">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 text-gray-700 focus:outline-none focus:border-blue-500"
              />

              {/* Eye icon toggle */}
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPass ? <span>🙈</span> : <span>👁️</span>}
              </button>
            </div>

            {/* Sign In Button */}
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
              Sign in
            </button>
          </div>

          {/* Links */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Forgot password?{" "}
              <button 
                onClick={() =>
                   {setShowForm(true) 
                    setShowResetPassword(true)}}
                className="text-blue-600 hover:underline">
                Reset
              </button>
            </p>
            <p className="mt-2">
              Don&apos;t have an account?{" "}
              <button
                onClick={() =>{
                  setShowResetPassword(false)
                   setShowForm(true)
                }}
                className="text-blue-600 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      ) : (
        showResetPassword ? <ResetPassword  /> : <Signupform />
      )}
    </>
  );
};

export default Signinform;
