"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { requestOTP, verifyOTP, loginWithPassword } from "../features/auth/authslice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { User } from "../type";

function LoginForm(props: React.HTMLAttributes<HTMLFormElement>) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error, user, token } = useAppSelector(
    (state: { auth: { loading: boolean; error: string | null; user: User; token: string | null } }) => state.auth
  );

  const [method, setMethod] = useState<"otp" | "password">("otp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // flag to track OTP request

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (method === "otp") {
      if (!otpSent) {
        // first step: request OTP
        dispatch(requestOTP({ email }))
          .unwrap()
          .then(() => {
            toast.success("OTP sent to your email!");
            setOtpSent(true);
          })
          .catch((err) => toast.error(err));
      } else {
        // second step: verify OTP
        dispatch(verifyOTP({ email, otp }));
      }
    } else {
      // password login
      dispatch(loginWithPassword({ email, password }));
    }
  };

  // 🔹 Show error toast
  useEffect(() => {
    if (error) {
      console.log("eee:", error);
      toast.error(error);
    }
  }, [error]);

  // 🔹 Show success toast + redirect
  useEffect(() => {
    if (user && token) {
      // console.log("user, token:", user, token);
      toast.success("User Logged In Successfully 🎉");
      router.push("/dashboard");
    }
  }, [user, token, router]);

  return (
    <div>
      <form
        className={cn("flex flex-col gap-6")}
        {...props}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">
            {method === "otp" ? "Login with OTP" : "Login with Password"}
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            {method === "otp"
              ? otpSent
                ? "Enter the OTP sent to your email."
                : "Enter your email below and we’ll send you a one-time passcode."
              : "Enter your email and password to access your account."}
          </p>
        </div>

        <div className="grid gap-6">
          {/* Email Field */}
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={otpSent} // lock email once OTP is sent
            />
          </div>

          {/* Password Field (only if method=password) */}
          {method === "password" && (
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}

          {/* OTP Field (only if method=otp and OTP has been sent) */}
          {method === "otp" && otpSent && (
            <div className="grid gap-3">
              <Label htmlFor="otp">One-Time Passcode</Label>
              <Input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your OTP"
                required
              />
            </div>
          )}

          {/* Main CTA */}
          <Button
            type="submit"
            className="w-full bg-emerald-900 hover:bg-emerald-700"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
            {method === "otp" ? (otpSent ? "Verify OTP" : "Send OTP") : "Login"}
          </Button>

          {/* Inline error (optional, since toast already shows) */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {typeof error === "string" ? error : JSON.stringify(error)}
            </p>
          )}

          {/* Switch login method */}
          <p className="text-center text-sm text-muted-foreground">
            {method === "otp" ? (
              <>
                Prefer using your password?{" "}
                <button
                  type="button"
                  className="underline underline-offset-4"
                  onClick={() => {
                    setMethod("password");
                    setOtpSent(false);
                  }}
                >
                  Login with password
                </button>
              </>
            ) : (
              <>
                Want quick access?{" "}
                <button
                  type="button"
                  className="underline underline-offset-4"
                  onClick={() => {
                    setMethod("otp");
                    setOtpSent(false);
                  }}
                >
                  Use OTP instead
                </button>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
