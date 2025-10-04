"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function SlideOneEnhanced() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    // Stage progression: 0 -> 1 -> 2 -> 3 -> 4 -> 5
    const timers = [
      setTimeout(() => setStage(1), 500), // Organizations appear
      setTimeout(() => setStage(2), 1800), // Canton Network appears
      setTimeout(() => setStage(3), 3200), // Barriers appear
      setTimeout(() => setStage(4), 4600), // Problem text appears
      setTimeout(() => setStage(5), 6000), // Solution hint appears
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative w-full max-w-[700px] h-[500px] mx-auto flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Stage 0-1: Organizations appear */}
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {/* Left side organizations */}
          <div className="flex flex-col gap-6">
            {["Bank A", "Fund B", "Corp C"].map((name, i) => (
              <div
                key={name}
                className={cn(
                  "transition-all duration-700",
                  stage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20",
                )}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-accent to-accent/50 border-2 border-accent-foreground flex items-center justify-center shadow-xl">
                    <svg
                      className="w-10 h-10 text-accent-foreground"
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
                  </div>
                  <p className="text-xs font-semibold text-center mt-2 text-foreground">{name}</p>

                  {/* Status label */}
                  {stage >= 1 && (
                    <div
                      className="absolute -top-3 -right-3 animate-in zoom-in duration-500"
                      style={{ animationDelay: `${i * 200 + 400}ms` }}
                    >
                      <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                        WAITING
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Center: Canton Network */}
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "relative transition-all duration-1000",
                stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-50",
              )}
            >
              {/* Main network circle */}
              <div className="relative w-48 h-48 rounded-full border-4 border-primary bg-primary/5 flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping" />
                <div className="absolute inset-4 rounded-full border-2 border-primary/50" />
                <div className="absolute inset-8 rounded-full border-2 border-primary/30" />

                <div className="text-center z-10">
                  <p className="text-lg font-bold text-primary">Canton</p>
                  <p className="text-sm text-primary/80">Network</p>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
                  </div>
                </div>

                {/* Network nodes around the circle */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const x = Math.cos((angle * Math.PI) / 180) * 90
                  const y = Math.sin((angle * Math.PI) / 180) * 90
                  return (
                    <div
                      key={angle}
                      className={cn(
                        "absolute w-4 h-4 rounded-full bg-primary border-2 border-background transition-all duration-500",
                        stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-0",
                      )}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                        transitionDelay: `${i * 100 + 500}ms`,
                      }}
                    />
                  )
                })}
              </div>

              {/* Network label */}
              {stage >= 2 && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom duration-700 delay-1000">
                  <div className="bg-primary/20 border border-primary rounded-lg px-4 py-2 shadow-lg">
                    <p className="text-xs font-semibold text-primary whitespace-nowrap">Institutional Blockchain</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side organizations */}
          <div className="flex flex-col gap-6">
            {["Firm D", "Trust E", "Asset F"].map((name, i) => (
              <div
                key={name}
                className={cn(
                  "transition-all duration-700",
                  stage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20",
                )}
                style={{ transitionDelay: `${i * 200 + 100}ms` }}
              >
                <div className="relative">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-accent to-accent/50 border-2 border-accent-foreground flex items-center justify-center shadow-xl">
                    <svg
                      className="w-10 h-10 text-accent-foreground"
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
                  </div>
                  <p className="text-xs font-semibold text-center mt-2 text-foreground">{name}</p>

                  {/* Status label */}
                  {stage >= 1 && (
                    <div
                      className="absolute -top-3 -left-3 animate-in zoom-in duration-500"
                      style={{ animationDelay: `${i * 200 + 500}ms` }}
                    >
                      <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                        WAITING
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage 3: Barriers/Question marks appear */}
        {stage >= 3 && (
          <>
            {/* Left barriers */}
            {[0, 1, 2].map((i) => (
              <div
                key={`left-${i}`}
                className="absolute animate-in zoom-in duration-500"
                style={{
                  left: "28%",
                  top: `${30 + i * 15}%`,
                  animationDelay: `${i * 150}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl font-bold text-red-500">?</span>
                </div>
              </div>
            ))}

            {/* Right barriers */}
            {[0, 1, 2].map((i) => (
              <div
                key={`right-${i}`}
                className="absolute animate-in zoom-in duration-500"
                style={{
                  right: "28%",
                  top: `${30 + i * 15}%`,
                  animationDelay: `${i * 150 + 75}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl font-bold text-red-500">?</span>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Stage 4: Problem description */}
        {stage >= 4 && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-top duration-700">
            <div className="bg-red-500/10 border-2 border-red-500 rounded-xl px-6 py-3 shadow-xl max-w-md">
              <p className="text-sm font-bold text-red-500 text-center">⚠️ THE CHALLENGE</p>
              <p className="text-xs text-foreground text-center mt-1">
                Organizations cannot connect without verified digital identity
              </p>
            </div>
          </div>
        )}

        {/* Stage 5: Solution hint */}
        {stage >= 5 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="bg-primary/10 border-2 border-primary rounded-xl px-6 py-3 shadow-xl max-w-md">
              <p className="text-sm font-bold text-primary text-center">💡 THE SOLUTION</p>
              <p className="text-xs text-foreground text-center mt-1">
                7Trust provides verified digital identity for secure network access
              </p>
            </div>
          </div>
        )}

        {/* Animated description text in corner */}
        <div className="absolute top-4 right-4 max-w-[200px]">
          {stage === 0 && (
            <div className="animate-in fade-in duration-500">
              <p className="text-xs text-muted-foreground italic">Initializing scene...</p>
            </div>
          )}
          {stage === 1 && (
            <div className="animate-in fade-in duration-500">
              <p className="text-xs text-primary font-semibold">→ Organizations appear</p>
              <p className="text-[10px] text-muted-foreground mt-1">Six institutions want to join the network</p>
            </div>
          )}
          {stage === 2 && (
            <div className="animate-in fade-in duration-500">
              <p className="text-xs text-primary font-semibold">→ Canton Network emerges</p>
              <p className="text-[10px] text-muted-foreground mt-1">The institutional blockchain infrastructure</p>
            </div>
          )}
          {stage === 3 && (
            <div className="animate-in fade-in duration-500">
              <p className="text-xs text-red-500 font-semibold">→ Access barriers detected</p>
              <p className="text-[10px] text-muted-foreground mt-1">No verified identity = no connection</p>
            </div>
          )}
          {stage === 4 && (
            <div className="animate-in fade-in duration-500">
              <p className="text-xs text-red-500 font-semibold">→ Problem identified</p>
              <p className="text-[10px] text-muted-foreground mt-1">Trust and verification required</p>
            </div>
          )}
          {stage === 5 && (
            <div className="animate-in fade-in duration-500">
              <p className="text-xs text-primary font-semibold">→ Solution available</p>
              <p className="text-[10px] text-muted-foreground mt-1">7Trust enables secure access</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
