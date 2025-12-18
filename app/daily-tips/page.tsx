import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Daily Career Tips - CareerCompanion",
  description: "Get daily career tips and learn about common mistakes freshers make",
}

const allDailyTips = [
  {
    tip: "Build in Public",
    description:
      "Share your learning journey on LinkedIn or Twitter. Document your projects, write about challenges you overcome, and connect with others in your field. This builds your personal brand and attracts opportunities.",
  },
  {
    tip: "Master One Thing at a Time",
    description:
      "Don't try to learn everything at once. Focus on mastering one programming language or technology before moving to the next. Depth beats breadth in early career stages.",
  },
  {
    tip: "Contribute to Open Source",
    description:
      "Start contributing to open-source projects on GitHub. It's the best way to learn real-world coding practices, collaborate with developers worldwide, and build an impressive portfolio.",
  },
  {
    tip: "Practice Daily Coding",
    description:
      "Solve at least one coding problem every day on platforms like LeetCode or HackerRank. Consistency is key to mastering data structures and algorithms for placements.",
  },
  {
    tip: "Build Real Projects",
    description:
      "Create projects that solve real problems, not just tutorial clones. Deploy them live and add them to your portfolio. Real projects demonstrate your problem-solving abilities to recruiters.",
  },
  {
    tip: "Learn Git and Version Control",
    description:
      "Master Git commands and GitHub workflows early. Version control is essential for every developer role, and recruiters often check your GitHub activity during hiring.",
  },
  {
    tip: "Network with Industry Professionals",
    description:
      "Attend tech meetups, webinars, and conferences. Connect with professionals on LinkedIn, engage with their content, and don't hesitate to reach out for advice or mentorship.",
  },
  {
    tip: "Document Your Learning",
    description:
      "Write technical blogs about what you learn. Teaching others helps solidify your understanding and establishes you as someone who can communicate complex ideas clearly.",
  },
  {
    tip: "Prepare Your Resume Early",
    description:
      "Don't wait until placement season to create your resume. Keep it updated with every project, internship, or achievement. A well-crafted resume takes time to perfect.",
  },
  {
    tip: "Mock Interviews Matter",
    description:
      "Practice mock interviews with friends or use platforms like Pramp. Getting comfortable with the interview format and receiving feedback early gives you a huge advantage.",
  },
  {
    tip: "Learn System Design Basics",
    description:
      "Even for entry-level roles, understanding basic system design concepts like databases, APIs, and scalability shows maturity and prepares you for future growth.",
  },
  {
    tip: "Build Your Communication Skills",
    description:
      "Technical skills alone won't land you the job. Practice explaining your projects clearly, work on your presentation skills, and learn to articulate your thought process during problem-solving.",
  },
  {
    tip: "Follow Industry Trends",
    description:
      "Stay updated with the latest technologies and industry trends by following tech blogs, podcasts, and YouTube channels. Being aware of current trends shows your passion and initiative.",
  },
  {
    tip: "Create a Strong LinkedIn Profile",
    description:
      "Optimize your LinkedIn profile with a professional photo, compelling headline, detailed experience, and skill endorsements. Recruiters actively search LinkedIn for candidates.",
  },
  {
    tip: "Learn to Debug Effectively",
    description:
      "Master debugging techniques and tools for your tech stack. Being able to efficiently find and fix bugs is one of the most valuable skills in software development.",
  },
  {
    tip: "Understand Data Structures Deeply",
    description:
      "Don't just memorize algorithms, understand when and why to use specific data structures. This knowledge is crucial for both interviews and writing efficient code.",
  },
  {
    tip: "Get Internship Experience",
    description:
      "Apply for internships starting from your second year. Real work experience, even if unpaid initially, is invaluable for learning industry practices and building your resume.",
  },
  {
    tip: "Build a Personal Brand",
    description:
      "Create a personal website showcasing your work, write about your projects, and maintain a consistent online presence. Your personal brand sets you apart from other candidates.",
  },
  {
    tip: "Learn to Work in Teams",
    description:
      "Participate in hackathons and group projects to develop teamwork skills. Most tech jobs require collaboration, and recruiters value candidates who can work well with others.",
  },
  {
    tip: "Optimize Your GitHub Profile",
    description:
      "Pin your best repositories, write clear README files, maintain clean commit histories, and contribute regularly. Your GitHub profile is your portfolio for technical roles.",
  },
  {
    tip: "Practice Behavioral Questions",
    description:
      "Prepare stories about your experiences using the STAR method (Situation, Task, Action, Result). Behavioral interviews are just as important as technical ones.",
  },
  {
    tip: "Learn Database Fundamentals",
    description:
      "Understand SQL, database design, normalization, and indexing. Most applications rely on databases, and this knowledge is frequently tested in interviews.",
  },
  {
    tip: "Explore Different Domains",
    description:
      "Try web development, mobile apps, data science, and other domains to find your passion. Early exploration helps you choose the right career path.",
  },
  {
    tip: "Build Testing Skills",
    description:
      "Learn to write unit tests and understand testing frameworks. Writing testable code and ensuring quality is a sign of a professional developer.",
  },
  {
    tip: "Master Problem-Solving Patterns",
    description:
      "Learn common algorithmic patterns like two-pointers, sliding window, and dynamic programming. Recognizing patterns helps you solve new problems faster.",
  },
  {
    tip: "Stay Consistent, Not Perfect",
    description:
      "It's better to code for 30 minutes every day than 5 hours once a week. Consistency builds momentum and helps information stick in long-term memory.",
  },
  {
    tip: "Learn Cloud Basics",
    description:
      "Familiarize yourself with cloud platforms like AWS, Azure, or Google Cloud. Cloud computing skills are increasingly important for modern development roles.",
  },
  {
    tip: "Understand APIs and Integration",
    description:
      "Learn how to build and consume RESTful APIs. Understanding how different systems communicate is fundamental to modern web development.",
  },
  {
    tip: "Focus on Code Quality",
    description:
      "Write clean, readable, and maintainable code. Use meaningful variable names, follow coding standards, and comment when necessary. Quality matters more than quantity.",
  },
  {
    tip: "Learn Agile Methodologies",
    description:
      "Understand Scrum, sprints, and agile workflows. Most tech companies use agile practices, and familiarity with them shows you're ready for professional environments.",
  },
  {
    tip: "Build Mobile Apps",
    description:
      "Learn mobile development with React Native or Flutter. Mobile skills are in high demand and show you can work across different platforms.",
  },
]

