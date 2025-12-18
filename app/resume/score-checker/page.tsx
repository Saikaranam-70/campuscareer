"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Copy } from "lucide-react"
import { useState } from "react"

export default function ScoreCheckerPage() {
  const [copied, setCopied] = useState(false)

  const scorePrompt = `Analyze my resume and provide a detailed ATS (Applicant Tracking System) score with improvement suggestions.

**My Resume Content:**
[Paste your entire resume content here]

**Target Job Description:** (Optional - paste if you want role-specific feedback)
[Paste job description here]

**Please provide:**

1. **ATS Score (0-100)** - Rate my resume's compatibility with ATS systems

2. **Section-wise Analysis:**
   - Contact Information (completeness, format)
   - Professional Summary/Objective (if present)
   - Education Details
   - Technical Skills (relevance, formatting)
   - Work Experience/Internships (impact, action verbs)
   - Projects (technical depth, results)
   - Achievements & Certifications

3. **Keyword Analysis:**
   - Missing important keywords for my field
   - Keyword density and relevance
   - Technical terms that should be added

4. **Formatting Issues:**
   - ATS-unfriendly elements (tables, columns, graphics)
   - Inconsistent formatting
   - Font and spacing problems
   - File format compatibility

5. **Content Quality:**
   - Use of action verbs and quantifiable metrics
   - Clarity and conciseness
   - Grammar and spelling
   - Overall professional tone

6. **Specific Improvements (Priority-wise):**
   - High Priority: Critical issues that must be fixed
   - Medium Priority: Important improvements
   - Low Priority: Nice-to-have enhancements

7. **Rewritten Sections:** Provide improved versions of weak bullet points or sections

8. **Final Recommendations:** 3-5 actionable steps to improve my resume score

Please be specific, critical, and provide concrete examples of improvements.`

  const handleCopy = () => {
    navigator.clipboard.writeText(scorePrompt)
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
              <CheckCircle className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Resume Score Checker</h1>
                <p className="text-muted-foreground">Get AI-Powered Resume Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle>How to Check Your Resume Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium mb-1">Copy the Analysis Prompt</p>
                  <p className="text-sm text-muted-foreground">Click the button below to copy the prompt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium mb-1">Paste Your Resume</p>
                  <p className="text-sm text-muted-foreground">
                    Replace the placeholder with your actual resume content
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium mb-1">Submit to AI</p>
                  <p className="text-sm text-muted-foreground">
                    Paste in ChatGPT or Claude and get instant detailed feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Resume Score Analysis Prompt</CardTitle>
                <CardDescription>Get comprehensive feedback on your resume</CardDescription>
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
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">{scorePrompt}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
