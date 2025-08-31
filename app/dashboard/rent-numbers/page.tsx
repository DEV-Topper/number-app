"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe, Search, Filter, Clock, DollarSign } from "lucide-react"

const availableNumbers = [
  {
    id: 1,
    number: "+1 (555) 123-4567",
    country: "United States",
    flag: "🇺🇸",
    price: "$2.99",
    duration: "30 days",
    features: ["SMS", "Voice"],
  },
  {
    id: 2,
    number: "+44 7700 900123",
    country: "United Kingdom",
    flag: "🇬🇧",
    price: "$3.49",
    duration: "30 days",
    features: ["SMS", "Voice"],
  },
  {
    id: 3,
    number: "+33 6 12 34 56 78",
    country: "France",
    flag: "🇫🇷",
    price: "$2.79",
    duration: "30 days",
    features: ["SMS"],
  },
  {
    id: 4,
    number: "+49 30 12345678",
    country: "Germany",
    flag: "🇩🇪",
    price: "$3.29",
    duration: "30 days",
    features: ["SMS", "Voice"],
  },
  {
    id: 5,
    number: "+81 90-1234-5678",
    country: "Japan",
    flag: "🇯🇵",
    price: "$4.99",
    duration: "30 days",
    features: ["SMS"],
  },
  {
    id: 6,
    number: "+61 4 1234 5678",
    country: "Australia",
    flag: "🇦🇺",
    price: "$3.99",
    duration: "30 days",
    features: ["SMS", "Voice"],
  },
]

export default function RentNumbersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedFeature, setSelectedFeature] = useState("all")

  const filteredNumbers = availableNumbers.filter((number) => {
    const matchesSearch =
      number.country.toLowerCase().includes(searchTerm.toLowerCase()) || number.number.includes(searchTerm)
    const matchesCountry = selectedCountry === "all" || number.country === selectedCountry
    const matchesFeature = selectedFeature === "all" || number.features.includes(selectedFeature)

    return matchesSearch && matchesCountry && matchesFeature
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rent Numbers</h1>
        <p className="text-muted-foreground">Browse and rent virtual numbers from around the world</p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by country or number..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Country</Label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="United States">United States</SelectItem>
                  <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Features</Label>
              <Select value={selectedFeature} onValueChange={setSelectedFeature}>
                <SelectTrigger>
                  <SelectValue placeholder="Select feature" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Features</SelectItem>
                  <SelectItem value="SMS">SMS Only</SelectItem>
                  <SelectItem value="Voice">Voice Capable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full bg-transparent">
                Reset Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Numbers */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredNumbers.map((number) => (
          <Card key={number.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{number.flag}</span>
                  <div>
                    <CardTitle className="text-lg">{number.number}</CardTitle>
                    <CardDescription>{number.country}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  {number.price}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {number.duration}
              </div>
              <div className="flex gap-2">
                {number.features.map((feature) => (
                  <Badge key={feature} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-[#7A7FEE] hover:bg-[#6B70E8]">
                <Globe className="mr-2 h-4 w-4" />
                Rent This Number
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredNumbers.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Globe className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No numbers found</h3>
            <p className="text-muted-foreground text-center">
              Try adjusting your search criteria or filters to find available numbers.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
