import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function SafetyMetricsChart() {
  // Placeholder for a vertical column chart
  const severities = [
    { level: "Level 1", count: 12, color: "bg-green-500", height: "h-1/3" },
    { level: "Level 2", count: 5, color: "bg-yellow-500", height: "h-2/3" },
    { level: "Level 3", count: 2, color: "bg-red-500", height: "h-full" },
  ]
  return (
    <Card>
      <CardHeader>
        <CardTitle>Safety Metrics</CardTitle>
        <CardDescription>Number of injuries by severity</CardDescription>
      </CardHeader>
      <CardContent className="h-[200px] flex items-end justify-around gap-4 pb-8">
        {severities.map((s) => (
          <div key={s.level} className="flex flex-col items-center h-full w-1/4">
            <div className="flex-grow flex items-end w-full relative">
              <div className={`w-full ${s.height} ${s.color} rounded-t-sm relative`}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-sm">{s.count}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{s.level}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
