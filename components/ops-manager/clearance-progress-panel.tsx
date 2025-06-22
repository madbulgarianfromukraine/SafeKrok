import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChartHorizontalBig, Target, CheckSquare } from "lucide-react"

export function ClearanceProgressPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clearance Progress Tracker</CardTitle>
        <CardDescription>Detections vs. Excavations, regional progress.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Sector Alpha Cleared</span>
            <span>75%</span>
          </div>
          <Progress value={75} aria-label="Sector Alpha Clearance Progress" />
        </div>
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Sector Beta Cleared</span>
            <span>40%</span>
          </div>
          <Progress value={40} aria-label="Sector Beta Clearance Progress" className="[&>*]:bg-yellow-500" />
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm pt-2">
          <div className="bg-muted/50 p-2 rounded-md">
            <div className="flex items-center text-muted-foreground">
              <Target className="w-4 h-4 mr-1.5" />
              Detections
            </div>
            <div className="font-semibold text-lg">1,283</div>
          </div>
          <div className="bg-muted/50 p-2 rounded-md">
            <div className="flex items-center text-muted-foreground">
              <CheckSquare className="w-4 h-4 mr-1.5" />
              Excavations
            </div>
            <div className="font-semibold text-lg">972</div>
          </div>
        </div>
        {/* Placeholder for Histograms */}
        <div className="text-center text-xs text-muted-foreground p-2 border border-dashed rounded-md">
          <BarChartHorizontalBig className="mx-auto h-6 w-6 mb-1" />
          Detection/Excavation Histograms (Placeholder)
        </div>
      </CardContent>
    </Card>
  )
}
