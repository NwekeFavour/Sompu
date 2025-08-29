"use client"

import React, { useEffect, useState } from "react"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../store/hook"  
import { requestOTP, loginWithPassword } from "../features/auth/authslice"
import { useNotifications } from "reapop"
import { useRouter } from "next/navigation"

function LoginForm(props: React.HTMLAttributes<HTMLFormElement>) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { notify } = useNotifications()

  const { loading, error, user, token } = useAppSelector(
    (state: { auth: { loading: boolean; error: string | null; user: any; token: string | null } }) => state.auth
  )

  const [method, setMethod] = useState<"otp" | "password">("otp")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (method === "otp") {
      dispatch(requestOTP({ email }))
    } else {
      dispatch(loginWithPassword({ email, password }))
    }
  }

  // 🔹 Show error toast
  useEffect(() => {
    if (error) {
      notify({ message: error, status: "error" });
    }
  }, [error, notify])

  // 🔹 Show success toast + redirect
  useEffect(() => {
    if (user && token) {
      notify({ message: "User Logged In Successfully 🎉", status: "success" });
      router.push("/dashboard") // redirect after login
    }
  }, [user, token, notify, router])

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
              ? "Enter your email below and we’ll send you a one-time passcode."
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

          {/* Main CTA */}
          <Button
            type="submit"
            className="w-full bg-emerald-900 hover:bg-emerald-700"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : null}
            {method === "otp" ? "Send OTP" : "Login"}
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
                  onClick={() => setMethod("password")}
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
                  onClick={() => setMethod("otp")}
                >
                  Use OTP instead
                </button>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
