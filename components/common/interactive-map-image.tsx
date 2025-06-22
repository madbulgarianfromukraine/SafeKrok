"use client"

import NextImage from "next/image"
import { useState, useRef, useCallback, type WheelEvent, type MouseEvent } from "react"

interface InteractiveMapImageProps {
  src: string
  alt: string
  initialScale?: number
  minScale?: number
  maxScale?: number
}

export function InteractiveMapImage({
  src,
  alt,
  initialScale = 1,
  minScale = 1,
  maxScale = 8,
}: InteractiveMapImageProps) {
  const [scale, setScale] = useState(initialScale)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [imageNaturalDimensions, setImageNaturalDimensions] = useState<{ width: number; height: number } | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  const handleImageLoad = useCallback(
    (imgStats: { naturalWidth: number; naturalHeight: number }) => {
      if (!containerRef.current) return

      const { naturalWidth, naturalHeight } = imgStats
      const container = containerRef.current
      const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect()

      if (naturalWidth === 0 || naturalHeight === 0 || containerWidth === 0 || containerHeight === 0) {
        console.error("Image or container has zero dimensions", {
          naturalWidth,
          naturalHeight,
          containerWidth,
          containerHeight,
        })
        setIsLoaded(true)
        return
      }

      setImageNaturalDimensions({ width: naturalWidth, height: naturalHeight })

      // Calculate scale to cover the entire container (like background-size: cover)
      const scaleX = containerWidth / naturalWidth
      const scaleY = containerHeight / naturalHeight
      const coverScale = Math.max(scaleX, scaleY) // Use max to ensure full coverage
      const calculatedScale = Math.max(coverScale, minScale) * initialScale

      setScale(calculatedScale)

      // Center the image
      const scaledWidth = naturalWidth * calculatedScale
      const scaledHeight = naturalHeight * calculatedScale
      const initialX = (containerWidth - scaledWidth) / 2
      const initialY = (containerHeight - scaledHeight) / 2
      setPosition({ x: initialX, y: initialY })

      setIsLoaded(true)
    },
    [initialScale, minScale],
  )

  const getConstrainedPosition = useCallback(
    (pos: { x: number; y: number }, currentScale: number) => {
      if (!containerRef.current || !imageNaturalDimensions) return pos

      const { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect()
      const { width: naturalWidth, height: naturalHeight } = imageNaturalDimensions

      const currentImageWidth = naturalWidth * currentScale
      const currentImageHeight = naturalHeight * currentScale

      let newX = pos.x
      let newY = pos.y

      // Always constrain to prevent gaps
      newX = Math.max(containerWidth - currentImageWidth, Math.min(0, newX))
      newY = Math.max(containerHeight - currentImageHeight, Math.min(0, newY))

      return { x: newX, y: newY }
    },
    [imageNaturalDimensions],
  )

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (!isLoaded || !imageNaturalDimensions) return
    e.preventDefault()

    const container = containerRef.current!
    const { left, top } = container.getBoundingClientRect()
    const scaleAmount = e.deltaY * -0.005

    const newScale = Math.max(minScale, Math.min(maxScale, scale * (1 + scaleAmount)))

    if (newScale === scale) return

    const mouseX = e.clientX - left
    const mouseY = e.clientY - top

    const newX = mouseX - (mouseX - position.x) * (newScale / scale)
    const newY = mouseY - (mouseY - position.y) * (newScale / scale)

    setPosition(getConstrainedPosition({ x: newX, y: newY }, newScale))
    setScale(newScale)
  }

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!isLoaded) return
    e.preventDefault()
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !isLoaded) return
    e.preventDefault()
    const newPos = { x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }
    setPosition(getConstrainedPosition(newPos, scale))
  }

  const handleImageError = () => {
    console.error("Failed to load map image:", src)
    setIsLoaded(true)
    setImageNaturalDimensions(null)
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden relative"
      style={{ cursor: isLoaded && imageNaturalDimensions ? (isDragging ? "grabbing" : "grab") : "default" }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <NextImage
        src={src}
        alt=""
        fill
        className="invisible absolute -z-10 opacity-0 pointer-events-none"
        onLoad={handleImageLoad}
        onError={handleImageError}
        priority
        unoptimized
      />

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg animate-pulse bg-black/50 px-4 py-2 rounded">Loading Map...</p>
        </div>
      )}
      {isLoaded && imageNaturalDimensions && (
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "0 0",
            width: imageNaturalDimensions.width,
            height: imageNaturalDimensions.height,
          }}
        >
          <NextImage
            src={src}
            alt={alt}
            width={imageNaturalDimensions.width}
            height={imageNaturalDimensions.height}
            draggable="false"
            className="max-w-none"
            priority
            unoptimized
          />
        </div>
      )}
      {isLoaded && !imageNaturalDimensions && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-red-500 text-center p-4 bg-black/50 rounded">
            Error loading map. <br /> Please check the image source.
          </p>
        </div>
      )}
    </div>
  )
}
