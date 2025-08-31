"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";  
import { registerUser } from "../features/auth/authslice";
import {toast} from 'react-toastify';

import { User } from "../type"
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const dispatch = useAppDispatch();
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  // grab state from authslice
  const { loading, error, user, success } = useAppSelector(
    (state: { auth: { loading: boolean; error: string | null; user: User; success: boolean } }) => state.auth
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register data:", formData);
    console.log(success, user)
    dispatch(registerUser(formData));
  };

  // show error notification
  useEffect(() => {
    if (error) {
      console.log("error:",  error)
      toast.error(error)
    }
  }, [error]);

  // show success notification
  useEffect(() => {
    if (success) {
      console.log(success, user)
      setTimeout(() => {
        router.push("/profile-setup")
      }, 4000);
      toast.success("Account created successfully 🎉")
    }
  }, [success, router, user]);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7] sm:text-sm"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7] sm:text-sm"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#6C5CE7] focus:ring-[#6C5CE7] sm:text-sm"
          placeholder="••••••••"
          required
        />
      </div>

      {/* render error message inline as well */}
{error && (
  <p className="text-red-500 text-sm text-center">
    {typeof error === "string" ? error : JSON.stringify(error)}
  </p>
)}
      <button
        type="submit"
        className="w-full bg-emerald-900 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
}
