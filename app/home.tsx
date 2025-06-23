import Link from "next/link"
import { Button } from "../components/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Link href="/button-overview">
        <Button iconAfter={ArrowRight}>View Button Overview</Button>
      </Link>
    </div>
  )
}
