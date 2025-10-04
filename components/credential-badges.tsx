"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Award, CheckCircle2, Eye, EyeOff, Shield, FileCheck, UserCheck } from "lucide-react"

interface CredentialBadgesProps {
  stage: "adding" | "privacy"
}

const credentials = [
  { id: 1, name: "Business License", icon: FileCheck, color: "text-blue-400", description: "State-issued license" },
  { id: 2, name: "KYC Verification", icon: UserCheck, color: "text-green-400", description: "Identity verified" },
  {
    id: 3,
    name: "Investor Accreditation",
    icon: Award,
    color: "text-purple-400",
    description: "Qualified investor status",
  },
]

export function CredentialBadges({ stage }: CredentialBadgesProps) {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    setAnimationStage(0)

    if (stage === "adding") {
      const timers = [
        setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show card
        setTimeout(() => setAnimationStage(2), 800), // Stage 2: Add credential 1
        setTimeout(() => setAnimationStage(3), 1500), // Stage 3: Add credential 2
        setTimeout(() => setAnimationStage(4), 2200), // Stage 4: Add credential 3
        setTimeout(() => setAnimationStage(5), 2900), // Stage 5: Verify all
        setTimeout(() => setAnimationStage(6), 3600), // Stage 6: Complete
      ]
      return () => timers.forEach(clearTimeout)
    } else {
      const timers = [
        setTimeout(() => setAnimationStage(1), 300), // Stage 1: Show all credentials
        setTimeout(() => setAnimationStage(2), 1000), // Stage 2: Privacy controls appear
        setTimeout(() => setAnimationStage(3), 1700), // Stage 3: Hide sensitive credential
        setTimeout(() => setAnimationStage(4), 2400), // Stage 4: Show privacy shield
        setTimeout(() => setAnimationStage(5), 3100), // Stage 5: Complete
      ]
      return () => timers.forEach(clearTimeout)
    }
  }, [stage])

  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center min-h-[400px]">
      {/* Stage indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-primary/20 border border-primary rounded-full px-3 py-1">
          <p className="text-xs font-mono text-primary">
            {stage === "adding" && (
              <>
                {animationStage === 0 && "Initializing..."}
                {animationStage === 1 && "Stage 1: Identity Card Ready"}
                {animationStage === 2 && "Stage 2: Adding License"}
                {animationStage === 3 && "Stage 3: Adding KYC"}
                {animationStage === 4 && "Stage 4: Adding Accreditation"}
                {animationStage === 5 && "Stage 5: Verifying All"}
                {animationStage === 6 && "Stage 6: Complete"}
              </>
            )}
            {stage === "privacy" && (
              <>
                {animationStage === 0 && "Initializing..."}
                {animationStage === 1 && "Stage 1: Credentials Loaded"}
                {animationStage === 2 && "Stage 2: Privacy Controls"}
                {animationStage === 3 && "Stage 3: Hiding Sensitive Data"}
                {animationStage === 4 && "Stage 4: Privacy Shield Active"}
                {animationStage === 5 && "Stage 5: Complete"}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Central ID Card */}
      <div
        className={cn(
          "relative bg-card border-2 border-primary rounded-2xl p-6 md:p-8 shadow-2xl w-full transition-all duration-700",
          animationStage >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-90",
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">7Trust ID</h3>
          {stage === "privacy" && animationStage >= 4 && (
            <Shield className="w-6 h-6 text-primary animate-in zoom-in duration-500" />
          )}
        </div>

        {/* Credentials */}
        <div className="space-y-3">
          {credentials.map((cred, index) => {
            const Icon = cred.icon
            const shouldShow = stage === "adding" ? animationStage >= index + 2 : animationStage >= 1
            const isPrivate = stage === "privacy" && index === 2 && animationStage >= 3

            return (
              <div key={cred.id} className="relative">
                {/* Credential card */}
                <div
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-lg border-2 transition-all duration-700",
                    shouldShow && "translate-x-0 opacity-100 scale-100",
                    !shouldShow && "-translate-x-20 opacity-0 scale-90",
                    isPrivate ? "border-muted bg-muted/20" : "border-primary/30 bg-primary/5",
                  )}
                  style={{
                    transitionDelay: stage === "adding" ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500",
                      isPrivate ? "bg-muted" : "bg-primary/20",
                    )}
                  >
                    {isPrivate ? (
                      <EyeOff className="w-6 h-6 text-muted-foreground" />
                    ) : (
                      <Icon className={cn("w-6 h-6", cred.color)} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn("font-semibold text-sm", isPrivate ? "text-muted-foreground" : "text-foreground")}>
                      {cred.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{isPrivate ? "Hidden from view" : cred.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {!isPrivate && stage === "adding" && animationStage >= 5 && (
                      <CheckCircle2 className="w-5 h-5 text-primary animate-in zoom-in duration-500" />
                    )}
                    {stage === "privacy" && !isPrivate && animationStage >= 2 && (
                      <Eye className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>

                {/* Verification animation for adding stage */}
                {stage === "adding" && shouldShow && animationStage === index + 2 && (
                  <div className="absolute -right-2 -top-2 animate-in zoom-in duration-500">
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                      Added!
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom message */}
        {((stage === "adding" && animationStage >= 6) || (stage === "privacy" && animationStage >= 5)) && (
          <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom duration-700">
            <p className="text-xs text-center font-semibold text-primary">
              {stage === "adding"
                ? "All credentials verified and cryptographically signed"
                : "Organization maintains full control over data visibility"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
