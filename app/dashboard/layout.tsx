"use client"

import type React from "react"

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BarChart3, Globe, History, Key, MessageSquare, Settings, Smartphone, User, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  {
    title: "Dashboard",
    items: [{ title: "Overview", url: "/dashboard/overview", icon: BarChart3 }],
  },
  {
    title: "Services",
    items: [
      { title: "Wallet", url: "/dashboard/wallet", icon: Wallet },
      { title: "Rent Numbers", url: "/dashboard/rent-numbers", icon: Globe },
      { title: "My Numbers", url: "/dashboard/my-numbers", icon: MessageSquare },
      { title: "SMS Inbox", url: "/dashboard/sms-inbox", icon: MessageSquare },
      { title: "eSIM", url: "/dashboard/esim", icon: Smartphone },
    ],
  },
  {
    title: "Account",
    items: [
      { title: "History", url: "/dashboard/history", icon: History },
      { title: "Settings", url: "/dashboard/settings", icon: Settings },
      { title: "API Keys", url: "/dashboard/api-keys", icon: Key },
      { title: "Support", url: "/dashboard/support", icon: User },
    ],
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-4 py-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#7A7FEE] text-white">
              <Globe className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Virtual Numbers</span>
              <span className="truncate text-xs text-muted-foreground">Platform</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {navigation.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={pathname === item.url}>
                        <Link href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/auth/sign-in">
                  <User className="size-4" />
                  <span>Sign Out</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {pathname
                    .split("/")
                    .pop()
                    ?.replace("-", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase()) || "Overview"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
