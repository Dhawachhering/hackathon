import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AuthProvider } from "@/contexts/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KaamKhoj - Find Work. Find Yourself.",
  description: "Job portal for Nepali youth - connecting students and graduates to opportunities",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-rose-50">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
