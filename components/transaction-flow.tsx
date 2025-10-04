"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { FileText, ArrowRight, Coins, Shield, CheckCircle2 } from "lucide-react"

interface TransactionFlowProps {
  stage: "interaction" | "contract" | "payment"
}

export function TransactionFlow({ stage }: TransactionFlowProps) {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    setAnimationStage(0)

    const timers = [
      setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show organizations
      setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Initiate transaction
      setTimeout(() => setAnimationStage(3), 1700), // Stage 3: Verify identities
      setTimeout(() => setAnimationStage(4), 2400), // Stage 4: Process transaction
      setTimeout(() => setAnimationStage(5), 3100), // Stage 5: Complete
      setTimeout(() => setAnimationStage(6), 3800), // Stage 6: Confirmation
    ]

    return () => timers.forEach(clearTimeout)
  }, [stage])

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4">
      {/* Stage indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-primary/20 border border-primary rounded-full px-3 py-1">
          <p className="text-xs font-mono text-primary">
            {animationStage === 0 && "Initializing..."}
            {animationStage === 1 && "Stage 1: Organizations Ready"}
            {animationStage === 2 && "Stage 2: Initiating Transaction"}
            {animationStage === 3 && "Stage 3: Verifying Identities"}
            {animationStage === 4 && "Stage 4: Processing"}
            {animationStage === 5 && "Stage 5: Completing"}
            {animationStage === 6 && "Stage 6: Confirmed"}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 md:gap-12 mt-12">
        {/* Organization A */}
        <div
          className={cn(
            "flex flex-col items-center gap-3 transition-all duration-700 flex-shrink-0",
            animationStage >= 1 && "translate-x-0 opacity-100",
            animationStage < 1 && "-translate-x-20 opacity-0",
          )}
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border-2 border-primary flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-primary"
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
              <div className="absolute -top-2 -right-2 animate-in zoom-in duration-500">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
            )}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Organization A</p>
            <p className="text-xs text-muted-foreground">7Trust Verified</p>
          </div>
        </div>

        {/* Transaction visualization */}
        <div className="flex-1 flex flex-col items-center gap-4 min-w-0">
          {/* Flow line */}
          <div className="relative w-full h-2 bg-border rounded-full overflow-hidden">
            <div
              className={cn(
                "absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent transition-all duration-1000",
                animationStage >= 2 && animationStage < 5 && "w-1/2 animate-pulse",
                animationStage >= 5 && "w-full",
                animationStage < 2 && "w-0",
              )}
            />
          </div>

          {/* Transaction icon */}
          <div
            className={cn(
              "relative transition-all duration-700",
              animationStage >= 2 && "scale-100 opacity-100",
              animationStage < 2 && "scale-0 opacity-0",
            )}
          >
            {stage === "contract" && (
              <div
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20 rounded-xl bg-accent border-2 border-accent-foreground flex items-center justify-center shadow-lg transition-all duration-500",
                  animationStage >= 4 && "scale-110",
                )}
              >
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
              </div>
            )}
            {stage === "payment" && (
              <div
                className={cn(
                  "w-16 h-16 md:w-20 md:h-20 rounded-xl bg-accent border-2 border-accent-foreground flex items-center justify-center shadow-lg transition-all duration-500",
                  animationStage >= 4 && "scale-110",
                )}
              >
                <Coins className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground" />
              </div>
            )}
            {stage === "interaction" && (
              <div className="flex items-center gap-2">
                <ArrowRight
                  className={cn(
                    "w-8 h-8 text-primary transition-all duration-500",
                    animationStage >= 4 && "animate-pulse",
                  )}
                />
                {animationStage >= 4 && <div className="w-2 h-2 rounded-full bg-primary animate-ping" />}
              </div>
            )}

            {/* Processing indicator */}
            {animationStage >= 4 && animationStage < 6 && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap animate-in fade-in duration-500">
                <div className="bg-amber-500/20 border border-amber-500 rounded-full px-3 py-1">
                  <p className="text-xs font-semibold text-amber-500">Processing...</p>
                </div>
              </div>
            )}
          </div>

          {/* Verification badge */}
          <div
            className={cn(
              "px-4 py-2 rounded-full border-2 transition-all duration-700 whitespace-nowrap",
              animationStage >= 6
                ? "bg-green-500/20 border-green-500 opacity-100 translate-y-0"
                : animationStage >= 3
                  ? "bg-primary/10 border-primary/20 opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
            )}
          >
            <p className="text-xs font-mono flex items-center gap-2">
              {animationStage >= 6 ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-green-500 font-semibold">
                    {stage === "contract" && "Smart Contract Executed"}
                    {stage === "payment" && "Payment Completed"}
                    {stage === "interaction" && "Transaction Confirmed"}
                  </span>
                </>
              ) : (
                <span className="text-primary">
                  {stage === "contract" && "Verifying Contract Terms"}
                  {stage === "payment" && "Authorizing Payment"}
                  {stage === "interaction" && "Establishing Secure Connection"}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Organization B */}
        <div
          className={cn(
            "flex flex-col items-center gap-3 transition-all duration-700 flex-shrink-0",
            animationStage >= 1 && "translate-x-0 opacity-100",
            animationStage < 1 && "translate-x-20 opacity-0",
          )}
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border-2 border-primary flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 md:w-12 md:h-12 text-primary"
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
              <div className="absolute -top-2 -right-2 animate-in zoom-in duration-500">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
            )}
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">Organization B</p>
            <p className="text-xs text-muted-foreground">7Trust Verified</p>
          </div>
        </div>
      </div>
    </div>
  )
}
