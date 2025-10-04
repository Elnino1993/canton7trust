"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Wifi, WifiOff, CheckCircle2 } from "lucide-react"

interface NetworkVisualizationProps {
  stage: "entry" | "connected" | "scaling"
}

export function NetworkVisualization({ stage }: NetworkVisualizationProps) {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    setAnimationStage(0)

    if (stage === "connected") {
      const timers = [
        setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show network
        setTimeout(() => setAnimationStage(2), 900), // Stage 2: Show organization
        setTimeout(() => setAnimationStage(3), 1500), // Stage 3: Initiate connection
        setTimeout(() => setAnimationStage(4), 2200), // Stage 4: Verify identity
        setTimeout(() => setAnimationStage(5), 2900), // Stage 5: Establish connection
        setTimeout(() => setAnimationStage(6), 3600), // Stage 6: Complete
      ]
      return () => timers.forEach(clearTimeout)
    } else if (stage === "scaling") {
      const timers = [
        setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show initial network
        setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Add more nodes
        setTimeout(() => setAnimationStage(3), 1700), // Stage 3: Network expands
        setTimeout(() => setAnimationStage(4), 2400), // Stage 4: All nodes connected
        setTimeout(() => setAnimationStage(5), 3100), // Stage 5: Complete
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [stage])

  const nodes = stage === "scaling" ? (animationStage >= 3 ? 8 : 5) : 5

  return (
    <div className="relative w-full max-w-[500px] h-[400px] mx-auto flex items-center justify-center px-4">
      {/* Stage indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-primary/20 border border-primary rounded-full px-3 py-1">
          <p className="text-xs font-mono text-primary">
            {stage === "connected" && (
              <>
                {animationStage === 0 && "Initializing..."}
                {animationStage === 1 && "Stage 1: Network Ready"}
                {animationStage === 2 && "Stage 2: Organization Detected"}
                {animationStage === 3 && "Stage 3: Connecting..."}
                {animationStage === 4 && "Stage 4: Verifying Identity"}
                {animationStage === 5 && "Stage 5: Establishing Link"}
                {animationStage === 6 && "Stage 6: Connected"}
              </>
            )}
            {stage === "scaling" && (
              <>
                {animationStage === 0 && "Initializing..."}
                {animationStage === 1 && "Stage 1: Base Network"}
                {animationStage === 2 && "Stage 2: Adding Nodes"}
                {animationStage === 3 && "Stage 3: Network Expanding"}
                {animationStage === 4 && "Stage 4: All Nodes Active"}
                {animationStage === 5 && "Stage 5: Scaled Successfully"}
              </>
            )}
          </p>
        </div>
      </div>

      <div className="relative w-full h-full max-w-[450px] max-h-[450px]">
        {/* Central network ring */}
        <div
          className={cn(
            "absolute inset-[25%] rounded-full border-4 transition-all duration-1000",
            animationStage >= 1 ? "border-primary scale-100 opacity-100" : "border-primary/30 scale-50 opacity-0",
          )}
        >
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-500",
              animationStage >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-50",
            )}
          >
            <div className="text-center px-2">
              <p className="text-xs md:text-sm font-bold text-primary">Canton Network</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">Blockchain Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Network nodes */}
        {Array.from({ length: nodes }).map((_, i) => {
          const angle = (i * 360) / nodes
          const radius = 42
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180)
          const showNode =
            stage === "scaling" ? (i < 5 ? animationStage >= 1 : animationStage >= 3) : animationStage >= 1

          return (
            <div
              key={i}
              className={cn(
                "absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-all duration-700 shadow-lg",
                showNode && "scale-100 opacity-100",
                !showNode && "scale-0 opacity-0",
              )}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary animate-pulse" />
            </div>
          )
        })}

        {/* Organization trying to connect */}
        {stage === "connected" && (
          <div
            className={cn(
              "absolute left-[8%] top-1/2 -translate-y-1/2 transition-all duration-1000",
              animationStage >= 2 && "translate-x-0 opacity-100",
              animationStage < 2 && "-translate-x-20 opacity-0",
            )}
          >
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-accent border-2 border-accent-foreground flex items-center justify-center relative shadow-lg">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-accent-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                {animationStage >= 3 && animationStage < 5 && (
                  <div className="absolute inset-0 rounded-lg border-2 border-accent-foreground animate-ping" />
                )}
              </div>
              <p className="text-[10px] md:text-xs text-center text-muted-foreground font-semibold whitespace-nowrap">
                Organization
              </p>
            </div>

            {/* Status badges */}
            {animationStage >= 3 && animationStage < 6 && (
              <div className="absolute left-full ml-3 top-0 animate-in slide-in-from-left duration-500">
                <div className="bg-amber-500/20 border border-amber-500 rounded-full px-2 py-1 whitespace-nowrap shadow-md">
                  <p className="text-[10px] md:text-xs text-amber-500 font-semibold flex items-center gap-1">
                    <WifiOff className="w-3 h-3" />
                    {animationStage === 3 && "Connecting..."}
                    {animationStage === 4 && "Verifying..."}
                    {animationStage === 5 && "Establishing..."}
                  </p>
                </div>
              </div>
            )}

            {animationStage >= 6 && (
              <div className="absolute left-full ml-3 top-0 animate-in zoom-in duration-500">
                <div className="bg-green-500/20 border border-green-500 rounded-full px-2 py-1 whitespace-nowrap shadow-md">
                  <p className="text-[10px] md:text-xs text-green-500 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Connected!
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Connection lines */}
        {animationStage >= 5 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {Array.from({ length: nodes }).map((_, i) => {
              const angle = (i * 360) / nodes
              const radius = 42
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180)

              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke="oklch(0.65 0.15 195)"
                  strokeWidth="2"
                  className="animate-pulse"
                  style={{
                    animationDelay: `${i * 150}ms`,
                  }}
                />
              )
            })}
          </svg>
        )}

        {/* Scaling indicator */}
        {stage === "scaling" && animationStage >= 5 && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="bg-primary/20 border border-primary rounded-full px-3 py-1.5 shadow-md">
              <p className="text-xs md:text-sm text-primary font-semibold whitespace-nowrap flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                {nodes} Nodes Active - Network Scaled
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
