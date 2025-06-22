import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CostPerZoneChart() {
  // Placeholder for a bubble chart
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Cost per Cleared Zone ($/km²)</CardTitle>
        <CardDescription>Bubble size reflects total cost; color indicates terrain type.</CardDescription>
      </CardHeader>
      <CardContent className="relative h-[300px] bg-muted/30 rounded-md">
        {/* Bubbles */}
        <div
          className="absolute w-20 h-20 bg-green-500/50 rounded-full flex items-center justify-center text-xs text-white font-semibold"
          style={{ top: "20%", left: "15%" }}
        >
          Forest
        </div>
        <div
          className="absolute w-12 h-12 bg-blue-500/50 rounded-full flex items-center justify-center text-xs text-white font-semibold"
          style={{ top: "50%", left: "40%" }}
        >
          Swamp
        </div>
        <div
          className="absolute w-24 h-24 bg-yellow-500/50 rounded-full flex items-center justify-center text-xs text-black font-semibold"
          style={{ top: "30%", left: "65%" }}
        >
          Field
        </div>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <Badge className="bg-green-500">Forest</Badge>
          <Badge className="bg-blue-500">Swamp</Badge>
          <Badge className="bg-yellow-500 text-black">Field</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
