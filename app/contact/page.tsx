"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageCircle, Phone, Clock, Send } from "lucide-react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      alert("Message sent successfully! We'll get back to you within 24 hours.")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              Contact
              <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Have questions about our virtual numbers or eSIM services? Our expert team is here to help you 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7A7FEE]/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A7FEE]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white text-sm sm:text-base">Email Support</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">support@platform.com</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Get technical support and account assistance via email.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7A7FEE]/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A7FEE]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white text-sm sm:text-base">Live Chat</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Available 24/7</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Chat with our support team for instant assistance.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7A7FEE]/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A7FEE]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white text-sm sm:text-base">Phone Support</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Call us for urgent technical issues and enterprise support.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7A7FEE]/10 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A7FEE]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white text-sm sm:text-base">Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">Within 2 hours</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    Average response time for all support channels.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl">Send us a Message</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="h-10 sm:h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-10 sm:h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="h-10 sm:h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        required
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-10 sm:h-12 text-base sm:text-lg bg-[#7A7FEE] hover:bg-[#6B6FE8] transition-all duration-200"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
