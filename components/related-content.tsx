"use client"

import type React from "react"
import { Button } from "./button"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface RelatedContentItem {
  label: string
  href?: string
  onClick?: () => void
  iconBefore?: LucideIcon
  iconAfter?: LucideIcon
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  disabled?: boolean
}

interface RelatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  items: RelatedContentItem[]
  title?: string
  maxItems?: number
}

export function RelatedContent({
  items,
  title = "Related Content",
  maxItems = 5,
  className,
  ...props
}: RelatedContentProps) {
  // Limit items to maxItems (default 5)
  const displayItems = items.slice(0, maxItems)

  if (displayItems.length === 0) {
    return null
  }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {title && <h3 className="text-sm font-medium text-gray-700">{title}</h3>}

      <div className="flex flex-wrap gap-2">
        {displayItems.map((item, index) => {
          const buttonProps = {
            key: index,
            iconBefore: item.iconBefore,
            iconAfter: item.iconAfter,
            variant: item.variant || "outline",
            disabled: item.disabled,
            size: "sm" as const,
          }

          if (item.href) {
            return (
              <a href={item.href} key={index}>
                <Button {...buttonProps}>{item.label}</Button>
              </a>
            )
          }

          return (
            <Button {...buttonProps} onClick={item.onClick} key={index}>
              {item.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
