import { Shield, Globe, Zap, Users, Award, Clock, Sparkles, TrendingUp, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7A7FEE]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-[#7A7FEE]/10 text-[#7A7FEE] border-[#7A7FEE]/20 hover:bg-[#7A7FEE]/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionizing Global Communications
            </Badge>
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-[#7A7FEE] to-purple-600 dark:from-white dark:via-[#7A7FEE] dark:to-purple-400 mb-8 leading-tight">
              The Future of
              <span className="block">Virtual Numbers</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We're not just connecting numbers—we're connecting possibilities. Experience the next generation of
              <span className="font-semibold text-[#7A7FEE]"> SMS verification</span>,
              <span className="font-semibold text-[#7A7FEE]"> virtual numbers</span>, and
              <span className="font-semibold text-[#7A7FEE]"> eSIM technology</span> that powers the world's most
              innovative companies.
            </p>
          </div>

          {/* Mission Statement with enhanced design */}
          <Card className="mb-20 bg-gradient-to-br from-[#7A7FEE]/5 via-purple-50/50 to-blue-50/50 dark:from-[#7A7FEE]/10 dark:via-purple-900/20 dark:to-blue-900/20 border-[#7A7FEE]/20 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-12 text-center relative">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-[#7A7FEE]/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#7A7FEE]" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto font-light leading-relaxed">
                To democratize global communications by making virtual numbers, SMS verification, and eSIM technology
                <span className="font-semibold text-[#7A7FEE]"> accessible</span>,
                <span className="font-semibold text-[#7A7FEE]"> secure</span>, and
                <span className="font-semibold text-[#7A7FEE]"> reliable</span> for everyone, everywhere.
              </p>
            </CardContent>
          </Card>

          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description:
                  "Virtual numbers from 150+ countries with instant provisioning and 99.9% uptime across all regions.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Military-Grade Security",
                description:
                  "End-to-end encryption, SOC 2 compliance, and privacy-first architecture protecting millions of messages.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Zap,
                title: "Lightning Performance",
                description: "Sub-second number provisioning and real-time SMS delivery with our global edge network.",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Users,
                title: "Developer Paradise",
                description:
                  "RESTful APIs, GraphQL endpoints, webhooks, and SDKs in 10+ languages with comprehensive docs.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Award,
                title: "Industry Pioneer",
                description:
                  "Trusted by Fortune 500 companies and startups alike, processing 10M+ verifications monthly.",
                gradient: "from-red-500 to-rose-500",
              },
              {
                icon: Clock,
                title: "Always Available",
                description: "24/7/365 expert support with average response time under 2 minutes for critical issues.",
                gradient: "from-indigo-500 to-blue-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                  ></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#7A7FEE] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <Card className="bg-gradient-to-r from-[#7A7FEE] via-purple-600 to-indigo-600 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-10"></div>
            <CardContent className="p-12 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Powering Global Innovation</h2>
                <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                  Join thousands of companies already using our platform to scale their communications worldwide
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "150+", label: "Countries Covered", icon: Globe },
                  { number: "10M+", label: "SMS Delivered Monthly", icon: TrendingUp },
                  { number: "99.9%", label: "Uptime SLA", icon: Shield },
                  { number: "<2min", label: "Support Response", icon: Clock },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-purple-100 font-medium text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
