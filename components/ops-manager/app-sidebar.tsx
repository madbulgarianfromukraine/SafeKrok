"use client"

import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar" // Assuming this path
import { Separator } from "@/components/ui/separator"
import { Home, MapIcon, BarChart3, Users, Settings, ShieldAlert, DollarSign, UploadCloud, LogOut } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { title: "Dashboard", href: "/ops-manager", icon: Home },
  { title: "Team Operations", href: "/ops-manager/teams", icon: Users },
  { title: "GIS & Map Layers", href: "/ops-manager/map", icon: MapIcon },
  { title: "Analytics & Reports", href: "/ops-manager/analytics", icon: BarChart3 },
  { title: "Data Management", href: "/ops-manager/data", icon: UploadCloud },
  { title: "Incident Log", href: "/ops-manager/incidents", icon: ShieldAlert },
  { title: "Cost Analysis", href: "/ops-manager/costs", icon: DollarSign },
]

export function AppSidebar() {
  const { open } = useSidebar() // [^1]

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <img src="/safekrok-logo.png" alt="SafeKrok Logo" className="h-8 w-8 rounded-sm" />
          {open && <h1 className="text-xl font-semibold">SafeKrok</h1>}
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-grow">
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild variant="default" size="default" tooltip={open ? undefined : item.title}>
                    <Link href={item.href} className="flex items-center">
                      <item.icon className="h-5 w-5" />
                      {open && <span className="ml-3">{item.title}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              {open && <span className="ml-2">Operations Mgr.</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full">
              <Settings className="h-5 w-5" />
              {open && <span className="ml-3">Settings</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
              <LogOut className="h-5 w-5" />
              {open && <span className="ml-3">Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
