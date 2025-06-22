import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, Users, Cog } from "lucide-react"

export function CostAnalyzerPanel() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Cost & Trade-off Analyzer</CardTitle>
        <CardDescription className="text-sm">Compare operational costs.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="text-center p-2 bg-muted/50 rounded-md">
            <Users className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <div className="font-semibold">$500</div>
            <div className="text-xs text-muted-foreground">Manual/day</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-md">
            <Cog className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <div className="font-semibold">$120</div>
            <div className="text-xs text-muted-foreground">Machine/hr</div>
          </div>
          <div className="text-center p-2 bg-muted/50 rounded-md">
            <DollarSign className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
            <div className="font-semibold">$2000</div>
            <div className="text-xs text-muted-foreground">Rental/wk</div>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground p-2 border border-dashed rounded-md">
          Cumulative Cost vs. Cleared Area Charts (Placeholder)
        </div>
      </CardContent>
    </Card>
  )
}
