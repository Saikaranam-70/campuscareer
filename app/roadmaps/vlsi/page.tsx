import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle, Cpu } from "lucide-react"

export const metadata = {
  title: "VLSI Design Engineer Roadmap - CareerCompanion",
  description: "Complete VLSI design path for integrated circuits and chip design",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
}

export default function VLSIRoadmapPage() {
  const roadmapSteps = [
    {
      level: "Digital Electronics Foundation",
      duration: "2-3 months",
      skills: [
        {
          name: "Digital Logic & Circuits",
          time: "4-6 weeks",
          topics: [
            "Boolean algebra and logic gates",
            "Combinational circuits (adders, multiplexers)",
            "Sequential circuits (flip-flops, registers)",
            "State machines and timing diagrams",
            "Number systems and binary arithmetic",
          ],
          keyPoints: [
            "Master fundamental digital concepts thoroughly",
            "Practice designing circuits on paper first",
            "Understand timing and propagation delays",
            "Learn to read and draw circuit diagrams",
          ],
          projects: [
            "Design 4-bit ALU on paper",
            "Finite state machine for traffic light",
            "Sequential circuit design problems",
          ],
        },
        {
          name: "Computer Architecture Basics",
          time: "3-4 weeks",
          topics: [
            "Von Neumann architecture",
            "Instruction set architecture",
            "Memory hierarchy and organization",
            "Pipelining fundamentals",
            "Basic processor design",
          ],
          keyPoints: [
            "Understand how processors work internally",
            "Learn instruction execution cycles",
            "Study classic RISC architectures",
            "Grasp the big picture before details",
          ],
          projects: [
            "Design simple processor architecture",
            "Analyze instruction pipeline",
            "Memory system design exercise",
          ],
        },
      ],
    },
    {
      level: "HDL Programming",
      duration: "4-5 months",
      skills: [
        {
          name: "Verilog HDL",
          time: "6-8 weeks",
          topics: [
            "Verilog syntax and data types",
            "Behavioral, dataflow, and structural modeling",
            "Testbenches and simulation",
            "Blocking vs. non-blocking assignments",
            "Synthesis and RTL design",
          ],
          keyPoints: [
            "Think in hardware, not software",
            "Always write testbenches for your code",
            "Understand what synthesizes to hardware",
            "Practice on simulation tools (ModelSim, Icarus)",
          ],
          projects: ["UART transmitter and receiver", "FIFO buffer design", "ALU with multiple operations"],
        },
        {
          name: "VHDL (Alternative/Additional)",
          time: "4-6 weeks",
          topics: [
            "VHDL syntax and architecture",
            "Entity and architecture declarations",
            "Concurrent and sequential statements",
            "Generics and configurations",
            "Standard libraries and packages",
          ],
          keyPoints: [
            "VHDL is more verbose but strongly typed",
            "Common in aerospace and defense",
            "Learn one HDL deeply, the other basics",
            "Practice converting between Verilog and VHDL",
          ],
          projects: ["Memory controller in VHDL", "SPI master interface", "Parameterized design modules"],
        },
        {
          name: "SystemVerilog for Verification",
          time: "4-5 weeks",
          topics: [
            "SystemVerilog enhancements",
            "Object-oriented programming in SV",
            "Constrained random verification",
            "Assertions and functional coverage",
            "UVM basics (Universal Verification Methodology)",
          ],
          keyPoints: [
            "Essential for modern verification roles",
            "Learn OOP concepts for testbenches",
            "Master assertion-based verification",
            "Understand coverage-driven verification",
          ],
          projects: ["Constrained random testbench", "Assertion-based verification suite", "Simple UVM environment"],
        },
      ],
    },
    {
      level: "ASIC Design Flow",
      duration: "4-5 months",
      skills: [
        {
          name: "RTL Design & Synthesis",
          time: "5-6 weeks",
          topics: [
            "RTL coding guidelines",
            "Clock domain crossing (CDC)",
            "Reset strategies and metastability",
            "Synthesis tools (Design Compiler, Genus)",
            "Timing constraints and SDC files",
          ],
          keyPoints: [
            "Write synthesizable, timing-aware RTL",
            "Understand setup and hold time violations",
            "Learn industry-standard synthesis tools",
            "Practice optimizing for area, power, timing",
          ],
          projects: ["Multi-clock domain design", "Synthesizable processor core", "Low-power design techniques"],
        },
        {
          name: "Physical Design Basics",
          time: "5-6 weeks",
          topics: [
            "Floorplanning and placement",
            "Clock tree synthesis (CTS)",
            "Routing and DRC/LVS checks",
            "Power planning and IR drop",
            "Physical verification",
          ],
          keyPoints: [
            "Understand backend design flow",
            "Learn about place-and-route tools",
            "Study timing closure techniques",
            "Practice on open-source tools initially",
          ],
          projects: ["Floorplan for a simple design", "Clock tree design exercise", "Power grid analysis"],
        },
        {
          name: "Static Timing Analysis",
          time: "3-4 weeks",
          topics: [
            "Setup and hold time analysis",
            "Clock skew and jitter",
            "Multi-cycle and false paths",
            "STA tools (PrimeTime, Tempus)",
            "Timing exceptions and constraints",
          ],
          keyPoints: [
            "Critical for timing closure",
            "Learn to interpret timing reports",
            "Understand clock domain issues",
            "Practice fixing timing violations",
          ],
          projects: ["Timing analysis of a design", "Constraint development", "Timing closure exercise"],
        },
      ],
    },
    {
      level: "FPGA & Advanced Topics",
      duration: "3-4 months",
      skills: [
        {
          name: "FPGA Design & Implementation",
          time: "6-7 weeks",
          topics: [
            "FPGA architecture (CLBs, DSPs, BRAMs)",
            "Xilinx Vivado or Intel Quartus tools",
            "Resource utilization and optimization",
            "IP cores and high-level synthesis",
            "Hardware debugging techniques",
          ],
          keyPoints: [
            "FPGAs are great for learning and prototyping",
            "Understand FPGA vs. ASIC trade-offs",
            "Get hands-on with development boards",
            "Learn to use built-in IP cores",
          ],
          projects: ["Image processing on FPGA", "Custom accelerator design", "Real-time signal processing"],
        },
        {
          name: "Low Power Design",
          time: "3-4 weeks",
          topics: [
            "Power dissipation sources",
            "Clock gating techniques",
            "Power domains and voltage scaling",
            "UPF (Unified Power Format)",
            "Power analysis tools",
          ],
          keyPoints: [
            "Power is a first-class design constraint",
            "Learn multiple power reduction techniques",
            "Understand trade-offs with performance",
            "Practice on real designs",
          ],
          projects: ["Low-power processor design", "Multi-voltage domain design", "Power analysis and optimization"],
        },
        {
          name: "Design for Testability (DFT)",
          time: "3-4 weeks",
          topics: [
            "Scan chain insertion",
            "Boundary scan (JTAG)",
            "Built-in self-test (BIST)",
            "Fault coverage and ATPG",
            "DFT tools and methodologies",
          ],
          keyPoints: [
            "Essential for manufacturing testing",
            "Understand test pattern generation",
            "Learn industry DFT practices",
            "Balance test coverage with area overhead",
          ],
          projects: ["Scan chain implementation", "Memory BIST design", "Fault simulation exercise"],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/roadmaps" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Roadmaps
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">VLSI Design Engineer Roadmap</h1>
            </div>
            <p className="text-lg text-muted-foreground text-balance">
              Master chip design and verification for integrated circuits and semiconductor systems
            </p>
          </div>
        </div>
      </section>

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
                    <span>Estimated: {step.duration}</span>
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l-2 space-y-6">
                {step.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>Time to learn: {skill.time}</span>
                          </div>
                        </div>
                        <BookOpen className="w-6 h-6 text-primary shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                          <Code className="w-4 h-4 text-primary" />
                          <span>Topics to Learn:</span>
                        </div>
                        <ul className="space-y-2">
                          {skill.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm font-semibold mb-3">Key Learning Points:</div>
                        <ul className="space-y-2">
                          {skill.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary font-bold shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-semibold mb-3">Suggested Projects:</div>
                        <div className="grid gap-2">
                          {skill.projects.map((project, i) => (
                            <div key={i} className="text-sm px-3 py-2 bg-primary/5 border border-primary/20 rounded-md">
                              {project}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Design Chips?</h3>
          <p className="text-muted-foreground mb-6 text-balance">
            Start with Verilog and build digital circuits on FPGAs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/preparation">Practice VLSI Interview Questions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/roadmaps/embedded">View Embedded Systems Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
