import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Cloud } from "lucide-react"

export const metadata = {
  title: "Cloud Computing Roadmap - CareerCompanion",
  description:
    "Complete Cloud Computing roadmap covering AWS, Azure, GCP, DevOps basics, and cloud security",
}

export default function CloudComputingPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Computer Networks & OS Basics",
          time: "3-4 weeks",
          topics: [
            "What is cloud computing",
            "Client-server architecture",
            "TCP/IP, DNS, HTTP/HTTPS",
            "Linux basics & commands",
            "Virtualization concepts",
          ],
          keyPoints: [
            "Strong fundamentals make cloud easier",
            "Linux knowledge is mandatory",
            "Understand how the internet works",
          ],
          projects: [
            "Linux server setup",
            "Basic networking lab",
          ],
        },
        {
          name: "Cloud Fundamentals",
          time: "3-4 weeks",
          topics: [
            "IaaS, PaaS, SaaS",
            "Public vs private cloud",
            "Regions & availability zones",
            "Cloud pricing basics",
            "Shared responsibility model",
          ],
          keyPoints: [
            "Concepts are common across AWS, Azure, GCP",
            "Understand cost models early",
          ],
          projects: [
            "Cloud service comparison study",
          ],
        },
      ],
    },
    {
      level: "Core Cloud Services",
      duration: "3-4 months",
      skills: [
        {
          name: "Compute & Storage",
          time: "4-5 weeks",
          topics: [
            "Virtual machines (EC2 / VM)",
            "Auto scaling",
            "Object storage (S3 / Blob)",
            "Block & file storage",
            "Load balancers",
          ],
          keyPoints: [
            "Compute + storage are cloud backbone",
            "Learn high availability design",
          ],
          projects: [
            "Deploy web app on VM",
            "Static website on cloud storage",
          ],
        },
        {
          name: "Networking in Cloud",
          time: "4-5 weeks",
          topics: [
            "VPC / Virtual Network",
            "Subnets & routing",
            "Security groups & firewalls",
            "NAT & gateways",
            "DNS & CDN",
          ],
          keyPoints: [
            "Networking is heavily tested in interviews",
            "Security starts from networking",
          ],
          projects: [
            "Custom VPC setup",
            "Secure multi-tier architecture",
          ],
        },
      ],
    },
    {
      level: "DevOps & Containers",
      duration: "2-3 months",
      skills: [
        {
          name: "Docker & Containers",
          time: "3-4 weeks",
          topics: [
            "Docker architecture",
            "Images & containers",
            "Dockerfile",
            "Docker Compose",
          ],
          keyPoints: [
            "Containers are industry standard",
            "Practice building images",
          ],
          projects: [
            "Containerize a web app",
          ],
        },
        {
          name: "CI/CD & Automation",
          time: "3-4 weeks",
          topics: [
            "CI/CD concepts",
            "GitHub Actions / Jenkins",
            "Infrastructure as Code (Terraform)",
            "Cloud automation basics",
          ],
          keyPoints: [
            "Automation saves time & cost",
            "IaC is critical for large systems",
          ],
          projects: [
            "CI/CD pipeline setup",
            "Terraform cloud infrastructure",
          ],
        },
      ],
    },
    {
      level: "Security, Monitoring & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Cloud Security",
          time: "3-4 weeks",
          topics: [
            "IAM users & roles",
            "Authentication & authorization",
            "Encryption at rest & in transit",
            "Secrets management",
          ],
          keyPoints: [
            "Security is top priority in cloud",
            "Follow least privilege principle",
          ],
          projects: [
            "Secure cloud access setup",
          ],
        },
        {
          name: "Monitoring & Certifications",
          time: "3-4 weeks",
          topics: [
            "Cloud monitoring tools",
            "Logging & alerts",
            "Cost monitoring",
            "AWS / Azure / GCP certifications",
          ],
          keyPoints: [
            "Monitoring prevents downtime",
            "Certifications boost credibility",
          ],
          projects: [
            "Cloud monitoring dashboard",
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
              <Cloud className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Cloud Computing Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn cloud computing from fundamentals to production-ready
              architectures
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
            Ready to Start Your Cloud Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Cloud Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Cloud Engineer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
