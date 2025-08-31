"use client";

import { useAppSelector } from "@/store/hook";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  if (!token) {
    return <p className="text-center mt-10">Redirecting to login...</p>;
  }

  return <>{children}</>;
}
