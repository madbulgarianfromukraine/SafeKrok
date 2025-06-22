import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ShieldCheck, Info } from "lucide-react"

const incidents = [
  {
    id: 1,
    type: "Near-Miss",
    message: "Team Bravo reported unexpected object.",
    time: "10:32 AM",
    severity: "warning",
  },
  {
    id: 2,
    type: "Sensor Alarm",
    message: "Acoustic sensor #4 triggered in Sector Gamma.",
    time: "10:15 AM",
    severity: "info",
  },
  {
    id: 3,
    type: "Detonation",
    message: "Controlled detonation successful in Sector Alpha.",
    time: "09:55 AM",
    severity: "success",
  },
  {
    id: 4,
    type: "Equipment Malfunction",
    message: "Detector D-003 offline for Team Charlie.",
    time: "09:40 AM",
    severity: "warning",
  },
  { id: 5, type: "Weather Alert", message: "Heavy rain approaching Sector Delta.", time: "09:30 AM", severity: "info" },
]

const getIconAndColor = (severity: string) => {
  switch (severity) {
    case "warning":
      return { Icon: AlertTriangle, color: "text-yellow-400", badge: "destructive" as const }
    case "success":
      return { Icon: ShieldCheck, color: "text-green-400", badge: "success" as const }
    default:
      return { Icon: Info, color: "text-blue-400", badge: "info" as const }
  }
}

export function IncidentFeedPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk & Incident Monitor</CardTitle>
        <CardDescription>Real-time alerts and incident log.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-3">
          <div className="space-y-3">
            {incidents.map((incident) => {
              const { Icon, color, badge } = getIconAndColor(incident.severity)
              return (
                <div key={incident.id} className="flex items-start gap-3 p-2 bg-muted/30 rounded-md">
                  <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${color}`} />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <Badge variant={badge} className="text-xs mb-0.5">
                        {incident.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{incident.time}</span>
                    </div>
                    <p className="text-sm">{incident.message}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
