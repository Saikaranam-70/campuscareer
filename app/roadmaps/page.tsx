"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Map, ArrowRight, Filter } from "lucide-react"
import { useState } from "react"

const roadmapsData = [
  // CSE Branch
  {
    title: "Full Stack Developer",
    description: "Master frontend and backend development with modern frameworks",
    duration: "8-14 months",
    slug: "full-stack",
    branch: "CSE",
    topics: ["React", "Node.js", "Databases", "APIs", "DevOps"],
  },
  {
    title: "Web Developer",
    description: "Complete path from HTML/CSS to modern web development",
    duration: "6-12 months",
    slug: "web-developer",
    branch: "CSE",
    topics: ["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Java Developer",
    description: "Master Java from basics to enterprise applications",
    duration: "8-14 months",
    slug: "java-developer",
    branch: "CSE",
    topics: ["Java Basics", "OOP", "Spring Boot", "Microservices", "Design Patterns"],
  },
  {
    title: "Data Analyst",
    description: "Learn data analysis, visualization, and business intelligence",
    duration: "6-10 months",
    slug: "data-analyst",
    branch: "CSE",
    topics: ["Excel", "SQL", "Python", "Tableau", "Statistics"],
  },
  {
    title: "AI/ML Engineer",
    description: "Build intelligent systems with machine learning and AI",
    duration: "10-16 months",
    slug: "ai-ml",
    branch: "CSE",
    topics: ["Python", "TensorFlow", "Deep Learning", "NLP", "Computer Vision"],
  },
  {
    title: "Data Scientist",
    description: "Extract insights from data using advanced analytics and ML",
    duration: "10-14 months",
    slug: "data-science",
    branch: "CSE",
    topics: ["Python", "Statistics", "Machine Learning", "Big Data", "Visualization"],
  },
  {
    title: "Cloud Computing Engineer",
    description: "Design and manage scalable cloud infrastructure",
    duration: "8-12 months",
    slug: "cloud-computing",
    branch: "CSE",
    topics: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "DevOps Engineer",
    description: "Streamline development and operations with automation",
    duration: "8-12 months",
    slug: "devops",
    branch: "CSE",
    topics: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "Monitoring"],
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems and networks from security threats",
    duration: "9-14 months",
    slug: "cybersecurity",
    branch: "CSE",
    topics: ["Network Security", "Ethical Hacking", "Cryptography", "Penetration Testing", "Security Auditing"],
  },
  // ECE Branch
  {
    title: "VLSI Design Engineer",
    description: "Design and verify integrated circuits and chip systems",
    duration: "10-16 months",
    slug: "vlsi",
    branch: "ECE",
    topics: ["Verilog", "VHDL", "Digital Design", "ASIC", "FPGA"],
  },
  {
    title: "Embedded Systems Engineer",
    description: "Develop software for embedded hardware systems",
    duration: "10-14 months",
    slug: "embedded",
    branch: "ECE",
    topics: ["C/C++", "Microcontrollers", "RTOS", "ARM", "IoT"],
  },
  {
    title: "IoT Developer",
    description: "Build connected devices and smart systems",
    duration: "8-12 months",
    slug: "iot",
    branch: "ECE",
    topics: ["Arduino", "Raspberry Pi", "Sensors", "Cloud Integration", "MQTT"],
  },
  {
    title: "Signal Processing Engineer",
    description: "Analyze and manipulate signals for communication systems",
    duration: "10-14 months",
    slug: "signal-processing",
    branch: "ECE",
    topics: ["MATLAB", "DSP", "Image Processing", "Audio Processing", "Filters"],
  },
  {
    title: "RF Engineer",
    description: "Design wireless communication and antenna systems",
    duration: "10-14 months",
    slug: "rf-engineer",
    branch: "ECE",
    topics: ["RF Design", "Antennas", "Wireless Comm", "Microwave", "Network Analyzer"],
  },
  // Mechanical Branch
  {
    title: "CAD/CAM Engineer",
    description: "Design and manufacture products using computer-aided tools",
    duration: "8-12 months",
    slug: "cad-cam",
    branch: "MECH",
    topics: ["AutoCAD", "SolidWorks", "CATIA", "CNC", "3D Printing"],
  },
  {
    title: "Robotics Engineer",
    description: "Design and program robotic systems",
    duration: "10-14 months",
    slug: "robotics",
    branch: "MECH",
    topics: ["ROS", "Python", "Kinematics", "Control Systems", "Computer Vision"],
  },
  // Common to multiple branches
  {
    title: "Mobile App Developer",
    description: "Build native and cross-platform mobile applications",
    duration: "6-10 months",
    slug: "mobile-dev",
    branch: "CSE",
    topics: ["React Native", "Flutter", "iOS/Android", "Mobile UI", "App Store"],
  },
  {
    title: "Blockchain Developer",
    description: "Create decentralized applications and smart contracts",
    duration: "8-12 months",
    slug: "blockchain",
    branch: "CSE",
    topics: ["Solidity", "Web3", "Ethereum", "Smart Contracts", "DApps"],
  },
]

export default function RoadmapsPage() {
  const [selectedBranch, setSelectedBranch] = useState<string>("All")

  const branches = ["All", "CSE", "ECE", "MECH"]

  const filteredRoadmaps =
    selectedBranch === "All" ? roadmapsData : roadmapsData.filter((r) => r.branch === selectedBranch)

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Map className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Career Roadmaps</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Structured learning paths with AI-generated resources to guide your career journey
            </p>
          </div>
        </div>
      </section>

      {/* Branch Filter */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter by Branch:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {branches.map((branch) => (
                <Button
                  key={branch}
                  variant={selectedBranch === branch ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedBranch(branch)}
                >
                  {branch}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredRoadmaps.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">No roadmaps found for the selected branch.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredRoadmaps.map((roadmap, index) => (
              <Card key={index} className="hover:border-primary transition-colors duration-150">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl text-balance">{roadmap.title}</CardTitle>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium shrink-0">
                      {roadmap.branch}
                    </span>
                  </div>
                  <CardDescription>{roadmap.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-sm font-medium mb-2">Duration: {roadmap.duration}</div>
                    <div className="text-sm text-muted-foreground mb-3">Key Topics:</div>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-md">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                    <Link href={`/roadmaps/${roadmap.slug}`}>
                      View Roadmap <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
