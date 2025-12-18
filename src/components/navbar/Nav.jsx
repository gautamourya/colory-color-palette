// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <header className="sticky top-0 z-50 w-full  bg-white">
//         <div className="mx-auto max-w-7xl ">
//           <div className="flex h-16 items-center justify-between">

//             {/* LOGO (proper left spacing) */}
//             <Link
//               href="/"
//               className="text-2xl font-black tracking-tight text-blue-600"
//             >
//               COOLORS
//             </Link>

//             {/* RIGHT MENU */}
//             <nav className="hidden md:flex items-center gap-2">
//               {/* Tools */}
//               <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-hover-color">
//                 Tools <ChevronDown size={16} />
//               </button>

//               {/* Go Pro */}
//               <Link
//                 href="/pro"
//                 className="rounded-md px-3 py-2 text-sm font-semibold text-pink-500 hover:bg-[#FCE7F3] transition"
//               >
//                 Go Pro
//               </Link>

//               {/* Sign in */}
//               <Link
//                 href="/login"
//                 className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-hover-color transition"
//               >
//                 Sign in
//               </Link>

//               {/* Sign up */}
//               <Link
//                 href="/signup"
//                 className="ml-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
//               >
//                 Sign up
//               </Link>
//             </nav>

//             {/* MOBILE MENU ICON */}
//             <button
//               onClick={() => setOpen(true)}
//               className="md:hidden"
//               aria-label="Open menu"
//             >
//               <Menu size={26} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ================= OVERLAY ================= */}
//       {open && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       {/* ================= MOBILE DRAWER ================= */}
//       <aside
//         className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm bg-white transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Drawer Header */}
//         <div className="flex h-16 items-center justify-between border-b px-6">
//           <span className="text-xl font-black text-blue-600">COOLORS</span>
//           <button onClick={() => setOpen(false)}>
//             <X size={24} />
//           </button>
//         </div>

//         {/* Drawer Links */}
//         <div className="px-6 py-6 space-y-5 text-lg font-semibold">
//           <Link href="/" className="block text-cyan-500">
//             Palette Generator
//           </Link>
//           <Link href="/explore" className="block text-pink-500">
//             Explore Palettes
//           </Link>
//           <Link href="/image-picker" className="block text-orange-500">
//             Image Picker
//           </Link>
//           <Link href="/contrast-checker" className="block text-blue-500">
//             Contrast Checker
//           </Link>
//           <Link href="/visualizer" className="block text-yellow-500">
//             Palette Visualizer
//           </Link>
//           <Link href="/color-picker" className="block text-green-500">
//             Color Picker
//           </Link>

//           <Link href="/tailwind-colors" className="block text-purple-500">
//             Tailwind Color
//             <span className="ml-2 rounded border border-purple-500 px-2 py-0.5 text-xs">
//               NEW
//             </span>
//           </Link>

//           <Link href="/color-bot" className="block text-red-500">
//             Color Bot
//             <span className="ml-2 rounded border border-red-500 px-2 py-0.5 text-xs">
//               NEW
//             </span>
//           </Link>
//         </div>
//       </aside>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ToolsMenu from "../navbar/ToolsMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white relative">
        {/* FULL WIDTH CONTAINER */}
        <div className="w-full px-4 md:px-6">
          <div className="flex h-16 items-center  flex-row-reverse md:flex-row justify-between">
            {/* LOGO — LEFT EDGE */}
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-blue-600"
            >
              COLORY
            </Link>

            {/* RIGHT MENU — RIGHT EDGE */}
            <nav className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="hidden lg:flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
              >
                Tools{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    toolsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <Link
                href="/pro"
                className="rounded-md px-3 py-2 text-base font-semibold text-pink-500 hover:bg-pink-50 transition"
              >
                Go Pro
              </Link>

              <Link
                href="/auth"
                className="rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                Sign in
              </Link>

              <Link
                href="/auth"
                className="ml-1 rounded-md bg-blue-600 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 transition"
              >
                Sign up
              </Link>
            </nav>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {toolsOpen && (
          <div className="hidden lg:block">
            <ToolsMenu open={toolsOpen} />
          </div>
        )}
      </header>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}
      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm bg-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Content */}
        <div
          onClick={() => setOpen(false)}
          className="h-[calc(100%-4rem)] overflow-y-auto  [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-6 py-6 space-y-6 "
        >
          {/* TOOLS */}
          <div className="space-y-5 text-xl font-semibold ">
            <Link href="/" className="block text-cyan-500">
              Palette Generator
            </Link>

            <Link href="/explore" className="block text-pink-500">
              Explore Palettes
            </Link>

            <Link href="/image-picker" className="block text-orange-500">
              Image Picker
            </Link>

            <Link href="/contrast-checker" className="block text-blue-500">
              Contrast Checker
            </Link>

            <Link href="/visualizer" className="block text-yellow-500">
              Palette Visualizer
            </Link>

            <Link href="/color-picker" className="block text-green-500">
              Color Picker
            </Link>

            <Link
              href="/tailwindcolor"
              className="flex items-center gap-2 text-purple-500"
            >
              Tailwind Color
              <span className="rounded-full border border-purple-500 px-2 py-0.5 text-xs font-bold">
                NEW
              </span>
            </Link>

            <Link
              href="/color-bot"
              className="flex items-center gap-2 text-red-500"
            >
              Color Bot
              <span className="rounded-full border border-red-500 px-2 py-0.5 text-xs font-bold">
                NEW
              </span>
            </Link>
          </div>

          {/* DISCOVER */}
          <div className="pt-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Discover
            </p>

            <div className="space-y-4 text-lg text-gray-900">
              <Link href="/colors" className="block">
                List of colors
              </Link>
              <Link href="/gradients" className="block">
                Browse Gradients
              </Link>
              <Link href="/create-gradient" className="block">
                Create a Gradient
              </Link>
              <Link href="/gradient-palette" className="block">
                Make a Gradient Palette
              </Link>
              <Link href="/image-converter" className="block">
                Image Converter
              </Link>
              <Link href="/image-recolor" className="block">
                Image Recolor
              </Link>
              <Link href="/collage-maker" className="block">
                Collage Maker
              </Link>
              <Link href="/fonts" className="block">
                Free Fonts
              </Link>
              <Link href="/font-generator" className="block">
                Font Generator
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
