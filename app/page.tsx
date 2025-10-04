"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NetworkVisualization } from "@/components/network-visualization"
import { IdCard } from "@/components/id-card"
import { CredentialBadges } from "@/components/credential-badges"
import { GlobalSynchronizer } from "@/components/global-synchronizer"
import { TransactionFlow } from "@/components/transaction-flow"
import { BenefitsList } from "@/components/benefits-list"
import { SlideOneEnhanced } from "@/components/slide-one-enhanced"
import { ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Entering the Network",
    description: "Organizations want to connect to Canton Network, but they need verified digital identity",
    explanation:
      "Watch as organizations approach the network, seeking secure access to institutional-grade blockchain infrastructure",
    component: "network-entry",
  },
  {
    id: 2,
    title: "7Trust Creates Digital Identity",
    description: "7Trust is Canton's native application for digital identity management",
    explanation: "See how 7Trust assembles a secure digital identity card with cryptographic verification",
    component: "id-creation",
  },
  {
    id: 3,
    title: "Adding Verified Credentials",
    description: "7Trust adds verified attributes (Verified Credentials) to the identity",
    explanation:
      "Credentials like licenses, KYC data, and investor qualifications are added and cryptographically signed",
    component: "credentials",
  },
  {
    id: 4,
    title: "Data Privacy Controls",
    description: "Organizations decide which data to reveal and to whom",
    explanation: "Privacy shields activate - organizations maintain full control over their sensitive information",
    component: "privacy",
  },
  {
    id: 5,
    title: "Connecting to Canton Network",
    description: "7Trust connects participants to Canton Network with verified identities",
    explanation: "Watch the secure connection establish between verified identities and the Canton Network nodes",
    component: "connection",
  },
  {
    id: 6,
    title: "Global Synchronizer",
    description: "Global Synchronizer ensures data consistency and accuracy across the network",
    explanation: "The synchronizer orchestrates all network activity, maintaining perfect consistency across all nodes",
    component: "synchronizer",
  },
  {
    id: 7,
    title: "Organization Interactions",
    description: "With Canton, organizations interact directly and securely",
    explanation: "Verified organizations can now transact peer-to-peer with cryptographic trust",
    component: "interaction",
  },
  {
    id: 8,
    title: "Use Case: Smart Contract",
    description: "7Trust verifies attributes for smart contract execution",
    explanation: "Identity credentials are verified in real-time as smart contracts execute on-chain",
    component: "smart-contract",
  },
  {
    id: 9,
    title: "Use Case: Payment",
    description: "Payments on Canton Network are backed by verified identity",
    explanation: "Watch secure payment flows between verified parties with instant settlement",
    component: "payment",
  },
  {
    id: 10,
    title: "Network Scalability",
    description: "Canton Network grows, 7Trust remains the key for connection",
    explanation: "As more organizations join, the network scales seamlessly while maintaining security",
    component: "scalability",
  },
  {
    id: 11,
    title: "Unique Advantages",
    description: "Key benefits of the ecosystem",
    explanation: "Privacy, consistency, security, efficiency, and institutional trust - all in one platform",
    component: "benefits",
  },
  {
    id: 12,
    title: "The Complete Ecosystem",
    description:
      "7Trust by 7Ridge transforms Canton Network into a secure, private, and trusted infrastructure for global finance",
    explanation: "A unified ecosystem where identity, privacy, and institutional finance converge",
    component: "finale",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }

  const slide = slides[currentSlide]

  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 md:p-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.03_240)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.03_240)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 w-full max-w-6xl flex-1 flex flex-col justify-between py-8 gap-8">
        {/* Header - Fixed height with proper spacing */}
        <div className="text-center min-h-[200px] flex flex-col justify-center px-4">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mx-auto">
            <span className="text-sm font-mono text-primary">7Trust × Canton Network</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-balance">{slide.title}</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {slide.description}
          </p>
          <p className="text-sm md:text-base text-primary/80 max-w-2xl mx-auto mt-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {slide.explanation}
          </p>
        </div>

        {/* Visualization area - Fixed dimensions with padding */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-3xl h-[400px] md:h-[500px] flex items-center justify-center">
            {slide.component === "network-entry" && <SlideOneEnhanced />}
            {slide.component === "id-creation" && <IdCard stage="creation" />}
            {slide.component === "credentials" && <CredentialBadges stage="adding" />}
            {slide.component === "privacy" && <CredentialBadges stage="privacy" />}
            {slide.component === "connection" && <NetworkVisualization stage="connected" />}
            {slide.component === "synchronizer" && <GlobalSynchronizer stage="active" />}
            {slide.component === "interaction" && <TransactionFlow stage="interaction" />}
            {slide.component === "smart-contract" && <TransactionFlow stage="contract" />}
            {slide.component === "payment" && <TransactionFlow stage="payment" />}
            {slide.component === "scalability" && <NetworkVisualization stage="scaling" />}
            {slide.component === "benefits" && <BenefitsList />}
            {slide.component === "finale" && <GlobalSynchronizer stage="finale" />}
          </div>
        </div>
      </div>

      {/* Footer - Fixed height */}
      <div className="relative z-10 w-full max-w-6xl pb-4 min-h-[120px] flex items-end justify-center">
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleNext}
            size="lg"
            className="group relative overflow-hidden px-8 py-6 text-lg font-semibold"
          >
            <span className="relative z-10 flex items-center gap-2">
              {currentSlide < slides.length - 1 ? "Next" : "Start Over"}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground font-mono">
            {currentSlide + 1} / {slides.length}
          </p>
        </div>
      </div>
    </main>
  )
}
