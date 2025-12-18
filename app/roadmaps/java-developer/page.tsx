import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle, Coffee } from "lucide-react"

export const metadata = {
  title: "Java Developer Roadmap - CareerCompanion",
  description: "Complete Java Developer roadmap from core Java to Spring Boot and system design",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
}

export default function JavaDeveloperPage() {
  const roadmapSteps = [
    {
      level: "Java Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Core Java",
          time: "5-6 weeks",
          topics: [
            "JVM, JRE, JDK",
            "Variables & data types",
            "OOPs concepts",
            "Exception handling",
            "Collections framework",
            "Multithreading basics",
          ],
          keyPoints: [
            "OOPs is the backbone of Java",
            "Collections are heavily used in real projects",
            "Understand memory management",
            "Practice coding daily",
          ],
          projects: [
            "Student management system",
            "Banking console application",
            "Library management system",
          ],
        },
        {
          name: "Java 8+ Features",
          time: "3-4 weeks",
          topics: [
            "Lambda expressions",
            "Streams API",
            "Functional interfaces",
            "Optional class",
            "Date & Time API",
          ],
          keyPoints: [
            "Streams are widely used in backend",
            "Write clean and functional code",
            "Avoid null pointer exceptions",
          ],
          projects: [
            "Employee data processing app",
            "Stream-based analytics tool",
          ],
        },
      ],
    },
    {
      level: "Database & Backend Basics",
      duration: "2-3 months",
      skills: [
        {
          name: "SQL & Databases",
          time: "4-5 weeks",
          topics: [
            "SQL CRUD operations",
            "Joins & subqueries",
            "Indexes & normalization",
            "Transactions",
            "MySQL / PostgreSQL",
          ],
          keyPoints: [
            "SQL is mandatory for backend",
            "Understand schema design",
            "Practice complex queries",
          ],
          projects: [
            "Inventory management DB",
            "Employee payroll system",
          ],
        },
        {
          name: "JDBC & ORM",
          time: "3-4 weeks",
          topics: [
            "JDBC architecture",
            "PreparedStatement",
            "Hibernate basics",
            "JPA annotations",
            "Entity relationships",
          ],
          keyPoints: [
            "Prefer ORM over raw JDBC",
            "Understand lazy vs eager loading",
            "Avoid N+1 query problem",
          ],
          projects: [
            "CRUD app using Hibernate",
            "Mini HR management system",
          ],
        },
      ],
    },
    {
      level: "Spring Ecosystem",
      duration: "3-4 months",
      skills: [
        {
          name: "Spring & Spring Boot",
          time: "6-8 weeks",
          topics: [
            "Spring Core & IoC",
            "Spring Boot fundamentals",
            "REST APIs",
            "Spring MVC",
            "Validation & exception handling",
          ],
          keyPoints: [
            "Spring Boot is industry standard",
            "Understand dependency injection clearly",
            "Follow REST best practices",
          ],
          projects: [
            "RESTful backend API",
            "User management system",
            "Blog backend",
          ],
        },
        {
          name: "Spring Security & JWT",
          time: "3-4 weeks",
          topics: [
            "Authentication & authorization",
            "JWT tokens",
            "Role-based access",
            "Password encryption",
            "Security filters",
          ],
          keyPoints: [
            "Security questions are common in interviews",
            "Always hash passwords",
            "Understand stateless authentication",
          ],
          projects: [
            "Secure login system",
            "Role-based admin panel backend",
          ],
        },
      ],
    },
    {
      level: "Advanced & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Microservices & Tools",
          time: "4-5 weeks",
          topics: [
            "Microservices architecture",
            "Spring Cloud basics",
            "REST vs GraphQL",
            "Docker basics",
            "CI/CD overview",
          ],
          keyPoints: [
            "Microservices are widely used",
            "Learn service communication",
            "Understand scalability",
          ],
          projects: [
            "Microservices-based app",
            "API gateway demo",
          ],
        },
        {
          name: "DSA & System Design",
          time: "4-6 weeks",
          topics: [
            "Arrays & strings",
            "Linked lists & stacks",
            "Trees & graphs",
            "Low-level design",
            "High-level system design",
          ],
          keyPoints: [
            "DSA is mandatory for placements",
            "Practice Java-based DSA",
            "Understand real-world system design",
          ],
          projects: [
            "Rate limiter design",
            "E-commerce backend design",
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
            <Link href="/roadmaps" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Roadmaps
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Coffee className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Java Developer Roadmap</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Become a professional Java developer with strong backend, Spring Boot, and system design skills
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <span>{step.duration}</span>
            </div>
          </div>
        </div>

        <div className="ml-6 pl-6 border-l-2 space-y-6">
          {step.skills.map((skill, skillIndex) => (
            <Card key={skillIndex} className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg mb-2">
                      {skill.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{skill.time}</span>
                    </div>
                  </div>
                  <BookOpen className="w-6 h-6 text-primary shrink-0" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Topics */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <Code className="w-4 h-4 text-primary" />
                    Topics to Learn
                  </div>
                  <ul className="space-y-2">
                    {skill.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Points */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="text-sm font-semibold mb-3">
                    Key Learning Points
                  </div>
                  <ul className="space-y-2">
                    {skill.keyPoints.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <div className="text-sm font-semibold mb-3">
                    Suggested Projects
                  </div>
                  <div className="grid gap-2">
                    {skill.projects.map((project, i) => (
                      <div
                        key={i}
                        className="text-sm px-3 py-2 bg-primary/5 border border-primary/20 rounded-md"
                      >
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  )
}
