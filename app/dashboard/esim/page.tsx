"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Smartphone, MoreHorizontal, Download, Settings, Trash2, Plus, Signal, Wifi } from "lucide-react"

const esimPlans = [
  {
    id: 1,
    name: "Global Traveler",
    country: "🌍 Worldwide",
    status: "Active",
    dataUsed: 2.3,
    dataLimit: 5,
    expiresAt: "2024-02-15",
    price: "$29.99",
    speed: "4G/5G",
  },
  {
    id: 2,
    name: "Europe Explorer",
    country: "🇪🇺 Europe",
    status: "Active",
    dataUsed: 1.8,
    dataLimit: 3,
    expiresAt: "2024-02-10",
    price: "$19.99",
    speed: "4G/5G",
  },
  {
    id: 3,
    name: "USA Business",
    country: "🇺🇸 United States",
    status: "Expired",
    dataUsed: 10,
    dataLimit: 10,
    expiresAt: "2024-01-20",
    price: "$24.99",
    speed: "5G",
  },
]

const availablePlans = [
  {
    id: 1,
    name: "Asia Pacific",
    countries: "🇯🇵🇰🇷🇸🇬🇹🇭 +8 more",
    data: "5GB",
    duration: "30 days",
    price: "$22.99",
    speed: "4G/5G",
    features: ["Hotspot", "No Roaming"],
  },
  {
    id: 2,
    name: "Americas",
    countries: "🇺🇸🇨🇦🇲🇽🇧🇷 +12 more",
    data: "8GB",
    duration: "30 days",
    price: "$34.99",
    speed: "5G",
    features: ["Unlimited SMS", "Hotspot"],
  },
  {
    id: 3,
    name: "Middle East & Africa",
    countries: "🇦🇪🇸🇦🇿🇦🇪🇬 +15 more",
    data: "3GB",
    duration: "30 days",
    price: "$18.99",
    speed: "4G",
    features: ["Voice Calls", "SMS"],
  },
]

export default function ESIMPage() {
  const [plans, setPlans] = useState(esimPlans)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDataUsagePercentage = (used: number, limit: number) => {
    return Math.min((used / limit) * 100, 100)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">eSIM Management</h1>
          <p className="text-muted-foreground">Manage your eSIM plans and data usage</p>
        </div>
        <Button className="bg-[#7A7FEE] hover:bg-[#6B70E8]">
          <Plus className="mr-2 h-4 w-4" />
          Add New eSIM
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{plans.filter((p) => p.status === "Active").length}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Used</CardTitle>
            <Signal className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.1GB</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Countries</CardTitle>
            <span className="text-sm">🌍</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25+</div>
            <p className="text-xs text-muted-foreground">Coverage available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
            <span className="text-sm">💰</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$49.98</div>
            <p className="text-xs text-muted-foreground">Current month</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Your eSIM Plans</CardTitle>
          <CardDescription>Manage your active and expired eSIM plans</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data Usage</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Speed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-sm text-muted-foreground">{plan.country}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(plan.status)}>{plan.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2 min-w-[120px]">
                      <div className="flex justify-between text-sm">
                        <span>{plan.dataUsed}GB</span>
                        <span>{plan.dataLimit}GB</span>
                      </div>
                      <Progress value={getDataUsagePercentage(plan.dataUsed, plan.dataLimit)} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">{plan.expiresAt}</span>
                      <span className="text-xs text-muted-foreground">{plan.price}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Wifi className="h-3 w-3" />
                      {plan.speed}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download QR
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Settings className="mr-2 h-4 w-4" />
                          Manage Plan
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Plan
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Available eSIM Plans</CardTitle>
          <CardDescription>Browse and purchase new eSIM plans for your travels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {availablePlans.map((plan) => (
              <Card key={plan.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {plan.price}
                    </Badge>
                  </div>
                  <CardDescription>{plan.countries}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Data:</span>
                      <p className="font-medium">{plan.data}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-medium">{plan.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{plan.speed}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {plan.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-[#7A7FEE] hover:bg-[#6B70E8]">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Purchase Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
