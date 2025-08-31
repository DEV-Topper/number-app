"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Zap, Smartphone, MessageSquare, CreditCard } from "lucide-react"

export default function PlatformFeatures() {
  const features = [
    {
      icon: Globe,
      title: "Global Virtual Numbers",
      description:
        "Access phone numbers from 150+ countries instantly. Perfect for SMS verification, business communications, and privacy protection.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Real-time SMS Inbox",
      description:
        "Receive and manage SMS messages in real-time with our advanced inbox system. Never miss important verification codes again.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Smartphone,
      title: "eSIM Data Plans",
      description:
        "Travel smart with our global eSIM solutions. Instant activation, competitive rates, and coverage in 100+ destinations worldwide.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and security protocols protect your communications. GDPR compliant with 99.9% uptime guarantee.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast API",
      description:
        "Integrate our services seamlessly with comprehensive APIs, webhooks, and SDKs. Built for developers, loved by businesses.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: CreditCard,
      title: "Flexible Billing",
      description:
        "Pay-as-you-use pricing with wallet-based payments. No hidden fees, transparent pricing, and instant top-ups available 24/7.",
      color: "from-teal-500 to-green-500",
    },
  ]

  return (
    <section id="features" className="my-20">
      <h2 className="text-black dark:text-white mb-6">
        Platform
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Features</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Discover the powerful features that make our platform the preferred choice for businesses and developers
        worldwide. From virtual numbers to eSIM solutions, we've got you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3 group-hover:text-[#7A7FEE] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex justify-center mt-12">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Ready to get started with our platform?</p>
          <a
            href="/auth/sign-up"
            className="btn-primary inline-flex items-center px-8 py-3 bg-[#7A7FEE] hover:bg-[#6B6FE8] text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
