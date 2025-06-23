import type React from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  iconBefore?: LucideIcon
  iconAfter?: LucideIcon
  iconSize?: number
  iconClassName?: string
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  size?: "sm" | "default" | "lg" | "icon"
  asChild?: boolean
}

const buttonVariants = {
  variant: {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
    link: "text-slate-900 underline-offset-4 hover:underline",
  },
  size: {
    sm: "h-9 rounded-md px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  },
}

export function Button({
  children,
  iconBefore: IconBefore,
  iconAfter: IconAfter,
  iconSize = 16,
  iconClassName,
  className,
  variant = "default",
  size = "default",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variantClasses = buttonVariants.variant[variant]
  const sizeClasses = buttonVariants.size[size]

  return (
    <button className={cn(baseClasses, variantClasses, sizeClasses, "gap-2 mx-0", className)} disabled={disabled} {...props}>
      {IconBefore && <IconBefore size={iconSize} className={cn("flex-shrink-0", iconClassName)} />}
      <span className={cn(size === "icon" && "sr-only")}>{children}</span>
      {IconAfter && <IconAfter size={iconSize} className={cn("flex-shrink-0", iconClassName)} />}
    </button>
  )
}
