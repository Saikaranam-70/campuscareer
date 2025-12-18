"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function GroupDiscussionPage() {
  const [copied, setCopied] = useState<number | null>(null)

  const gdPrompts = [
    {
      title: "Latest GD Topics Generator",
      category: "Topic Generator",
      prompt: `Generate 10 current and relevant Group Discussion topics for campus placements in ${new Date().getFullYear()}.

**Categories to cover:**
1. Technology & Innovation (2-3 topics)
2. Social Issues & Current Affairs (2-3 topics)
3. Business & Economy (2 topics)
4. Education & Career (2 topics)

**Requirements for each topic:**
- Must be current and relevant to ${new Date().getFullYear()}
- Should have multiple perspectives (not one-sided)
- Relevant to young professionals/students
- Neither too broad nor too narrow
- Can spark healthy debate

**For each topic, provide:**
1. The topic statement
2. Why it's relevant now
3. 2-3 key perspectives/angles to consider
4. Some facts/statistics to reference

Make topics engaging, contemporary, and suitable for 10-15 minute discussions.`,
    },
    {
      title: "GD Preparation Framework",
      category: "Preparation",
      prompt: `Help me prepare for a Group Discussion on the topic: [ENTER YOUR GD TOPIC HERE]

**Provide a comprehensive preparation guide:**

**1. Topic Analysis:**
- What is the core issue?
- Why is it important/relevant?
- Key stakeholders involved

**2. Different Perspectives:**
- Provide 3-4 different viewpoints on this topic
- Arguments for each perspective
- Counterarguments to consider

**3. Facts & Statistics:**
- 5-7 relevant statistics, facts, or examples
- Recent developments or news (within last year)
- Expert opinions or studies

**4. Key Points to Raise:**
- 5-6 strong points I can make during discussion
- For each point: reasoning + supporting example
- How to phrase them effectively

**5. Potential Rebuttals:**
- Common arguments others might raise
- How to respond diplomatically
- How to build on others' points

**6. Opening & Closing Statements:**
- A strong opening line to start the discussion
- A concluding summary point

**7. Do's and Don'ts:**
- What to do during this specific discussion
- What to avoid saying or doing

Make it practical, current, and actionable for a campus placement GD.`,
    },
    {
      title: "GD Skills & Techniques",
      category: "Skills",
      prompt: `Teach me essential Group Discussion skills and techniques to perform well in placement GDs.

**Cover these areas:**

**1. Communication Skills:**
- How to articulate points clearly
- Voice modulation and confidence
- Body language dos and don'ts
- Making eye contact effectively

**2. Content Development:**
- How to structure arguments logically
- Using the "Point-Reason-Example" format
- Connecting ideas smoothly
- Referencing facts without sounding rehearsed

**3. Group Dynamics:**
- When to speak and when to listen
- How to disagree respectfully
- Building on others' points positively
- Handling aggressive participants
- Managing if no one initiates

**4. Leadership & Initiative:**
- How to initiate the discussion naturally
- Taking the lead vs being bossy
- Summarizing group thoughts
- Steering discussion back on track
- Time management cues

**5. Common Mistakes to Avoid:**
- Being too aggressive or passive
- Monopolizing the discussion
- Going off-topic
- Getting defensive
- Using jargon unnecessarily

**6. Scenario Practice:**
- What if no one is speaking initially?
- What if the discussion gets heated?
- What if I don't know much about the topic?
- How to handle being interrupted?

**7. Evaluation Criteria:**
- What recruiters look for
- How to stand out positively
- Balance between speaking and listening

Provide practical, actionable advice with examples I can practice.`,
    },
    {
      title: "Recent Current Affairs for GD",
      category: "Current Affairs",
      prompt: `Provide a comprehensive list of current affairs topics from the past 3-6 months that are likely to come up in Group Discussions for campus placements.

**Cover these categories:**

**1. Technology & Digital (5 topics)**
- AI developments, regulations
- Social media trends/issues
- Cybersecurity and privacy
- New tech releases or breakthroughs
- Tech company policies

**2. Economic & Business (4 topics)**
- Major business news
- Startup ecosystem updates
- Economic policies or changes
- Industry disruptions
- Workplace trends (WFH, etc.)

**3. Social & Environmental (4 topics)**
- Climate change initiatives
- Social justice movements
- Health and wellness trends
- Education reforms
- Environmental policies

**4. Global Affairs (3 topics)**
- International relations
- Global economic trends
- Cross-border issues
- Major world events

**For each topic:**
1. Brief overview (2-3 sentences)
2. Why it matters
3. Key statistics or facts
4. Different perspectives
5. Potential GD angles

Make it factual, balanced, and interview-ready.`,
    },
    {
      title: "Practice GD Evaluation",
      category: "Self-Assessment",
      prompt: `Help me evaluate and improve my Group Discussion performance.

**What happened in my GD:**
[Describe your last GD experience]
- Topic: [Topic name]
- How I started: [Did I initiate? Wait? Jump in middle?]
- Main points I made: [List your key arguments]
- How others responded: [Positive/negative/ignored]
- Challenges faced: [Interruptions? Couldn't speak? Blank?]
- Overall feeling: [Confident/nervous/satisfied/disappointed]

**Provide:**

**1. Performance Analysis:**
- What I did well
- What I could improve
- Critical mistakes (if any)

**2. Content Feedback:**
- Were my points relevant and strong?
- How to make them more impactful
- What additional points I could have raised

**3. Communication Assessment:**
- Speaking style and clarity
- Body language (if I described it)
- Listening and responding skills

**4. Strategy Suggestions:**
- What should I do differently next time
- How to handle similar situations better
- Specific techniques to practice

**5. Action Plan:**
- 3-4 concrete steps to improve
- Topics to research
- Skills to practice

Be honest and constructive - I want to genuinely improve.`,
    },
    {
      title: "Domain-Specific GD Topics",
      category: "Branch-Specific",
      prompt: `Generate Group Discussion topics specific to my field/branch: [ENTER YOUR BRANCH: CSE/ECE/Mechanical/etc.]

**Provide 8-10 topics that:**
- Are relevant to my field of study
- Reflect current industry trends
- Test domain knowledge and awareness
- Are suitable for technical discussions
- Could be asked by companies in this domain

**For each topic provide:**
1. The topic statement
2. Why it's relevant to this field
3. Key technical concepts involved
4. Industry trends/context
5. 3-4 main discussion points
6. Recent developments or examples

**Example fields:**
- CSE/IT: AI ethics, cloud computing, open source
- ECE: 5G impact, IoT security, renewable energy tech
- Mechanical: Electric vehicles, Industry 4.0, sustainable manufacturing
- Civil: Smart cities, green buildings, infrastructure tech

Tailor topics to show both technical knowledge and awareness of industry direction.`,
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
              <Users className="w-10 h-10 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Group Discussion Topics</h1>
                <p className="text-muted-foreground">AI-powered GD preparation prompts and topic generators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-primary/5 border-primary/30">
            <CardHeader>
              <CardTitle>Master Group Discussions with AI</CardTitle>
              <CardDescription>
                Use these prompts to generate topics, prepare content, and improve your GD skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Copy any prompt below based on what you need</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Paste in ChatGPT or Claude for instant, detailed guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Practice with generated topics and frameworks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Fill in placeholders like [YOUR TOPIC] with your specific needs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {gdPrompts.map((item, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <span className="px-2 py-1 text-xs bg-secondary rounded-md">{item.category}</span>
                  </div>
                  <CardDescription>Copy this prompt for AI-powered GD preparation</CardDescription>
                </div>
                <Button
                  onClick={() => handleCopy(index, item.prompt)}
                  variant={copied === index ? "default" : "outline"}
                  size="sm"
                  className="ml-4"
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
