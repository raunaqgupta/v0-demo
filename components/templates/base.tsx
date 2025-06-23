import type React from "react"
import { TopBar } from "../top-bar"
import { NavPanel } from "../nav-panel"
import { cn } from "@/lib/utils"
import navigationItems from "../../data/navigation-list.json"

interface BaseTemplateProps {
  children: React.ReactNode
  title?: string
  showNavigation?: boolean
  navigationCollapsed?: boolean
  className?: string
}

export function BaseTemplate({
  children,
  title = "App Name",
  showNavigation = true,
  navigationCollapsed = false,
  className,
}: BaseTemplateProps) {
  return (
    <div className={cn("h-screen flex flex-col", className)}>
      {/* Top Bar */}
      <TopBar title={title} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Panel */}
        {showNavigation && <NavPanel items={navigationItems} collapsed={navigationCollapsed} />}

        {/* Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
