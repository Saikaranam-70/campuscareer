import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, CheckCircle, Wifi } from "lucide-react"

export const metadata = {
  title: "IoT Developer Roadmap - CareerCompanion",
  description:
    "Complete IoT Developer roadmap covering electronics, embedded systems, IoT protocols, cloud, and real-world projects",
    other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
}

export default function IoTDeveloperPage() {
  const roadmapSteps = [
    {
      level: "Foundations",
      duration: "3-4 months",
      skills: [
        {
          name: "Electronics & Sensors",
          time: "4-5 weeks",
          topics: [
            "Basic electronics",
            "Resistors, capacitors, diodes",
            "Digital & analog signals",
            "Sensors & actuators",
            "Breadboard prototyping",
          ],
          keyPoints: [
            "Electronics is the base of IoT",
            "Understand sensor working clearly",
          ],
          projects: [
            "Temperature monitoring circuit",
            "LED & motor control",
          ],
        },
        {
          name: "Programming Basics",
          time: "4-5 weeks",
          topics: [
            "C/C++ basics",
            "Embedded programming concepts",
            "Arduino IDE",
            "Python basics (optional)",
          ],
          keyPoints: [
            "C/C++ is widely used in IoT",
            "Focus on hardware interaction",
          ],
          projects: [
            "Arduino-based sensor project",
          ],
        },
      ],
    },
    {
      level: "Embedded Systems",
      duration: "3-4 months",
      skills: [
        {
          name: "Microcontrollers",
          time: "5-6 weeks",
          topics: [
            "Arduino",
            "ESP8266 / ESP32",
            "GPIO programming",
            "Timers & interrupts",
            "Serial communication",
          ],
          keyPoints: [
            "ESP32 is industry favorite",
            "Understand memory & power usage",
          ],
          projects: [
            "Smart home automation",
            "WiFi-controlled devices",
          ],
        },
        {
          name: "Embedded OS & RTOS",
          time: "3-4 weeks",
          topics: [
            "Bare-metal programming",
            "RTOS concepts",
            "Task scheduling",
            "Inter-task communication",
          ],
          keyPoints: [
            "RTOS improves system reliability",
          ],
          projects: [
            "RTOS-based sensor system",
          ],
        },
      ],
    },
    {
      level: "IoT Communication & Cloud",
      duration: "3-4 months",
      skills: [
        {
          name: "IoT Protocols",
          time: "4-5 weeks",
          topics: [
            "MQTT",
            "HTTP/HTTPS",
            "CoAP",
            "WebSockets",
          ],
          keyPoints: [
            "MQTT is most used in IoT",
            "Lightweight protocols save power",
          ],
          projects: [
            "MQTT-based sensor network",
          ],
        },
        {
          name: "IoT Cloud Platforms",
          time: "4-5 weeks",
          topics: [
            "AWS IoT Core",
            "Azure IoT Hub",
            "Google Cloud IoT",
            "Device management",
            "Data ingestion & storage",
          ],
          keyPoints: [
            "Cloud enables scalability",
            "Security is critical",
          ],
          projects: [
            "Cloud-connected IoT dashboard",
          ],
        },
      ],
    },
    {
      level: "Advanced Topics & Career Prep",
      duration: "2-3 months",
      skills: [
        {
          name: "Security & Edge Computing",
          time: "3-4 weeks",
          topics: [
            "IoT security basics",
            "Device authentication",
            "Encryption",
            "Edge computing concepts",
          ],
          keyPoints: [
            "Security is major concern in IoT",
          ],
          projects: [
            "Secure IoT communication system",
          ],
        },
        {
          name: "Industry Projects & Interviews",
          time: "3-4 weeks",
          topics: [
            "Smart city applications",
            "Industrial IoT (IIoT)",
            "Case studies",
            "IoT interviews",
          ],
          keyPoints: [
            "Projects matter more than theory",
            "Understand real-world use cases",
          ],
          projects: [
            "Complete end-to-end IoT project",
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
              <Wifi className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">
                IoT Developer Roadmap
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Learn electronics, embedded systems, cloud, and networking to
              become a professional IoT Developer
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
            Ready to Become an IoT Developer?
          </h3>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/preparation">Practice IoT Interview Questions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">Build IoT Developer Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
