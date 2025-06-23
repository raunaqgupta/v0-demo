import Link from "next/link"
import { Button } from "../../components/button"
import { ArrowLeft } from "lucide-react"
import { BaseTemplate } from "../../components/templates/base"
import { Heading } from "../../components/heading"

export default function BaseTemplateOverviewPage() {
  return (
    <div className="p-8 space-y-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <Link href="/design-system">
          <Button variant="outline" size="sm" iconBefore={ArrowLeft}>
            Back to Design System
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <Heading level={1}>Base Template</Heading>
        <p className="text-muted-foreground">
          A foundational layout template that combines the top bar and navigation panel components.
        </p>
      </div>

      <div className="space-y-8">
        {/* Default Base Template */}
        <div className="space-y-4">
          <Heading level={2}>Default Layout</Heading>
          <div className="border rounded-lg overflow-hidden h-96">
            <BaseTemplate title="My Application">
              <div className="space-y-4">
                <Heading level={1}>Welcome to the Dashboard</Heading>
                <p className="text-muted-foreground">
                  This is the main content area. You can place any content here including forms, tables, charts, and
                  more.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg border">
                    <h3 className="font-medium mb-2">Card 1</h3>
                    <p className="text-sm text-muted-foreground">Sample content card</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h3 className="font-medium mb-2">Card 2</h3>
                    <p className="text-sm text-muted-foreground">Sample content card</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h3 className="font-medium mb-2">Card 3</h3>
                    <p className="text-sm text-muted-foreground">Sample content card</p>
                  </div>
                </div>
              </div>
            </BaseTemplate>
          </div>
        </div>

        {/* Variations */}
        <div className="space-y-4">
          <Heading level={2}>Variations</Heading>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-medium">Collapsed Navigation</h3>
              <div className="border rounded-lg overflow-hidden h-64">
                <BaseTemplate title="Collapsed Nav" navigationCollapsed={true}>
                  <div className="space-y-4">
                    <Heading level={2}>Collapsed Layout</Heading>
                    <p className="text-sm text-muted-foreground">Navigation is collapsed to save space.</p>
                  </div>
                </BaseTemplate>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">No Navigation</h3>
              <div className="border rounded-lg overflow-hidden h-64">
                <BaseTemplate title="No Nav" showNavigation={false}>
                  <div className="space-y-4">
                    <Heading level={2}>Full Width Layout</Heading>
                    <p className="text-sm text-muted-foreground">Content takes full width without navigation.</p>
                  </div>
                </BaseTemplate>
              </div>
            </div>
          </div>
        </div>

        {/* Props Documentation */}
        <div className="space-y-4">
          <Heading level={2}>Props</Heading>
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
                  <td className="p-3 font-mono text-sm">children</td>
                  <td className="p-3 text-sm">React.ReactNode</td>
                  <td className="p-3 text-sm">-</td>
                  <td className="p-3 text-sm">The main content to display</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">title</td>
                  <td className="p-3 text-sm">string</td>
                  <td className="p-3 text-sm">"App Name"</td>
                  <td className="p-3 text-sm">The title displayed in the top bar</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">showNavigation</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">true</td>
                  <td className="p-3 text-sm">Whether to show the navigation panel</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">navigationCollapsed</td>
                  <td className="p-3 text-sm">boolean</td>
                  <td className="p-3 text-sm">false</td>
                  <td className="p-3 text-sm">Whether the navigation panel is collapsed</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 text-sm">string</td>
                  <td className="p-3 text-sm">-</td>
                  <td className="p-3 text-sm">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage Example */}
        <div className="space-y-4">
          <Heading level={2}>Usage Example</Heading>
          <div className="border rounded-lg p-4 bg-gray-50">
            <pre className="text-sm overflow-x-auto">
              {`import { BaseTemplate } from '@/components/templates/base'

export default function MyPage() {
  return (
    <BaseTemplate title="My Dashboard">
      <h1>Page Content</h1>
      <p>Your page content goes here...</p>
    </BaseTemplate>
  )
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
