"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Instagram } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-purple-900/20 border-t border-purple-500/20">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden">
                <img 
                  src="https://i.ibb.co/CsM7pYbR/icon.png" 
                  alt="Canvo Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight">Canvo</span>
            </div>
            <p className="text-muted-foreground text-lg">
              The ultimate to-do list app for students with Canvas integration. Simplify your academic life and never
              miss a deadline again.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10" asChild>
                <Link href="https://www.instagram.com/nickconoplia/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-500/10" asChild>
                <Link href="https://github.com/nicholasconoplia/student-todo-list/" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Navigation</h4>
            <nav className="grid grid-cols-1 gap-4">
              <button
                onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Features
              </button>
              <button
                onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Download
              </button>
            </nav>
          </div>

          {/* Support Links Column */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Support</h4>
            <nav className="grid grid-cols-1 gap-4">
              <button
                onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                FAQ
              </button>
              <Link
                href="/support"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-purple-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Canvo. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

