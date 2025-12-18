import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Bot } from "lucide-react"

export const metadata = {
  title: "Robotics Engineer Roadmap - CareerCompanion",
  description:
    "Complete Robotics Engineer roadmap covering mechanics, electronics, control systems, ROS, and real-world robotics projects",
}

export default function RoboticsEngineerPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "3-4 months",
      skills: [
        {
          name: "Mathematics & Physics",
          time: "5-6 weeks",
          topics: [
            "Linear algebra",
            "Calculus",
            "Probability basics",
            "Kinematics fundamentals",
          ],
          keyPoints: [
            "Math is critical for robotics",
            "Focus on motion-related concepts",
          ],
          projects: [
            "Robot motion calculations",
          ],
        },
        {
          name: "Electronics & Sensors",
          time: "4-5 weeks",
          topics: [
            "Basic electronics",
            "Analog & digital circuits",
            "Sensors & actuators",
            "Motor drivers",
          ],
          keyPoints: [
            "Robots interact with the physical world",
          ],
          projects: [
            "Sensor-based control system",
          ],
        },
      ],
    },
    {
      level: "Programming & Embedded Systems",
      duration: "3-4 months",
      skills: [
        {
          name: "Programming for Robotics",
          time: "5-6 weeks",
          topics: [
            "C/C++ programming",
            "Python for robotics",
            "Data structures basics",
            "Real-time constraints",
          ],
          keyPoints: [
            "C++ is widely used in robotics",
            "Python is common in ROS",
          ],
          projects: [
            "Robot control software",
          ],
        },
        {
          name: "Microcontrollers & Embedded Systems",
          time: "4-5 weeks",
          topics: [
            "Arduino / ESP32",
            "Embedded programming",
            "Timers & interrupts",
            "Communication protocols",
          ],
          keyPoints: [
            "Embedded systems control hardware",
          ],
          projects: [
            "Line follower robot",
          ],
        },
      ],
    },
    {
      level: "Control Systems & Robotics Core",
      duration: "3-4 months",
      skills: [
        {
          name: "Control Systems",
          time: "5-6 weeks",
          topics: [
            "Feedback systems",
            "PID controllers",
            "Stability analysis",
            "State-space models",
          ],
          keyPoints: [
            "Control is the heart of robotics",
          ],
          projects: [
            "PID-based motor control",
          ],
        },
        {
          name: "Robot Kinematics & Dynamics",
          time: "4-5 weeks",
          topics: [
            "Forward & inverse kinematics",
            "Dynamics of robots",
            "Trajectory planning",
          ],
          keyPoints: [
            "Kinematics is asked in interviews",
          ],
          projects: [
            "Robotic arm simulation",
          ],
        },
      ],
    },
    {
      level: "ROS, AI & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "ROS (Robot Operating System)",
          time: "4-5 weeks",
          topics: [
            "ROS architecture",
            "Nodes & topics",
            "Gazebo simulation",
            "Robot navigation stack",
          ],
          keyPoints: [
            "ROS is industry standard",
            "Simulation saves hardware cost",
          ],
          projects: [
            "ROS-based mobile robot",
          ],
        },
        {
          name: "Computer Vision & AI Basics",
          time: "3-4 weeks",
          topics: [
            "OpenCV basics",
            "Object detection",
            "SLAM overview",
            "AI in robotics",
          ],
          keyPoints: [
            "Vision adds intelligence to robots",
          ],
          projects: [
            "Vision-based robot navigation",
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
              <Bot className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Robotics Engineer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn robotics from fundamentals to ROS, control systems, and
              real-world autonomous robots
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
                    <CardContent>
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
            Ready to Start Your Robotics Career?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice Robotics Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build Robotics Engineer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
