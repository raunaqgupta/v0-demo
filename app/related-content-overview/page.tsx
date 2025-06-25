import Link from "next/link"
import { Button } from "../../components/button"
import { RelatedContent } from "../../components/related-content"
import { ArrowLeft } from "lucide-react"
import { Heading } from "../../components/heading"
import { FileText, Users, Settings, BarChart3, HelpCircle, ExternalLink, ArrowRight } from "lucide-react"

export default function RelatedContentOverviewPage() {
  const sampleItems = [
    {
      label: "User Guide",
      href: "#",
      iconBefore: FileText,
    },
    {
      label: "Settings",
      href: "#",
      iconBefore: Settings,
    },
    {
      label: "Analytics",
      href: "#",
      iconBefore: BarChart3,
    },
    {
      label: "Help Center",
      href: "#",
      iconBefore: HelpCircle,
    },
  ]

  const articleItems = [
    {
      label: "Getting Started",
      href: "#",
      variant: "outline" as const,
    },
    {
      label: "Best Practices",
      href: "#",
      variant: "outline" as const,
    },
    {
      label: "Troubleshooting",
      href: "#",
      variant: "outline" as const,
    },
  ]

  const actionItems = [
    {
      label: "Create New",
      onClick: () => alert("Create new clicked"),
      variant: "secondary" as const,
    },
    {
      label: "Import Data",
      onClick: () => alert("Import clicked"),
      variant: "outline" as const,
    },
    {
      label: "Export",
      onClick: () => alert("Export clicked"),
      variant: "outline" as const,
      iconAfter: ExternalLink,
    },
  ]

  const maxItemsExample = [
    { label: "Item 1", href: "#" },
    { label: "Item 2", href: "#" },
    { label: "Item 3", href: "#" },
    { label: "Item 4", href: "#" },
    { label: "Item 5", href: "#" },
    { label: "Item 6", href: "#" }, // This will be hidden
    { label: "Item 7", href: "#" }, // This will be hidden
  ]

  const navigationItems = [
    {
      label: "Dashboard",
      href: "#",
      variant: "ghost" as const,
      iconBefore: BarChart3,
    },
    {
      label: "Users",
      href: "#",
      variant: "ghost" as const,
      iconBefore: Users,
    },
    {
      label: "Documentation",
      href: "#",
      variant: "ghost" as const,
      iconAfter: ArrowRight,
    },
  ]

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
        <Heading level={1}>Related Content Component</Heading>
        <p className="text-muted-foreground">
          A horizontal group of buttons for displaying related content, actions, or navigation links. Limited to 5
          buttons maximum.
        </p>
      </div>

      <div className="space-y-8">
        {/* Basic Example */}
        <div className="space-y-4">
          <Heading level={2}>Basic Example</Heading>
          <div className="border rounded-lg p-6 bg-white">
            <RelatedContent title="Related Resources" items={sampleItems} />
          </div>
        </div>

        {/* Different Variants */}
        <div className="space-y-4">
          <Heading level={2}>Different Use Cases</Heading>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">Article Navigation</h3>
              <div className="border rounded-lg p-6 bg-white">
                <RelatedContent title="Related Articles" items={articleItems} />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Quick Actions</h3>
              <div className="border rounded-lg p-6 bg-white">
                <RelatedContent title="Quick Actions" items={actionItems} />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Navigation Links</h3>
              <div className="border rounded-lg p-6 bg-white">
                <RelatedContent title="Quick Navigation" items={navigationItems} />
              </div>
            </div>
          </div>
        </div>

        {/* Maximum Items Limit */}
        <div className="space-y-4">
          <Heading level={2}>Maximum Items Limit</Heading>
          <p className="text-sm text-muted-foreground">
            The component automatically limits to 5 buttons maximum. Additional items are ignored.
          </p>
          <div className="border rounded-lg p-6 bg-white">
            <RelatedContent title="Limited to 5 Items (7 provided)" items={maxItemsExample} />
          </div>
        </div>

        {/* Without Title */}
        <div className="space-y-4">
          <Heading level={2}>Without Title</Heading>
          <div className="border rounded-lg p-6 bg-white">
            <RelatedContent items={sampleItems} title="" />
          </div>
        </div>

        {/* Responsive Behavior */}
        <div className="space-y-4">
          <Heading level={2}>Responsive Behavior</Heading>
          <p className="text-sm text-muted-foreground">Buttons wrap to new lines on smaller screens automatically.</p>
          <div className="border rounded-lg p-6 bg-white max-w-sm">
            <RelatedContent title="Narrow Container" items={sampleItems} />
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
                  <td className="p-3 font-mono text-sm">items</td>
                  <td className="p-3 text-sm">RelatedContentItem[]</td>
                  <td className="p-3 text-sm">required</td>
                  <td className="p-3 text-sm">Array of button items to display</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">title</td>
                  <td className="p-3 text-sm">string</td>
                  <td className="p-3 text-sm">"Related Content"</td>
                  <td className="p-3 text-sm">Title displayed above the buttons</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">maxItems</td>
                  <td className="p-3 text-sm">number</td>
                  <td className="p-3 text-sm">5</td>
                  <td className="p-3 text-sm">Maximum number of buttons to display</td>
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

        {/* Item Structure */}
        <div className="space-y-4">
          <Heading level={2}>RelatedContentItem Structure</Heading>
          <div className="border rounded-lg p-4 bg-gray-50">
            <pre className="text-sm overflow-x-auto">
              {`interface RelatedContentItem {
  label: string
  href?: string
  onClick?: () => void
  iconBefore?: LucideIcon
  iconAfter?: LucideIcon
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link"
  disabled?: boolean
}`}
            </pre>
          </div>
        </div>

        {/* Usage Example */}
        <div className="space-y-4">
          <Heading level={2}>Usage Example</Heading>
          <div className="border rounded-lg p-4 bg-gray-50">
            <pre className="text-sm overflow-x-auto">
              {`import { RelatedContent } from '@/components/related-content'
import { FileText, Settings } from 'lucide-react'

const items = [
  {
    label: "Documentation",
    href: "/docs",
    iconBefore: FileText,
  },
  {
    label: "Settings",
    onClick: () => openSettings(),
    iconBefore: Settings,
    variant: "secondary"
  }
]

export default function MyPage() {
  return (
    <RelatedContent 
      title="Quick Links"
      items={items}
    />
  )
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
