"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Calendar,
  Settings,
  Shuffle,
  FileSpreadsheet,
  ListTodo,
  Palette,
  Bell,
  Clock,
} from "lucide-react"

const features = [
  {
    icon: <ListTodo className="h-12 w-12 text-primary" />,
    title: "Smart Task Management",
    description: "Organize tasks by course, priority level, and due date.",
  },
  {
    icon: <FileSpreadsheet className="h-12 w-12 text-primary" />,
    title: "Canvas Integration",
    description: "Import assignments and deadlines directly from Canvas LMS.",
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Calendar View",
    description: "Visualize your tasks and deadlines in a clean calendar interface.",
  },
  {
    icon: <Bell className="h-12 w-12 text-primary" />,
    title: "Due Date Reminders",
    description: "Get notified about upcoming assignments and deadlines.",
  },
  {
    icon: <Clock className="h-12 w-12 text-primary" />,
    title: "Countdown Timers",
    description: "Track time remaining for important deadlines and exams.",
  },
  {
    icon: <Shuffle className="h-12 w-12 text-primary" />,
    title: "Task Decision Wheel",
    description: "Can't decide what to work on? Spin the wheel to randomly select a task.",
  },
  {
    icon: <Settings className="h-12 w-12 text-primary" />,
    title: "Custom Settings",
    description: "Personalize the app to match your workflow preferences.",
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Dark Mode",
    description: "Easy on the eyes with both light and dark themes.",
  }
]

export default function Features() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    )

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1 * (index % 4),
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="features" className="py-24 bg-gradient-to-b from-background to-purple-900/20">
      <div className="container px-4 md:px-6">
        <div ref={headingRef} className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter gradient-text">
            Powerful Features for Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Designed specifically for students, Canvo combines powerful task management with seamless Canvas
            integration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && cardsRef.current) cardsRef.current[index] = el;
              }}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-background/50 backdrop-blur-sm p-8 hover:shadow-[0_20px_80px_-15px_rgba(139,92,246,0.25)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="mb-6 p-3 rounded-xl bg-purple-500/10 inline-flex">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

