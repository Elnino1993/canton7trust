"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Shield, CheckCircle2, Sparkles, Key, Lock, FileCheck } from "lucide-react"

interface IdCardProps {
  stage: "creation"
}

export function IdCard({ stage }: IdCardProps) {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    setAnimationStage(0)

    const timers = [
      setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show components
      setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Assemble card
      setTimeout(() => setAnimationStage(3), 1700), // Stage 3: Add identity info
      setTimeout(() => setAnimationStage(4), 2400), // Stage 4: Add verification
      setTimeout(() => setAnimationStage(5), 3100), // Stage 5: Cryptographic signing
      setTimeout(() => setAnimationStage(6), 3800), // Stage 6: Complete
    ]

    return () => timers.forEach(clearTimeout)
  }, [stage])

  const components = [
    { icon: Key, label: "PKI", color: "text-blue-400" },
    { icon: Lock, label: "ENC", color: "text-purple-400" },
    { icon: Shield, label: "SIG", color: "text-green-400" },
    { icon: FileCheck, label: "VER", color: "text-orange-400" },
  ]

  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center h-full">
      {/* Stage indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-primary/20 border border-primary rounded-full px-3 py-1">
          <p className="text-xs font-mono text-primary">
            {animationStage === 0 && "Initializing..."}
            {animationStage === 1 && "Stage 1: Gathering Components"}
            {animationStage === 2 && "Stage 2: Building Card"}
            {animationStage === 3 && "Stage 3: Adding Identity"}
            {animationStage === 4 && "Stage 4: Verification"}
            {animationStage === 5 && "Stage 5: Cryptographic Signing"}
            {animationStage === 6 && "Stage 6: Complete"}
          </p>
        </div>
      </div>

      <div className="relative w-full px-4">
        {/* Floating component pieces - Stage 1 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {components.map((comp, i) => {
            const Icon = comp.icon
            return (
              <div
                key={i}
                className={cn(
                  "absolute w-16 h-16 bg-card border-2 border-primary rounded-xl transition-all duration-700 flex flex-col items-center justify-center gap-1 shadow-lg",
                  animationStage >= 1 && animationStage < 2 && "opacity-100 scale-100",
                  animationStage < 1 && "opacity-0 scale-0",
                  animationStage >= 2 && "opacity-0 scale-0",
                )}
                style={{
                  left: `${20 + (i % 2) * 60}%`,
                  top: `${25 + Math.floor(i / 2) * 50}%`,
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <Icon className={cn("w-6 h-6", comp.color)} />
                <span className="text-xs font-mono font-bold text-primary">{comp.label}</span>
              </div>
            )
          })}
        </div>

        {/* Assembly animation - Stage 2 */}
        {animationStage >= 1 && animationStage < 2 && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <p className="text-sm font-semibold whitespace-nowrap">Assembling Identity Card...</p>
            </div>
          </div>
        )}

        {/* ID Card - Stage 2+ */}
        <div
          className={cn(
            "relative bg-card border-2 border-primary rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-1000",
            animationStage >= 2 && "opacity-100 scale-100 rotate-0",
            animationStage < 2 && "opacity-0 scale-50 rotate-12",
          )}
        >
          {/* Card header */}
          <div className="flex items-start justify-between mb-6">
            <div
              className={cn(
                "transition-all duration-500",
                animationStage >= 2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
              )}
            >
              <h3 className="text-2xl font-bold text-foreground mb-1">7Trust ID</h3>
              <p className="text-sm text-muted-foreground">Digital Identity Card</p>
            </div>
            <Shield
              className={cn(
                "w-10 h-10 text-primary flex-shrink-0 transition-all duration-500 delay-200",
                animationStage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0",
              )}
            />
          </div>

          {/* Identity information - Stage 3 */}
          <div className="space-y-4">
            <div
              className={cn(
                "flex items-center gap-3 transition-all duration-700",
                animationStage >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
              )}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">Organization Name</p>
                <p className="text-sm text-muted-foreground">Canton Network Member</p>
              </div>
            </div>

            {/* Verification section - Stage 4 */}
            <div
              className={cn(
                "pt-4 border-t border-border transition-all duration-700",
                animationStage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
            >
              <div className="flex items-center gap-2 text-sm mb-2">
                <CheckCircle2
                  className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-all duration-500",
                    animationStage >= 4 ? "scale-100 rotate-0" : "scale-0 rotate-180",
                  )}
                />
                <span className="text-primary font-semibold">Identity Verified by 7Trust</span>
              </div>

              {/* Cryptographic signature - Stage 5 */}
              <div
                className={cn(
                  "mt-3 p-3 rounded-lg bg-primary/5 border border-primary/20 transition-all duration-700",
                  animationStage >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
              >
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="text-primary">Public Key:</span>
                    <span className="break-all">0x7a9f...3e2d</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary">Signature:</span>
                    <span className="break-all">0x4b8c...9f1a</span>
                  </p>
                </div>
              </div>

              {/* Completion badge - Stage 6 */}
              {animationStage >= 6 && (
                <div className="mt-3 flex items-center justify-center gap-2 text-green-500 animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-semibold">Cryptographically Signed & Verified</span>
                </div>
              )}
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
