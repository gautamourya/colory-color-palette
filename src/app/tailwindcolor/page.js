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
                <div
                  className="rounded-2xl border border-[#6EA3FF] bg-gradient-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5"
                >
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
                <div
                  className="rounded-2xl border border-[#6EA3FF] bg-gradient-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6   flex flex-col gap-5"

                >
                  <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                    <Eye className="text-[#0B57D0]" size={22} strokeWidth={2} />
                  </div>

                  <div>
                    <h4 className=" text-lg font-semibold text-black">
                      Team
                    </h4>

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
                <div
                  className="rounded-2xl border border-[#6EA3FF] bg-gradient-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5"
                >
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
            <div className="rounded-2xl border border-gray-200 bg-white">
              <h3 className="p-6 text-lg font-semibold border-b">Tickets</h3>

              <div className="divide-y">
                {[
                  { name: "Amy P.", status: "Open", time: "1 hrs" },
                  { name: "Sarah A.", status: "Open", time: "20 mins" },
                  { name: "Jessica P.", status: "Processing", time: "45 mins" },
                  { name: "James A.", status: "Closed", time: "2 days" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-300" />
                      <p className="font-medium">{item.name}</p>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-600">
                        {item.status}
                      </span>
                      <span className="text-gray-500">{item.time}</span>
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

// "use client"

// import React, { useState } from 'react';
// import { Copy, Check, Plus, Minus, ChevronDown, Menu, X } from 'lucide-react';

// export default function TailwindColorsUI() {
//   const [copied, setCopied] = useState(false);
//   const [selectedShade, setSelectedShade] = useState(500);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
//   const colors = {
//     50: '#eff6ff',
//     100: '#dbeafe',
//     200: '#bfdbfe',
//     300: '#93c5fd',
//     400: '#60a5fa',
//     500: '#3b82f6',
//     600: '#2563eb',
//     700: '#1d4ed8',
//     800: '#1e40af',
//     900: '#1e3a8a',
//     950: '#172554'
//   };

//   const handleCopy = (color) => {
//     navigator.clipboard.writeText(color);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="border-b border-gray-200 px-4 md:px-6 lg:px-8 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tailwind Colors</h1>
//             <p className="text-sm text-gray-600 mt-1">Create, preview and export your Tailwind CSS palette</p>
//           </div>
//           <div className="hidden md:flex items-center gap-3">
//             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" className="w-10 h-10 rounded-lg" />
//             <div className="text-sm">
//               <div className="font-medium">First pick a color...</div>
//               <div className="text-gray-600">then name it</div>
//             </div>
//           </div>
//           <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
//         {/* Color Palette Selector */}
//         <div className="mb-8">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-base md:text-lg font-semibold flex items-center gap-2">
//               Palette 1 <span className="text-blue-600">(Digital Blue)</span>
//             </h2>
//             <div className="flex items-center gap-2">
//               <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Light</button>
//               <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">Dark</button>
//             </div>
//           </div>

//           <div className="grid grid-cols-5 md:grid-cols-11 gap-2 md:gap-3">
//             {shades.map((shade) => (
//               <div key={shade} className="flex flex-col items-center">
//                 <div
//                   className="w-full aspect-square rounded-lg cursor-pointer transition-transform hover:scale-105"
//                   style={{ backgroundColor: colors[shade] }}
//                   onClick={() => setSelectedShade(shade)}
//                 />
//                 <span className="text-xs mt-1 text-gray-600">{shade}</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 flex flex-col md:flex-row gap-3">
//             <div className="flex-1 bg-blue-600 rounded-lg px-4 py-2 flex items-center justify-between">
//               <span className="text-white text-sm">{colors[selectedShade]}</span>
//               <button onClick={() => handleCopy(colors[selectedShade])} className="text-white hover:text-blue-100">
//                 {copied ? <Check size={18} /> : <Copy size={18} />}
//               </button>
//             </div>
//             <div className="flex gap-2">
//               <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
//                 <ChevronDown size={20} />
//               </button>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2">
//                 <Plus size={18} /> Generate
//               </button>
//               <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm flex items-center gap-2">
//                 <Minus size={18} /> Explore
//               </button>
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Export</button>
//             </div>
//           </div>
//         </div>

//         {/* Main Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Column */}
//           <div className="space-y-6">
//             {/* Revenue Card */}
//             <div className="bg-blue-50 rounded-xl p-6">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="bg-white p-3 rounded-lg">
//                   <div className="text-3xl">📈</div>
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold mb-2">Increase your revenue by 3x</h3>
//               <p className="text-sm text-gray-600 mb-4">Our platform helps you close more deals and scale for that goals</p>
//               <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-medium">Start growing</button>
//             </div>

//             {/* Categories */}
//             <div>
//               <h3 className="font-semibold mb-3">Categories</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3">
//                 {['Design', 'Analyze', 'Team', 'Gift', 'Pay', 'Purchase', 'Settings', 'Report'].map((cat, i) => (
//                   <div key={i} className="bg-blue-50 p-4 rounded-lg text-center">
//                     <div className="w-10 h-10 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white">
//                       {cat[0]}
//                     </div>
//                     <span className="text-sm font-medium">{cat}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Newsletter */}
//             <div className="bg-blue-50 rounded-xl p-6">
//               <h3 className="font-semibold mb-4">Newsletter</h3>
//               <p className="text-sm text-gray-600 mb-4">Last message sent an: 18h ago</p>
//               <div className="space-y-3">
//                 <div className="bg-white p-4 rounded-lg flex items-center justify-between">
//                   <div>
//                     <div className="font-medium text-sm">Existing customers</div>
//                     <div className="text-xs text-gray-500">Last message sent 5 weeks ago</div>
//                   </div>
//                   <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
//                     ?
//                   </div>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg">
//                   <div className="font-medium text-sm">Trial users</div>
//                   <div className="text-xs text-gray-500">Last message sent 6 days ago</div>
//                 </div>
//               </div>
//             </div>

//             {/* Revenue Chart */}
//             <div>
//               <h3 className="font-semibold mb-3">Revenue</h3>
//               <div className="bg-white rounded-xl p-4 border border-gray-200">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="text-2xl font-bold">$213,000</div>
//                   <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">+12%</span>
//                 </div>
//                 <div className="flex items-end gap-1.5 h-32">
//                   {[60, 80, 45, 90, 55, 75, 40, 95, 65, 85, 50].map((h, i) => (
//                     <div key={i} className="flex-1 bg-blue-600 rounded-t" style={{height: `${h}%`}} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle Column */}
//           <div className="space-y-6">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-3 gap-3">
//               {[
//                 { label: 'Applications', value: '43' },
//                 { label: 'Shortlisted', value: '12' },
//                 { label: 'On Hold', value: '21' }
//               ].map((stat, i) => (
//                 <div key={i} className="bg-blue-600 text-white p-4 rounded-xl">
//                   <div className="text-xs mb-1">{stat.label}</div>
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Progress Bars */}
//             <div className="space-y-4">
//               {[
//                 { name: 'UI/UX', progress: 80, amount: '$4,200' },
//                 { name: 'Education & Courses', progress: 65, amount: '$45,000' },
//                 { name: 'Health & Wellness', progress: 40, amount: '$3,200' }
//               ].map((item, i) => (
//                 <div key={i} className="bg-blue-50 p-4 rounded-xl">
//                   <div className="flex items-center justify-between mb-2">
//                     <div>
//                       <div className="font-medium text-sm">{item.name}</div>
//                       <div className="text-xs text-gray-500">40%</div>
//                     </div>
//                     <div className="font-bold">{item.amount}</div>
//                   </div>
//                   <div className="bg-white rounded-full h-2">
//                     <div className="bg-blue-600 h-2 rounded-full" style={{width: `${item.progress}%`}} />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Schedule */}
//             <div>
//               <h3 className="font-semibold mb-3">Schedule</h3>
//               <div className="space-y-3">
//                 {[
//                   { time: '9-15', title: 'Weekly Team Sync', desc: 'Quick standup to align and...' },
//                   { time: '4:00', title: 'Client Rev Internal', desc: 'Our design review is syste...' },
//                   { time: '7:30', title: 'Product Design Review', desc: 'Quick standup to align and...' }
//                 ].map((event, i) => (
//                   <div key={i} className="flex gap-3">
//                     <div className="bg-blue-600 text-white rounded-lg px-3 py-2 text-center min-w-[60px]">
//                       <div className="text-lg font-bold">{event.time}</div>
//                     </div>
//                     <div className="flex-1 bg-blue-50 p-3 rounded-lg">
//                       <div className="font-medium text-sm">{event.title}</div>
//                       <div className="text-xs text-gray-600">{event.desc}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Profile Card */}
//             <div className="bg-blue-50 rounded-xl p-6 text-center">
//               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Sarah" className="w-24 h-24 rounded-xl mx-auto mb-3" />
//               <h3 className="font-bold">Sarah Jones</h3>
//               <p className="text-sm text-gray-600 mb-3">Product Manager</p>
//               <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Follow</button>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {/* Pricing Cards */}
//             <div>
//               <h3 className="font-semibold mb-3">Pricing plans</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
//                 {[
//                   { name: 'Individual', price: '$0', desc: 'For small teams...' },
//                   { name: 'Team', price: '$99', desc: 'For growing teams...' },
//                   { name: 'Enterprise', price: '$199', desc: 'For large teams...' }
//                 ].map((plan, i) => (
//                   <div key={i} className="bg-blue-50 p-6 rounded-xl">
//                     <div className="text-xs text-gray-600 mb-1">{plan.name}</div>
//                     <div className="text-3xl font-bold mb-1">{plan.price}</div>
//                     <div className="text-xs text-gray-600 mb-4">per month</div>
//                     <p className="text-xs text-gray-600 mb-4">{plan.desc}</p>
//                     <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm">Get started</button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Team List */}
//             <div>
//               <h3 className="font-semibold mb-3">Teams</h3>
//               <div className="space-y-3">
//                 {[
//                   { name: 'Amy P.', role: 'Team', time: '11m' },
//                   { name: 'Sahil A.', role: 'Team', time: '30 mins' },
//                   { name: 'Seraya P.', role: 'Marketing', time: '1h' },
//                   { name: 'Jason A.', role: 'Sales', time: '2 days' }
//                 ].map((member, i) => (
//                   <div key={i} className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
//                     <div className="w-10 h-10 bg-blue-600 rounded-full" />
//                     <div className="flex-1">
//                       <div className="font-medium text-sm">{member.name}</div>
//                       <span className="text-xs px-2 py-0.5 bg-blue-600 text-white rounded">{member.role}</span>
//                     </div>
//                     <div className="text-xs text-gray-600">{member.time}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Image Grid */}
//             <div>
//               <h3 className="font-semibold mb-3">Continue Watching</h3>
//               <div className="grid grid-cols-3 gap-3">
//                 {[1,2,3].map((i) => (
//                   <div key={i} className="space-y-2">
//                     <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=300&h=200&fit=crop`} alt="" className="w-full aspect-video rounded-lg object-cover" />
//                     <div className="text-xs font-medium">Video {i}</div>
//                     <div className="text-xs text-gray-600">Description here</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4">
//               {[
//                 { label: 'Total Subscribers', value: '71,842', change: '+5%' },
//                 { label: 'Avg. Open Rate', value: '58.16%', change: '-2.1%' },
//                 { label: 'Avg. Click Rate', value: '24.57%', change: '+8.3%' }
//               ].map((stat, i) => (
//                 <div key={i} className="bg-blue-50 p-4 rounded-xl">
//                   <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
//                   <div className="text-xl font-bold mb-1">{stat.value}</div>
//                   <span className={`text-xs px-2 py-0.5 rounded ${stat.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
//                     {stat.change}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
//               {['Manage team', 'Notification settings', 'Download reports'].map((feature, i) => (
//                 <div key={i} className={`p-6 rounded-xl text-white ${i === 2 ? 'bg-blue-600' : i === 1 ? 'bg-blue-500' : 'bg-blue-400'}`}>
//                   <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full mb-3" />
//                   <h4 className="font-bold mb-2">{feature}</h4>
//                   <p className="text-sm opacity-90">Collaborate with your teammates and improve workflows</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
