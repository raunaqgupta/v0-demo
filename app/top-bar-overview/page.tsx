import Link from "next/link"
import { Button } from "../../components/button"
import { ArrowLeft } from "lucide-react"
import { TopBar } from "../../components/top-bar"

export default function TopBarOverviewPage() {
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
        <h1 className="text-3xl font-bold">Top Bar Component</h1>
        <p className="text-muted-foreground">
          A flexible top navigation bar with search, notifications, and user menu.
        </p>
      </div>

      <div className="space-y-8">
        {/* Default Top Bar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Default Top Bar</h2>
          <div className="border rounded-lg overflow-hidden">
            <TopBar />
          </div>
        </div>

        {/* Variations */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Variations</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-medium">Custom Title</h3>
              <div className="border rounded-lg overflow-hidden">
                <TopBar title="My Dashboard" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Without Search</h3>
              <div className="border rounded-lg overflow-hidden">
                <TopBar showSearch={false} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Minimal</h3>
              <div className="border rounded-lg overflow-hidden">
                <TopBar title="Simple App" showSearch={false} showNotifications={false} showMobileMenu={false} />
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
                  <td className="p-3 font-mono text-sm">title</td>
                  <td className="p-3 text-sm">string</td>
                  <td className="p-3 text-sm">"App Name"</td>
                  <td className="p-3 text-sm">The title displayed in the top bar</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">showSearch</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">true</td>
                  <td className="p-3 text-sm">Whether to show the search input</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">showNotifications</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">true</td>
                  <td className="p-3 text-sm">Whether to show the notifications bell</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">showUserMenu</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">true</td>
                  <td className="p-3 text-sm">Whether to show the user menu button</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">showMobileMenu</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">true</td>
                  <td className="p-3 text-sm">Whether to show the mobile menu button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
