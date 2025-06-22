import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const teams = [
  { rank: 1, name: "Alpha Squad", defused: 342, change: 12 },
  { rank: 2, name: "Bravo Team", defused: 310, change: 8 },
  { rank: 3, name: "Delta Force", defused: 298, change: -5 },
  { rank: 4, name: "Charlie Unit", defused: 250, change: 15 },
  { rank: 5, name: "Echo Platoon", defused: 221, change: 3 },
]

export function TeamPerformanceLeaderboard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Sapper Team Performance</CardTitle>
          <CardDescription>Teams ranked by number of mines defused.</CardDescription>
        </div>
        <Select defaultValue="month">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Day</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">Rank</TableHead>
              <TableHead>Team</TableHead>
              <TableHead className="text-right">Mines Defused</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.rank}>
                <TableCell className="font-bold">{team.rank}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{team.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">{team.defused}</TableCell>
                <TableCell className={`text-right font-mono ${team.change > 0 ? "text-green-500" : "text-red-500"}`}>
                  {team.change > 0 ? `+${team.change}` : team.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
