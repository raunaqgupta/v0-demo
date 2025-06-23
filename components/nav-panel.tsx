"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./button"
import { Home, Users, ChevronRight, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItem {
  label: string
  icon: string
  href?: string
  badge?: string
  children?: NavigationItem[]
}

interface NavPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  items: NavigationItem[]
  collapsed?: boolean
  showFooter?: boolean
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home,
  Users,
  ChevronRight,
  User,
}

export function NavPanel({ items, collapsed = false, showFooter = true, className, ...props }: NavPanelProps) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const active = item.href ? isActive(item.href) : false
    const IconComponent = iconMap[item.icon]

    return (
      <div key={item.label} className={cn("space-y-1", level > 0 && "ml-4")}>
        {item.href ? (
          <Link href={item.href} className="block">
            <Button
              variant={active ? "secondary" : "ghost"}
              iconBefore={IconComponent}
              iconSize={18}
              className="w-full"
            >
              {!collapsed && (
                <>
                  {item.label}
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full ml-auto">
                      {item.badge}
                    </span>
                  )}
                  {item.children && <ChevronRight size={14} className="ml-auto" />}
                </>
              )}
            </Button>
          </Link>
        ) : (
          <Button variant={active ? "secondary" : "ghost"} iconBefore={IconComponent} iconSize={18} className="w-full">
            {!collapsed && (
              <>
                {item.label}
                {item.badge && (
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full ml-auto">{item.badge}</span>
                )}
                {item.children && <ChevronRight size={14} className="ml-auto" />}
              </>
            )}
          </Button>
        )}

        {!collapsed && item.children && (
          <div className="space-y-1">{item.children.map((child) => renderNavigationItem(child, level + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col h-full bg-white border-r", collapsed ? "w-16" : "w-64", className)} {...props}>
      {/* Navigation items */}
      <div className="flex-1 p-4 space-y-2 overflow-y-auto">{items.map((item) => renderNavigationItem(item))}</div>

      {/* Footer */}
      {showFooter && !collapsed && (
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
