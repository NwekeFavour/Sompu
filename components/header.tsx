"use client"

import { Heart, } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 border rounded-xl border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-emerald-900 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <Link href={"/"} className="text-xl font-bold text-foreground title">Sompü</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-shadow-black hover:text-neutral-800 transition-colors"
          >
            Features
          </a>
          <a
            href="#creators"
            className="text-shadow-black hover:text-neutral-800 transition-colors"
          >
            Creators
          </a>
          <a
            href="#community"
            className="text-shadow-black hover:text-neutral-800 transition-colors"
          >
            Community
          </a>
          <a
            href="/about"
            className="text-shadow-black hover:text-neutral-800 transition-colors"
          >
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hidden lg:inline text-sm font-medium text-shadow-black hover:text-neutral-800 transition-colors">
            Sign In
          </Link>
          <Link href={"/register"} className="bg-emerald-900 hover:bg-black/70 text-white rounded-md py-2  md:py-3 xl:px-5 lg:px-4 md:px-3 sm:px-3 px-3">Get Started</Link>
        </div>
      </div>
    </header>
  )
}
