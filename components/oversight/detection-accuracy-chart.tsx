import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DetectionAccuracyChart() {
  // Placeholder for a grouped bar chart
  const sources = [
    { name: "Satellite", levels: ["h-1/2", "h-2/3", "h-1/3"] },
    { name: "SBU", levels: ["h-3/4", "h-full", "h-2/3"] },
    { name: "3rd Party", levels: ["h-1/3", "h-1/2", "h-1/4"] },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mine Detection Accuracy</CardTitle>
        <CardDescription>Accuracy levels by detection source</CardDescription>
        <div className="flex gap-2 mt-2">
          <Badge className="bg-blue-400">Lvl1</Badge>
          <Badge className="bg-blue-600">Lvl2</Badge>
          <Badge className="bg-blue-800">Lvl3</Badge>
        </div>
      </CardHeader>
      <CardContent className="h-[200px] flex items-end justify-around gap-4">
        {sources.map((source) => (
          <div key={source.name} className="flex flex-col items-center h-full w-1/3">
            <div className="flex-grow flex items-end justify-center w-full gap-1">
              <div className={`w-1/4 ${source.levels[0]} bg-blue-400 rounded-t-sm`} title="Level 1"></div>
              <div className={`w-1/4 ${source.levels[1]} bg-blue-600 rounded-t-sm`} title="Level 2"></div>
              <div className={`w-1/4 ${source.levels[2]} bg-blue-800 rounded-t-sm`} title="Level 3"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{source.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
