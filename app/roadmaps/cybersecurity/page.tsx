import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Shield } from "lucide-react"

export const metadata = {
  title: "Cybersecurity Roadmap - CareerCompanion",
  description:
    "Complete Cybersecurity roadmap covering security fundamentals, networking, ethical hacking, SOC, and cloud security",
}

export default function CybersecurityPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "IT & Networking Basics",
          time: "4-5 weeks",
          topics: [
            "Computer networks",
            "TCP/IP, DNS, HTTP/HTTPS",
            "Ports & protocols",
            "Linux & Windows basics",
            "Virtual machines",
          ],
          keyPoints: [
            "Networking is core to security",
            "Understand how data flows",
          ],
          projects: [
            "Home lab setup",
            "Network traffic analysis",
          ],
        },
        {
          name: "Security Fundamentals",
          time: "3-4 weeks",
          topics: [
            "CIA triad",
            "Authentication vs authorization",
            "Encryption basics",
            "Firewalls & IDS/IPS",
            "Risk management",
          ],
          keyPoints: [
            "Security starts with fundamentals",
            "Know common attack vectors",
          ],
          projects: [
            "Basic security policy design",
          ],
        },
      ],
    },
    {
      level: "Offensive Security",
      duration: "3-4 months",
      skills: [
        {
          name: "Ethical Hacking",
          time: "4-6 weeks",
          topics: [
            "Reconnaissance techniques",
            "Scanning & enumeration",
            "Vulnerability assessment",
            "Password attacks",
            "Metasploit basics",
          ],
          keyPoints: [
            "Learn attacker mindset",
            "Practice legally in labs",
          ],
          projects: [
            "Vulnerability scanning lab",
            "Pen-testing practice report",
          ],
        },
        {
          name: "Web & Application Security",
          time: "4-5 weeks",
          topics: [
            "OWASP Top 10",
            "SQL injection",
            "XSS & CSRF",
            "Authentication flaws",
          ],
          keyPoints: [
            "Web security is high demand",
            "OWASP is interview favorite",
          ],
          projects: [
            "Secure a vulnerable web app",
          ],
        },
      ],
    },
    {
      level: "Defensive Security",
      duration: "3-4 months",
      skills: [
        {
          name: "SOC & Blue Team",
          time: "4-6 weeks",
          topics: [
            "SIEM tools",
            "Log analysis",
            "Incident response",
            "Threat intelligence",
          ],
          keyPoints: [
            "SOC roles are entry-friendly",
            "Monitoring is critical",
          ],
          projects: [
            "SIEM log monitoring lab",
          ],
        },
        {
          name: "Endpoint & Network Security",
          time: "3-4 weeks",
          topics: [
            "Endpoint protection",
            "Network firewalls",
            "IDS/IPS tuning",
            "Zero Trust basics",
          ],
          keyPoints: [
            "Defense-in-depth approach",
          ],
          projects: [
            "Network security architecture",
          ],
        },
      ],
    },
    {
      level: "Cloud, Compliance & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Cloud Security",
          time: "3-4 weeks",
          topics: [
            "Cloud shared responsibility",
            "IAM & access control",
            "Cloud network security",
            "Secrets management",
          ],
          keyPoints: [
            "Cloud security is fast growing",
            "Misconfigurations cause breaches",
          ],
          projects: [
            "Secure cloud environment",
          ],
        },
        {
          name: "Certifications & Career Prep",
          time: "3-4 weeks",
          topics: [
            "CEH / Security+",
            "SOC analyst preparation",
            "Bug bounty basics",
            "Cybersecurity interviews",
          ],
          keyPoints: [
            "Certifications improve credibility",
            "Practice real-world scenarios",
          ],
          projects: [
            "Bug bounty report",
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
              <Shield className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Cybersecurity Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Build a career in cybersecurity from fundamentals to advanced
              defense and attack techniques
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
            Ready to Start Your Cybersecurity Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Cybersecurity Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Cybersecurity Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
