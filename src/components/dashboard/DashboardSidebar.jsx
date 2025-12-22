// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Palette,
//   Droplet,
//   LayoutGrid,
//   Type,
//   Image,
//   Folder,
//   Layers,
//   Star,
//   Plus,
// } from "lucide-react";

// export default function DashboardSidebar() {
//   const [active, setActive] = useState("Palettes");

//   return (
//     <div className="h-full p-4 space-y-2">
//       <SidebarLink label="Palettes" href="/dashboard/palettes" Icon={Palette} active={active} setActive={setActive} />
//       <SidebarLink label="Colors" href="/dashboard/colors" Icon={Droplet} active={active} setActive={setActive} />
//       <SidebarLink label="Gradients" href="/dashboard/gradients" Icon={LayoutGrid} active={active} setActive={setActive} />
//       <SidebarLink label="Fonts" href="/dashboard/fonts" Icon={Type} active={active} setActive={setActive} />
//       <SidebarLink label="Images" href="/dashboard/images" Icon={Image} active={active} setActive={setActive} />
//       <SidebarLink label="Projects" href="/dashboard/projects" Icon={Folder} active={active} setActive={setActive} />
//       <SidebarLink label="Collections" href="/dashboard/collections" Icon={Layers} active={active} setActive={setActive} />
//       <SidebarLink label="Favorites" href="/dashboard/favorites" Icon={Star} active={active} setActive={setActive} />
//     </div>
//   );
// }

// function SidebarLink({ href, label, Icon, active, setActive }) {
//   const isActive = active === label;

//   return (
//     <div className="relative group">
//       <Link
//         href={href}
//         onClick={() => setActive(label)}
//         className={`
//           flex items-center justify-between
//           rounded-lg px-4 py-2
//           text-lg font-semibold
//           transition
//           ${
//             isActive
//               ? "bg-(--color-bg-light-blue) text-(--color-text-blue)"
//               : "text-black hover:bg-(--color-hover-gray)"
//           }
//         `}
//       >
//         {/* LEFT */}
//         <div className="flex items-center gap-3">
//           <Icon
//             size={20}
//             className={isActive ? "text-(--color-text-blue)" : "text-black"}
//           />
//           <span>{label}</span>
//         </div>

//         {/* PLUS ICON (SEPARATE GROUP) */}
//         <div className="relative group/plus">
//           <div
//             className={`
//               opacity-0 group-hover:opacity-100
//               transition
//               rounded-md p-1
//               ${
//                 isActive
//                   ? "bg-[#D6E4FF]"
//                   : "group-hover/plus:bg-[#E0E0E0]"
//               }
//             `}
//           >
//             <Plus
//               size={16}
//               className={
//                 isActive
//                   ? "text-(--color-text-blue)"
//                   : "group-hover/plus:text-gray-900 text-black"
//               }
//             />
//           </div>

//           {/* TOOLTIP → ONLY PLUS HOVER */}
//           <div
//             className="
//               pointer-events-none
//               absolute -top-10 right-0
//               whitespace-nowrap
//               rounded-md bg-black px-3 py-1.5
//               text-xs text-white
//               opacity-0 group-hover/plus:opacity-100
//               transition
//             "
//           >
//             New {label}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import {
  Palette,
  Droplet,
  LayoutGrid,
  Type,
  Image,
  Folder,
  Layers,
  Star,
  Plus,
} from "lucide-react";

export default function DashboardSidebar() {
  const [active, setActive] = useState("Palettes");

  return (
    <div className="h-full overflow-visible p-4 space-y-2">
      <SidebarLink label="Palettes" href="/dashboard/palettes" Icon={Palette} active={active} setActive={setActive} />
      <SidebarLink label="Colors" href="/dashboard/colors" Icon={Droplet} active={active} setActive={setActive} />
      <SidebarLink label="Gradients" href="/dashboard/gradients" Icon={LayoutGrid} active={active} setActive={setActive} />
      <SidebarLink label="Fonts" href="/dashboard/fonts" Icon={Type} active={active} setActive={setActive} />
      <SidebarLink label="Images" href="/dashboard/images" Icon={Image} active={active} setActive={setActive} />
      <SidebarLink label="Projects" href="/dashboard/projects" Icon={Folder} active={active} setActive={setActive} />
      <SidebarLink label="Collections" href="/dashboard/collections" Icon={Layers} active={active} setActive={setActive} />
      <SidebarLink label="Favorites" href="/dashboard/favorites" Icon={Star} active={active} setActive={setActive} />
    </div>
  );
}

function SidebarLink({ href, label, Icon, active, setActive }) {
  const isActive = active === label;

  return (
    <div className="relative group">
      <Link
        href={href}
        onClick={() => setActive(label)}
        className={`
          flex items-center justify-between w-55
          rounded-lg px-4 py-2 
          text-lg font-semibold
          transition
          ${
            isActive
              ? "bg-(--color-bg-light-blue) text-(--color-text-blue)"
              : "text-black hover:bg-(--color-hover-gray)"
          }
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Icon
            size={20}
            className={isActive ? "text-(--color-text-blue)" : "text-black"}
          />
          <span>{label}</span>
        </div>

        {/* PLUS + TOOLTIP */}
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className={`
                relative z-20
                opacity-0 group-hover:opacity-100
                transition
                rounded-md p-1
                ${
                  isActive
                    ? "bg-[#D6E4FF]"
                    : "hover:bg-[#E0E0E0]"
                }
              `}
            >
              <Plus
                size={16}
                className={
                  isActive
                    ? "text-(--color-text-blue)"
                    : "text-gray-800"
                }
              />
            </div>
          </TooltipTrigger>

          {/* TOOLTIP */}
          <TooltipContent
            side="top"
            align="end"
            className="
              z-50
              pointer-events-none
              -translate-y-3
            "
          >
            <p>New {label}</p>
          </TooltipContent>
        </Tooltip>
      </Link>
    </div>
  );
}


