"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function HRInterviewPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const hrPrompts = [
    {
      title: "Tell Me About Yourself",
      prompt: `Help me craft a compelling "Tell Me About Yourself" answer for my interview.

**My Background:**
- Current Status: [e.g., Final year B.Tech CSE student / Recent graduate / 1 year experience]
- College/Company: [Your college name or current company]
- Key Skills: [List 3-4 technical skills]
- Notable Projects/Achievements: [Brief mention of 1-2 significant projects]
- Career Goal: [What role/field you're targeting]

**Instructions:**
Create a 60-90 second response that:
1. Starts with current academic/professional status
2. Highlights relevant technical skills and experience
3. Mentions 1-2 impressive projects or achievements with impact
4. Explains why I'm interested in this role/company
5. Ends with enthusiasm about the opportunity

Make it:
- Conversational and natural (not robotic)
- Focused on professional achievements
- Tailored to show fit for the target role
- Memorable with specific details or numbers

Provide the answer in a natural, speakable format that I can practice and customize.`,
    },
    {
      title: "Strengths & Weaknesses",
      prompt: `Help me answer the "What are your strengths and weaknesses?" question effectively.

**About Me:**
- Field/Role: [e.g., Software Development / Data Analysis / etc.]
- Technical Strengths: [e.g., Problem-solving, Python, React]
- Soft Skills: [e.g., Team player, Quick learner, Communication]
- Area I'm Improving: [e.g., Public speaking, Time management]

**Instructions:**

**For Strengths:**
1. Choose 2-3 genuine strengths relevant to the job
2. Provide a specific example/story for each
3. Show quantifiable impact where possible
4. Make it authentic, not generic

**For Weaknesses:**
1. Choose a real but not critical weakness
2. MUST explain what I'm doing to improve it
3. Show self-awareness and growth mindset
4. Turn it into a positive (learning opportunity)

**Avoid:**
- Fake weaknesses ("I'm a perfectionist")
- Critical flaws ("I can't meet deadlines")
- Clichés without examples

Create natural, honest responses with specific examples I can adapt.`,
    },
    {
      title: "Why Should We Hire You?",
      prompt: `Create a compelling answer for "Why should we hire you?" that stands out.

**My Profile:**
- Target Role: [e.g., Software Engineer / Data Analyst / etc.]
- Unique Skills/Experience: [What sets you apart]
- Relevant Projects: [1-2 projects matching the role]
- Key Achievements: [Quantifiable results if any]
- Understanding of Company: [What you know about their work/values]

**Instructions:**
Create a response that:
1. Directly addresses how my skills match their needs
2. Provides concrete examples/projects as proof
3. Shows understanding of the role and company
4. Mentions unique value I bring (what others can't)
5. Expresses genuine enthusiasm and cultural fit
6. Keeps it under 90 seconds

**Structure:**
- I have the right skills: [Evidence]
- I've proven my abilities: [Example with results]
- I'm passionate about this field/company: [Why]
- I'll add unique value: [What makes me different]

Make it confident but not arrogant, specific but concise.`,
    },
    {
      title: "Career Goals & Aspirations",
      prompt: `Help me articulate my career goals in a way that aligns with the company's opportunities.

**My Information:**
- Current Stage: [Student / Fresher / 1-2 years experience]
- Field of Interest: [e.g., Software Development / AI-ML / Product / etc.]
- Short-term Goal (1-2 years): [e.g., Become proficient in full-stack dev]
- Long-term Goal (5 years): [e.g., Lead a team / Become domain expert]
- Company Type: [e.g., Tech giant / Startup / Product company]
- Specific Interests: [e.g., Cloud computing, System design, etc.]

**Instructions:**
Create a response that:
1. Shows clear direction without being too rigid
2. Aligns with the company's growth opportunities
3. Demonstrates ambition but realistic expectations
4. Shows I've thought about my career path
5. Indicates I plan to stay and grow with the company
6. Balances learning goals with contribution goals

**Structure:**
- Immediate goals: What I want to learn/achieve in first year
- Medium-term: Skills/roles I aspire to (2-3 years)
- Long-term: Leadership/expertise I'm working toward
- How this company fits: Why this role supports my goals

Keep it authentic and show genuine passion for growth.`,
    },
    {
      title: "Handling Difficult Situations",
      prompt: `Prepare me to answer behavioral questions about handling difficult situations using the STAR method.

**Common Scenarios (choose what applies or add your own):**
- Conflict with a team member
- Tight deadline with multiple priorities
- Failure or mistake in a project
- Learning a new technology quickly
- Disagreement with a decision

**For Each Scenario I Select:**
Provide a framework using STAR:
- **Situation**: Set the context (when, where, what was happening)
- **Task**: What was your responsibility/challenge
- **Action**: Specific steps YOU took (use "I", not "we")
- **Result**: Quantifiable outcome, what you learned

**Instructions:**
1. Help me structure 3-4 common behavioral answers
2. Make them specific with real details
3. Show problem-solving skills and initiative
4. End with positive outcomes or lessons learned
5. Keep each answer under 2 minutes
6. Demonstrate soft skills: communication, adaptability, leadership

**Additional Tips:**
- Focus on your individual contribution
- Be honest about challenges
- Show growth and learning
- Avoid blaming others

Create answer templates I can customize with my actual experiences.`,
    },
    {
      title: "Questions to Ask the Interviewer",
      prompt: `Generate thoughtful questions I should ask at the end of my interview.

**Context:**
- Role: [e.g., Software Engineer Intern / Full-time SDE / etc.]
- Company Type: [Startup / Mid-size / Large corporation]
- What I Care About: [e.g., Learning opportunities / Work-life balance / Tech stack / Career growth]
- Interview Stage: [First round / Final round]

**Instructions:**
Provide 8-10 intelligent questions across these categories:

1. **Role-Specific (2-3 questions)**
   - Day-to-day responsibilities
   - Team structure and collaboration
   - Success metrics for this role

2. **Growth & Learning (2-3 questions)**
   - Mentorship and training programs
   - Career progression paths
   - Skill development opportunities

3. **Company Culture (2-3 questions)**
   - Team dynamics and work environment
   - Company values in practice
   - Work-life balance

4. **Technical/Project (1-2 questions)**
   - Tech stack and tools
   - Current projects or challenges
   - Innovation and experimentation

**Make them:**
- Specific and thoughtful (not googleable)
- Show genuine interest and research
- Avoid asking about salary/perks in early rounds
- Open-ended to encourage conversation

Also note which questions are best for which interview stage.`,
    },
  ]

  const handleCopy = (index: number, prompt: string) => {
    navigator.clipboard.writeText(prompt)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen">
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/preparation" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Preparation
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">HR Interview Q&A</h1>
                <p className="text-muted-foreground">AI-powered prompts to master common HR questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-primary/5 border-primary/30">
            <CardHeader>
              <CardTitle>How to Use These Prompts</CardTitle>
              <CardDescription>Get personalized, practice-ready answers</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    1
                  </span>
                  <span className="text-sm">Choose a question topic below and copy the prompt</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    2
                  </span>
                  <span className="text-sm">Fill in your personal details in the placeholders</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    3
                  </span>
                  <span className="text-sm">Paste in ChatGPT or any AI assistant</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                    4
                  </span>
                  <span className="text-sm">Practice the generated answer and customize it to sound natural</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {hrPrompts.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-2">
                    Copy this prompt to generate your personalized answer
                  </CardDescription>
                </div>
                <Button
                  onClick={() => handleCopy(index, item.prompt)}
                  variant={copied === index ? "default" : "outline"}
                  size="sm"
                >
                  {copied === index ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" /> Copy
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/50 p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-xs leading-relaxed font-mono">{item.prompt}</pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
