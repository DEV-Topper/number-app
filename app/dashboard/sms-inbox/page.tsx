"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MessageSquare, Search, MoreHorizontal, Archive, Trash2, Star, Clock } from "lucide-react"

const smsMessages = [
  {
    id: 1,
    from: "+1 (555) 987-6543",
    to: "+1 (555) 123-4567",
    message: "Your verification code is: 123456. This code will expire in 10 minutes.",
    timestamp: "2024-01-25 14:30:25",
    status: "unread",
    country: "🇺🇸",
  },
  {
    id: 2,
    from: "+44 20 1234 5678",
    to: "+44 7700 900123",
    message: "Welcome to our service! Your account has been successfully created.",
    timestamp: "2024-01-25 13:15:42",
    status: "read",
    country: "🇬🇧",
  },
  {
    id: 3,
    from: "+33 1 23 45 67 89",
    to: "+33 6 12 34 56 78",
    message: "Votre commande #12345 a été expédiée. Suivi: FR123456789",
    timestamp: "2024-01-25 12:45:18",
    status: "read",
    country: "🇫🇷",
  },
  {
    id: 4,
    from: "+1 (555) 111-2222",
    to: "+1 (555) 123-4567",
    message: "Security alert: New login detected from Chrome on Windows.",
    timestamp: "2024-01-25 11:20:33",
    status: "unread",
    country: "🇺🇸",
  },
  {
    id: 5,
    from: "+44 7911 123456",
    to: "+44 7700 900123",
    message: "Your order is ready for pickup. Store hours: 9AM-6PM.",
    timestamp: "2024-01-25 10:05:17",
    status: "read",
    country: "🇬🇧",
  },
]

export default function SMSInboxPage() {
  const [messages, setMessages] = useState(smsMessages)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMessages = messages.filter(
    (message) =>
      message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.from.includes(searchTerm) ||
      message.to.includes(searchTerm),
  )

  const unreadCount = messages.filter((m) => m.status === "unread").length

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  const getTimeAgo = (timestamp: string) => {
    const now = new Date()
    const messageTime = new Date(timestamp)
    const diffInMinutes = Math.floor((now.getTime() - messageTime.getTime()) / (1000 * 60))

    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">SMS Inbox</h1>
          <p className="text-muted-foreground">View and manage all received SMS messages</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            {unreadCount} unread
          </Badge>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messages.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <Badge className="h-4 w-4 rounded-full bg-[#7A7FEE] p-0 text-xs text-white flex items-center justify-center">
              {unreadCount}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unreadCount}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Messages received</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Countries</CardTitle>
            <span className="text-sm">🌍</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Different origins</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages, numbers, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
          <CardDescription>All SMS messages received on your virtual numbers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.map((message) => (
                <TableRow key={message.id} className={message.status === "unread" ? "bg-blue-50/50" : ""}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {message.status === "unread" && <div className="h-2 w-2 rounded-full bg-[#7A7FEE]" />}
                      <Badge variant={message.status === "unread" ? "default" : "secondary"}>{message.status}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{message.country}</span>
                      <span className="font-mono text-sm">{message.from}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="font-mono text-sm">{message.to}</span>
                  </TableCell>
                  <TableCell className="max-w-md">
                    <p className="truncate text-sm">{message.message}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">{getTimeAgo(message.timestamp)}</span>
                      <span className="text-xs text-muted-foreground">{formatTime(message.timestamp)}</span>
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
                          <Star className="mr-2 h-4 w-4" />
                          Mark Important
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Archive className="mr-2 h-4 w-4" />
                          Archive
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
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

      {filteredMessages.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No messages found</h3>
            <p className="text-muted-foreground text-center">
              {searchTerm ? "Try adjusting your search terms." : "You haven't received any SMS messages yet."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
