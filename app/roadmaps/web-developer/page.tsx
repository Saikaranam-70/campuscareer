import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Web Developer Roadmap - CareerCompanion",
  description: "Complete web development learning path with AI-curated resources",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
}

export default function WebDeveloperRoadmapPage() {
  const roadmapSteps = [
    {
      level: "Beginner",
      duration: "2-3 months",
      skills: [
        {
          name: "HTML & CSS Fundamentals",
          time: "3-4 weeks",
          topics: [
            "HTML5 semantic elements and structure",
            "CSS selectors, box model, and positioning",
            "Flexbox and Grid layouts for responsive design",
            "Forms, tables, and accessibility best practices",
            "CSS animations and transitions",
          ],
          keyPoints: [
            "Start by building simple web pages from scratch",
            "Practice recreating layouts from popular websites",
            "Focus on semantic HTML for better SEO and accessibility",
            "Learn mobile-first responsive design principles",
          ],
          projects: ["Personal portfolio website", "Restaurant menu page", "Product landing page"],
        },
        {
          name: "JavaScript Basics",
          time: "4-6 weeks",
          topics: [
            "Variables, data types, and operators",
            "Functions, scope, and closures",
            "Arrays, objects, and data manipulation",
            "DOM manipulation and event handling",
            "Asynchronous JavaScript (callbacks, promises, async/await)",
          ],
          keyPoints: [
            "Practice coding challenges daily on platforms like LeetCode",
            "Understand how JavaScript interacts with HTML and CSS",
            "Learn debugging with browser developer tools",
            "Build interactive features before moving to frameworks",
          ],
          projects: ["To-do list app with local storage", "Interactive quiz application", "Weather app using APIs"],
        },
        {
          name: "Git & Version Control",
          time: "1-2 weeks",
          topics: [
            "Basic Git commands (init, add, commit, push, pull)",
            "Branching and merging strategies",
            "GitHub workflow and collaboration",
            "Creating and managing pull requests",
            "Git best practices and commit messages",
          ],
          keyPoints: [
            "Use Git from day one for all your projects",
            "Learn to read Git documentation and error messages",
            "Practice collaborative workflows with friends",
            "Build a strong GitHub profile with regular commits",
          ],
          projects: [
            "Set up GitHub profile with README",
            "Contribute to open source projects",
            "Create a project with multiple branches",
          ],
        },
      ],
    },
    {
      level: "Intermediate",
      duration: "3-4 months",
      skills: [
        {
          name: "React.js Framework",
          time: "6-8 weeks",
          topics: [
            "Components, props, and state management",
            "React hooks (useState, useEffect, useContext, custom hooks)",
            "Event handling and forms in React",
            "Component lifecycle and performance optimization",
            "React Router for navigation",
          ],
          keyPoints: [
            "Master functional components and hooks thoroughly",
            "Learn when to lift state up vs. use context",
            "Understand virtual DOM and reconciliation",
            "Practice building reusable component libraries",
          ],
          projects: ["E-commerce product catalog", "Social media dashboard", "Movie search app with API integration"],
        },
        {
          name: "TypeScript for Type Safety",
          time: "2-3 weeks",
          topics: [
            "Basic types, interfaces, and type aliases",
            "Generics and utility types",
            "TypeScript with React (props, state, events)",
            "Type guards and narrowing",
            "Configuring tsconfig.json",
          ],
          keyPoints: [
            "Start using TypeScript in all new React projects",
            "Learn to read type definitions from libraries",
            "Use strict mode for better type safety",
            "Understand the benefits of compile-time error checking",
          ],
          projects: [
            "Convert existing JavaScript project to TypeScript",
            "Build a type-safe form library",
            "Create a typed API client",
          ],
        },
        {
          name: "Tailwind CSS & Modern Styling",
          time: "1-2 weeks",
          topics: [
            "Utility-first CSS methodology",
            "Responsive design with Tailwind breakpoints",
            "Customizing Tailwind configuration",
            "Building components with Tailwind",
            "Dark mode implementation",
          ],
          keyPoints: [
            "Embrace utility classes for rapid development",
            "Learn to extract components when needed",
            "Combine with CSS modules or styled-components if preferred",
            "Focus on creating consistent design systems",
          ],
          projects: [
            "Redesign previous projects with Tailwind",
            "Create a UI component library",
            "Build a responsive admin dashboard",
          ],
        },
      ],
    },
    {
      level: "Advanced",
      duration: "4-5 months",
      skills: [
        {
          name: "Node.js & Backend Development",
          time: "4-6 weeks",
          topics: [
            "Node.js fundamentals and event loop",
            "Express.js server and routing",
            "Middleware and error handling",
            "File system operations and streams",
            "Environment variables and configuration",
          ],
          keyPoints: [
            "Understand the difference between frontend and backend",
            "Learn RESTful API design principles",
            "Practice error handling and validation",
            "Implement proper logging and debugging",
          ],
          projects: [
            "RESTful API for blog platform",
            "Authentication server with JWT",
            "File upload and processing service",
          ],
        },
        {
          name: "Databases (SQL & NoSQL)",
          time: "4-6 weeks",
          topics: [
            "SQL fundamentals (SELECT, INSERT, UPDATE, DELETE)",
            "Database design and normalization",
            "PostgreSQL or MySQL for relational data",
            "MongoDB for document-based storage",
            "ORMs and query builders (Prisma, Sequelize)",
          ],
          keyPoints: [
            "Start with SQL databases for structured data",
            "Learn database indexing and query optimization",
            "Understand when to use SQL vs. NoSQL",
            "Practice data modeling for real applications",
          ],
          projects: [
            "User management system with PostgreSQL",
            "Blog platform with comments and likes",
            "Product inventory system",
          ],
        },
        {
          name: "Next.js Full-Stack Framework",
          time: "3-4 weeks",
          topics: [
            "Next.js App Router and file-based routing",
            "Server components vs. client components",
            "API routes and server actions",
            "Static generation and server-side rendering",
            "Image optimization and performance",
          ],
          keyPoints: [
            "Master the difference between SSR, SSG, and CSR",
            "Learn when to use server vs. client components",
            "Leverage Next.js built-in optimizations",
            "Deploy to Vercel for seamless hosting",
          ],
          projects: [
            "Full-stack blog with authentication",
            "E-commerce site with payment integration",
            "Real-time chat application",
          ],
        },
        {
          name: "REST APIs & Authentication",
          time: "3-4 weeks",
          topics: [
            "RESTful API architecture and best practices",
            "JWT authentication and authorization",
            "OAuth 2.0 for third-party authentication",
            "API security (CORS, rate limiting, validation)",
            "API documentation with Swagger/OpenAPI",
          ],
          keyPoints: [
            "Implement secure password hashing (bcrypt)",
            "Learn session management and refresh tokens",
            "Practice API versioning strategies",
            "Test APIs with tools like Postman or Thunder Client",
          ],
          projects: [
            "Secured todo app with user authentication",
            "Social login with Google/GitHub OAuth",
            "Role-based access control system",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/roadmaps" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Roadmaps
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Web Developer Roadmap</h1>
            <p className="text-lg text-muted-foreground text-balance">
              A comprehensive learning path from HTML basics to full-stack web development with AI-curated resources
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
                    <span>Estimated: {step.duration}</span>
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l-2 space-y-6">
                {step.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>Time to learn: {skill.time}</span>
                          </div>
                        </div>
                        <BookOpen className="w-6 h-6 text-primary shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Topics to Learn */}
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                          <Code className="w-4 h-4 text-primary" />
                          <span>Topics to Learn:</span>
                        </div>
                        <ul className="space-y-2">
                          {skill.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Learning Points */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm font-semibold mb-3">Key Learning Points:</div>
                        <ul className="space-y-2">
                          {skill.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary font-bold shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practice Projects */}
                      <div>
                        <div className="text-sm font-semibold mb-3">Suggested Projects:</div>
                        <div className="grid gap-2">
                          {skill.projects.map((project, i) => (
                            <div key={i} className="text-sm px-3 py-2 bg-primary/5 border border-primary/20 rounded-md">
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

      {/* Next Steps */}
      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6 text-balance">
            Begin with daily practice and build projects along the way
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/preparation">Practice Coding Questions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/roadmaps/full-stack">View Full Stack Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
