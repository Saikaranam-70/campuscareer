import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock, BookOpen, Code, CheckCircle, Microscope as Microchip } from "lucide-react"

export const metadata = {
  title: "Embedded Systems Engineer Roadmap - CareerCompanion",
  description: "Complete embedded systems development path for firmware and hardware programming",
}

export default function EmbeddedRoadmapPage() {
  const roadmapSteps = [
    {
      level: "Programming & Electronics Basics",
      duration: "3-4 months",
      skills: [
        {
          name: "C Programming for Embedded",
          time: "5-6 weeks",
          topics: [
            "C fundamentals and data structures",
            "Pointers, memory management, and bit manipulation",
            "Volatile and register keywords",
            "Embedded C coding standards (MISRA)",
            "Memory-constrained programming",
          ],
          keyPoints: [
            "C is the primary language for embedded systems",
            "Master pointers and memory management",
            "Learn to write efficient, compact code",
            "Understand hardware-software interaction",
          ],
          projects: [
            "LED blinking program structure",
            "Bit manipulation exercises",
            "Data structure implementation for embedded",
          ],
        },
        {
          name: "Electronics Fundamentals",
          time: "4-5 weeks",
          topics: [
            "Basic electronic components (resistors, capacitors)",
            "Ohm's law and circuit analysis",
            "Digital logic and interfacing",
            "Reading datasheets and schematics",
            "Multimeter and oscilloscope basics",
          ],
          keyPoints: [
            "Understand hardware to write better firmware",
            "Learn to debug hardware issues",
            "Practice reading component datasheets",
            "Get comfortable with lab equipment",
          ],
          projects: ["Build simple LED circuits", "Voltage divider calculations", "Logic level converter circuit"],
        },
      ],
    },
    {
      level: "Microcontroller Programming",
      duration: "4-5 months",
      skills: [
        {
          name: "Microcontroller Architecture",
          time: "4-5 weeks",
          topics: [
            "CPU architecture and instruction set",
            "Memory organization (Flash, RAM, EEPROM)",
            "GPIO, timers, and interrupts",
            "Clock systems and power modes",
            "Peripheral interfaces",
          ],
          keyPoints: [
            "Start with 8-bit MCUs (AVR or PIC) for basics",
            "Understand register-level programming",
            "Learn interrupt handling thoroughly",
            "Study one architecture deeply first",
          ],
          projects: ["GPIO control and LED patterns", "Timer-based applications", "Interrupt-driven button handling"],
        },
        {
          name: "ARM Cortex-M Programming",
          time: "6-7 weeks",
          topics: [
            "ARM Cortex-M architecture",
            "STM32 or similar 32-bit MCUs",
            "CMSIS (Cortex Microcontroller Software Interface Standard)",
            "Direct register access vs. HAL",
            "Debugging with JTAG/SWD",
          ],
          keyPoints: [
            "ARM Cortex-M is industry standard",
            "Learn both register-level and HAL programming",
            "Master debugging with hardware debuggers",
            "Understand interrupt priorities and NVIC",
          ],
          projects: ["UART communication project", "ADC data acquisition", "PWM motor control"],
        },
        {
          name: "Communication Protocols",
          time: "5-6 weeks",
          topics: [
            "UART/USART serial communication",
            "SPI (Serial Peripheral Interface)",
            "I2C (Inter-Integrated Circuit)",
            "CAN bus for automotive",
            "Protocol debugging and analysis",
          ],
          keyPoints: [
            "Each protocol has specific use cases",
            "Learn to use logic analyzers",
            "Practice interfacing real sensors/devices",
            "Understand timing diagrams thoroughly",
          ],
          projects: ["UART to PC communication", "SPI-based display driver", "I2C sensor interfacing"],
        },
      ],
    },
    {
      level: "Real-Time Operating Systems",
      duration: "4-5 months",
      skills: [
        {
          name: "RTOS Fundamentals",
          time: "5-6 weeks",
          topics: [
            "Task scheduling and priorities",
            "Semaphores, mutexes, and synchronization",
            "Message queues and event flags",
            "Memory management in RTOS",
            "RTOS vs. bare-metal programming",
          ],
          keyPoints: [
            "Understand when RTOS is necessary",
            "Learn task design and decomposition",
            "Master inter-task communication",
            "Practice on FreeRTOS (most popular)",
          ],
          projects: ["Multi-task LED controller", "Producer-consumer with queues", "Priority-based task system"],
        },
        {
          name: "FreeRTOS Deep Dive",
          time: "4-5 weeks",
          topics: [
            "FreeRTOS architecture and API",
            "Task creation and management",
            "Interrupt handling in RTOS context",
            "Heap management strategies",
            "Performance tuning and optimization",
          ],
          keyPoints: [
            "FreeRTOS is used in production systems",
            "Learn to configure for your hardware",
            "Understand tick interrupt and timing",
            "Practice debugging multi-threaded issues",
          ],
          projects: ["Data logger with RTOS", "Multi-sensor monitoring system", "Command interpreter with tasks"],
        },
        {
          name: "Bootloaders & Firmware Update",
          time: "3-4 weeks",
          topics: [
            "Bootloader concepts and architecture",
            "Flash memory programming",
            "Firmware update mechanisms (OTA)",
            "Memory partitioning and linker scripts",
            "Secure boot and code signing",
          ],
          keyPoints: [
            "Essential for product maintenance",
            "Learn linker scripts and memory maps",
            "Understand boot process completely",
            "Practice safe firmware update strategies",
          ],
          projects: ["Simple bootloader implementation", "UART-based firmware updater", "Dual-bank firmware system"],
        },
      ],
    },
    {
      level: "Advanced & IoT Integration",
      duration: "3-4 months",
      skills: [
        {
          name: "Power Management & Optimization",
          time: "3-4 weeks",
          topics: [
            "Low-power modes and sleep states",
            "Power consumption analysis",
            "Battery-operated device design",
            "Clock gating and peripheral management",
            "Energy harvesting basics",
          ],
          keyPoints: [
            "Critical for battery-powered devices",
            "Measure power consumption accurately",
            "Balance performance with power savings",
            "Learn to use power profilers",
          ],
          projects: ["Ultra-low-power sensor node", "Sleep mode optimization", "Battery life calculator"],
        },
        {
          name: "Wireless Communication",
          time: "5-6 weeks",
          topics: [
            "WiFi modules (ESP32, ESP8266)",
            "Bluetooth/BLE programming",
            "LoRa for long-range communication",
            "Zigbee and Thread protocols",
            "MQTT for IoT messaging",
          ],
          keyPoints: [
            "Choose protocol based on requirements",
            "Learn both hardware and software aspects",
            "Practice with real wireless modules",
            "Understand power implications",
          ],
          projects: ["WiFi-connected sensor", "BLE peripheral device", "IoT data logger to cloud"],
        },
        {
          name: "Testing & Debugging",
          time: "3-4 weeks",
          topics: [
            "Unit testing for embedded systems",
            "Hardware-in-the-loop (HIL) testing",
            "Logic analyzers and oscilloscopes",
            "Debugging techniques (printf, JTAG)",
            "Static analysis and code quality",
          ],
          keyPoints: [
            "Testing is crucial for reliability",
            "Learn to use hardware debugging tools",
            "Practice systematic debugging approach",
            "Automate testing where possible",
          ],
          projects: [
            "Unit test framework setup",
            "Logic analyzer-based protocol verification",
            "Automated hardware test suite",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="border-b bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <Link href="/roadmaps" className="text-sm text-primary hover:underline mb-4 inline-block">
              ← Back to Roadmaps
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Microchip className="w-10 h-10 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold">Embedded Systems Engineer Roadmap</h1>
            </div>
            <p className="text-lg text-muted-foreground text-balance">
              Develop firmware and software for embedded hardware systems from microcontrollers to IoT devices
            </p>
          </div>
        </div>
      </section>

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
                    <span>Estimated: {step.duration}</span>
                  </div>
                </div>
              </div>

              <div className="ml-6 pl-6 border-l-2 space-y-6">
                {step.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex} className="border-2">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg mb-2">{skill.name}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>Time to learn: {skill.time}</span>
                          </div>
                        </div>
                        <BookOpen className="w-6 h-6 text-primary shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                          <Code className="w-4 h-4 text-primary" />
                          <span>Topics to Learn:</span>
                        </div>
                        <ul className="space-y-2">
                          {skill.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-sm font-semibold mb-3">Key Learning Points:</div>
                        <ul className="space-y-2">
                          {skill.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-primary font-bold shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-sm font-semibold mb-3">Suggested Projects:</div>
                        <div className="grid gap-2">
                          {skill.projects.map((project, i) => (
                            <div key={i} className="text-sm px-3 py-2 bg-primary/5 border border-primary/20 rounded-md">
                              {project}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 border-y">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to Program Embedded Systems?</h3>
          <p className="text-muted-foreground mb-6 text-balance">Start with Arduino or STM32 development boards</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/preparation">Practice Embedded Interview Questions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/roadmaps/iot">View IoT Developer Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
