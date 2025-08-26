"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 border rounded-xl border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <Link href={"/"} className="text-xl font-bold text-foreground title">Sompu</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#creators"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Creators
          </a>
          <a
            href="#community"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </a>
          <a
            href="/about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </Link>
          <Link href={"/register"} className="bg-black hover:bg-black/70 text-white rounded-md py-2  md:py-3 xl:px-5 lg:px-4 md:px-3 sm:px-3 px-3">Get Started</Link>
        </div>
      </div>
    </header>
  )
}
