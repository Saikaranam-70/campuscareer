import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Blocks } from "lucide-react"

export const metadata = {
  title: "Blockchain Developer Roadmap - CareerCompanion",
  description:
    "Complete Blockchain Developer roadmap covering blockchain fundamentals, smart contracts, Web3, and real-world projects",
}

export default function BlockchainDeveloperPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Programming & Computer Basics",
          time: "4-5 weeks",
          topics: [
            "Programming fundamentals",
            "OOP concepts",
            "Data structures basics",
            "Git & version control",
          ],
          keyPoints: [
            "Strong programming base is required",
            "JavaScript & Python are commonly used",
          ],
          projects: [
            "Basic programming projects",
          ],
        },
        {
          name: "Blockchain Fundamentals",
          time: "3-4 weeks",
          topics: [
            "What is blockchain",
            "Distributed ledger technology",
            "Consensus mechanisms",
            "Public vs private blockchains",
          ],
          keyPoints: [
            "Understand decentralization clearly",
            "Consensus is core to blockchain",
          ],
          projects: [
            "Simple blockchain simulation",
          ],
        },
      ],
    },
    {
      level: "Core Blockchain Concepts",
      duration: "3-4 months",
      skills: [
        {
          name: "Cryptography Basics",
          time: "4-5 weeks",
          topics: [
            "Hash functions",
            "Public & private keys",
            "Digital signatures",
            "Merkle trees",
          ],
          keyPoints: [
            "Cryptography secures blockchain",
            "Conceptual clarity is enough initially",
          ],
          projects: [
            "Hash-based data integrity demo",
          ],
        },
        {
          name: "Ethereum & Smart Contracts",
          time: "5-6 weeks",
          topics: [
            "Ethereum architecture",
            "EVM basics",
            "Gas & transactions",
            "Smart contracts overview",
          ],
          keyPoints: [
            "Ethereum is industry standard",
            "Understand gas optimization",
          ],
          projects: [
            "Ethereum transaction explorer",
          ],
        },
      ],
    },
    {
      level: "Smart Contracts & Web3",
      duration: "3-4 months",
      skills: [
        {
          name: "Solidity",
          time: "5-6 weeks",
          topics: [
            "Solidity syntax",
            "State variables & functions",
            "Modifiers & events",
            "Error handling",
          ],
          keyPoints: [
            "Solidity is core blockchain skill",
            "Security matters more than features",
          ],
          projects: [
            "ERC20 token",
            "Voting smart contract",
          ],
        },
        {
          name: "Web3 Development",
          time: "4-5 weeks",
          topics: [
            "Web3.js / Ethers.js",
            "Wallet integration (MetaMask)",
            "Connecting frontend to blockchain",
            "IPFS basics",
          ],
          keyPoints: [
            "Web3 connects users to blockchain",
            "Frontend + smart contracts = DApps",
          ],
          projects: [
            "Decentralized application (DApp)",
          ],
        },
      ],
    },
    {
      level: "Advanced & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Security & Advanced Topics",
          time: "3-4 weeks",
          topics: [
            "Smart contract vulnerabilities",
            "Reentrancy attacks",
            "Auditing basics",
            "Layer 2 solutions",
          ],
          keyPoints: [
            "Security is critical in blockchain",
            "Many hacks happen due to bad code",
          ],
          projects: [
            "Secure smart contract design",
          ],
        },
        {
          name: "Deployment & Interviews",
          time: "3-4 weeks",
          topics: [
            "Deploying contracts",
            "Testnets & mainnets",
            "Blockchain use cases",
            "Blockchain interviews",
          ],
          keyPoints: [
            "Projects matter more than certificates",
            "Understand real-world applications",
          ],
          projects: [
            "Full blockchain-based project",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/roadmaps"
              className="text-sm text-primary hover:underline mb-4 inline-block"
            >
              ← Back to Roadmaps
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Blocks className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Blockchain Developer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn blockchain fundamentals, smart contracts, and Web3 to build
              decentralized applications
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Steps */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {roadmapSteps.map((step, stepIndex) => (
            <div key={stepIndex}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {stepIndex + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{step.level}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {step.duration}
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l-2 space-y-6">
                {step.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {skill.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-semibold mb-4">
            Ready to Start Your Blockchain Development Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Blockchain Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Blockchain Developer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
