// app/components/ClientLayout.jsx
"use client";

import { usePathname } from "next/navigation";
import Headers from "../home/Header/Header";
import Providers from "../Providers";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <Providers>
      {!isAuthPage && (
        <div className="row">
          <Headers />
        </div>
      )}
      {children}
    </Providers>
  );
}
