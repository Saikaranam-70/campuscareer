import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Code, MessageSquare, Users, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Placement Preparation - CareerCompanion",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description: "Daily aptitude questions, coding problems, HR interview prep, and group discussion topics",
}

export default function PreparationPage() {
  const prepCategories = [
    {
      title: "Daily Aptitude Questions",
      description: "Practice 20 questions daily on quantitative aptitude, logical reasoning, and verbal ability",
      icon: Brain,
      href: "/preparation/aptitude",
      topics: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Data Interpretation"],
    },
    {
      title: "Coding Questions",
      description: "Master data structures and algorithms with 20 daily coding questions",
      icon: Code,
      href: "/preparation/coding",
      topics: ["Arrays", "Strings", "Algorithms", "Data Structures"],
    },
    {
      title: "HR Interview Q&A",
      description: "AI-powered prompts for mastering common HR interview questions",
      icon: MessageSquare,
      href: "/preparation/hr-interview",
      topics: ["Tell Me About Yourself", "Strengths & Weaknesses", "Career Goals", "Behavioral Questions"],
    },
    {
      title: "Group Discussion Topics",
      description: "Practice with AI-generated GD topics and preparation prompts",
      icon: Users,
      href: "/preparation/group-discussion",
      topics: ["Technology Trends", "Social Issues", "Business Topics", "General Awareness"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="px-3 py-8 md:py-12 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Brain className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-balance">
              Placement Preparation Zone
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Practice daily to ace your placement interviews and land your dream job
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Categories */}
      <section className="px-3 py-6 md:py-12 md:px-4">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {prepCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:border-primary transition-colors duration-150">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-xs sm:text-sm font-medium mb-2">Topics Covered:</div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {category.topics.map((topic, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-md">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full justify-between bg-transparent">
                    <Link href={category.href}>
                      Start Practicing <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Tips Section */}
      <section className="px-3 py-8 md:py-12 md:px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-center">Preparation Tips</h2>
          <Card>
            <CardContent className="pt-4 sm:pt-6">
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs sm:text-sm font-medium text-primary">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Practice Daily</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Consistency is key. Solve all 20 questions every day to build momentum.
                    </p>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs sm:text-sm font-medium text-primary">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Understand Solutions</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Don't just memorize. Understand the logic behind each solution.
                    </p>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs sm:text-sm font-medium text-primary">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Take Weekly Tests</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Test your knowledge weekly to track improvement and identify weak areas.
                    </p>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs sm:text-sm font-medium text-primary">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Review Mistakes</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Learn from your errors. Keep a journal of mistakes and review them regularly.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
