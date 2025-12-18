"use client";
import { WandSparkles } from "lucide-react";
import {
  Camera,
  Heart,
  Glasses,
  Shapes,
  Eye,
  Settings,
  Upload,
  Wand2,
  CircleCheckBig,
  Plus,
  Star,
} from "lucide-react";

export default function TailwindColorsPage() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <section className="pt-8 pb-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_340px] items-start lg:pt-25">
            {/* LEFT TEXT */}
            <div>
              <h1 className=" text-4xl sm:text-5xl lg:text-7xl font-black  text-black ">
                Tailwind Colors
              </h1>

              <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600 lg:pt-4 lg:text-2xl">
                Create, preview and export your Tailwind CSS palette
              </p>
            </div>

            {/* SHOPIFY AD */}
            {/* <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-lg bg-black shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Shopify
                  </p>
                  <p className="mt-1 text-sm text-gray-600 leading-snug">
                    Turn your ideas into business. Start for free then pay{" "}
                    <span className="font-medium">$1/month</span> for 3 months.
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    ads via Carbon
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* ================= PALETTE HEADER ================= */}
        <section className="mb-5 lg:pt-15 flex items-center justify-between">
          <p className="text-sm lg:text-2xl sm:text-base font-semibold text-black">
            Palette 1 <span className="text-black">(Digital Blue)</span>
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-600 font-medium">Light</span>
            <div className="relative h-5 w-10 rounded-full bg-blue-600">
              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
            </div>
            <span className="text-gray-600">Dark</span>
          </div>
        </section>

        {/* ================= COLOR PALETTE ================= */}
        <section className="pb-7">
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-3">
            {[
              ["50", "#E5F0FF"],
              ["100", "#CCE0FF"],
              ["200", "#99C2FF"],
              ["300", "#66A3FF"],
              ["400", "#3385FF"],
              ["500", "#0066FF"],
              ["600", "#0052CC"],
              ["700", "#003D99"],
              ["800", "#002966"],
              ["900", "#001433"],
              ["950", "#000E24"],
            ].map(([shade, hex]) => (
              <div
                key={shade}
                className="rounded-md h-[110px] sm:h-[120px] lg:h-[110px] p-3 flex flex-col justify-between"
                style={{ backgroundColor: hex }}
              >
                {/* Shade number – top right */}
                <p className="text-sm sm:text-base font-semibold text-white text-right">
                  {shade}
                </p>

                {/* Hex value – bottom left */}
                <p className="text-xs text-center sm:text-sm font-medium text-white/70">
                  {hex.replace("#", "")}
                </p>
              </div>
            ))}
          </div>
          <div className="py-6">
            <h3>Example</h3>
          </div>

          {/* ================= first ROW ================= */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ================= LEFT CARD ================= */}
            <div className="rounded-2xl bg-[#CCE0FF] p-6 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">
                  <WandSparkles size={40} />
                </div>
                <h3 className="text-2xl lg:text-4xl  font-bold text-black">
                  Increase your revenue by 3x
                </h3>
                <p className="mt-3 lg:text-md text-black">
                  Our platform helps you close more deals and scale faster than
                  ever.
                </p>
              </div>

              <button className="mt-6 rounded-full bg-blue-600 py-3 text-white font-semibold hover:bg-(--color-hover-blue) transition">
                Start growing
              </button>
            </div>

            {/* ================= CATEGORIES ================= */}
            {/* <div className="rounded-2xl border border-gray-200 p-6">
              <h4 className="text-lg font-semibold mb-6">Categories</h4>

              <div className="grid grid-cols-4 gap-5 text-center">
                {[
                  "Grocery Stores",
                  "Cafe and Restaurants",
                  "Utilities",
                  "Sport",
                  "Taxi",
                  "Pharmacies",
                  "Telecom service",
                  "Gadgets",
                ].map((item, i) => (
                  <div key={i}>
                    <div className="mx-auto mb-2 h-14 w-14 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                      ⦿
                    </div>
                    <p className="text-xs font-medium text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
              <h4 className="mb-6 text-base sm:text-lg font-semibold text-black">
                Categories
              </h4>

              {/* 🔑 4 columns everywhere */}
              <div className="grid grid-cols-4 gap-y-6 gap-x-4 sm:gap-7 text-center">
                {/* Grocery */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-200">
                    <Camera className="text-blue-700" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    Grocery Stores
                  </p>
                </div>

                {/* Cafe */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-300">
                    <Heart className="text-blue-800" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    Cafe & Restaurants
                  </p>
                </div>

                {/* Utilities */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-100">
                    <Glasses className="text-blue-700" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Utilities
                  </p>
                </div>

                {/* Sport */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-200">
                    <Shapes className="text-blue-700" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Sport
                  </p>
                </div>

                {/* Taxi */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-300">
                    <Eye className="text-blue-800" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Taxi
                  </p>
                </div>

                {/* Pharmacies */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-100">
                    <Settings className="text-blue-700" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Pharmacies
                  </p>
                </div>

                {/* Telecom */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-200">
                    <Upload className="text-blue-700" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    Telecom service
                  </p>
                </div>

                {/* Gadgets */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-300">
                    <Wand2 className="text-blue-800" size={22} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Gadgets
                  </p>
                </div>
              </div>
            </div>

            {/* ================= PROGRESS ================= */}
            <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 space-y-6">
              {/* ITEM 1 */}
              <div className="flex gap-4">
                {/* ICON */}
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Camera className="text-white" size={22} />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm sm:text-base font-semibold text-black">
                      Home Renovation
                    </p>
                    <p className="text-sm sm:text-base font-semibold">
                      $10.000
                    </p>
                  </div>

                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[80%] bg-blue-600 rounded-full" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-gray-600">
                    <span>$8.250</span>
                    <span>$1.750</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* ITEM 2 */}
              <div className="flex gap-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-blue-400 flex items-center justify-center shrink-0">
                  <Glasses className="text-white" size={22} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm sm:text-base font-semibold">
                      Education & Courses
                    </p>
                    <p className="text-sm sm:text-base font-semibold">
                      $40.000
                    </p>
                  </div>

                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[55%] bg-blue-400 rounded-full" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-gray-600">
                    <span>$19.500</span>
                    <span>$20.500</span>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* ITEM 3 */}
              <div className="flex gap-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-blue-700 flex items-center justify-center shrink-0">
                  <Heart className="text-white" size={22} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm sm:text-base font-semibold">
                      Health & Wellness
                    </p>
                    <p className="text-sm sm:text-base font-semibold">$5.500</p>
                  </div>

                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[65%] bg-blue-700 rounded-full" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-gray-600">
                    <span>$3.000</span>
                    <span>$2.500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECOND ROW ================= */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Newsletter */}
            <div className="rounded-2xl border border-gray-200 p-6 space-y-4">
              <div className="bg-gray-100 rounded-xl p-8 hover:bg-(--color-hover-gray)">
                <p className="font-semibold lg:text-2xl">Newsletter</p>
                <p className="text-xs lg:text-base text-[#787878]">
                  Last message sent an hour ago
                </p>
              </div>

              <div className="rounded-xl border border-blue-500 bg-blue-50 p-8 flex justify-between items-center">
                <div>
                  <p className="font-semibold lg:text-2xl text-blue-700">
                    Existing customers
                  </p>
                  <p className="text-xs lg:text-base text-[#787878]">
                    Last message sent 2 weeks ago
                  </p>
                </div>
                <span className="h-6 w-6  text-blue-600 flex items-center justify-center text-xs">
                  <CircleCheckBig />
                </span>
              </div>

              <div className="bg-gray-100 rounded-xl p-8 hover:bg-(--color-hover-gray)">
                <p className="font-semibold lg:text-2xl">Trial users</p>
                <p className="text-xs lg:text-base text-[#787878]">
                  Last message sent 4 days ago
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <h4 className="text-lg font-semibold text-black">Schedule</h4>

                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                  <Plus />
                </button>
              </div>

              {/* Schedule Cards */}
              <div className="space-y-4">
                {/* ITEM 1 */}
                <div className="flex gap-4 rounded-xl bg-blue-100 p-4 sm:p-5">
                  {/* Left blue line */}
                  <div className="w-1 rounded-full bg-blue-600" />

                  {/* Time */}
                  <div className="min-w-[64px] text-blue-700">
                    <div className="text-2xl sm:text-3xl font-bold leading-none">
                      9:15
                    </div>
                    <div className="text-xs font-semibold uppercase">AM</div>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-blue-700">
                      Weekly Team Sync
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-700">
                      Quick check-in to align priorities and share updates for
                      the week.
                    </p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="flex gap-4 rounded-xl bg-blue-100 p-4 sm:p-5">
                  <div className="w-1 rounded-full bg-blue-800" />

                  <div className="min-w-[64px] text-blue-800">
                    <div className="text-2xl sm:text-3xl font-bold leading-none">
                      4:00
                    </div>
                    <div className="text-xs font-semibold uppercase">PM</div>
                  </div>

                  <div>
                    <p className="text-sm sm:text-base font-semibold text-blue-800">
                      Client Pitch Rehearsal
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-700">
                      Run through tomorrow's presentation and refine messaging
                      with the team.
                    </p>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="flex gap-4 rounded-xl bg-blue-100 p-4 sm:p-5">
                  <div className="w-1 rounded-full bg-blue-500" />

                  <div className="min-w-[64px] text-blue-500">
                    <div className="text-2xl sm:text-3xl font-bold leading-none">
                      7:30
                    </div>
                    <div className="text-xs font-semibold uppercase">PM</div>
                  </div>

                  <div>
                    <p className="text-sm sm:text-base font-semibold text-blue-500">
                      Product Design Review
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-gray-700">
                      Collaborative session to go over latest UI/UX proposals
                      and feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className="rounded-3xl bg-blue-100 p-4 sm:p-5 ">
              {/* IMAGE */}
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8fDA%3D"
                  alt="Sarah Jones"
                  className="w-full h-55 sm:h-65 lg:h-75 object-cover object-top"
                />
              </div>

              {/* INFO */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg lg:text-3xl font-bold text-black">
                    Sarah Jones
                  </h4>
                  <p className="text-sm text-gray-600">Product designer</p>
                </div>

                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                  Online
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {/* ================= REVENUE ================= */}
            {/* <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base sm:text-lg font-semibold">Revenue</h3>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-blue-600" />
                    Income
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-blue-400" />
                    Expenses
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-sm bg-blue-800" />
                    Savings
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold">$213.000</h2>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 font-medium">
                  +20%
                </span>
              </div>

              <div className="flex items-end gap-3 h-36">
                {[70, 45, 60, 80, 55, 65, 50].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-md bg-blue-600"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div> */}

            {/* ================= REVENUE ================= */}

            <div className="rounded-2xl border border-gray-200  p-6 flex flex-col bg-white">
              {/* HEADER */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base sm:text-lg font-semibold">Revenue</h3>

                <div className="flex items-center gap-4 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <span className="h-3 w-3 bg-blue-600 rounded-sm" />
                    Income
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-3 w-3 bg-blue-400 rounded-sm" />
                    Expenses
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-3 w-3 bg-blue-800 rounded-sm" />
                    Savings
                  </span>
                </div>
              </div>

              {/* VALUE */}
              <div className="mb-8 flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold">$213.000</h2>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm text-blue-600 font-medium">
                  +20%
                </span>
              </div>

              {/* ===== CHART GRID ===== */}
              <div className="grid grid-cols-5 gap-4 items-end h-40 md:h-62 ">
                {[
                  [80, 45, 65],
                  [70, 60, 55],
                  [55, 85, 70],
                  [65, 55, 45],
                  [85, 65, 50],
                ].map((group, i) => (
                  <div
                    key={i}
                    className="flex items-end justify-center gap-1.5 sm:gap-2 h-full"
                  >
                    <div
                      className="w-3 sm:w-4 rounded-t-md bg-blue-600"
                      style={{ height: `${group[0]}%` }}
                    />
                    <div
                      className="w-3 sm:w-4 rounded-t-md bg-blue-400"
                      style={{ height: `${group[1]}%` }}
                    />
                    <div
                      className="w-3 sm:w-4 rounded-t-md bg-blue-800"
                      style={{ height: `${group[2]}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* BASE LINE */}
              <div className="  bg-gray-200" />
            </div>

            {/* ================= PRICING ================= */}
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-lg font-semibold mb-6">Pricing plans</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* ================= INDIVIDUAL ================= */}
                <div className="rounded-2xl border border-[#6EA3FF] bg-gradient-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5">
                  {/* Icon */}
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Heart
                      className="text-[#0B57D0]"
                      size={22}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Individual
                    </h4>

                    <p className=" mt-2 text-3xl font-bold">
                      $0
                      <span className="ml-1 text-sm font-medium text-gray-600">
                        per month
                      </span>
                    </p>

                    <p className="mt-3 text-sm text-gray-600">
                      Perfect for freelancers or hobbyists starting out.
                    </p>
                  </div>

                  {/* Button */}
                  <button className="mt-4 rounded-full bg-[#0B57D0] py-2.5 text-white font-semibold hover:bg-[#0949B0] transition">
                    Get started
                  </button>
                </div>

                {/* ================= TEAM ================= */}
                <div className="rounded-2xl border border-[#6EA3FF] bg-gradient-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6   flex flex-col gap-5">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Eye className="text-[#0B57D0]" size={22} strokeWidth={2} />
                  </div>

                  <div>
                    <h4 className=" text-lg font-semibold text-black">Team</h4>

                    <p className="mt-2 text-3xl font-bold">
                      $99
                      <span className="ml-1 text-sm font-medium text-gray-600">
                        per month
                      </span>
                    </p>

                    <p className="mt-3 text-sm text-gray-600">
                      Ideal for growing teams that need collaboration tools.
                    </p>
                  </div>

                  <button className="mt-4 rounded-full bg-[#0B57D0] py-2.5 text-white font-semibold hover:bg-[#0949B0] transition">
                    Get started
                  </button>
                </div>

                {/* ================= ENTERPRISE ================= */}
                <div className="rounded-2xl border border-[#6EA3FF] bg-gradient-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5">
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Star
                      className="text-[#0B57D0]"
                      size={22}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <h4 className=" text-lg font-semibold text-black">
                      Enterprise
                    </h4>

                    <p className=" mt-2 text-3xl font-bold">
                      $199
                      <span className="ml-1 text-sm font-medium text-gray-600">
                        per month
                      </span>
                    </p>

                    <p className="mt-3 text-sm text-gray-600">
                      Designed for large organizations with custom needs.
                    </p>
                  </div>

                  <button className="mt-4 rounded-full bg-[#0B57D0] py-2.5 text-white font-semibold hover:bg-[#0949B0] transition">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECOND ROW ================= */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* ================= TICKETS ================= */}
            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-semibold">Tickets</h3>
              </div>

              {/* List */}
              <div className="divide-y">
                {[
                  { name: "Amy P.", status: "Open", time: "1 hrs" },
                  { name: "Sarah A.", status: "Open", time: "20 mins" },
                  { name: "Jessica P.", status: "Processing", time: "45 mins" },
                  { name: "James A.", status: "Closed", time: "2 days" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
          px-4 sm:px-6 py-4
          flex items-center justify-between
          gap-4
        "
                  >
                    {/* LEFT : Avatar + Name */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-10 w-10 rounded-full bg-gray-300 shrink-0" />
                      <p className="font-medium text-sm sm:text-base truncate">
                        {item.name}
                      </p>
                    </div>

                    {/* RIGHT : Status + Time + Menu */}
                    <div className="flex items-center gap-4 sm:gap-6 text-sm shrink-0">
                      {/* Status */}
                      <span
                        className="
              rounded-full
              bg-blue-100
              px-3 py-1
              text-xs sm:text-sm
              text-blue-600
              font-medium
              whitespace-nowrap
            "
                      >
                        {item.status}
                      </span>

                      {/* Time */}
                      <span className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                        {item.time}
                      </span>

                      {/* Dots */}
                      <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
                        …
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= CONTINUE WATCHING ================= */}
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h3 className="text-lg font-semibold mb-6">Continue Watching</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["UI / UX", "Front End Dev", "Sound Effects"].map((tag, i) => (
                  <div key={i}>
                    <div className="h-32 rounded-xl bg-gray-300 mb-3" />

                    <span className="inline-block mb-2 rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
                      {tag}
                    </span>

                    <p className="text-sm font-medium">
                      Design principles and tools for intuitive user interfaces.
                    </p>

                    <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
                      <div className="h-full w-2/3 rounded-full bg-blue-600" />
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gray-300" />
                      <span className="text-sm text-gray-600">Mentor</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "Total Subscribers", value: "71,842", change: "+12%" },
              { label: "Avg. Open Rate", value: "58.16%", change: "+2.02%" },
              { label: "Avg. Click Rate", value: "24.57%", change: "-4.05%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-6 bg-white"
              >
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600">
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
