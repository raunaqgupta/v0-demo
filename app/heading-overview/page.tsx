import Link from "next/link"
import { Button } from "../../components/button"
import { ArrowLeft } from "lucide-react"
import { Heading } from "../../components/heading"

export default function HeadingOverviewPage() {
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
        <Heading level={1}>Heading Component</Heading>
        <p className="text-muted-foreground">
          A flexible heading component that supports all heading levels with consistent sizing.
        </p>
      </div>

      <div className="space-y-8">
        {/* All Heading Levels */}
        <div className="space-y-4">
          <Heading level={2}>All Heading Levels</Heading>
          <div className="space-y-3 border rounded-lg p-6">
            <Heading level={1}>Heading 1 - 24px</Heading>
            <Heading level={2}>Heading 2 - 20px</Heading>
            <Heading level={3}>Heading 3 - 16px</Heading>
            <Heading level={4}>Heading 4 - 14px</Heading>
            <Heading level={5}>Heading 5 - 14px</Heading>
            <Heading level={6}>Heading 6 - 12px</Heading>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <Heading level={2}>Usage Examples</Heading>

          <div className="space-y-6">
            <div className="space-y-3">
              <Heading level={3}>Page Structure</Heading>
              <div className="border rounded-lg p-6 space-y-4">
                <Heading level={1}>Page Title</Heading>
                <p className="text-muted-foreground">This is the main page content with a clear hierarchy.</p>

                <Heading level={2}>Section Title</Heading>
                <p className="text-sm text-muted-foreground">Content for this section goes here.</p>

                <Heading level={3}>Subsection</Heading>
                <p className="text-sm text-muted-foreground">More detailed content in subsections.</p>
              </div>
            </div>

            <div className="space-y-3">
              <Heading level={3}>Custom Styling</Heading>
              <div className="border rounded-lg p-6 space-y-3">
                <Heading level={1} className="text-blue-600">
                  Colored Heading
                </Heading>
                <Heading level={2} className="text-center">
                  Centered Heading
                </Heading>
                <Heading level={3} className="uppercase tracking-wide">
                  Styled Heading
                </Heading>
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
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-mono text-sm">level</td>
                  <td className="p-3 text-sm">1 | 2 | 3 | 4 | 5 | 6</td>
                  <td className="p-3 text-sm">The heading level (h1, h2, etc.)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">children</td>
                  <td className="p-3 text-sm">React.ReactNode</td>
                  <td className="p-3 text-sm">The heading content</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 text-sm">string</td>
                  <td className="p-3 text-sm">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
