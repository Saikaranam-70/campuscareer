"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, XCircle, ArrowLeft } from "lucide-react"

export default function EligibilityCheckerPage() {
  const [formData, setFormData] = useState({
    branch: "",
    cgpa: "",
    backlogs: "",
  })
  const [results, setResults] = useState<any>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple eligibility logic
    const cgpaNum = Number.parseFloat(formData.cgpa)
    const hasBacklogs = formData.backlogs === "yes"

    const companies = [
      { name: "TCS", minCGPA: 6.0, allowBacklogs: false, branches: ["all"] },
      { name: "Infosys", minCGPA: 6.5, allowBacklogs: false, branches: ["CSE", "IT", "ECE"] },
      { name: "Wipro", minCGPA: 6.0, allowBacklogs: true, branches: ["all"] },
      { name: "Accenture", minCGPA: 6.5, allowBacklogs: false, branches: ["all"] },
      { name: "Amazon", minCGPA: 7.0, allowBacklogs: false, branches: ["CSE", "IT"] },
      { name: "Google", minCGPA: 8.0, allowBacklogs: false, branches: ["CSE", "IT"] },
      { name: "Microsoft", minCGPA: 7.5, allowBacklogs: false, branches: ["CSE", "IT", "ECE"] },
      { name: "Cognizant", minCGPA: 6.0, allowBacklogs: true, branches: ["all"] },
    ]

    const eligible = companies.filter((company) => {
      const cgpaMatch = cgpaNum >= company.minCGPA
      const backlogMatch = hasBacklogs ? company.allowBacklogs : true
      const branchMatch = company.branches.includes("all") || company.branches.includes(formData.branch)
      return cgpaMatch && backlogMatch && branchMatch
    })

    const notEligible = companies.filter((company) => !eligible.includes(company))

    setResults({ eligible, notEligible })
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/placements"
              className="text-sm text-primary hover:underline mb-4 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Placements
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Eligibility Checker</h1>
            <p className="text-lg text-muted-foreground">
              Find out which companies you're eligible to apply for based on your profile
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Details</CardTitle>
              <CardDescription>We'll show you companies that match your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch/Department</Label>
                  <Select
                    value={formData.branch}
                    onValueChange={(value) => setFormData({ ...formData, branch: value })}
                    required
                  >
                    <SelectTrigger id="branch">
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CSE">Computer Science Engineering</SelectItem>
                      <SelectItem value="IT">Information Technology</SelectItem>
                      <SelectItem value="ECE">Electronics & Communication</SelectItem>
                      <SelectItem value="EEE">Electrical & Electronics</SelectItem>
                      <SelectItem value="MECH">Mechanical Engineering</SelectItem>
                      <SelectItem value="CIVIL">Civil Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cgpa">Current CGPA</Label>
                  <Input
                    id="cgpa"
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    placeholder="e.g., 7.5"
                    value={formData.cgpa}
                    onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>Do you have any active backlogs?</Label>
                  <RadioGroup
                    value={formData.backlogs}
                    onValueChange={(value) => setFormData({ ...formData, backlogs: value })}
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no-backlogs" />
                      <Label htmlFor="no-backlogs" className="font-normal cursor-pointer">
                        No
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes-backlogs" />
                      <Label htmlFor="yes-backlogs" className="font-normal cursor-pointer">
                        Yes
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Check Eligibility
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <div className="mt-8 space-y-6">
              {/* Eligible Companies */}
              {results.eligible.length > 0 && (
                <Card className="border-green-500/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-6 h-6" />
                      Eligible Companies ({results.eligible.length})
                    </CardTitle>
                    <CardDescription>You meet the eligibility criteria for these companies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {results.eligible.map((company: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900"
                        >
                          <div className="font-medium">{company.name}</div>
                          <div className="text-sm text-muted-foreground">Min CGPA: {company.minCGPA.toFixed(1)}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Not Eligible Companies */}
              {results.notEligible.length > 0 && (
                <Card className="border-destructive/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <XCircle className="w-6 h-6" />
                      Not Eligible ({results.notEligible.length})
                    </CardTitle>
                    <CardDescription>You don't meet the criteria for these companies yet</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 md:grid-cols-2">
                      {results.notEligible.map((company: any, index: number) => (
                        <div key={index} className="p-3 rounded-lg border bg-destructive/5 border-destructive/30">
                          <div className="font-medium">{company.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Min CGPA: {company.minCGPA.toFixed(1)}
                            {!company.allowBacklogs && " • No backlogs"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
