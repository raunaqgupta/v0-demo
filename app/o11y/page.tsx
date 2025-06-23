"use client"

import { BaseTemplate } from "../../components/templates/base"
import { Heading } from "../../components/heading"
import { Button } from "../../components/button"
import { BarChart3, Activity, AlertTriangle, TrendingUp, Users, Server, Clock } from "lucide-react"

export default function SplunkDashboardPage() {
  return (
    <BaseTemplate title="Splunk O11y Cloud">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <Heading level={1}>Observability Dashboard</Heading>
            <p className="text-muted-foreground mt-2">Monitor your applications and infrastructure in real-time</p>
          </div>
          <Button iconBefore={TrendingUp}>View Reports</Button>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Services</p>
                <p className="text-2xl font-bold">127</p>
              </div>
              <Server className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+5% from last hour</p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Response Time</p>
                <p className="text-2xl font-bold">245ms</p>
              </div>
              <Clock className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">-12ms from last hour</p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-green-600 mt-2">+8% from last hour</p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Error Rate</p>
                <p className="text-2xl font-bold">0.12%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
            <p className="text-xs text-red-600 mt-2">+0.02% from last hour</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <Heading level={3}>Application Performance</Heading>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Performance Chart Placeholder</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <Heading level={3}>System Health</Heading>
              <Activity className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Health Chart Placeholder</p>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <Heading level={3}>Recent Alerts</Heading>
          </div>
          <div className="divide-y">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div>
                  <p className="font-medium">High CPU Usage</p>
                  <p className="text-sm text-muted-foreground">web-server-01 - CPU usage above 90%</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2 min ago</span>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Memory Warning</p>
                  <p className="text-sm text-muted-foreground">database-01 - Memory usage at 85%</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">5 min ago</span>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium">Service Restored</p>
                  <p className="text-sm text-muted-foreground">api-gateway - Service back online</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">12 min ago</span>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <Heading level={3}>Service Status</Heading>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Web Services</span>
                <span className="text-green-600 text-sm font-medium">Healthy</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Database</span>
                <span className="text-green-600 text-sm font-medium">Healthy</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">Cache Layer</span>
                <span className="text-yellow-600 text-sm font-medium">Warning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  )
}
