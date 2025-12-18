import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Settings } from "lucide-react"

export const metadata = {
  title: "DevOps Roadmap - CareerCompanion",
  description:
    "Complete DevOps roadmap covering Linux, CI/CD, Docker, Kubernetes, cloud, and monitoring",
}

export default function DevOpsPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Linux & Networking",
          time: "4-5 weeks",
          topics: [
            "Linux file system",
            "Basic shell scripting",
            "Processes & services",
            "TCP/IP, DNS, HTTP/HTTPS",
            "SSH & permissions",
          ],
          keyPoints: [
            "Linux is mandatory for DevOps",
            "Networking concepts are heavily tested",
          ],
          projects: [
            "Linux server setup",
            "Shell automation scripts",
          ],
        },
        {
          name: "Version Control & Git",
          time: "2-3 weeks",
          topics: [
            "Git basics",
            "Branching & merging",
            "GitHub workflows",
            "Pull requests",
          ],
          keyPoints: [
            "Everything starts with Git",
            "Learn team workflows",
          ],
          projects: [
            "Git-based project workflow",
          ],
        },
      ],
    },
    {
      level: "CI/CD & Automation",
      duration: "3-4 months",
      skills: [
        {
          name: "CI/CD Pipelines",
          time: "4-5 weeks",
          topics: [
            "CI/CD concepts",
            "Jenkins / GitHub Actions",
            "Build & test automation",
            "Pipeline security",
          ],
          keyPoints: [
            "Automation is DevOps core",
            "Learn pipeline debugging",
          ],
          projects: [
            "End-to-end CI/CD pipeline",
          ],
        },
        {
          name: "Infrastructure as Code",
          time: "3-4 weeks",
          topics: [
            "Terraform basics",
            "Provisioning cloud infra",
            "State management",
            "IaC best practices",
          ],
          keyPoints: [
            "IaC is mandatory for scalable infra",
            "Write reusable modules",
          ],
          projects: [
            "Terraform cloud setup",
          ],
        },
      ],
    },
    {
      level: "Containers & Orchestration",
      duration: "2-3 months",
      skills: [
        {
          name: "Docker",
          time: "3-4 weeks",
          topics: [
            "Docker architecture",
            "Dockerfile",
            "Images & containers",
            "Docker Compose",
          ],
          keyPoints: [
            "Containers are industry standard",
            "Learn image optimization",
          ],
          projects: [
            "Containerize an application",
          ],
        },
        {
          name: "Kubernetes",
          time: "4-5 weeks",
          topics: [
            "Pods & deployments",
            "Services & ingress",
            "ConfigMaps & secrets",
            "Scaling & rolling updates",
          ],
          keyPoints: [
            "Kubernetes is essential for DevOps",
            "Understand cluster architecture",
          ],
          projects: [
            "Deploy app on Kubernetes",
          ],
        },
      ],
    },
    {
      level: "Cloud, Monitoring & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Cloud Platforms",
          time: "3-4 weeks",
          topics: [
            "AWS / Azure / GCP basics",
            "Compute & storage services",
            "VPC & networking",
            "Cloud security",
          ],
          keyPoints: [
            "Cloud + DevOps go together",
            "Learn one cloud deeply",
          ],
          projects: [
            "Cloud-based DevOps project",
          ],
        },
        {
          name: "Monitoring & Logging",
          time: "3-4 weeks",
          topics: [
            "Prometheus & Grafana",
            "ELK stack",
            "Alerting & metrics",
            "Cost monitoring",
          ],
          keyPoints: [
            "Monitoring ensures reliability",
            "Alerting is critical",
          ],
          projects: [
            "Monitoring dashboard setup",
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
              <Settings className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                DevOps Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn DevOps from Linux to Kubernetes and cloud automation
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
            Ready to Become a DevOps Engineer?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice DevOps Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build DevOps Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
