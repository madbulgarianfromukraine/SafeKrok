import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export function AreaClearedCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Area Cleared (km²)</CardTitle>
      </CardHeader>
      <CardContent className="flex items-baseline justify-between">
        <p className="text-4xl font-bold tracking-tight">1,420.7</p>
        <div className="flex items-center text-sm text-green-500">
          <ArrowUpRight className="h-4 w-4 mr-1" />
          <span>+12.5%</span>
        </div>
      </CardContent>
    </Card>
  )
}
