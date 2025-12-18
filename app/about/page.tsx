import { Card } from "@/components/ui/card"
import { GraduationCap, Target, Users, Lightbulb } from "lucide-react"

export const metadata = {
  title: "About Us | CampusCareer",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description: "Learn more about CampusCareer and our mission to help college students succeed in their careers.",
}

export default function AboutPage() {
  return (
    <div className="px-3 md:px-4 py-6 md:py-8">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-3 md:space-y-4">
          <div className="flex justify-center">
            <GraduationCap className="w-12 h-12 md:w-16 md:h-16 text-primary" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold">About CampusCareer</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            CampusCareer is a student-focused platform designed to help college students prepare for careers,
            placements, and internships through daily guidance and tools.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="p-4 md:p-6">
          <div className="flex items-start gap-3 md:gap-4">
            <Target className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-sm md:text-base text-muted-foreground">
                We believe every college student deserves access to quality career guidance and placement preparation
                resources. Our mission is to empower students with daily tips, comprehensive skill roadmaps, and
                practical tools that make career preparation accessible and effective.
              </p>
            </div>
          </div>
        </Card>

        {/* What We Offer */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">What We Offer</h2>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
            <Card className="p-4 md:p-5">
              <Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2 md:mb-3" />
              <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2">Daily Career Tips</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Fresh career advice every day to help you build good habits and stay on track with your career goals.
              </p>
            </Card>

            <Card className="p-4 md:p-5">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2 md:mb-3" />
              <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2">Skill Roadmaps</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Comprehensive learning paths for various tech careers, organized by branch and skill level with
                AI-curated resources.
              </p>
            </Card>

            <Card className="p-4 md:p-5">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2 md:mb-3" />
              <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2">Placement Preparation</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Daily aptitude and coding questions, HR interview prep, and group discussion topics to ace your
                placement interviews.
              </p>
            </Card>

            <Card className="p-4 md:p-5">
              <Users className="w-6 h-6 md:w-7 md:h-7 text-primary mb-2 md:mb-3" />
              <h3 className="font-semibold text-base md:text-lg mb-1.5 md:mb-2">Resume & Opportunities</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Resume building tools with AI prompts and live internship & placement opportunities updated daily.
              </p>
            </Card>
          </div>
        </div>

        {/* Who It's For */}
        <Card className="p-4 md:p-6 bg-primary/5 border-primary/20">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Who It's For</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
            CampusCareer is designed for college students from all years and branches:
          </p>
          <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>
                <strong>1st Year Students:</strong> Start building career awareness and develop good learning habits
                early
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>
                <strong>2nd & 3rd Year Students:</strong> Follow skill roadmaps and prepare systematically for
                placements
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>
                <strong>Final Year Students:</strong> Get daily practice questions and access live placement
                opportunities
              </span>
            </li>
          </ul>
        </Card>

        {/* Call to Action */}
        <div className="text-center py-4 md:py-6">
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Join thousands of students using CampusCareer to prepare for successful careers.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Make CampusCareer your daily companion for career success.
          </p>
        </div>
      </div>
    </div>
  )
}
