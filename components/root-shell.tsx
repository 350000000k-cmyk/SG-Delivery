"use client"

import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"

export function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDriverRoute = pathname.startsWith("/driver")
  const isPublicTrackingRoute = pathname.startsWith("/track/")

  if (isDriverRoute || isPublicTrackingRoute) {
    return <>{children}</>
  }

  return (
    <>
      <AppSidebar />
      <main className="min-h-screen bg-background pl-0 lg:pl-64">
        <div className="mx-auto max-w-7xl px-4 py-6 pt-16 lg:px-8 lg:pt-6">{children}</div>
      </main>
    </>
  )
}
