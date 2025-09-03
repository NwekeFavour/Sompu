"use client"
import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector((state) => state.auth.token);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
  console.log("ProtectedRoute Redux token:", token);
}, [token]);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !token) {
      router.push("/login");
    }
  }, [mounted, token, router]);

  if (!mounted) {
    // avoid hydration mismatch
    return null;
  }

  if (!token) {
    return <p className="text-center mt-10">Redirecting to login...</p>;
  }

  return <>{children}</>;
}
