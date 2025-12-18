"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ResumeBuilderPage() {
  const [copied, setCopied] = useState(false)

  const resumePrompt = `Create a professional ATS-friendly resume for me with the following details:

**Personal Information:**
- Full Name: [Your Name]
- Email: [Your Email]
- Phone: [Your Phone]
- LinkedIn: [Your LinkedIn URL]
- GitHub: [Your GitHub URL]
- Location: [Your City, State]

**Education:**
- Degree: [B.Tech/B.E in Branch]
- College: [Your College Name]
- CGPA: [Your CGPA]/10
- Year of Graduation: [Year]

**Technical Skills:**
- Programming Languages: [e.g., Python, Java, C++, JavaScript]
- Web Technologies: [e.g., React, Node.js, HTML, CSS]
- Databases: [e.g., MySQL, MongoDB, PostgreSQL]
- Tools & Frameworks: [e.g., Git, Docker, AWS, TensorFlow]

**Projects:** (Add 2-3 significant projects)
For each project include:
- Project Name
- Tech Stack Used
- Brief Description (2-3 lines)
- Key Features/Achievements
- GitHub Link (if available)

**Internships/Experience:** (if any)
- Company Name
- Role/Position
- Duration (Month Year - Month Year)
- Key Responsibilities (3-4 bullet points with quantifiable achievements)

**Achievements:**
- [Hackathon wins, coding competition ranks, certifications, etc.]

**Instructions for Resume Creation:**
1. Format the resume in a clean, professional, single-column layout
2. Use action verbs like "Developed," "Implemented," "Designed," "Optimized"
3. Quantify achievements with numbers (e.g., "Improved performance by 40%")
4. Keep it to 1 page maximum
5. Make it ATS-friendly with clear section headings
6. Focus on impact and results, not just responsibilities
7. Use consistent formatting throughout

Please create a professional resume based on this information in a format that I can copy and paste into a document.`

  const handleCopy = () => {
    navigator.clipboard.writeText(resumePrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen">
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/resume" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Resume Tools
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Basic Resume Builder</h1>
                <p className="text-muted-foreground">AI-Powered Resume Creation Prompt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle>How to Use This Prompt</CardTitle>
              <CardDescription>Follow these simple steps to create your professional resume using AI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium mb-1">Copy the Prompt</p>
                  <p className="text-sm text-muted-foreground">
                    Click the "Copy Prompt" button below to copy the resume creation prompt
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium mb-1">Fill in Your Details</p>
                  <p className="text-sm text-muted-foreground">
                    Replace the placeholders [Your Name], [Your Email], etc. with your actual information
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium mb-1">Paste in ChatGPT or Any AI</p>
                  <p className="text-sm text-muted-foreground">
                    Open ChatGPT, Claude, or any AI assistant and paste your filled prompt
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  4
                </div>
                <div>
                  <p className="font-medium mb-1">Get Your Resume</p>
                  <p className="text-sm text-muted-foreground">
                    The AI will generate a professional, ATS-friendly resume that you can download and use
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Resume Builder Prompt</CardTitle>
                <CardDescription>Copy this prompt and customize it with your details</CardDescription>
              </div>
              <Button onClick={handleCopy} variant={copied ? "default" : "outline"}>
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" /> Copy Prompt
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary/50 p-6 rounded-lg border">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">{resumePrompt}</pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Pro Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Be specific with your project descriptions and achievements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Use numbers and metrics to quantify your impact</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>After getting the AI output, review and customize it further</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>You can ask the AI to modify specific sections or adjust the format</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
