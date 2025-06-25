import Link from "next/link"
import { Button } from "../../components/button"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function DesignSystemPage() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/">
          <Button variant="outline" size="sm" iconBefore={ArrowLeft}>
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Design System</h1>
        <p className="text-muted-foreground">Explore our collection of reusable UI components and design patterns.</p>
      </div>

      <div className="space-y-8">
        {/* Components Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/button-overview" className="block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium mb-2">Button Component</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Flexible buttons with customizable icons before and after labels
                </p>
                <Button size="sm" iconAfter={ArrowRight}>
                  View Component
                </Button>
              </div>
            </Link>

            <Link href="/heading-overview" className="block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium mb-2">Heading Component</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Semantic headings with consistent sizing across all levels
                </p>
                <Button size="sm" iconAfter={ArrowRight}>
                  View Component
                </Button>
              </div>
            </Link>

            <Link href="/top-bar-overview" className="block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium mb-2">Top Bar Component</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Navigation bar with search, notifications, and user menu
                </p>
                <Button size="sm" iconAfter={ArrowRight}>
                  View Component
                </Button>
              </div>
            </Link>

            <Link href="/navigation-panel-overview" className="block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium mb-2">Navigation Panel Component</h3>
                <p className="text-sm text-muted-foreground mb-3">Sidebar navigation with nested items and badges</p>
                <Button size="sm" iconAfter={ArrowRight}>
                  View Component
                </Button>
              </div>
            </Link>

            <Link href="/related-content-overview" className="block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium mb-2">Related Content Component</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Horizontal group of buttons for related content and quick actions
                </p>
                <Button size="sm" iconAfter={ArrowRight}>
                  View Component
                </Button>
              </div>
            </Link>
          </div>
        </div>

        {/* Templates Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/base-template-overview" className="block">
              <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="font-medium mb-2">Base Template</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Foundational layout combining top bar and navigation panel
                </p>
                <Button size="sm" iconAfter={ArrowRight}>
                  View Template
                </Button>
              </div>
            </Link>

            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors opacity-50">
              <h3 className="font-medium mb-2">Dashboard Layout</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Complete dashboard template with sidebar navigation and top bar
              </p>
              <Button size="sm" variant="outline" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors opacity-50">
              <h3 className="font-medium mb-2">Settings Page</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Settings page template with form sections and navigation
              </p>
              <Button size="sm" variant="outline" disabled>
                Coming Soon
              </Button>
            </div>

            <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors opacity-50">
              <h3 className="font-medium mb-2">Data Table View</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Data table template with filtering, sorting, and pagination
              </p>
              <Button size="sm" variant="outline" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
