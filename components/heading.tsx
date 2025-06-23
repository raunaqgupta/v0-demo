import React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

const headingSizes = {
  1: "text-[24px]",
  2: "text-[20px]",
  3: "text-[16px]",
  4: "text-[14px]",
  5: "text-[14px]",
  6: "text-[12px]",
} as const

const headingWeights = {
  1: "font-bold",
  2: "font-semibold",
  3: "font-semibold",
  4: "font-medium",
  5: "font-medium",
  6: "font-medium",
} as const

export function Heading({ level, children, className, ...props }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return React.createElement(
    Component,
    {
      className: cn(headingSizes[level], headingWeights[level], "leading-tight", className),
      ...props,
    },
    children,
  )
}
