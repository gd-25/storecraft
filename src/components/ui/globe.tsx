'use client'

import createGlobe, { COBEOptions } from 'cobe'
import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.93, 0.93, 0.9],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [51.5074, -0.1278], size: 0.08 }, // London, UK
    { location: [48.8566, 2.3522], size: 0.08 }, // Paris, France
    { location: [40.4168, -3.7038], size: 0.06 }, // Madrid, Spain
    { location: [45.4642, 9.19], size: 0.06 }, // Milan, Italy
    { location: [52.52, 13.405], size: 0.06 }, // Berlin, Germany
    { location: [25.7617, -80.1918], size: 0.08 }, // Miami, USA
    { location: [40.7128, -74.006], size: 0.1 }, // New York, USA
    { location: [34.0522, -118.2437], size: 0.08 }, // Los Angeles, USA
  ],
}

// Hardcoded speed calculation based on longitude zones
const getTargetSpeed = (phi: number): number => {
  // Convert phi (radians) to longitude (-180 to 180)
  const longitude = ((phi * 180 / Math.PI) % 360 + 360) % 360
  const normalizedLon = longitude > 180 ? longitude - 360 : longitude

  // Slow zone: single continuous arc from Europe to Los Angeles (going west)
  // Covers all markers: Europe (-5° to 15°) → US East → US West (-123°)
  if (normalizedLon >= -123 && normalizedLon <= 15) {
    return 0.002 // Slow speed
  }

  // Fast zone: empty areas (Pacific Ocean, Asia back to Europe)
  return 0.010 // Fast speed
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let currentSpeed = 0.005 // Start with middle speed
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? 'grabbing' : 'grab'
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) {
        // Get target speed based on current position
        const targetSpeed = getTargetSpeed(phi)
        // Smooth interpolation for ease-in/ease-out effect
        currentSpeed += (targetSpeed - currentSpeed) * 0.1
        phi += currentSpeed
      }
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = '1'))
    return () => globe.destroy()
  }, [])

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[1200px]',
        className,
      )}
    >
      <canvas
        className={cn(
          'size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]',
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
