import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500",
      outline: "border-2 border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-500",
      ghost: "text-slate-700 hover:bg-slate-100 focus:ring-slate-500",
    }

    const sizes = {
      sm: "px-3 py-2 text-sm",
      default: "px-4 py-2.5 text-sm",
      lg: "px-6 py-3 text-base",
    }

    return (
      <button ref={ref} className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
