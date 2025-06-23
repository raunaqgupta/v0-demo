"use client"

import { Button } from "../../components/button"
import { Download, Upload, Save, Send, ArrowRight, Plus, Trash2, Edit, ExternalLink, Heart, Star } from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ButtonOverviewPage() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/design-system">
          <Button iconBefore={ArrowLeft} variant="outline" size="sm">
            Back to Design System
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Button Component</h1>
        <p className="text-muted-foreground">
          A flexible button component that supports icons before and after the label text.
        </p>
      </div>

      <div className="space-y-6">
        {/* Icon Before Examples */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Icon Before Label</h2>
          <div className="flex flex-wrap gap-3">
            <Button iconBefore={Download}>Download File</Button>
            <Button iconBefore={Upload} variant="outline">
              Upload File
            </Button>
            <Button iconBefore={Save} variant="secondary">
              Save Changes
            </Button>
            <Button iconBefore={Plus} variant="destructive">
              Add Item
            </Button>
          </div>
        </div>

        {/* Icon After Examples */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Icon After Label</h2>
          <div className="flex flex-wrap gap-3">
            <Button iconAfter={ArrowRight}>Continue</Button>
            <Button iconAfter={ExternalLink} variant="outline">
              Open Link
            </Button>
            <Button iconAfter={Send} variant="secondary">
              Send Message
            </Button>
            <Button iconAfter={ArrowLeft} variant="ghost">
              Go Back
            </Button>
          </div>
        </div>

        {/* Both Icons Examples */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Icons Before and After</h2>
          <div className="flex flex-wrap gap-3">
            <Button iconBefore={Edit} iconAfter={ArrowRight}>
              Edit Profile
            </Button>
            <Button iconBefore={Heart} iconAfter={Star} variant="outline">
              Add to Favorites
            </Button>
            <Button iconBefore={Trash2} iconAfter={ExternalLink} variant="destructive">
              Delete Forever
            </Button>
          </div>
        </div>

        {/* Different Sizes */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Different Icon Sizes</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Button iconBefore={Download} iconSize={12} size="sm">
              Small
            </Button>
            <Button iconBefore={Download} iconSize={16}>
              Default
            </Button>
            <Button iconBefore={Download} iconSize={20} size="lg">
              Large
            </Button>
          </div>
        </div>

        {/* Custom Icon Styling */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Custom Icon Styling</h2>
          <div className="flex flex-wrap gap-3">
            <Button iconBefore={Heart} iconClassName="text-red-500" variant="outline">
              Like
            </Button>
            <Button iconBefore={Star} iconAfter={Star} iconClassName="text-yellow-500" variant="outline">
              Rate
            </Button>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-medium">Navigation</h3>
              <div className="flex gap-2">
                <Button iconBefore={ArrowLeft} variant="outline" size="sm">
                  Previous
                </Button>
                <Button iconAfter={ArrowRight} size="sm">
                  Next
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Actions</h3>
              <div className="flex gap-2">
                <Button iconBefore={Save} variant="secondary" size="sm">
                  Save Draft
                </Button>
                <Button iconBefore={Send} iconAfter={ExternalLink} size="sm">
                  Publish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
