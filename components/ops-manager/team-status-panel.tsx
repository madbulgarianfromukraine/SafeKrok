"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, BatteryCharging, AlertTriangle } from "lucide-react"

const teams = [
  {
    id: "1534",
    name: "Alpha Squad",
    personnel: 6,
    status: "En-route",
    battery: 85,
    zone: "Sector Gamma",
    position: "34.0511, 36.2264",
    consumables: "Medkit Low",
    stateColor: "bg-green-500",
  },
  {
    id: "1689",
    name: "Bravo Team",
    personnel: 8,
    status: "Operating",
    battery: 60,
    zone: "Sector Delta",
    position: "34.0511, 36.2264",
    consumables: "Water High",
    stateColor: "bg-yellow-500",
  },
  {
    id: "2349",
    name: "Charlie Unit",
    personnel: 5,
    status: "Idle",
    battery: 95,
    zone: "Base Camp",
    position: "34.0511, 36.2264",
    consumables: "Full",
    stateColor: "bg-red-500",
  },
  {
    id: "3290",
    name: "Delta Force",
    personnel: 7,
    status: "Clearing",
    battery: 40,
    zone: "Sector Epsilon",
    position: "34.0511, 36.2264",
    consumables: "Fuel Low",
    stateColor: "bg-blue-500",
  },
  {
    id: "3292",
    name: "Echo Platoon",
    personnel: 8,
    status: "Returning",
    battery: 70,
    zone: "Corridor X",
    position: "34.0511, 36.2264",
    consumables: "Ammo Full",
    stateColor: "bg-purple-500",
  },
]

export function TeamStatusPanel() {
  const [selectedTeamId, setSelectedTeamId] = useState(teams[1].id) // Default to Bravo Team

  const selectedTeam = teams.find((team) => team.id === selectedTeamId)

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Team Status & Allocation</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="p-3 bg-muted/50 rounded-t-md hover:no-underline">
              Select a Team ({teams.length})
            </AccordionTrigger>
            <AccordionContent className="p-0 bg-muted/20 rounded-b-md">
              <div className="max-h-48 overflow-y-auto">
                {teams.map((team) => (
                  <Button
                    key={team.id}
                    variant={selectedTeamId === team.id ? "secondary" : "ghost"}
                    className={`w-full justify-start p-3 rounded-none border-b border-border/30 ${selectedTeamId === team.id ? "font-semibold" : ""}`}
                    onClick={() => setSelectedTeamId(team.id)}
                  >
                    <span className={`w-2 h-2 ${team.stateColor} rounded-full mr-2`}></span>
                    Team #{team.id} ({team.name})
                    <Badge variant="outline" className="ml-auto text-xs">
                      {team.status}
                    </Badge>
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {selectedTeam && (
          <div className="mt-4 p-3 bg-background/50 rounded-md border border-border/30 space-y-2 text-sm">
            <h3 className="font-semibold text-base mb-1">
              Team #{selectedTeam.id} - {selectedTeam.name}
            </h3>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-muted-foreground" /> Zone: {selectedTeam.zone}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-muted-foreground" /> Personnel: {selectedTeam.personnel}
            </div>
            <div className="flex items-center">
              <BatteryCharging className="w-4 h-4 mr-2 text-muted-foreground" /> Battery: {selectedTeam.battery}%
            </div>
            <div className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-muted-foreground" /> Consumables: {selectedTeam.consumables}
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 ${selectedTeam.stateColor} rounded-full mr-2`}></span>
              State: {selectedTeam.status}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
