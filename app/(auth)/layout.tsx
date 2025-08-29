import { Metadata } from "next";
import React from "react";



export const metadata: Metadata = {
  title: "Authentication Page",
  description: "here you authenticate",
};
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div>
        {children}
      </div>
    </div>
  );
}
