"use client";
import { useState } from "react";
import Link from "next/link";
import Signinform from "./Signinform";

export default function SignUpExact() {
    const [showForm, setShowForm] = useState(false);
  

  const [showPassword, setShowPassword] = useState(false);

  return (

    <>
    {!showForm? <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-black">
          Sign up
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-base text-gray-600">
          Create a free account with your email.
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
            />

            {/* Eye icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center text-gray-500"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Button */}
          <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition">
            Create your free account
          </button>

        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
          onClick={()=>setShowForm(true)}
          href="/auth" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div> : <Signinform />}
    </>
  
    
  );
}
