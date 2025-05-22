// app/components/ClientLayout.jsx
"use client";

import { usePathname } from "next/navigation";
import Headers from "../Header/Header";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <>
      {!isAuthPage && (
        <div className="row">
          <Headers />
        </div>
      )}
      {children}
    </>
  );
}
