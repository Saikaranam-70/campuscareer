import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle, BarChart } from "lucide-react"

export const metadata = {
  title: "Data Analyst Roadmap - CareerCompanion",
  description: "Complete Data Analyst roadmap from basics to advanced analytics and dashboards",
}

export default function DataAnalystPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "2-3 months",
      skills: [
        {
          name: "Excel & Spreadsheets",
          time: "3-4 weeks",
          topics: [
            "Excel basics & formulas",
            "VLOOKUP, HLOOKUP, XLOOKUP",
            "Pivot tables & charts",
            "Data cleaning techniques",
            "Conditional formatting",
          ],
          keyPoints: [
            "Excel is mandatory for analysts",
            "Learn shortcuts to improve speed",
            "Master Pivot Tables early",
            "Practice with real datasets",
          ],
          projects: [
            "Sales performance analysis",
            "Expense tracking dashboard",
            "Employee data report",
          ],
        },
        {
          name: "Statistics & Math",
          time: "3-4 weeks",
          topics: [
            "Mean, median, mode",
            "Variance & standard deviation",
            "Probability basics",
            "Correlation & regression",
            "Hypothesis testing",
          ],
          keyPoints: [
            "Statistics is core to analysis",
            "Focus on interpretation, not formulas",
            "Understand data distributions",
            "Use examples for clarity",
          ],
          projects: [
            "Customer behavior analysis",
            "A/B test result analysis",
            "Survey data insights",
          ],
        },
      ],
    },
    {
      level: "Programming & Databases",
      duration: "3-4 months",
      skills: [
        {
          name: "SQL",
          time: "4-6 weeks",
          topics: [
            "SELECT, WHERE, ORDER BY",
            "JOINS (INNER, LEFT, RIGHT)",
            "GROUP BY & HAVING",
            "Subqueries & CTEs",
            "Window functions",
          ],
          keyPoints: [
            "SQL is non-negotiable",
            "Practice complex joins",
            "Understand query optimization",
            "Work with real databases",
          ],
          projects: [
            "E-commerce sales analysis",
            "Customer churn analysis",
            "Product performance dashboard",
          ],
        },
        {
          name: "Python for Data Analysis",
          time: "5-6 weeks",
          topics: [
            "Python basics",
            "NumPy & Pandas",
            "Data cleaning & preprocessing",
            "Matplotlib & Seaborn",
            "Exploratory Data Analysis (EDA)",
          ],
          keyPoints: [
            "Pandas is your best friend",
            "Focus on EDA skills",
            "Clean data properly",
            "Visualize insights clearly",
          ],
          projects: [
            "Netflix data analysis",
            "Stock market EDA",
            "Weather data analysis",
          ],
        },
      ],
    },
    {
      level: "Visualization & BI Tools",
      duration: "2-3 months",
      skills: [
        {
          name: "Power BI / Tableau",
          time: "4-6 weeks",
          topics: [
            "Data modeling",
            "DAX basics",
            "Interactive dashboards",
            "KPIs & metrics",
            "Data storytelling",
          ],
          keyPoints: [
            "Dashboards should tell a story",
            "Focus on business metrics",
            "Keep visuals simple",
            "Optimize dashboard performance",
          ],
          projects: [
            "Sales analytics dashboard",
            "HR analytics dashboard",
            "Finance KPI dashboard",
          ],
        },
      ],
    },
    {
      level: "Advanced & Career Prep",
      duration: "1-2 months",
      skills: [
        {
          name: "Business Analytics & Case Studies",
          time: "3-4 weeks",
          topics: [
            "Business KPIs",
            "Data-driven decision making",
            "Case study solving",
            "Stakeholder communication",
            "Report writing",
          ],
          keyPoints: [
            "Think like a business analyst",
            "Explain insights in simple language",
            "Focus on impact",
            "Practice real interview cases",
          ],
          projects: [
            "Business growth analysis",
            "Marketing funnel analysis",
            "Operations efficiency report",
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
              <BarChart className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Data Analyst Roadmap</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Learn data analysis from Excel and SQL to dashboards and business insights
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {roadmapSteps.map((step, i) => (
            <div key={i}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {i + 1}
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
                {step.skills.map((skill, j) => (
                  <Card key={j} className="border-2">
                    <CardHeader>
                      <CardTitle>{skill.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {skill.topics.map((t, k) => (
                          <li key={k} className="flex gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-1" />
                            {t}
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
          <h3 className="text-xl font-semibold mb-4">Ready to Become a Data Analyst?</h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
