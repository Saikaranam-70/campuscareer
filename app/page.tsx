import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, Map, Brain, FileText, Briefcase, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="px-3 py-8 md:py-16 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance leading-tight">
              Your Daily Career Companion
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 text-pretty px-2">
              Daily tips, skill roadmaps, placement prep, resume building, and internship updates — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-3">
              <Button asChild size="default" className="w-full sm:w-auto">
                <Link href="/daily-tips">Get Today's Tip</Link>
              </Button>
              <Button asChild size="default" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/placements">View Jobs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="px-3 pt-4 md:px-4">{/* Removed BannerAd */}</div>

      {/* Main Modules Grid */}
      <section className="px-3 py-6 md:py-12 md:px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Module 1: Daily Career Tips */}
          <Card className="hover:border-primary transition-colors duration-150">
            <CardHeader className="pb-3">
              <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Daily Career Tips</CardTitle>
              <CardDescription className="text-sm">Start your day with actionable advice</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-xs sm:text-sm space-y-1.5 mb-3 text-muted-foreground">
                <li>• Career Tip of the Day</li>
                <li>• Common Mistakes to Avoid</li>
                <li>• Quick daily reads</li>
              </ul>
              <Button asChild variant="ghost" size="sm" className="w-full justify-between h-9">
                <Link href="/daily-tips">
                  Explore Tips <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Module 2: Skill Roadmaps */}
          <Card className="hover:border-primary transition-colors duration-150">
            <CardHeader className="pb-3">
              <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Skill Roadmaps</CardTitle>
              <CardDescription className="text-sm">Plan your learning journey</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-xs sm:text-sm space-y-1.5 mb-3 text-muted-foreground">
                <li>• Web & Java Developer paths</li>
                <li>• Data Analyst roadmap</li>
                <li>• Time estimates & resources</li>
              </ul>
              <Button asChild variant="ghost" size="sm" className="w-full justify-between h-9">
                <Link href="/roadmaps">
                  View Roadmaps <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Module 3: Placement Preparation */}
          <Card className="hover:border-primary transition-colors duration-150">
            <CardHeader className="pb-3">
              <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Placement Prep</CardTitle>
              <CardDescription className="text-sm">Practice with daily questions</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-xs sm:text-sm space-y-1.5 mb-3 text-muted-foreground">
                <li>• Daily Aptitude Questions</li>
                <li>• Company-wise coding problems</li>
                <li>• HR & GD practice</li>
              </ul>
              <Button asChild variant="ghost" size="sm" className="w-full justify-between h-9">
                <Link href="/preparation">
                  Start Practicing <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Module 4: Resume Builder */}
          <Card className="hover:border-primary transition-colors duration-150">
            <CardHeader className="pb-3">
              <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Resume Builder</CardTitle>
              <CardDescription className="text-sm">Create professional resumes</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-xs sm:text-sm space-y-1.5 mb-3 text-muted-foreground">
                <li>• Easy resume creator</li>
                <li>• Resume score checker</li>
                <li>• Branch-wise samples</li>
              </ul>
              <Button asChild variant="ghost" size="sm" className="w-full justify-between h-9">
                <Link href="/resume">
                  Build Resume <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Module 5: Placements & Internships */}
          <Card className="hover:border-primary transition-colors duration-150 sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3">
              <div className="mb-3 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Placements & Internships</CardTitle>
              <CardDescription className="text-sm">Stay updated on opportunities</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-xs sm:text-sm space-y-1.5 mb-3 text-muted-foreground">
                <li>• New internships daily</li>
                <li>• Placement drive alerts</li>
                <li>• Eligibility checker</li>
              </ul>
              <Button asChild variant="ghost" size="sm" className="w-full justify-between h-9">
                <Link href="/placements">
                  View Opportunities <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-muted/50 border-y">
        <div className="px-3 py-8 md:py-12 md:px-4">
          <div className="grid grid-cols-2 gap-6 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Career Tips</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Skill Roadmaps</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Practice Questions</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Opportunities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
