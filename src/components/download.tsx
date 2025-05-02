"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Apple, Monitor, Phone } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MacDownloadModal } from "./mac-download-modal"
import { WindowsDownloadModal } from "./windows-download-modal"

export default function Download() {
  const [isMacModalOpen, setIsMacModalOpen] = useState(false)
  const [isWindowsModalOpen, setIsWindowsModalOpen] = useState(false)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const buttonsRef = useRef(null)
  const macRef = useRef(null)
  const windowsRef = useRef(null)
  const iphoneRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    })

    tl.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }).fromTo(
      [macRef.current, windowsRef.current, iphoneRef.current],
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.4",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="download" className="py-24 bg-gradient-to-b from-purple-900/20 to-background">
      <div className="container px-4 md:px-6">
        <div ref={contentRef} className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20 mb-4">
            Download
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter gradient-text">
            Ready to Transform Your Academic Life?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Download Canvo today and experience the perfect blend of Canvas integration and task management.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <div ref={macRef} className="w-full md:w-1/3">
            <button onClick={() => setIsMacModalOpen(true)} className="block w-full">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-600/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <Button
                  variant="outline"
                  className="relative w-full h-40 rounded-xl border-2 border-purple-500/20 bg-gradient-to-b from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white transition-all duration-300 group-hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <Apple className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-white/80">Download for</div>
                      <div className="text-2xl font-bold mt-1 text-white">macOS</div>
                    </div>
                  </div>
                </Button>
              </div>
            </button>
          </div>

          <div ref={windowsRef} className="w-full md:w-1/3">
            <button onClick={() => setIsWindowsModalOpen(true)} className="block w-full">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-600/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <Button
                  variant="outline"
                  className="relative w-full h-40 rounded-xl border-2 border-purple-500/20 bg-gradient-to-b from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white transition-all duration-300 group-hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.5)]"
                >
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="p-3 rounded-full bg-white/10">
                      <Monitor className="h-12 w-12 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-white/80">Download for</div>
                      <div className="text-2xl font-bold mt-1 text-white">Windows</div>
                    </div>
                  </div>
                </Button>
              </div>
            </button>
          </div>

          <div ref={iphoneRef} className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-gray-400/10 to-gray-600/10 rounded-xl blur opacity-75 transition duration-1000" />
              <Button
                variant="outline"
                className="relative w-full h-40 rounded-xl border-2 border-gray-400/20 bg-gradient-to-b from-gray-400 to-gray-600 text-white transition-all duration-300 cursor-not-allowed opacity-60"
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="p-3 rounded-full bg-white/10">
                    <Phone className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/80">Download for</div>
                    <div className="text-2xl font-bold mt-1 text-white">iPhone</div>
                    <div className="text-sm text-white/80 mt-2">Coming Soon</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block backdrop-blur-sm bg-background/30 p-8 rounded-2xl border border-purple-500/20 shadow-[0_8px_40px_-12px_rgba(139,92,246,0.15)]">
            <div className="flex flex-col gap-6">
              {/* Version Info */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Version Information
                </h3>
                <p className="text-muted-foreground">Version 4.0.0 | Released March 2025</p>
                <p className="text-muted-foreground">Compatible with macOS 10.15+ and Windows 10+</p>
              </div>

              {/* Compatibility Notice */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-yellow-500">⚠️</span>
                      <p className="text-yellow-500/90 font-medium">Desktop Version Limitation</p>
                    </div>
                    <p className="text-yellow-500/80 text-sm">
                      Currently only compatible with UTS Canvas - Test at your own risk
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-green-500">✓</span>
                      <p className="text-green-500/90 font-medium">iPhone App Compatibility</p>
                    </div>
                    <p className="text-green-500/80 text-sm">
                      Works with all Canvas institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MacDownloadModal 
        isOpen={isMacModalOpen} 
        setIsOpen={setIsMacModalOpen}
      />
      
      <WindowsDownloadModal 
        isOpen={isWindowsModalOpen} 
        setIsOpen={setIsWindowsModalOpen}
      />
    </section>
  )
}

