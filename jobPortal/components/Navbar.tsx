"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { useAuth } from "@/contexts/AuthContext"
import {
  Bars3Icon,
  XMarkIcon,
  BriefcaseIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const navigation = [
    { name: "Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-500 to-rose-500 rounded-xl flex items-center justify-center">
              <BriefcaseIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-rose-600 bg-clip-text text-transparent">
              KaamKhoj
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm">
                    <UserCircleIcon className="w-5 h-5 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-sky-500 to-rose-500 hover:from-sky-600 hover:to-rose-600"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-slate-200 pt-4 flex flex-col space-y-2">
                {user ? (
                  <>
                    <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <UserCircleIcon className="w-5 h-5 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="w-full justify-start"
                    >
                      <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-sky-500 to-rose-500 hover:from-sky-600 hover:to-rose-600"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
