import Link from "next/link"
import { Button } from "../components/button"
import { ArrowRight, Palette, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col gap-4">
        <Link href="/design-system">
          <Button iconBefore={Palette} iconAfter={ArrowRight}>
            Design System
          </Button>
        </Link>

        <Link href="/o11y">
          <Button variant="outline" iconBefore={BarChart3} iconAfter={ArrowRight}>
            Splunk O11y Cloud
          </Button>
        </Link>
      </div>
    </div>
  )
}
