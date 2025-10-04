"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Shield, Zap, Lock, TrendingUp, Award } from "lucide-react"

const benefits = [
  {
    id: 1,
    name: "Privacy",
    icon: Lock,
    description: "Full control over data visibility",
  },
  {
    id: 2,
    name: "Consistency",
    icon: Zap,
    description: "Global synchronization across all nodes",
  },
  {
    id: 3,
    name: "Security",
    icon: Shield,
    description: "Cryptographic verification and signing",
  },
  {
    id: 4,
    name: "Efficiency",
    icon: TrendingUp,
    description: "Streamlined institutional transactions",
  },
  {
    id: 5,
    name: "Institutional Trust",
    icon: Award,
    description: "Verified credentials for finance",
  },
]

export function BenefitsList() {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    setAnimationStage(0)

    const timers = [
      setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show logo
      setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Show benefit 1
      setTimeout(() => setAnimationStage(3), 1400), // Stage 3: Show benefit 2
      setTimeout(() => setAnimationStage(4), 1800), // Stage 4: Show benefit 3
      setTimeout(() => setAnimationStage(5), 2200), // Stage 5: Show benefit 4
      setTimeout(() => setAnimationStage(6), 2600), // Stage 6: Show benefit 5
      setTimeout(() => setAnimationStage(7), 3200), // Stage 7: Complete
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4">
      {/* Stage indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-primary/20 border border-primary rounded-full px-3 py-1">
          <p className="text-xs font-mono text-primary">
            {animationStage === 0 && "Initializing..."}
            {animationStage === 1 && "Stage 1: Ecosystem Overview"}
            {animationStage >= 2 && animationStage <= 6 && `Stage ${animationStage}: Benefit ${animationStage - 1}`}
            {animationStage === 7 && "Stage 7: All Benefits"}
          </p>
        </div>
      </div>

      {/* Central logo area */}
      <div
        className={cn(
          "text-center mb-8 transition-all duration-700",
          animationStage >= 1 && "scale-100 opacity-100",
          animationStage < 1 && "scale-0 opacity-0",
        )}
      >
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-primary/20 border-2 border-primary shadow-lg">
          <span className="text-2xl font-bold text-primary">7Trust</span>
          <span className="text-2xl text-muted-foreground">×</span>
          <span className="text-2xl font-bold text-primary">Canton</span>
        </div>
      </div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          const shouldShow = animationStage >= index + 2

          return (
            <div
              key={benefit.id}
              className={cn(
                "group relative p-6 rounded-xl bg-card border-2 hover:border-primary transition-all duration-700 cursor-pointer shadow-md hover:shadow-lg",
                shouldShow
                  ? "translate-y-0 opacity-100 border-primary/30"
                  : "translate-y-8 opacity-0 border-transparent",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 flex-shrink-0",
                    shouldShow && "animate-in zoom-in",
                  )}
                  style={{
                    animationDelay: `${index * 100 + 200}ms`,
                  }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{benefit.name}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* New badge animation */}
              {shouldShow && animationStage === index + 2 && (
                <div className="absolute -top-2 -right-2 animate-in zoom-in duration-500">
                  <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                    ✓
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Completion message */}
      {animationStage >= 7 && (
        <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom duration-700">
          <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary">
            <p className="text-sm font-semibold text-primary">
              Complete ecosystem for institutional-grade blockchain finance
            </p>
          </div>
        </div>
      )}

      {/* Decorative glow */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div
          className={cn(
            "absolute inset-0 bg-primary/5 rounded-full blur-3xl transition-all duration-1000",
            animationStage >= 1 && "scale-100 opacity-100",
            animationStage < 1 && "scale-0 opacity-0",
          )}
        />
      </div>
    </div>
  )
}
