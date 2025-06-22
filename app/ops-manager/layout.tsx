import type React from "react"
import { cookies } from "next/headers"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ops-manager/app-sidebar"
import { Toaster } from "@/components/ui/sonner"

export default async function OpsManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex min-h-screen bg-background w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col w-full min-w-0">
          <div className="p-4 border-b">
            <SidebarTrigger />
            <span className="ml-2 text-xl font-semibold">SafeKrok - Operations Manager</span>
          </div>
          <div className="flex-1 p-4 overflow-auto w-full">{children}</div>
        </main>
      </div>
      <Toaster />
    </SidebarProvider>
  )
}
