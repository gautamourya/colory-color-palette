"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Signinform from "./Signinform";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [showForm, setShowForm] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call later
    console.log({
      email,
      password,
    });
  };

  return (
    <>
{!showForm ?   <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md ">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-center font-black text-black">
          Reset password
        </h1>
        <p className="mt-2 text-center text-gray-600 ">
          Enter your email address below and choose a new password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 mt-6 ">
              Email / Username
            </label>
            <input
              type="email"
              placeholder="john@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Choose a new password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Min 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm pr-12 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Send reset link
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6">
          Back to{" "}
          <button
            onClick={() => setShowForm(true)}
            className="text-blue-600 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div> : <Signinform /> }

    </>
 
  );
}
