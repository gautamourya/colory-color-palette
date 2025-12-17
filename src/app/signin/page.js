"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function Signin() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="flex min-h-screen">

        {/* ================= LEFT AUTH PANEL ================= */}
        <section className="relative flex w-full flex-col items-center justify-center px-6 sm:px-8 lg:w-1/2">

          {/* Close button */}
          <Link
            href="/"
            className="absolute left-6 top-6 rounded-md p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </Link>

          {/* Content */}
          <div className="w-full max-w-sm text-center">
            <h1 className="text-4xl font-black text-black">
              Hello!
            </h1>

            <p className="mt-4 text-base text-gray-600">
              Use your email or another service to continue with Coolors.
            </p>

            {/* Buttons */}
            <div className="mt-8 space-y-3">

              {/* Google */}
              <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-gray-100 py-3 font-semibold hover:bg-gray-200 transition">
                <span className="text-lg font-bold">G</span>
                Continue with Google
              </button>

              {/* Apple */}
              <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-gray-100 py-3 font-semibold hover:bg-gray-200 transition">
                <span className="text-lg"></span>
                Continue with Apple
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <span className="h-px flex-1 bg-gray-200" />
                <span className="text-xs font-medium text-gray-400">OR</span>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Email */}
              <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition">
                Continue with email
              </button>
            </div>

            {/* Footer text */}
            <p className="mt-10 text-xs text-gray-500 leading-relaxed">
              By continuing, you agree to our{" "}
              <Link href="#" className="underline">
                Terms of Service
              </Link>
              . Read our{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ================= RIGHT GRADIENT (DESKTOP ONLY) ================= */}
        <section className="relative hidden lg:block lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-400 to-yellow-400" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
        </section>

      </div>
    </main>
  );
}
