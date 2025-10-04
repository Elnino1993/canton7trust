"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { RefreshCw, Database, CheckCircle2 } from "lucide-react"

interface GlobalSynchronizerProps {
  stage: "active" | "finale"
}

export function GlobalSynchronizer({ stage }: GlobalSynchronizerProps) {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    setAnimationStage(0)

    if (stage === "active") {
      const timers = [
        setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show network nodes
        setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Synchronizer appears
        setTimeout(() => setAnimationStage(3), 1700), // Stage 3: Data collection
        setTimeout(() => setAnimationStage(4), 2400), // Stage 4: Processing
        setTimeout(() => setAnimationStage(5), 3100), // Stage 5: Distribution
        setTimeout(() => setAnimationStage(6), 3800), // Stage 6: Synchronized
      ]
      return () => timers.forEach(clearTimeout)
    } else {
      const timers = [
        setTimeout(() => setAnimationStage(1), 300), // Stage 1: Full network
        setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Synchronizer active
        setTimeout(() => setAnimationStage(3), 1700), // Stage 3: 7Trust integration
        setTimeout(() => setAnimationStage(4), 2400), // Stage 4: Complete ecosystem
        setTimeout(() => setAnimationStage(5), 3100), // Stage 5: Celebration
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [stage])

  const nodes = 6

  return (
    <div className="relative w-full max-w-[500px] h-full max-h-[500px] mx-auto flex items-center justify-center">
      {/* Stage indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-primary/20 border border-primary rounded-full px-3 py-1">
          <p className="text-xs font-mono text-primary">
            {stage === "active" && (
              <>
                {animationStage === 0 && "Initializing..."}
                {animationStage === 1 && "Stage 1: Network Nodes"}
                {animationStage === 2 && "Stage 2: Synchronizer Online"}
                {animationStage === 3 && "Stage 3: Collecting Data"}
                {animationStage === 4 && "Stage 4: Processing"}
                {animationStage === 5 && "Stage 5: Distributing"}
                {animationStage === 6 && "Stage 6: Synchronized"}
              </>
            )}
            {stage === "finale" && (
              <>
                {animationStage === 0 && "Initializing..."}
                {animationStage === 1 && "Stage 1: Full Network"}
                {animationStage === 2 && "Stage 2: Synchronizer Active"}
                {animationStage === 3 && "Stage 3: 7Trust Integration"}
                {animationStage === 4 && "Stage 4: Complete Ecosystem"}
                {animationStage === 5 && "Stage 5: Ready for Finance"}
              </>
            )}
          </p>
        </div>
      </div>

      <div className="relative w-full h-full">
        {/* Central Synchronizer */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000",
            animationStage >= 2 && "scale-100 opacity-100",
            animationStage < 2 && "scale-0 opacity-0",
          )}
        >
          <div className="relative">
            {/* Outer ring */}
            <div
              className={cn(
                "w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-primary transition-all duration-700",
                animationStage >= 3 && "animate-pulse",
              )}
            />

            {/* Middle ring */}
            <div
              className={cn(
                "absolute inset-3 rounded-full border-4 border-accent transition-all duration-700 delay-200",
                animationStage >= 4 && "animate-pulse",
              )}
            />

            {/* Inner core */}
            <div
              className={cn(
                "absolute inset-6 rounded-full bg-primary flex items-center justify-center transition-all duration-700 delay-400",
                animationStage >= 5 && "animate-pulse",
              )}
            >
              <RefreshCw
                className={cn(
                  "w-10 h-10 md:w-12 md:h-12 text-primary-foreground transition-all duration-1000",
                  animationStage >= 3 && animationStage < 6 && "animate-spin",
                )}
              />
            </div>

            {/* Completion checkmark */}
            {animationStage >= 6 && stage === "active" && (
              <div className="absolute inset-6 rounded-full bg-green-500 flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            )}

            {/* Finale effects */}
            {stage === "finale" && animationStage >= 4 && (
              <>
                <div className="absolute -inset-6 rounded-full border-2 border-primary/30 animate-ping" />
                <div
                  className="absolute -inset-8 rounded-full border-2 border-accent/20 animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
              </>
            )}

            {/* Label */}
            <div
              className={cn(
                "absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500",
                animationStage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
            >
              <p className="text-xs font-semibold text-primary">Global Synchronizer</p>
            </div>
          </div>
        </div>

        {/* Network nodes */}
        {Array.from({ length: nodes }).map((_, i) => {
          const angle = (i * 360) / nodes
          const radius = 42
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180)

          return (
            <div
              key={i}
              className={cn(
                "absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center transition-all duration-700",
                animationStage >= 1 && "scale-100 opacity-100",
                animationStage < 1 && "scale-0 opacity-0",
              )}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div
                className={cn(
                  "w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary transition-all duration-500",
                  animationStage >= 3 && "animate-pulse",
                )}
              />
              {/* Data flow indicator */}
              {animationStage >= 3 && animationStage < 6 && (
                <Database
                  className="absolute -top-1 -right-1 w-4 h-4 text-accent animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              )}
            </div>
          )
        })}

        {/* Connection lines with data flow */}
        {animationStage >= 3 && (
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

        {/* Status message */}
        {stage === "finale" && animationStage >= 5 && (
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/20 border border-primary shadow-lg">
              <span className="text-xs md:text-sm font-semibold text-primary">
                7Trust × Canton Network - Complete Ecosystem
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
