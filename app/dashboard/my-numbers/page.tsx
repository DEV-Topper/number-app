"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, MoreHorizontal, Calendar, MessageSquare, Trash2, RefreshCw } from "lucide-react"

const myNumbers = [
  {
    id: 1,
    number: "+1 (555) 123-4567",
    country: "United States",
    flag: "🇺🇸",
    status: "Active",
    expiresAt: "2024-02-15",
    smsCount: 23,
    features: ["SMS", "Voice"],
    rentedAt: "2024-01-15",
  },
  {
    id: 2,
    number: "+44 7700 900123",
    country: "United Kingdom",
    flag: "🇬🇧",
    status: "Active",
    expiresAt: "2024-02-20",
    smsCount: 8,
    features: ["SMS", "Voice"],
    rentedAt: "2024-01-20",
  },
  {
    id: 3,
    number: "+33 6 12 34 56 78",
    country: "France",
    flag: "🇫🇷",
    status: "Expiring Soon",
    expiresAt: "2024-01-25",
    smsCount: 45,
    features: ["SMS"],
    rentedAt: "2023-12-25",
  },
]

export default function MyNumbersPage() {
  const [numbers, setNumbers] = useState(myNumbers)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDaysUntilExpiry = (expiresAt: string) => {
    const today = new Date()
    const expiry = new Date(expiresAt)
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Numbers</h1>
          <p className="text-muted-foreground">Manage your rented virtual numbers</p>
        </div>
        <Button className="bg-[#7A7FEE] hover:bg-[#6B70E8]">
          <Globe className="mr-2 h-4 w-4" />
          Rent New Number
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Numbers</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{numbers.filter((n) => n.status === "Active").length}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total SMS</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{numbers.reduce((sum, n) => sum + n.smsCount, 0)}</div>
            <p className="text-xs text-muted-foreground">Messages received</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{numbers.filter((n) => n.status === "Expiring Soon").length}</div>
            <p className="text-xs text-muted-foreground">Need renewal</p>
          </CardContent>
        </Card>
      </div>

      {/* Numbers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Numbers</CardTitle>
          <CardDescription>All your rented virtual numbers and their details</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Number</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>SMS Count</TableHead>
                <TableHead>Features</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {numbers.map((number) => (
                <TableRow key={number.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{number.flag}</span>
                      {number.number}
                    </div>
                  </TableCell>
                  <TableCell>{number.country}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(number.status)}>{number.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{number.expiresAt}</span>
                      <span className="text-xs text-muted-foreground">
                        {getDaysUntilExpiry(number.expiresAt)} days left
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      {number.smsCount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {number.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
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
                          <MessageSquare className="mr-2 h-4 w-4" />
                          View SMS
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Extend Rental
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Release Number
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
    </div>
  )
}
