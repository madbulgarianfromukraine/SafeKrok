import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function PlannedVsAchievedChart() {
  // Placeholder for a donut chart
  return (
    <Card>
      <CardHeader>
        <CardTitle>Planned vs. Achieved</CardTitle>
        <CardDescription>Mines Cleared</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center h-48">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeDasharray="85, 100" // 85% achieved
              strokeDashoffset="25"
              transform="rotate(-90 18 18)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">85%</span>
            <span className="text-sm text-muted-foreground">Achieved</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
