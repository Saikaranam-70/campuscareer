"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function MistakesPage() {
  const [copied, setCopied] = useState(false)

  const mistakesPrompt = `Review my resume and identify common mistakes that could hurt my job application chances.

**My Resume:**
[Paste your resume content here]

**Please analyze and identify the following common resume mistakes:**

**1. Content Mistakes:**
- Spelling and grammar errors
- Typos and inconsistencies
- Using "I", "me", "my" (resumes should be in third person)
- Including irrelevant personal information (age, marital status, photo)
- Vague or generic descriptions
- Missing quantifiable achievements
- Including an "Objective" instead of "Summary" (outdated)
- Listing duties instead of accomplishments
- Too much or too little information

**2. Formatting Mistakes:**
- Inconsistent formatting (fonts, sizes, spacing)
- Poor use of white space (too cluttered or too sparse)
- Using tables, text boxes, or columns (ATS can't read these)
- Fancy fonts or multiple font types
- Incorrect file format (should be .docx or .pdf)
- Too many or too few bullet points
- Inconsistent date formatting
- Poor section organization

**3. Structure Mistakes:**
- Missing essential sections (contact, education, skills)
- Sections in wrong order
- Education listed before experience (for experienced candidates)
- Skills listed at the bottom (should be near top for tech roles)
- Too long (more than 2 pages) or too short
- No clear hierarchy or visual flow

**4. Technical Mistakes (For Tech Resumes):**
- Listing outdated or irrelevant technologies
- Not including GitHub or portfolio links
- Missing project descriptions
- Not mentioning tech stack used
- Vague technical skills (rate yourself or categorize)
- No mention of best practices or methodologies

**5. Content Gaps:**
- Employment or education gaps not addressed
- No volunteer work or side projects (for freshers)
- Missing certifications or courses
- Outdated or missing contact information
- No LinkedIn profile link

**6. Language & Tone Mistakes:**
- Passive voice instead of active voice
- Weak action verbs ("Responsible for" vs "Led", "Managed")
- Buzzwords without substance ("team player", "hard worker")
- Overly formal or too casual tone
- Jargon without explanation

**Please provide:**
1. List each mistake found in my resume with specific examples
2. Explain WHY each mistake is problematic
3. Provide the CORRECTED version for each issue
4. Rate the severity: Critical, Important, or Minor
5. Give me a priority list of fixes to make first

Be thorough and critical - I want honest feedback to improve my resume.`

  const handleCopy = () => {
    navigator.clipboard.writeText(mistakesPrompt)
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
              <AlertTriangle className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Common Resume Mistakes</h1>
                <p className="text-muted-foreground">Find and fix errors in your resume</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle>How to Use This Mistake Checker</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  1
                </div>
                <div>
                  <p className="font-medium mb-1">Copy the Prompt</p>
                  <p className="text-sm text-muted-foreground">Click below to copy the mistake analysis prompt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  2
                </div>
                <div>
                  <p className="font-medium mb-1">Add Your Resume</p>
                  <p className="text-sm text-muted-foreground">Replace placeholder with your resume text</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                  3
                </div>
                <div>
                  <p className="font-medium mb-1">Get Detailed Analysis</p>
                  <p className="text-sm text-muted-foreground">Submit to ChatGPT for comprehensive error detection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Resume Mistake Checker Prompt</CardTitle>
                <CardDescription>Identify and fix all resume errors</CardDescription>
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
                <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono">{mistakesPrompt}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
