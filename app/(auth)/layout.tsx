import { Metadata } from "next";
import Link from "next/link";
import React from "react";



export const metadata: Metadata = {
  title: "Authentication Page",
  description: "here you authenticate",
};
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
      <div>
        <div>
          <div className="p-4 mb-4 absolute bottom-0 lg:left-0 right-0 sm:right-0 flex justify-between items-center">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Go Home
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
