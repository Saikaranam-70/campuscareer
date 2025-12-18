import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Full Stack Developer Roadmap - CareerCompanion",
  description: "Complete full-stack development path covering frontend, backend, and DevOps",
}

export default function FullStackRoadmapPage() {
  const roadmapSteps = [
    {
      level: "Foundation (Frontend Focus)",
      duration: "3-4 months",
      skills: [
        {
          name: "Frontend Fundamentals",
          time: "6-8 weeks",
          topics: [
            "HTML5, CSS3, and JavaScript ES6+",
            "Responsive design and mobile-first approach",
            "React.js with hooks and component patterns",
            "State management (Context API, Redux)",
            "TypeScript for type-safe code",
          ],
          keyPoints: [
            "Master React before moving to backend",
            "Build at least 3 complex frontend projects",
            "Learn component architecture and reusability",
            "Understand browser DevTools for debugging",
          ],
          projects: [
            "Multi-page portfolio with routing",
            "Real-time dashboard with charts",
            "E-commerce frontend with cart functionality",
          ],
        },
        {
          name: "Modern CSS & Styling",
          time: "2-3 weeks",
          topics: [
            "Tailwind CSS utility-first framework",
            "CSS-in-JS solutions (styled-components)",
            "Component libraries (shadcn/ui, Material-UI)",
            "Animations and micro-interactions",
            "Accessibility (ARIA, semantic HTML)",
          ],
          keyPoints: [
            "Choose one styling approach and master it",
            "Learn design principles and color theory basics",
            "Practice building pixel-perfect UIs",
            "Ensure all UIs are accessible and responsive",
          ],
          projects: [
            "Design system with reusable components",
            "Animated landing page",
            "Dark mode toggle implementation",
          ],
        },
      ],
    },
    {
      level: "Backend Development",
      duration: "4-5 months",
      skills: [
        {
          name: "Server-Side Programming",
          time: "5-6 weeks",
          topics: [
            "Node.js runtime and event-driven architecture",
            "Express.js framework and middleware",
            "RESTful API design and best practices",
            "Error handling and validation (Zod, Joi)",
            "Environment configuration and security",
          ],
          keyPoints: [
            "Understand asynchronous programming deeply",
            "Learn to structure backend projects properly",
            "Implement proper error handling from the start",
            "Practice API design before implementation",
          ],
          projects: [
            "Blog API with CRUD operations",
            "User authentication system",
            "File upload and management service",
          ],
        },
        {
          name: "Database Management",
          time: "5-6 weeks",
          topics: [
            "SQL databases (PostgreSQL, MySQL)",
            "NoSQL databases (MongoDB, Redis)",
            "Database design and normalization",
            "ORMs and query builders (Prisma, TypeORM)",
            "Database indexing and query optimization",
          ],
          keyPoints: [
            "Start with relational databases (SQL)",
            "Learn when to use SQL vs. NoSQL",
            "Practice writing efficient queries",
            "Understand transactions and ACID properties",
          ],
          projects: [
            "Social media backend with relationships",
            "Inventory management system",
            "Analytics dashboard with aggregations",
          ],
        },
        {
          name: "Authentication & Authorization",
          time: "3-4 weeks",
          topics: [
            "JWT tokens and session management",
            "Password hashing and security (bcrypt)",
            "OAuth 2.0 and social authentication",
            "Role-based access control (RBAC)",
            "API security best practices",
          ],
          keyPoints: [
            "Never store passwords in plain text",
            "Implement refresh token rotation",
            "Learn about common security vulnerabilities",
            "Practice secure session management",
          ],
          projects: [
            "Authentication service with multiple providers",
            "Protected API with role-based permissions",
            "Multi-tenant application",
          ],
        },
      ],
    },
    {
      level: "Full-Stack Integration",
      duration: "3-4 months",
      skills: [
        {
          name: "Modern Full-Stack Frameworks",
          time: "5-6 weeks",
          topics: [
            "Next.js App Router and server components",
            "Server actions and API routes",
            "Static generation vs. server-side rendering",
            "Image and font optimization",
            "Middleware and edge functions",
          ],
          keyPoints: [
            "Understand rendering strategies (SSR, SSG, ISR)",
            "Learn when to use server vs. client components",
            "Leverage Next.js built-in optimizations",
            "Practice full-stack features in one codebase",
          ],
          projects: ["Full-stack blog with CMS", "SaaS application with subscriptions", "Real-time collaboration tool"],
        },
        {
          name: "Testing & Quality Assurance",
          time: "3-4 weeks",
          topics: [
            "Unit testing with Jest and Vitest",
            "Integration testing for APIs",
            "End-to-end testing with Playwright",
            "Test-driven development (TDD) approach",
            "Code coverage and quality metrics",
          ],
          keyPoints: [
            "Write tests for critical business logic",
            "Learn to test both frontend and backend",
            "Practice TDD on new features",
            "Automate testing in CI/CD pipeline",
          ],
          projects: [
            "Test suite for existing project",
            "TDD implementation of a feature",
            "E2E test coverage for user flows",
          ],
        },
        {
          name: "DevOps & Deployment",
          time: "3-4 weeks",
          topics: [
            "Git workflows and collaboration",
            "CI/CD pipelines (GitHub Actions)",
            "Containerization with Docker",
            "Cloud deployment (Vercel, AWS, Azure)",
            "Monitoring and logging",
          ],
          keyPoints: [
            "Learn Docker basics for consistent environments",
            "Set up automated deployment pipelines",
            "Monitor application performance in production",
            "Practice infrastructure as code",
          ],
          projects: [
            "Dockerized full-stack application",
            "CI/CD pipeline with automated testing",
            "Production deployment with monitoring",
          ],
        },
      ],
    },
    {
      level: "Advanced Topics",
      duration: "3-4 months",
      skills: [
        {
          name: "Microservices & Architecture",
          time: "4-5 weeks",
          topics: [
            "Microservices architecture patterns",
            "API Gateway and service discovery",
            "Message queues (RabbitMQ, Kafka)",
            "GraphQL as alternative to REST",
            "Event-driven architecture",
          ],
          keyPoints: [
            "Understand when to use microservices",
            "Learn service communication patterns",
            "Practice designing scalable systems",
            "Study distributed system challenges",
          ],
          projects: [
            "Microservices-based e-commerce platform",
            "Event-driven notification system",
            "GraphQL API with subscriptions",
          ],
        },
        {
          name: "Performance & Scalability",
          time: "3-4 weeks",
          topics: [
            "Caching strategies (Redis, CDN)",
            "Load balancing and horizontal scaling",
            "Database sharding and replication",
            "Performance monitoring and optimization",
            "Web vitals and lighthouse scores",
          ],
          keyPoints: [
            "Learn to identify performance bottlenecks",
            "Implement caching at multiple layers",
            "Practice optimizing both frontend and backend",
            "Understand trade-offs in scalability decisions",
          ],
          projects: [
            "High-performance API with caching",
            "Optimized frontend with 95+ Lighthouse score",
            "Scalable application architecture design",
          ],
        },
        {
          name: "Security & Best Practices",
          time: "2-3 weeks",
          topics: [
            "OWASP Top 10 vulnerabilities",
            "SQL injection and XSS prevention",
            "CORS, CSRF, and security headers",
            "Data encryption and HTTPS",
            "Security auditing and penetration testing",
          ],
          keyPoints: [
            "Security should be built-in, not added later",
            "Validate and sanitize all user inputs",
            "Keep dependencies updated and secure",
            "Practice security-first development",
          ],
          projects: [
            "Security audit of existing application",
            "Implementation of security best practices",
            "Penetration testing and vulnerability fixes",
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Full Stack Developer Roadmap</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Master both frontend and backend development to become a complete full-stack engineer
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
          <h3 className="text-xl font-semibold mb-4">Ready to Build Full-Stack Applications?</h3>
          <p className="text-muted-foreground mb-6 text-balance">
            Start building end-to-end projects to solidify your skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/preparation">Practice Full-Stack Questions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/roadmaps/devops">View DevOps Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
