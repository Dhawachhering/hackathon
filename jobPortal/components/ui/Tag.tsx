import type React from "react"
import { cn } from "@/lib/utils"

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline"
  children: React.ReactNode
}

export function Tag({ className, variant = "default", children, ...props }: TagProps) {
  const variants = {
    default: "bg-gradient-to-r from-sky-500 to-rose-500 text-white",
    secondary: "bg-slate-100 text-slate-700",
    outline: "border border-slate-300 text-slate-600 bg-white",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium transition-colors",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
