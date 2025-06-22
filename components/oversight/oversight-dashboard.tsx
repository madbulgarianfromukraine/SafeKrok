import { AreaClearedCard } from "./area-cleared-card"
import { CostPerZoneChart } from "./cost-per-zone-chart"
import { DashboardFilters } from "./dashboard-filters"
import { DetectionAccuracyChart } from "./detection-accuracy-chart"
import { PlannedVsAchievedChart } from "./planned-vs-achieved-chart"
import { SafetyMetricsChart } from "./safety-metrics-chart"
import { TeamPerformanceLeaderboard } from "./team-performance-leaderboard"

export function OversightDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex items-center gap-3">
          <img src="/safekrok-logo.png" alt="SafeKrok Logo" className="h-10 w-10 rounded-sm" />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">SafeKrok - Oversight Dashboard</h1>
            <p className="text-muted-foreground">Read-only analytics for strategic decision-makers and donors.</p>
          </div>
        </div>
        <DashboardFilters />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <AreaClearedCard />
          <PlannedVsAchievedChart />
        </div>
        {/* Column 2 */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <CostPerZoneChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <DetectionAccuracyChart />
        </div>
        <div className="lg:col-span-2">
          <SafetyMetricsChart />
        </div>
      </div>

      <div>
        <TeamPerformanceLeaderboard />
      </div>
    </div>
  )
}
