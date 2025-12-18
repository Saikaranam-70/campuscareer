import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Briefcase, Building2, Calendar, CheckCircle, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Placements & Internships - CareerCompanion",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description: "Find latest internship and placement opportunities with eligibility checker",
}

export default function PlacementsPage() {
  const opportunities = [
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      type: "Summer Internship 2026",
      package: "₹1,00,000/month",
      eligibility: "CSE/IT, 7.0+ CGPA, Strong DSA skills",
      deadline: "Dec 31, 2025",
      isNew: true,
      applyLink: "https://amazon.jobs/en/jobs",
    },
    {
      company: "Microsoft",
      role: "Software Engineering Intern",
      type: "Summer Internship 2026",
      package: "₹80,000/month",
      eligibility: "CSE/IT/ECE, 7.5+ CGPA, Problem solving",
      deadline: "Jan 10, 2026",
      isNew: true,
      applyLink: "https://careers.microsoft.com",
    },
    {
      company: "JPMorgan Chase",
      role: "Software Engineering Intern",
      type: "Summer Internship 2026",
      package: "₹75,000/month",
      eligibility: "CSE/IT, 7.0+ CGPA, No backlogs",
      deadline: "Jan 15, 2026",
      isNew: true,
      applyLink: "https://careers.jpmorgan.com",
    },
    {
      company: "TCS",
      role: "Software Developer - Ninja",
      type: "Full-Time Placement",
      package: "3.6 LPA",
      eligibility: "All branches, 60%+ marks, Max 2 backlogs",
      deadline: "Dec 28, 2025",
      isNew: true,
      applyLink: "https://www.tcs.com/careers",
    },
    {
      company: "Infosys",
      role: "System Engineer",
      type: "Full-Time Placement",
      package: "4.5 LPA",
      eligibility: "CSE/IT/ECE, 65%+ marks, No active backlogs",
      deadline: "Jan 5, 2026",
      isNew: true,
      applyLink: "https://www.infosys.com/careers",
    },
    {
      company: "Wipro",
      role: "Project Engineer - WILP",
      type: "Full-Time Placement",
      package: "4.0 LPA",
      eligibility: "All branches, 60%+ marks, Max 1 backlog",
      deadline: "Jan 8, 2026",
      isNew: false,
      applyLink: "https://careers.wipro.com",
    },
    {
      company: "Accenture",
      role: "Associate Software Engineer",
      type: "Full-Time Placement",
      package: "4.5 LPA",
      eligibility: "All branches, 65%+ marks, No backlogs",
      deadline: "Jan 12, 2026",
      isNew: false,
      applyLink: "https://www.accenture.com/careers",
    },
    {
      company: "Cognizant",
      role: "Programmer Analyst Trainee",
      type: "Full-Time Placement",
      package: "4.0 LPA",
      eligibility: "CSE/IT/ECE, 60%+ marks, Strong aptitude",
      deadline: "Jan 20, 2026",
      isNew: false,
      applyLink: "https://careers.cognizant.com",
    },
  ]

  const upcomingDrives = [
    {
      company: "Google",
      date: "Jan 15, 2026",
      time: "10:00 AM",
      venue: "Virtual (Google Meet)",
      roles: "SWE Intern, STEP Intern",
    },
    {
      company: "Oracle",
      date: "Jan 22, 2026",
      time: "9:30 AM",
      venue: "Campus - Main Auditorium",
      roles: "Software Developer",
    },
    {
      company: "Tech Mahindra",
      date: "Jan 25, 2026",
      time: "11:00 AM",
      venue: "Virtual (MS Teams)",
      roles: "Associate Software Engineer",
    },
    {
      company: "Deloitte",
      date: "Jan 28, 2026",
      time: "10:00 AM",
      venue: "Campus - Block A",
      roles: "Analyst, Business Technology Analyst",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Placements & Internships</h1>
            <p className="text-lg text-muted-foreground mb-2">
              Stay updated with the latest opportunities and company visits
            </p>
            <p className="text-sm text-muted-foreground mb-6">Last Updated: December 18, 2025</p>
            <Button asChild size="lg">
              <Link href="/placements/eligibility-checker">Check Your Eligibility</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Drives */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Upcoming Company Visits</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {upcomingDrives.map((drive, index) => (
              <Card key={index} className="border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg">{drive.company}</CardTitle>
                  <CardDescription>{drive.roles}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{drive.date}</span>
                    </div>
                    <div className="text-muted-foreground">{drive.time}</div>
                    <div className="text-muted-foreground">{drive.venue}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Latest Opportunities</h2>
            <span className="text-sm text-muted-foreground">(Updated Daily)</span>
          </div>
          <div className="space-y-4">
            {opportunities.map((opp, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors duration-150">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{opp.company}</CardTitle>
                        {opp.isNew && (
                          <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
                            NEW
                          </span>
                        )}
                      </div>
                      <CardDescription className="text-base">{opp.role}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{opp.type}</div>
                      <div className="text-lg font-bold text-primary">{opp.package}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <div>
                      <div className="text-sm font-medium mb-2">Eligibility:</div>
                      <div className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{opp.eligibility}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2">Application Deadline:</div>
                      <div className="text-sm text-muted-foreground">{opp.deadline}</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 justify-between bg-transparent" asChild>
                      <Link href={opp.applyLink} target="_blank" rel="noopener noreferrer">
                        Apply Now <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/placements/eligibility-checker">Check Eligibility</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Checker CTA */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Not sure if you're eligible?</h3>
          <p className="text-muted-foreground mb-6">
            Use our eligibility checker to find companies that match your profile
          </p>
          <Button asChild size="lg">
            <Link href="/placements/eligibility-checker">Check Eligibility Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
