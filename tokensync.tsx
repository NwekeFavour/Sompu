"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hook";
import { setToken, logout } from "./features/auth/authslice";
import { persistor } from "@/store";

export default function TokenSync() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  // You can export handleLogout or trigger it from a button elsewhere
  return null;
}
