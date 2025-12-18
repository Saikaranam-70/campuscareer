import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Radio } from "lucide-react"

export const metadata = {
  title: "RF Engineer Roadmap - CareerCompanion",
  description:
    "Complete RF Engineer roadmap covering RF fundamentals, antennas, microwave engineering, tools, and wireless systems",
}

export default function RFEngineerPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "3-4 months",
      skills: [
        {
          name: "Mathematics & EM Basics",
          time: "5-6 weeks",
          topics: [
            "Complex numbers",
            "Vector calculus",
            "Maxwell’s equations",
            "Wave propagation basics",
          ],
          keyPoints: [
            "Strong math is essential for RF",
            "Understand physical meaning of equations",
          ],
          projects: [
            "EM wave behavior analysis",
          ],
        },
        {
          name: "Circuit & Network Theory",
          time: "4-5 weeks",
          topics: [
            "AC circuits",
            "Impedance & resonance",
            "Network theorems",
            "Two-port networks",
          ],
          keyPoints: [
            "RF builds on circuit theory",
            "Impedance matching is critical",
          ],
          projects: [
            "RLC resonance analysis",
          ],
        },
      ],
    },
    {
      level: "RF & Microwave Fundamentals",
      duration: "3-4 months",
      skills: [
        {
          name: "RF Fundamentals",
          time: "5-6 weeks",
          topics: [
            "RF spectrum",
            "Transmission lines",
            "Smith chart",
            "S-parameters",
          ],
          keyPoints: [
            "Smith chart is heavily tested",
            "S-parameters are industry standard",
          ],
          projects: [
            "Transmission line simulation",
          ],
        },
        {
          name: "Microwave Engineering",
          time: "4-5 weeks",
          topics: [
            "Waveguides",
            "Microwave components",
            "Couplers & attenuators",
            "RF amplifiers basics",
          ],
          keyPoints: [
            "Microwave concepts apply to real hardware",
          ],
          projects: [
            "Microwave circuit design",
          ],
        },
      ],
    },
    {
      level: "Antennas & Propagation",
      duration: "2-3 months",
      skills: [
        {
          name: "Antenna Theory",
          time: "4-5 weeks",
          topics: [
            "Radiation mechanism",
            "Antenna parameters",
            "Dipole & monopole antennas",
            "Array antennas",
          ],
          keyPoints: [
            "Antennas define RF system performance",
          ],
          projects: [
            "Antenna radiation pattern analysis",
          ],
        },
        {
          name: "Wireless Propagation",
          time: "3-4 weeks",
          topics: [
            "Free space propagation",
            "Path loss models",
            "Fading & shadowing",
            "Link budget calculation",
          ],
          keyPoints: [
            "Link budget is key interview topic",
          ],
          projects: [
            "Wireless link budget design",
          ],
        },
      ],
    },
    {
      level: "Tools, Applications & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "RF Tools & Simulation",
          time: "4-5 weeks",
          topics: [
            "MATLAB for RF",
            "HFSS / CST overview",
            "ADS basics",
            "Spectrum analyzers & VNAs",
          ],
          keyPoints: [
            "Tool knowledge is expected in industry",
            "Learn measurement techniques",
          ],
          projects: [
            "RF simulation project",
          ],
        },
        {
          name: "Wireless Systems & Interviews",
          time: "3-4 weeks",
          topics: [
            "Cellular systems (2G–5G basics)",
            "RF front-end blocks",
            "EMI/EMC basics",
            "RF interview preparation",
          ],
          keyPoints: [
            "Understand real-world RF systems",
            "Practice numericals & concepts",
          ],
          projects: [
            "Complete RF system mini project",
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
              <Radio className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                RF Engineer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Build strong RF, antenna, and microwave engineering skills to
              become a professional RF Engineer
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
            Ready to Start Your RF Engineering Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice RF Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build RF Engineer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
