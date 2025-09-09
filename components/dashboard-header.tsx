"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Heart, Settings, User, LogOut, Eye, LayoutTemplate } from "lucide-react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { logout } from "@/features/auth/authslice"
import { persistor } from "@/store"
import { useState } from "react"
import { Skeleton } from "./ui/skeleton"

export function DashboardHeader() { 
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.setup.data);

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    localStorage.removeItem("token");
  };
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-900 to-emerald-200 from-40% rounded-lg flex items-center justify-center shadow-sm">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">Sompü</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent hover:bg-emerald-800 hover:text-white">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/african-woman-digital-artist-smiling.png" alt="Profile" />
                  <AvatarFallback>{profile?.displayName.substring(0, 2) || "No Name"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex flex-col space-y-1 p-2">
                <p className="text-sm font-medium leading-none">{profile?.displayName || "No Name"}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  { loading ? 
                  <Skeleton className="h-32 w-full mb-8" />
                    : 
                      (profile?.username ? `@${profile.username}` : "No username")
                  }
                </p>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                  <Link href={`/dashboard`}>
                    Profile Settings
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LayoutTemplate className="mr-2 h-4 w-4" />
                <Link href={`/dashboard/template`}>Template</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <Button variant="ghost" onClick={handleLogout} className="">
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}