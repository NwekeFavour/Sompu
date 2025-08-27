// app/dashboard/layout.tsx
import { ReactNode } from "react"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Top Header */}
      <DashboardHeader />

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
