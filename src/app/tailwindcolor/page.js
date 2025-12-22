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
      <div className="mx-auto max-w-362.5 px-4 sm:px-6 lg:px-10">
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
                className="rounded-md h-[110px] sm:h-[120px] lg:h-[110px] p-3 border border-gray-200 flex flex-col justify-between"
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

          <div className="grid  grid-cols-1 min-[800px]:grid-cols-2 min-[1120px]:grid-cols-3 gap-6 pb-7 ">
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

      

            <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
              <h4 className="mb-6 text-base sm:text-lg font-semibold text-black">
                Categories
              </h4>

              {/* 🔑 4 columns everywhere */}
              <div className="grid grid-cols-4 gap-y-6 gap-x-4 sm:gap-7 text-center">
                {/* Grocery */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-200">
                    <Camera className="text-blue-700" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    Grocery Stores
                  </p>
                </div>

                {/* Cafe */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-300">
                    <Heart className="text-blue-800" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    Cafe & Restaurants
                  </p>
                </div>

                {/* Utilities */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-100">
                    <Glasses className="text-blue-700" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Utilities
                  </p>
                </div>

                {/* Sport */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-200">
                    <Shapes className="text-blue-700" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Sport
                  </p>
                </div>

                {/* Taxi */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-300">
                    <Eye className="text-blue-800" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Taxi
                  </p>
                </div>

                {/* Pharmacies */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-100">
                    <Settings className="text-blue-700" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800">
                    Pharmacies
                  </p>
                </div>

                {/* Telecom */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-200">
                    <Upload className="text-blue-700" size={35} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    Telecom service
                  </p>
                </div>

                {/* Gadgets */}
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-blue-300">
                    <Wand2 className="text-blue-800" size={35} />
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

              {/* Newsletter */}
            <div className="rounded-2xl border border-gray-200 p-6 flex flex-col gap-5">

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
            <div className="rounded-3xl bg-blue-100 p-4 sm:p-5  ">
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

{/* <div className="grid grid-cols-1 min-[650px]:grid-cols-2 gap-6">

</div> */}


        </section>

        <section className="pb-20">

          <div className="grid grid-cols-1 min-[1120px]:grid-cols-[1.5fr_3fr] gap-6">
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
                <span className="rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-xs sm:text-sm text-blue-600 font-medium">
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
              <div className=" border-t border-gray-200" />
            </div>

            {/* ================= PRICING ================= */}
            <div className="rounded-2xl border border-gray-200 p-6 bg-white ">
              <h3 className="text-lg font-semibold mb-6">Pricing plans</h3>

            <div
  className="
    items-stretch
    flex gap-4 overflow-x-auto
    md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:flex-none
    [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
  "
>
  {/* ================= INDIVIDUAL ================= */}
  <div className="rounded-2xl border border-[#6EA3FF] bg-linear-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5 h-full min-w-[260px] md:min-w-0">
    {/* Icon */}
    <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
      <Heart className="text-[#0B57D0]" size={22} strokeWidth={2} />
    </div>

    {/* Content */}
    <div>
      <h4 className="text-lg font-semibold text-black">Individual</h4>

      <p className="mt-2 text-3xl font-bold">
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
    <button className="mt-auto rounded-full bg-[#0B57D0] py-2.5 text-white font-semibold hover:bg-[#0949B0] transition">
      Get started
    </button>
  </div>

  {/* ================= TEAM ================= */}
  <div className="rounded-2xl border border-[#6EA3FF] bg-linear-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5 h-full min-w-[260px] md:min-w-0">
    <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
      <Eye className="text-[#0B57D0]" size={22} strokeWidth={2} />
    </div>

    <div>
      <h4 className="text-lg font-semibold text-black">Team</h4>

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

    <button className="mt-auto rounded-full bg-[#0B57D0] py-2.5 text-white font-semibold hover:bg-[#0949B0] transition">
      Get started
    </button>
  </div>

  {/* ================= ENTERPRISE ================= */}
  <div className="rounded-2xl border border-[#6EA3FF] bg-linear-to-br from-[#A6C8FF] via-[#C1DAFF] to-[#DDEBFF] p-6 flex flex-col gap-5 h-full min-w-[260px] md:min-w-0">
    <div className="h-10 w-10 rounded-full bg-blue-600/20 flex items-center justify-center">
      <Star className="text-[#0B57D0]" size={22} strokeWidth={2} />
    </div>

    <div>
      <h4 className="text-lg font-semibold text-black">Enterprise</h4>

      <p className="mt-2 text-3xl font-bold">
        $199
        <span className="ml-1 text-sm font-medium text-gray-600">
          per month
        </span>
      </p>

      <p className="mt-3 text-sm text-gray-600">
        Designed for large organizations with custom needs.
      </p>
    </div>

    <button className="mt-auto rounded-full bg-[#0B57D0] py-2.5 text-white font-semibold hover:bg-[#0949B0] transition">
      Contact us
    </button>
  </div>
</div>

            </div>


          </div>

          {/* ================= SECOND ROW ================= */}



          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.5fr_3fr]  gap-6 ">
            {/* ================= TICKETS ================= */}

            <div className="rounded-2xl border border-gray-200  overflow-hidden bg-white">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 ">
                <h3 className="text-lg font-semibold  px-4 py-3 ">Tickets</h3>
              </div>

              {/* ================= ROW ================= */}
              <div className="border-b border-gray-200 px-4 py-5 ">

                <div className="flex  flex-row items-center  justify-between gap-3">
                
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium">Amy P.</span>
                  </div>

                 
               
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 font-medium">
                      Open
                    </div>

                    <div className="text-xs text-gray-500">1 hrs</div>

                    <div className="text-gray-400 text-lg ">…</div>
                  


                </div>
              </div>

              {/* ================= ROW ================= */}
            <div className="border-b border-gray-200 px-4 py-5 ">

                <div className="flex  flex-row items-center  justify-between gap-3">
                
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium">Amy P.</span>
                  </div>

                 
               
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 font-medium">
                      Open
                    </div>

                    <div className="text-xs text-gray-500">1 hrs</div>

                    <div className="text-gray-400 text-lg ">…</div>
                  


                </div>
              </div>

              {/* ================= ROW ================= */}
            <div className="border-b border-gray-200 px-4 py-5 ">

                <div className="flex  flex-row items-center  justify-between gap-3">
                
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium">Amy P.</span>
                  </div>

                 
               
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 font-medium">
                      Open
                    </div>

                    <div className="text-xs text-gray-500">1 hrs</div>

                    <div className="text-gray-400 text-lg ">…</div>
                  


                </div>
              </div>

              {/* ================= ROW ================= */}
                <div className=" px-4  py-5 ">

                <div className="flex  flex-row items-center  justify-between gap-3">
                
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="font-medium">Amy P.</span>
                  </div>

                 
               
                    <div className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 font-medium">
                      Open
                    </div>

                    <div className="text-xs text-gray-500">1 hrs</div>

                    <div className="text-gray-400 text-lg ">…</div>
                  


                </div>
              </div>
            </div>





            {/* ================= CONTINUE WATCHING ================= */}
            <div className="rounded-2xl border border-gray-200  bg-white p-6">
              <h3 className="text-lg font-semibold mb-6">Continue Watching</h3>

              {/* MOBILE: horizontal scroll | DESKTOP: grid */}
              <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* ================= CARD 1 ================= */}
                <div className="flex flex-col min-w-65 sm:min-w-70 md:min-w-0">
                  <img
                    src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
                    alt="UI UX"
                    className="h-40 w-full rounded-xl object-cover mb-3"
                  />

                  <span className="mb-2 w-fit rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-medium text-(--color-text-blue)">
                    UI / UX
                  </span>

                  <p className="text-sm font-medium mb-4">
                    Design principles and tools for creating intuitive user
                    interfaces.
                  </p>

                  <div className="h-1.5 w-full rounded-full bg-gray-200 mb-4">
                    <div className="h-full w-[70%] rounded-full bg-bg-blue" />
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">Orlando S.</p>
                      <p className="text-xs text-gray-500">Mentor</p>
                    </div>
                  </div>
                </div>

                {/* ================= CARD 2 ================= */}
                <div className="flex flex-col min-w-65 sm:min-w-70 md:min-w-0">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt="Frontend"
                    className="h-40 w-full rounded-xl object-cover mb-3"
                  />

                  <span className="mb-2 w-fit rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-medium text-(--color-text-blue)">
                    Front End Dev
                  </span>

                  <p className="text-sm font-medium mb-4">
                    Build responsive web pages using HTML, CSS, and JavaScript.
                  </p>

                  <div className="h-1.5 w-full rounded-full bg-gray-200 mb-4">
                    <div className="h-full w-[45%] rounded-full bg-bg-blue" />
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">James A.</p>
                      <p className="text-xs text-gray-500">Mentor</p>
                    </div>
                  </div>
                </div>

                {/* ================= CARD 3 ================= */}
                <div className="flex flex-col min-w-65 sm:min-w-70 md:min-w-0">
                  <img
                    src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                    alt="Sound"
                    className="h-40 w-full rounded-xl object-cover mb-3"
                  />

                  <span className="mb-2 w-fit rounded-full border border-blue-300 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                    Sound Effects
                  </span>

                  <p className="text-sm font-medium mb-4">
                    Create and mix custom audio for games and film projects.
                  </p>

                  <div className="h-1.5 w-full rounded-full bg-gray-200  mb-4">
                    <div className="h-full w-[85%] rounded-full bg-blue-600" />
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">Richard C.</p>
                      <p className="text-xs text-gray-500">Mentor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-8 ">
            <div className="rounded-2xl border border-gray-300 bg-white grid grid-cols-3 divide-x">
              {/* ===== CARD 1 ===== */}
              <div className="p-4 sm:px-6 border-r border-gray-300">
                <p className="text-xs sm:text-sm font-semibold text-(--color-text-black)">
                  Total Subscribers
                </p>

                <div className=" flex items-center gap-2 flex-wrap sm:flex-nowrap">
                  <p className="text-lg sm:text-2xl font-bold text-(--color-text-blue)">
                    71,842
                  </p>

                  <span className="rounded-full bg-blue-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-(--color-text-blue)">
                    +12%
                  </span>

                  <p className="w-full text-xs sm:text-sm text-gray-500">
                    from 70,946
                  </p>
                </div>
              </div>

              {/* ===== CARD 2 ===== */}
              <div className="p-4 sm:px-6 border-r border-gray-300">
                <p className="text-xs sm:text-sm font-semibold text-(--color-text-black)">
                  Avg. Open Rate
                </p>

                <div className=" flex items-center gap-2 flex-wrap sm:flex-nowrap md:flex-nowrap">
                  <p className="text-lg sm:text-2xl font-bold text-(--color-text-blue)">
                    58.16%
                  </p>

                  <span className="rounded-full bg-blue-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-(--color-text-blue)">
                    +2.02%
                  </span>

                  <p className="w-full text-xs sm:text-sm text-gray-500">
                    from 56.14%
                  </p>
                </div>
              </div>

              {/* ===== CARD 3 ===== */}
              <div className="p-4 sm:px-6">
                <p className="text-xs sm:text-sm font-semibold text-(--color-text-black)">
                  Avg. Click Rate
                </p>

                <div className=" flex items-center gap-2 flex-wrap sm:flex-nowrap md:flex-nowrap ">
                  <p className="text-lg sm:text-2xl font-bold text-(--color-text-blue)">
                    24.57%
                  </p>

                  <span className="rounded-full bg-blue-100 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-(--color-text-blue)">
                    -4.05%
                  </span>

                  <p className="w-full text-xs sm:text-sm text-gray-500">
                    from 28.62%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
            {/* ================= LEFT : FEATURE CARDS ================= */}
            <div className="rounded-3xl border border-gray-200 p-6 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* CARD 1 */}
                <div className="rounded-2xl bg-[#6FA8FF] p-6 text-white">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Heart />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Manage team access
                  </h4>
                  <p className="text-sm leading-relaxed text-white/90">
                    Control who can view, edit, and approve content across your
                    organization. Great for admins.
                  </p>
                </div>

                {/* CARD 2 */}
                <div className="rounded-2xl bg-[#3B82F6] p-6 text-white">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Heart />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Notifications settings
                  </h4>
                  <p className="text-sm leading-relaxed text-white/90">
                    Customize when and how you receive alerts for important
                    updates and requests.
                  </p>
                </div>

                {/* CARD 3 */}
                <div className="rounded-2xl bg-[#0B5FFF] p-6 text-white">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Heart />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Download reports
                  </h4>
                  <p className="text-sm leading-relaxed text-white/90">
                    Export activity summaries and detailed reports in multiple
                    file formats, anytime.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= RIGHT : BUTTON STATES ================= */}
            <div className="rounded-3xl border border-gray-200 p-6 bg-white">
              <div className="grid grid-cols-4 gap-6 text-center text-sm font-medium">
                <p>Default</p>
                <p>Hover</p>
                <p>Active</p>
                <p>Disabled</p>
              </div>

              <div className="mt-6 space-y-6">
                {/* PRIMARY */}
                <div className="grid grid-cols-4 gap-6">
                  <button className="rounded-full bg-blue-600 py-3 text-white font-semibold">
                    Primary
                  </button>
                  <button className="rounded-full bg-blue-700 py-3 text-white font-semibold">
                    Primary
                  </button>
                  <button className="rounded-full bg-blue-800 py-3 text-white font-semibold">
                    Primary
                  </button>
                  <button
                    disabled
                    className="rounded-full bg-blue-300 py-3 text-white font-semibold"
                  >
                    Primary
                  </button>
                </div>

                {/* SECONDARY */}
                <div className="grid grid-cols-4 gap-6">
                  <button className="rounded-full bg-blue-100 py-3 text-blue-600 font-semibold">
                    Secondary
                  </button>
                  <button className="rounded-full bg-blue-200 py-3 text-blue-700 font-semibold">
                    Secondary
                  </button>
                  <button className="rounded-full bg-blue-300 py-3 text-blue-800 font-semibold">
                    Secondary
                  </button>
                  <button
                    disabled
                    className="rounded-full bg-blue-200 py-3 text-white font-semibold"
                  >
                    Secondary
                  </button>
                </div>

                {/* TERTIARY */}
                <div className="grid grid-cols-4 gap-6">
                  <button className="rounded-full border border-blue-600 py-3 text-blue-600 font-semibold">
                    Tertiary
                  </button>
                  <button className="rounded-full border border-blue-600 bg-blue-50 py-3 text-blue-600 font-semibold">
                    Tertiary
                  </button>
                  <button className="rounded-full bg-blue-200 py-3 text-blue-800 font-semibold">
                    Tertiary
                  </button>
                  <button
                    disabled
                    className="rounded-full border border-blue-300 py-3 text-blue-300 font-semibold"
                  >
                    Tertiary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
