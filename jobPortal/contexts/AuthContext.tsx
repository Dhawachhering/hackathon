"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  type: "seeker" | "employer"
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, type: "seeker" | "employer") => Promise<void>
  logout: () => void
  register: (name: string, email: string, password: string, type: "seeker" | "employer") => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string, type: "seeker" | "employer") => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email,
      type,
    }
    setUser(mockUser)
  }

  const logout = () => {
    setUser(null)
  }

  const register = async (name: string, email: string, password: string, type: "seeker" | "employer") => {
    // Mock registration - replace with actual API call
    const mockUser: User = {
      id: "1",
      name,
      email,
      type,
    }
    setUser(mockUser)
  }

  return <AuthContext.Provider value={{ user, login, logout, register }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
