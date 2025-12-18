import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle, Brain } from "lucide-react"

export const metadata = {
  title: "Data Scientist Roadmap - CareerCompanion",
  description:
    "Complete Data Scientist roadmap from statistics and Python to machine learning and deployment",
    other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
}

export default function DataScientistPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "3-4 months",
      skills: [
        {
          name: "Python for Data Science",
          time: "5-6 weeks",
          topics: [
            "Python basics",
            "NumPy & Pandas",
            "Data cleaning",
            "Exploratory Data Analysis (EDA)",
            "Matplotlib & Seaborn",
          ],
          keyPoints: [
            "Python is the primary language",
            "Focus heavily on EDA",
            "Clean data before modeling",
            "Practice with real datasets",
          ],
          projects: [
            "COVID-19 data analysis",
            "Netflix dataset EDA",
            "Sales insights report",
          ],
        },
        {
          name: "Statistics & Probability",
          time: "4-5 weeks",
          topics: [
            "Mean, median, variance",
            "Probability distributions",
            "Correlation & covariance",
            "Hypothesis testing",
            "A/B testing",
          ],
          keyPoints: [
            "Statistics is core for Data Scientists",
            "Understand concepts, not formulas",
            "Use visual explanations",
          ],
          projects: [
            "Survey data analysis",
            "A/B test result analysis",
          ],
        },
      ],
    },
    {
      level: "Data Handling & SQL",
      duration: "2-3 months",
      skills: [
        {
          name: "SQL",
          time: "4-5 weeks",
          topics: [
            "SELECT, WHERE, GROUP BY",
            "JOINS",
            "Subqueries & CTEs",
            "Window functions",
            "Query optimization",
          ],
          keyPoints: [
            "SQL is mandatory in interviews",
            "Practice complex joins",
            "Think in terms of data flow",
          ],
          projects: [
            "E-commerce data analysis",
            "Customer churn analysis",
          ],
        },
        {
          name: "Data Wrangling",
          time: "3-4 weeks",
          topics: [
            "Handling missing values",
            "Outlier detection",
            "Feature scaling",
            "Encoding categorical data",
          ],
          keyPoints: [
            "Bad data ruins models",
            "Feature engineering is key",
          ],
          projects: [
            "Raw dataset cleanup project",
          ],
        },
      ],
    },
    {
      level: "Machine Learning",
      duration: "4-5 months",
      skills: [
        {
          name: "Supervised Learning",
          time: "6-8 weeks",
          topics: [
            "Linear & logistic regression",
            "Decision trees",
            "Random forest",
            "SVM",
            "Model evaluation metrics",
          ],
          keyPoints: [
            "Understand bias vs variance",
            "Evaluate models correctly",
            "Avoid overfitting",
          ],
          projects: [
            "House price prediction",
            "Customer churn prediction",
          ],
        },
        {
          name: "Unsupervised Learning",
          time: "4-5 weeks",
          topics: [
            "K-means clustering",
            "Hierarchical clustering",
            "PCA",
            "Anomaly detection",
          ],
          keyPoints: [
            "Used when labeled data is absent",
            "PCA helps in visualization",
          ],
          projects: [
            "Customer segmentation",
          ],
        },
        {
          name: "Scikit-Learn",
          time: "3-4 weeks",
          topics: [
            "Pipelines",
            "Cross-validation",
            "Hyperparameter tuning",
            "Model persistence",
          ],
          keyPoints: [
            "Write end-to-end ML pipelines",
            "Prevent data leakage",
          ],
          projects: [
            "Complete ML pipeline project",
          ],
        },
      ],
    },
    {
      level: "Advanced & Deployment",
      duration: "2-3 months",
      skills: [
        {
          name: "Deep Learning Basics",
          time: "4-5 weeks",
          topics: [
            "Neural networks",
            "Backpropagation",
            "TensorFlow / PyTorch basics",
            "CNN overview",
          ],
          keyPoints: [
            "Not mandatory for all roles",
            "Focus on fundamentals",
          ],
          projects: [
            "Image classification demo",
          ],
        },
        {
          name: "Model Deployment & MLOps",
          time: "3-4 weeks",
          topics: [
            "Flask / FastAPI",
            "Model serving",
            "Docker basics",
            "Cloud overview",
          ],
          keyPoints: [
            "Deployment adds strong value",
            "Understand real-world ML systems",
          ],
          projects: [
            "Deployed ML model API",
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
            <Link
              href="/roadmaps"
              className="text-sm text-primary hover:underline mb-4 inline-block"
            >
              ← Back to Roadmaps
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Data Scientist Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Master statistics, machine learning, and real-world data science
              workflows
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
                    {step.duration}
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l-2 space-y-6">
                {step.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {skill.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-2">
                        {skill.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            {topic}
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
          <h3 className="text-xl font-semibold mb-4">
            Ready to Become a Data Scientist?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Data Science Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
