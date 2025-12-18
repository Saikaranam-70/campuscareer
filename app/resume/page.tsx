import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, CheckCircle, AlertTriangle, Download, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Resume Builder - CareerCompanion",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description: "Build professional resumes, check your resume score, and access sample resumes",
}

export default function ResumePage() {
  const resumeTools = [
    {
      title: "Basic Resume Builder",
      description: "Create a professional resume in minutes with our easy-to-use builder",
      icon: FileText,
      href: "/resume/builder",
      color: "primary",
    },
    {
      title: "Resume Score Checker",
      description: "Get instant feedback on your resume and improve your chances",
      icon: CheckCircle,
      href: "/resume/score-checker",
      color: "green",
    },
    {
      title: "Common Resume Mistakes",
      description: "Learn what to avoid when creating your resume",
      icon: AlertTriangle,
      href: "/resume/mistakes",
      color: "orange",
    },
    {
      title: "Sample Resumes",
      description: "Browse branch-wise resume templates and examples",
      icon: Download,
      href: "/resume/samples",
      color: "blue",
    },
  ]

  const resumeTips = [
    "Keep your resume to 1-2 pages maximum",
    "Use action verbs like 'developed', 'implemented', 'led'",
    "Quantify achievements with numbers and metrics",
    "Tailor your resume for each job application",
    "Include relevant projects and technical skills",
    "Use a clean, professional format with consistent styling",
    "Proofread carefully for spelling and grammar errors",
    "Add links to GitHub, LinkedIn, and portfolio",
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="px-3 py-8 md:py-12 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-balance">
              Resume Builder & Tools
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Create professional resumes that get you noticed by recruiters
            </p>
          </div>
        </div>
      </section>

      {/* Resume Tools Grid */}
      <section className="px-3 py-6 md:py-12 md:px-4">
        <div className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
          {resumeTools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card key={index} className="hover:border-primary transition-colors duration-150">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-base sm:text-lg">{tool.title}</CardTitle>
                  <CardDescription className="text-sm">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="w-full justify-between bg-transparent h-10">
                    <Link href={tool.href}>
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Resume Tips */}
      <section className="bg-muted/50 border-y">
        <div className="px-3 py-8 md:py-12 md:px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-6 text-center">Resume Writing Tips</h2>
            <Card>
              <CardContent className="pt-4 sm:pt-6">
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {resumeTips.map((tip, index) => (
                    <div key={index} className="flex gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="px-3 py-8 md:py-12 md:px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-center">What to Include in Your Resume</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Essential Sections</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Contact Information:</strong> Name, email, phone, LinkedIn, GitHub
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Education:</strong> Degree, college, CGPA, graduation year
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Technical Skills:</strong> Languages, frameworks, tools, databases
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Projects:</strong> 2-3 significant projects with tech stack
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base sm:text-lg">Optional But Valuable</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Internships:</strong> Previous work experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Certifications:</strong> Relevant courses completed
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Achievements:</strong> Hackathons, competitions, awards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Leadership:</strong> Club positions, volunteer work
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
