// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* SIDEBAR */}
//       <aside className="hidden md:block w-64 border-r border-gray-200 bg-white">
//         <DashboardSidebar />
//       </aside>

//       {/* CONTENT */}
//       <main className="flex-1 p-6">
//         {children}
//       </main>
//     </div>
//   );
// }

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      
      {/* MAIN WRAPPER (below navbar) */}
      <div className="flex h-[calc(100vh-64px)] mt-16">

        {/* SIDEBAR (FIXED, BELOW NAVBAR, NO SCROLL) */}
        <aside className="hidden md:flex w-64 border-r border-gray-200 bg-white fixed left-0 top-16 h-[calc(100vh-64px)]">
          <DashboardSidebar />
        </aside>

        {/* RIGHT CONTENT (SCROLLABLE) */}
        <main className="flex-1 md:ml-64 overflow-y-auto p-6">
          {children}
        </main>

      </div>
    </div>
  );
}
    
