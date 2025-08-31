"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, User, Mail, Lock, ArrowRight, CheckCircle, Sparkles, Globe } from "lucide-react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"

export default function SignUpPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      <Header />

      <div className="flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-[#7A7FEE]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#7A7FEE] to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#7A7FEE] to-purple-600 dark:from-white dark:via-[#7A7FEE] dark:to-purple-400 mb-3">
              Join Our Platform
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg px-4">
              Create your account to access virtual numbers and eSIM services
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl relative overflow-hidden mx-4 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7A7FEE]/5 to-purple-500/5"></div>
            <CardHeader className="space-y-1 pb-4 sm:pb-6 relative z-10 px-4 sm:px-6">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-[#7A7FEE] to-purple-600 bg-clip-text text-transparent">
                Create Account
              </CardTitle>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                Get started with your free account today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 relative z-10 px-4 sm:px-6 pb-6 sm:pb-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Full Name
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#7A7FEE] w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="pl-10 sm:pl-12 h-12 sm:h-14 border-2 border-gray-200 dark:border-gray-600 focus:border-[#7A7FEE] focus:ring-[#7A7FEE] rounded-xl text-base sm:text-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#7A7FEE] w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 sm:pl-12 h-12 sm:h-14 border-2 border-gray-200 dark:border-gray-600 focus:border-[#7A7FEE] focus:ring-[#7A7FEE] rounded-xl text-base sm:text-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Password
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#7A7FEE] w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 sm:pl-12 pr-12 sm:pr-14 h-12 sm:h-14 border-2 border-gray-200 dark:border-gray-600 focus:border-[#7A7FEE] focus:ring-[#7A7FEE] rounded-xl text-base sm:text-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-200"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-[#7A7FEE]/10 rounded-lg transition-colors duration-200"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#7A7FEE] w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="pl-10 sm:pl-12 pr-12 sm:pr-14 h-12 sm:h-14 border-2 border-gray-200 dark:border-gray-600 focus:border-[#7A7FEE] focus:ring-[#7A7FEE] rounded-xl text-base sm:text-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm transition-all duration-200"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-[#7A7FEE]/10 rounded-lg transition-colors duration-200"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 sm:h-14 bg-gradient-to-r from-[#7A7FEE] to-purple-600 hover:from-[#6B6FE8] hover:to-purple-700 text-white font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl rounded-xl"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2 sm:mr-3"></div>
                      Creating Account...
                    </div>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Create Account
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">What you get:</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Access to 150+ countries for virtual numbers
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Real-time SMS inbox and notifications
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    eSIM data plans with instant activation
                  </div>
                </div>
              </div>

              <div className="text-center">
                <span className="text-gray-600 dark:text-gray-300">Already have an account? </span>
                <Link
                  href="/auth/sign-in"
                  className="text-[#7A7FEE] hover:text-[#6B6FE8] font-semibold hover:underline transition-all duration-200 hover:scale-105 inline-block"
                >
                  Sign in here →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
