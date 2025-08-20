// app/(auth)/layout.tsx
import { Metadata } from "next";
import React from "react";
// import "@/styles/auth.css"; // optional custom styles



export const metadata: Metadata = {
  title: "Authentication Page",
  description: "here you authenticate",
};
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div>
        {/* Logo / Brand */}


        {/* Auth Form (from child page) */}
        {children}

        {/* Footer */}
      </div>
    </div>
  );
}
