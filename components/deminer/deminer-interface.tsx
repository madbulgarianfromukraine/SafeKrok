"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, MessageSquare, Sun, Plus, Minus } from "lucide-react"

export function DeminerInterface() {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY * -0.01
      const newScale = Math.max(0.5, Math.min(5, scale + delta))
      setScale(newScale)
    },
    [scale],
  )

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    },
    [position],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    },
    [isDragging, dragStart],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const zoomIn = () => setScale((prev) => Math.min(5, prev + 0.2))
  const zoomOut = () => setScale((prev) => Math.max(0.5, prev - 0.2))

  return (
    <div className="relative w-full h-[calc(100vh-41px)] overflow-hidden bg-gray-900">
      {/* Map Container */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Map Image */}
        <img
          src="/deminer-map-ukrainske.jpg"
          alt="Demining Map"
          className="absolute top-0 left-0 w-full h-full object-cover select-none"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transformOrigin: "center center",
          }}
          draggable={false}
        />
      </div>

      {/* Zoom Controls */}
      <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="h-12 w-12 bg-black/75 border border-white/25 text-white hover:bg-black/60"
          onClick={zoomIn}
        >
          <Plus className="h-6 w-6" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-12 w-12 bg-black/75 border border-white/25 text-white hover:bg-black/60"
          onClick={zoomOut}
        >
          <Minus className="h-6 w-6" />
        </Button>
      </div>

      {/* SafeKrok Logo */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 bg-black/75 px-4 py-2 rounded-lg border border-white/25 backdrop-blur-md">
          <img src="/safekrok-logo.png" alt="SafeKrok Logo" className="h-8 w-8 rounded-sm" />
          <h1 className="text-xl font-semibold text-white">SafeKrok</h1>
        </div>
      </div>

      {/* Top-Left Update Feed */}
      <div className="absolute top-20 left-5 flex flex-col gap-3 w-64 text-white z-10">
        <div className="bg-black/75 p-3 rounded-lg border border-white/25 backdrop-blur-md">
          <p className="text-xs text-gray-300">[Update]: 16:23:12</p>
          <p className="font-semibold">New mine has been found</p>
        </div>
        <div className="bg-red-900/75 p-3 rounded-lg border border-red-500/60 backdrop-blur-md">
          <p className="text-xs text-red-200">[Injury]: 16:25:12</p>
          <p className="font-bold text-lg">Someone was injured</p>
        </div>
        <div className="bg-black/75 p-3 rounded-lg border border-white/25 backdrop-blur-md">
          <p className="text-xs text-gray-300">[Information]: 16:22:12</p>
          <p className="font-semibold">New mine has been found</p>
        </div>
      </div>

      {/* Top-Right Status Panel */}
      <Card className="absolute top-20 right-5 w-64 bg-black/75 text-white border-white/25 backdrop-blur-md z-10">
        <CardContent className="p-3 space-y-1 text-sm">
          <p>
            <span className="font-semibold">Zone name:</span> Ukrainske
          </p>
          <p>
            <span className="font-semibold">Position:</span> 49.2431, 28.4816
          </p>
          <div className="flex items-center">
            <Sun className="w-4 h-4 mr-2" /> Daylight left: 02:13
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">State:</span>
            <span className="text-green-400 font-bold flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
              Online
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Right-Side Action Buttons */}
      <div className="absolute top-1/2 right-5 -translate-y-1/2 flex flex-col gap-4 z-10">
        <Button
          variant="secondary"
          size="icon"
          className="h-16 w-16 rounded-full bg-black/75 border-2 border-red-500/80 text-red-500 hover:bg-red-900/60 hover:text-red-400"
        >
          <Target className="h-8 w-8" />
          <span className="sr-only">Report</span>
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-16 w-16 rounded-full bg-black/75 border-2 border-blue-500/80 text-blue-400 hover:bg-blue-900/60 hover:text-blue-300"
        >
          <MessageSquare className="h-8 w-8" />
          <span className="sr-only">Communication</span>
        </Button>
      </div>
    </div>
  )
}
