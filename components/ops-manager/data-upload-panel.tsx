import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UploadCloud, FileText, ImageIcon, StickyNote } from "lucide-react"

export function DataUploadPanel() {
  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle>Data Upload & Annotation</CardTitle>
        <CardDescription>Upload field reports, imagery, sensor logs.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col space-y-3 overflow-hidden">
        <Button
          variant="outline"
          className="w-full bg-transparent text-foreground border-primary hover:bg-primary/10 flex-shrink-0"
        >
          <UploadCloud className="mr-2 h-4 w-4" /> Upload Files
        </Button>
        <p className="text-xs text-muted-foreground text-center flex-shrink-0">
          Drag & drop files here or click to browse.
        </p>

        <div className="flex-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-3 flex flex-col items-center justify-center min-h-0">
          <UploadCloud className="h-6 w-6 text-muted-foreground/50 mb-2 flex-shrink-0" />
          <p className="text-sm text-muted-foreground text-center mb-3 flex-shrink-0">Drop files here</p>

          <div className="grid grid-cols-1 gap-2 w-full text-xs text-muted-foreground flex-shrink-0">
            <div className="flex items-center justify-center gap-2 p-2 bg-muted/30 rounded">
              <FileText className="h-3 w-3" />
              <span>Reports</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2 bg-muted/30 rounded">
              <ImageIcon className="h-3 w-3" />
              <span>Imagery</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2 bg-muted/30 rounded">
              <StickyNote className="h-3 w-3" />
              <span>Notes</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground space-y-1 flex-shrink-0">
          <p className="font-medium">Recent uploads:</p>
          <div className="space-y-1 max-h-16 overflow-y-auto">
            <div className="flex items-center gap-2 text-xs">
              <FileText className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">field_report_001.pdf</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <ImageIcon className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">sector_alpha_drone.jpg</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <StickyNote className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">team_notes_today.txt</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
