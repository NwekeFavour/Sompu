// TokenSync.tsx
"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hook";
import { setToken } from "@/features/auth/authslice";

export default function TokenSync() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(setToken(token));
  }, [dispatch]);
  return null;
}