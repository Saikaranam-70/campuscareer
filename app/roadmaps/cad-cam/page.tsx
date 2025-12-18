import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, DraftingCompass } from "lucide-react"

export const metadata = {
  title: "CAD / CAM Engineer Roadmap - CareerCompanion",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description:
    "Complete CAD and CAM Engineer roadmap covering design fundamentals, modeling tools, manufacturing processes, and industry projects",
}

export default function CADCAMEngineerPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Engineering Drawing & Basics",
          time: "3-4 weeks",
          topics: [
            "Engineering drawing principles",
            "Orthographic & isometric views",
            "Dimensioning & tolerances",
            "Geometric Dimensioning & Tolerancing (GD&T)",
          ],
          keyPoints: [
            "Drawings are the base of CAD/CAM",
            "GD&T is heavily used in industry",
          ],
          projects: [
            "Mechanical component drawings",
          ],
        },
        {
          name: "Manufacturing Fundamentals",
          time: "3-4 weeks",
          topics: [
            "Casting & forming processes",
            "Machining processes",
            "Welding basics",
            "Surface finishing",
          ],
          keyPoints: [
            "Understand how parts are manufactured",
            "Design for manufacturability",
          ],
          projects: [
            "Manufacturing process comparison",
          ],
        },
      ],
    },
    {
      level: "CAD Design Tools",
      duration: "3-4 months",
      skills: [
        {
          name: "2D & 3D CAD Modeling",
          time: "6-8 weeks",
          topics: [
            "AutoCAD",
            "SolidWorks / CATIA",
            "Part & assembly modeling",
            "Sheet metal design",
          ],
          keyPoints: [
            "3D modeling is industry standard",
            "Assemblies test real-world skills",
          ],
          projects: [
            "Mechanical assembly design",
          ],
        },
        {
          name: "Advanced CAD Concepts",
          time: "4-5 weeks",
          topics: [
            "Surface modeling",
            "Parametric design",
            "Design optimization",
            "CAD best practices",
          ],
          keyPoints: [
            "Surface modeling is used in automotive & aerospace",
          ],
          projects: [
            "Surface-based product design",
          ],
        },
      ],
    },
    {
      level: "CAM & CNC",
      duration: "3-4 months",
      skills: [
        {
          name: "CAM Software",
          time: "5-6 weeks",
          topics: [
            "CAM fundamentals",
            "Tool path generation",
            "Post-processing",
            "Simulation & verification",
          ],
          keyPoints: [
            "CAM converts design into manufacturing",
            "Tool paths affect cost & quality",
          ],
          projects: [
            "CNC toolpath simulation",
          ],
        },
        {
          name: "CNC Machining",
          time: "4-5 weeks",
          topics: [
            "CNC machines overview",
            "G-codes & M-codes",
            "Cutting tools",
            "Machining parameters",
          ],
          keyPoints: [
            "Understanding machines improves CAM output",
          ],
          projects: [
            "CNC program creation",
          ],
        },
      ],
    },
    {
      level: "CAE, Industry & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "CAE & Simulation",
          time: "3-4 weeks",
          topics: [
            "Finite Element Analysis (FEA)",
            "Structural analysis basics",
            "Thermal analysis",
            "Simulation validation",
          ],
          keyPoints: [
            "CAE improves design reliability",
          ],
          projects: [
            "Stress analysis of a component",
          ],
        },
        {
          name: "Industry Practices & Interviews",
          time: "3-4 weeks",
          topics: [
            "Design for manufacturing (DFM)",
            "Quality standards",
            "Case studies",
            "CAD/CAM interviews",
          ],
          keyPoints: [
            "Industry exposure matters",
            "Portfolio is very important",
          ],
          projects: [
            "Complete CAD/CAM industry project",
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
              <DraftingCompass className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                CAD / CAM Engineer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn CAD design, CAM programming, and manufacturing workflows to
              become a professional CAD/CAM Engineer
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
            Ready to Start Your CAD / CAM Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice CAD/CAM Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build CAD/CAM Engineer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
