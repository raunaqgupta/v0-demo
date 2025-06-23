import type React from "react"
import { Button } from "./button"
import { Search, Bell, User, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface TopBarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  showSearch?: boolean
  showNotifications?: boolean
  showUserMenu?: boolean
  showMobileMenu?: boolean
}

export function TopBar({
  title = "App Name",
  showSearch = true,
  showNotifications = true,
  showUserMenu = true,
  showMobileMenu = true,
  className,
  ...props
}: TopBarProps) {
  return (
    <div className={cn("flex items-center justify-between p-4 border-b bg-white", className)} {...props}>
      {/* Left section */}
      <div className="flex items-center gap-4">
        {showMobileMenu && (
          <Button variant="ghost" size="sm" iconBefore={Menu} className="md:hidden">
            Menu
          </Button>
        )}
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      {/* Center section */}
      {showSearch && (
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Right section */}
      <div className="flex items-center gap-2">
        {showSearch && (
          <Button variant="ghost" size="sm" iconBefore={Search} className="md:hidden">
            Search
          </Button>
        )}

        {showNotifications && (
          <Button variant="ghost" size="sm" iconBefore={Bell} className="relative">
            Notifications
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
        )}

        {showUserMenu && (
          <Button variant="ghost" size="sm" iconBefore={User}>
            Profile
          </Button>
        )}
      </div>
    </div>
  )
}
