import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function ResourceAllocationPanel() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Resource Allocation</CardTitle>
        <CardDescription className="text-sm">Manage demining kits and crew assignments.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <Label className="text-sm font-medium">Preferred Method for Sector Zeta:</Label>
          <RadioGroup defaultValue="manual" className="mt-2 flex flex-row gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manual" id="manual" />
              <Label htmlFor="manual" className="text-sm">
                Manual Crew
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="automated" id="automated" />
              <Label htmlFor="automated" className="text-sm">
                Automated Kit
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hybrid" id="hybrid" />
              <Label htmlFor="hybrid" className="text-sm">
                Hybrid
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-sm">
            <Send className="mr-2 h-3 w-3" />
            Update Allocation
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          AI-powered reallocation suggestions based on weather, terrain, and mine density.
        </p>
      </CardContent>
    </Card>
  )
}
