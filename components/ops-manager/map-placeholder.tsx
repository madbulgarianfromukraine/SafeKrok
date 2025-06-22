import { InteractiveMapImage } from "@/components/common/interactive-map-image"

export function MapPlaceholder() {
  return (
    <div className="w-full h-full bg-muted/40 relative overflow-hidden rounded-b-lg">
      <InteractiveMapImage src="/ops-manager-map-new.png" alt="GIS Map with Mine Locations" maxScale={5} />
    </div>
  )
}
