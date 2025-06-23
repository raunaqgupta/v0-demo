import Link from "next/link"
import { Button } from "../../components/button"
import { ArrowLeft } from "lucide-react"
import { NavPanel } from "../../components/nav-panel"
import navigationItems from "../../data/navigation-list.json"

export default function NavigationPanelOverviewPage() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/design-system">
          <Button variant="outline" size="sm" iconBefore={ArrowLeft}>
            Back to Design System
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Nav Panel Component</h1>
        <p className="text-muted-foreground">
          A flexible sidebar navigation panel with support for nested items and badges.
        </p>
      </div>

      <div className="space-y-8">
        {/* Default Navigation Panel */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Default Navigation Panel</h2>
          <div className="border rounded-lg overflow-hidden h-96">
            <NavPanel items={navigationItems} />
          </div>
        </div>

        {/* Variations */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Variations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Collapsed</h3>
              <div className="border rounded-lg overflow-hidden h-64">
                <NavPanel items={navigationItems} collapsed={true} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Without Footer</h3>
              <div className="border rounded-lg overflow-hidden h-64">
                <NavPanel items={navigationItems} showFooter={false} />
              </div>
            </div>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Props</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-medium">Prop</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Default</th>
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-mono text-sm">items</td>
                  <td className="p-3 text-sm">NavigationItem[]</td>
                  <td className="p-3 text-sm">required</td>
                  <td className="p-3 text-sm">Array of navigation items</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">collapsed</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">false</td>
                  <td className="p-3 text-sm">Whether the panel is collapsed</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">showFooter</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">true</td>
                  <td className="p-3 text-sm">Whether to show the user footer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Navigation Item Structure */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">NavigationItem Structure</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <pre className="text-sm">
              {`interface NavigationItem {
  label: string
  icon: string
  href?: string
  badge?: string
  children?: NavigationItem[]
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
