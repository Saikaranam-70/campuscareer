import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Waves } from "lucide-react"


export const metadata = {
  title: "Signal Processing Engineer Roadmap - CareerCompanion",
  description:
    "Complete Signal Processing Engineer roadmap covering signals, systems, DSP, MATLAB, and real-world applications",
}

export default function SignalProcessingEngineerPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "3-4 months",
      skills: [
        {
          name: "Mathematics for Signal Processing",
          time: "5-6 weeks",
          topics: [
            "Linear algebra basics",
            "Calculus & differential equations",
            "Complex numbers",
            "Probability & statistics",
          ],
          keyPoints: [
            "Math is the backbone of signal processing",
            "Focus on concepts and intuition",
          ],
          projects: [
            "Mathematical signal modeling",
          ],
        },
        {
          name: "Signals & Systems Basics",
          time: "5-6 weeks",
          topics: [
            "Continuous vs discrete signals",
            "Time & frequency domain",
            "LTI systems",
            "Convolution",
            "Fourier series",
          ],
          keyPoints: [
            "Signals & systems is core subject",
            "Understand transformations deeply",
          ],
          projects: [
            "Signal analysis using MATLAB",
          ],
        },
      ],
    },
    {
      level: "Digital Signal Processing (DSP)",
      duration: "3-4 months",
      skills: [
        {
          name: "DSP Fundamentals",
          time: "6-8 weeks",
          topics: [
            "Sampling & quantization",
            "DTFT, DFT, FFT",
            "Z-transform",
            "Filter design basics",
          ],
          keyPoints: [
            "DSP is heavily asked in interviews",
            "FFT is used everywhere",
          ],
          projects: [
            "FFT-based signal analyzer",
          ],
        },
        {
          name: "Digital Filters",
          time: "4-5 weeks",
          topics: [
            "FIR & IIR filters",
            "Filter design techniques",
            "Frequency response analysis",
            "Stability & causality",
          ],
          keyPoints: [
            "Filters are key DSP application",
            "Understand trade-offs clearly",
          ],
          projects: [
            "Noise removal system",
          ],
        },
      ],
    },
    {
      level: "Tools & Programming",
      duration: "2-3 months",
      skills: [
        {
          name: "MATLAB / Octave",
          time: "4-5 weeks",
          topics: [
            "MATLAB basics",
            "Signal visualization",
            "DSP toolbox",
            "Simulink basics",
          ],
          keyPoints: [
            "MATLAB is industry standard",
            "Use plots for understanding",
          ],
          projects: [
            "DSP simulation in MATLAB",
          ],
        },
        {
          name: "Python for Signal Processing",
          time: "3-4 weeks",
          topics: [
            "NumPy & SciPy",
            "Signal processing with Python",
            "Matplotlib visualization",
            "Real-time signal analysis",
          ],
          keyPoints: [
            "Python is increasingly used",
            "Good for rapid prototyping",
          ],
          projects: [
            "Python-based signal analysis tool",
          ],
        },
      ],
    },
    {
      level: "Advanced Topics & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Advanced Signal Processing",
          time: "4-5 weeks",
          topics: [
            "Adaptive filters",
            "Wavelets",
            "Multirate signal processing",
            "Spectral estimation",
          ],
          keyPoints: [
            "Advanced topics differentiate candidates",
          ],
          projects: [
            "Adaptive noise cancellation",
          ],
        },
        {
          name: "Applications & Interviews",
          time: "3-4 weeks",
          topics: [
            "Speech processing",
            "Image processing basics",
            "Communication systems",
            "Signal processing interviews",
          ],
          keyPoints: [
            "Understand application areas",
            "Practice numerical problems",
          ],
          projects: [
            "Speech or image processing project",
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
              <Waves className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Signal Processing Engineer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Master signals, DSP, and real-world applications to build a career
              as a Signal Processing Engineer
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
            Ready to Start Your Signal Processing Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice DSP Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Signal Processing Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
