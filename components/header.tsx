"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex justify-center">
        <nav className=" w-[90%] mx-auto  m-4 lg:w-[calc(100%-2rem)] lg:block   transform  z-50">
        <div className="bg-white rounded-full lg:px-10 md:px-8 sm:px-6 px-4 xl:px-12 py-2 shadow-lg border border-gray-200">
            <div className="flex lg:gap-5 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-black">Sọmpụ</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                    Products
                    </Link>
                    <Link href="" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                    Templates
                    </Link>
                    <Link href="" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                    Marketplace
                    </Link>
                    <Link href="" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                    Learn
                    </Link>
                    <Link href="" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                    Pricing
                    </Link>
                </div>

            {/* Desktop Auth Buttons */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                        href="/login"
                        className="text-gray-700 px-7 rounded-[10px] py-3 hover:text-black hover:bg-gray-100"
                        >
                        Login
                        </Link>
                        <Link
                        href={"/register"}
                        className="bg-black py-2 text-white hover:bg-gray-800 rounded-full px-4"
                        >
                        Sign up free
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
            <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 space-y-4">
                <Link href="" className="block text-gray-700 hover:text-black text-base font-medium">
                    Products
                </Link>
                <Link href="" className="block text-gray-700 hover:text-black text-base font-medium">
                    Templates
                </Link>
                <Link href="" className="block text-gray-700 hover:text-black text-base font-medium">
                    Marketplace
                </Link>
                <Link href="" className="block text-gray-700 hover:text-black text-base font-medium">
                    Learn
                </Link>
                <Link href="" className="block text-gray-700 hover:text-black text-base font-medium">
                    Pricing
                </Link>

                <div className="pt-4 flex flex-col gap-3">
                    <Link
                    href="/login"
                    className="text-gray-700 text-center px-4 py-3 rounded-xl hover:text-black hover:bg-gray-100"
                    >
                    Login
                    </Link>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full">
                    Sign up free
                    </Button>
                </div>
            </div>
        )}
        </nav>
    </div>
  )
}
