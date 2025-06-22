"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPlaceholder } from "./map-placeholder"
import { TeamStatusPanel } from "./team-status-panel"
import { DataUploadPanel } from "./data-upload-panel"
import { ClearanceProgressPanel } from "./clearance-progress-panel"
import { IncidentFeedPanel } from "./incident-feed-panel"
import { CostAnalyzerPanel } from "./cost-analyzer-panel"
import { ResourceAllocationPanel } from "./resource-allocation-panel"

export function OpsDashboardContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full w-full">
      {/* Main content area - Map and primary panels */}
      <div className="flex-1 flex flex-col gap-4 min-w-0">
        {/* Map takes up more space and has fixed height to prevent overlap */}
        <Card className="h-[500px] lg:h-[600px]">
          <CardHeader className="pb-2">
            <CardTitle>Global GIS Map View</CardTitle>
            <CardDescription>Live operational overview of demining activities with mine locations.</CardDescription>
          </CardHeader>
          <CardContent className="h-[calc(100%-80px)] p-0">
            <MapPlaceholder />
          </CardContent>
        </Card>

        {/* Lower panels with fixed layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0">
          <ClearanceProgressPanel />
          <IncidentFeedPanel />
        </div>

        {/* Bottom row - Resource Allocation and Cost Analyzer in horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-shrink-0">
          <ResourceAllocationPanel />
          <CostAnalyzerPanel />
        </div>
      </div>

      {/* Right sidebar - fixed width, no extra space */}
      <div className="w-[280px] flex-shrink-0 flex flex-col gap-4">
        <TeamStatusPanel />
        <DataUploadPanel />
      </div>
    </div>
  )
}
