"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Nav";

export default function ConditionalNavbar({ children }) {
  const pathname = usePathname();
  const showNavbar = !['/auth'].includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}