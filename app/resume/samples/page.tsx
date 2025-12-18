"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function SamplesPage() {
  const [copied, setCopied] = useState(false)

  const samplesPrompt = `Create a sample professional resume for a [BRANCH] student/graduate with [EXPERIENCE_LEVEL].

**Branch/Field:** [Choose: CSE / ECE / Mechanical / Civil / Electrical / IT / Data Science / Other]

**Experience Level:** [Choose: Fresher / 1 Internship / 2+ Internships / 1 Year Experience / 2+ Years Experience]

**Target Role:** [e.g., Software Developer / Data Analyst / Hardware Engineer / Product Designer]

**Please create a complete sample resume that includes:**

1. **Professional Summary** (3-4 lines)
   - Tailored to the branch and role
   - Highlights key strengths
   - Mentions years of experience or education status

2. **Technical Skills**
   - Programming languages (relevant to branch)
   - Frameworks and tools
   - Domain-specific skills
   - Categorized properly (Languages, Frameworks, Tools, Databases)

3. **Education**
   - Degree and branch
   - College name (use a realistic example)
   - CGPA (use 7.5-8.5 range)
   - Relevant coursework

4. **Projects** (2-3 impressive projects)
   - Project title
   - Technologies used
   - Detailed description with bullet points
   - Quantifiable results where possible
   - GitHub links (use placeholder)

5. **Internships/Experience** (if applicable based on experience level)
   - Company name (use realistic examples)
   - Role title
   - Duration
   - 3-4 achievement-focused bullet points
   - Quantified impact

6. **Achievements & Certifications**
   - Hackathon participations
   - Certifications
   - Academic achievements
   - Competition rankings

7. **Additional Sections** (if relevant)
   - Publications (for research-focused roles)
   - Open source contributions
   - Leadership positions

**Important Instructions:**
- Make it ATS-friendly (no tables, columns, or graphics)
- Use strong action verbs
- Include measurable achievements
- Keep it to 1 page
- Make the content realistic and specific to the branch
- Use professional formatting
- Include contact details (use placeholders)

Please create a complete, copy-paste ready resume that can serve as a template.`

  const handleCopy = () => {
    navigator.clipboard.writeText(samplesPrompt)
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
              <Download className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Sample Resumes</h1>
                <p className="text-muted-foreground">Generate branch-wise resume templates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle>How to Generate Sample Resumes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium mb-1">Copy the Prompt</p>
                  <p className="text-sm text-muted-foreground">Click the button below to copy the template prompt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium mb-1">Customize Parameters</p>
                  <p className="text-sm text-muted-foreground">
                    Specify your branch (CSE/ECE/Mechanical), experience level, and target role
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium mb-1">Generate Template</p>
                  <p className="text-sm text-muted-foreground">
                    Paste in ChatGPT to get a complete, branch-specific resume template
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Sample Resume Generator Prompt</CardTitle>
                <CardDescription>Get branch-wise resume templates</CardDescription>
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
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">{samplesPrompt}</pre>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Popular Branch Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="text-sm">
                  <strong className="text-primary">CSE/IT:</strong> Software Developer, Full Stack, Data Science
                </div>
                <div className="text-sm">
                  <strong className="text-primary">ECE:</strong> VLSI Engineer, Embedded Systems, Hardware Design
                </div>
                <div className="text-sm">
                  <strong className="text-primary">Mechanical:</strong> CAD Engineer, Design Engineer, Quality Control
                </div>
                <div className="text-sm">
                  <strong className="text-primary">Civil:</strong> Site Engineer, Structural Engineer, Project Manager
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
