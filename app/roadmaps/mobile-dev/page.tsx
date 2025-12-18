import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Smartphone } from "lucide-react"

export const metadata = {
  title: "Mobile App Developer Roadmap - CareerCompanion",
  description:
    "Complete Mobile App Developer roadmap covering Android, iOS, cross-platform frameworks, backend integration, and app publishing",
}

export default function MobileAppDeveloperPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Programming Basics",
          time: "4-5 weeks",
          topics: [
            "Programming fundamentals",
            "OOP concepts",
            "Data structures basics",
            "Git & version control",
          ],
          keyPoints: [
            "Strong programming fundamentals are required",
            "OOP is used everywhere in mobile apps",
          ],
          projects: [
            "Basic utility app",
          ],
        },
        {
          name: "UI / UX Basics",
          time: "3-4 weeks",
          topics: [
            "UI/UX principles",
            "Responsive design",
            "Mobile navigation patterns",
            "Accessibility basics",
          ],
          keyPoints: [
            "User experience matters most in mobile apps",
          ],
          projects: [
            "Simple mobile UI prototype",
          ],
        },
      ],
    },
    {
      level: "Native Mobile Development",
      duration: "3-4 months",
      skills: [
        {
          name: "Android Development",
          time: "5-6 weeks",
          topics: [
            "Kotlin basics",
            "Android Studio",
            "Activities & fragments",
            "Layouts & views",
            "Android lifecycle",
          ],
          keyPoints: [
            "Kotlin is the preferred Android language",
            "Understand activity lifecycle clearly",
          ],
          projects: [
            "Android notes app",
          ],
        },
        {
          name: "iOS Development",
          time: "5-6 weeks",
          topics: [
            "Swift basics",
            "Xcode",
            "UIKit / SwiftUI",
            "iOS app lifecycle",
            "Auto layout",
          ],
          keyPoints: [
            "SwiftUI is the future of iOS",
          ],
          projects: [
            "iOS to-do app",
          ],
        },
      ],
    },
    {
      level: "Cross-Platform Development",
      duration: "2-3 months",
      skills: [
        {
          name: "Flutter / React Native",
          time: "5-6 weeks",
          topics: [
            "Flutter & Dart basics",
            "React Native fundamentals",
            "State management",
            "Navigation",
          ],
          keyPoints: [
            "Cross-platform saves time & cost",
            "Flutter is highly in demand",
          ],
          projects: [
            "Cross-platform mobile app",
          ],
        },
        {
          name: "APIs & Backend Integration",
          time: "3-4 weeks",
          topics: [
            "REST APIs",
            "JSON handling",
            "Authentication",
            "Firebase integration",
          ],
          keyPoints: [
            "Most apps rely on backend services",
          ],
          projects: [
            "Auth-based mobile app",
          ],
        },
      ],
    },
    {
      level: "Advanced & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Advanced Mobile Concepts",
          time: "3-4 weeks",
          topics: [
            "Performance optimization",
            "Offline storage",
            "Push notifications",
            "App security basics",
          ],
          keyPoints: [
            "Performance affects user retention",
          ],
          projects: [
            "Optimized production-ready app",
          ],
        },
        {
          name: "Deployment & Interviews",
          time: "3-4 weeks",
          topics: [
            "Play Store publishing",
            "App Store publishing",
            "App monetization",
            "Mobile developer interviews",
          ],
          keyPoints: [
            "Publishing is a key skill",
            "Projects matter more than certificates",
          ],
          projects: [
            "Published mobile app",
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
              <Smartphone className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Mobile App Developer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn Android, iOS, and cross-platform development to build
              high-quality mobile applications
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
            Ready to Start Your Mobile App Development Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Mobile App Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Mobile App Developer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
