"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Globe, MessageSquare, Smartphone, Wallet } from "lucide-react"

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome to your Virtual Numbers platform dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Numbers</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SMS Received</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+180 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45.20</div>
            <p className="text-xs text-muted-foreground">Available balance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">eSIM Plans</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active plans</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7A7FEE]/10">
                <MessageSquare className="h-4 w-4 text-[#7A7FEE]" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">SMS received from +1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Verification code: 123456</p>
              </div>
              <div className="text-sm text-muted-foreground">2m ago</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <Globe className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">New number rented: +44 7700 900123</p>
                <p className="text-sm text-muted-foreground">United Kingdom • 30 days</p>
              </div>
              <div className="text-sm text-muted-foreground">1h ago</div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                <Wallet className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Wallet topped up</p>
                <p className="text-sm text-muted-foreground">+$25.00 added to balance</p>
              </div>
              <div className="text-sm text-muted-foreground">3h ago</div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
            <CardDescription>Your platform usage this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>SMS Quota</span>
                <span>847/1000</span>
              </div>
              <Progress value={84.7} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Number Rentals</span>
                <span>12/15</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>API Calls</span>
                <span>2.3k/5k</span>
              </div>
              <Progress value={46} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
