"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { useTheme } from "next-themes"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && resolvedTheme === "dark"

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" style={{ display: isOpen ? "block" : "none" }}>
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] shadow-xl overflow-y-auto"
      >
        {/* Header / App Name / Close */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
          <Link href="/" className="flex items-center" onClick={onClose}>
            <span className="text-xl font-bold tracking-wide text-white">
              Number App
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className={`block py-3 px-4 rounded-lg text-base ${
                  pathname === "/about"
                    ? "bg-[#7A7FEE]/10 text-[#7A7FEE]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-3 px-4 rounded-lg text-base ${
                  pathname === "/contact"
                    ? "bg-[#7A7FEE]/10 text-[#7A7FEE]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/auth/sign-in"
                className={`block py-3 px-4 rounded-lg text-base ${
                  pathname === "/auth/sign-in"
                    ? "bg-[#7A7FEE]/10 text-[#7A7FEE]"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={onClose}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/auth/sign-up"
                className="block py-3 px-4 rounded-lg text-base font-medium bg-[#7A7FEE] text-white text-center hover:bg-opacity-90 transition-colors"
                onClick={onClose}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