function getDailyTip() {
  const today = new Date()
  const startOfYear = new Date(today.getFullYear(), 0, 0)
  const diff = today.getTime() - startOfYear.getTime()
  const oneDay = 1000 * 60 * 60 * 24
  const dayOfYear = Math.floor(diff / oneDay)

  const tipIndex = dayOfYear % allDailyTips.length

  return {
    date: today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    ...allDailyTips[tipIndex],
  }
}

export default function DailyTipsPage() {
  const todaysTip = getDailyTip()

  const fresherMistakes = [
    {
      title: "Not Building a Portfolio",
      description:
        "Many students graduate without showcasing their projects. Create a GitHub profile and personal website to display your work.",
    },
    {
      title: "Ignoring Soft Skills",
      description:
        "Technical skills alone aren't enough. Communication, teamwork, and problem-solving abilities are equally important for career success.",
    },
    {
      title: "Starting Preparation Too Late",
      description:
        "Don't wait until final year to prepare for placements. Start building skills and gaining experience from your first year itself.",
    },
    {
      title: "Only Focusing on Grades",
      description:
        "While good grades matter, practical skills and real projects carry more weight. Balance academics with hands-on learning.",
    },
    {
      title: "Not Networking Early",
      description:
        "Build connections with seniors, alumni, and professionals in your field. Networking opens doors to opportunities and mentorship.",
    },
    {
      title: "Copying Code Without Understanding",
      description:
        "Simply copying code from tutorials or Stack Overflow won't help you learn. Understand the logic and principles behind it.",
    },
    {
      title: "Neglecting Resume Building",
      description:
        "Your resume is your first impression. Start documenting your projects, skills, and achievements from day one.",
    },
    {
      title: "Not Exploring Different Technologies",
      description:
        "Don't limit yourself to just what's taught in class. Explore various technologies to find what truly interests you.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="px-3 py-8 md:py-12 md:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-balance">Daily Career Tips</h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Start your day with actionable career advice that makes a difference
            </p>
          </div>
        </div>
      </section>

      {/* Career Tip of the Day */}
      <section className="px-3 py-6 md:py-12 md:px-4">
        <Card className="max-w-3xl mx-auto border-primary/50 shadow-lg">
          <CardHeader className="pb-3">
            <div className="text-xs sm:text-sm text-muted-foreground mb-2">{todaysTip.date}</div>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl text-balance">Today's Tip: {todaysTip.tip}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6">{todaysTip.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                Share This Tip
              </Button>
              <Button variant="ghost" size="sm" asChild className="w-full sm:w-auto">
                <Link href="/daily-tips/archive">View Archive</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mistakes Freshers Make */}
      <section className="px-3 pb-8 md:pb-16 md:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
            <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-balance">Common Mistakes Freshers Make</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fresherMistakes.map((mistake, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors duration-150">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">{mistake.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base">{mistake.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 border-y">
        <div className="px-3 py-8 md:py-12 text-center md:px-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">Ready to Build Your Career?</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6">
            Explore skill roadmaps and start learning today
          </p>
          <Button asChild size="default">
            <Link href="/roadmaps">View Skill Roadmaps</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
