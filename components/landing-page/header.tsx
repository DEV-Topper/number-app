"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={handleLogoClick}>
              <span className="text-2xl tracking-wide text-white">
                Number App
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <Link
                      href="/about"
                      className={`transition-colors ${
                        pathname === "/about"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={`transition-colors ${
                        pathname === "/contact"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/auth/sign-in"
                      className={`transition-colors ${
                        pathname === "/auth/sign-in"
                          ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                          : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                      }`}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/auth/sign-up" className="btn-primary text-sm px-4 py-2">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
