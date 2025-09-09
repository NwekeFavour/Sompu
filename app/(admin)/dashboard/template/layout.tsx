"use client"
// app/dashboard/layout.tsx
import { ReactNode, useEffect } from "react"
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";

export default function TemplateLayout({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.replace("/login"); // redirect if no token
    }
  }, [token, router]);

  if (!token) return null; // prevent flicker while checking
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
