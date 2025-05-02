"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Task Management",
    description: "Keep track of all your assignments and personal tasks in one organized dashboard.",
    image: "/iphone screenshots/tasks_tab.png"
  },
  {
    id: 2,
    title: "Canvas Integration",
    description: "Seamlessly sync your Canvas assignments and due dates automatically.",
    image: "/iphone screenshots/canvas_tab.png"
  },
  {
    id: 3,
    title: "Calendar View",
    description: "Visualize your tasks and deadlines in an intuitive calendar interface.",
    image: "/iphone screenshots/calander_tab.png"
  },
  {
    id: 4,
    title: "Course Selection",
    description: "Choose which courses to sync and manage in your dashboard.",
    image: "/iphone screenshots/select_courses.png"
  },
  {
    id: 5,
    title: "Task Wheel",
    description: "Can't decide what to work on? Spin the wheel to randomly select a task!",
    image: "/iphone screenshots/spinwheel.png"
  },
  {
    id: 6,
    title: "Customization",
    description: "Personalize your experience with custom themes and settings.",
    image: "/iphone screenshots/settings_tab.png"
  }
]

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragEndX = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStartX.current = e.clientX
    document.body.style.userSelect = 'none'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    dragEndX.current = e.clientX
  }

  const handleMouseUp = () => {
    if (!isDragging) return

    const distance = dragStartX.current - dragEndX.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setIsDragging(false)
    document.body.style.userSelect = ''
    dragStartX.current = 0
    dragEndX.current = 0
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* iPhone Frame */}
      <div className="relative w-[375px] h-[812px] md:w-[390px] md:h-[844px] drop-shadow-[0_0_50px_rgba(139,92,246,0.15)]">
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20"></div>
        
        {/* iPhone Frame Border */}
        <div className="absolute inset-0 bg-[#1A1A1A] rounded-[50px] shadow-[0_0_60px_-15px_rgba(139,92,246,0.3),0_0_20px_0_rgba(0,0,0,0.45)]">
          {/* Power Button */}
          <div className="absolute right-[-2px] top-[120px] w-[3px] h-[50px] bg-[#2A2A2A] rounded-l"></div>
          {/* Volume Buttons */}
          <div className="absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-r"></div>
          <div className="absolute left-[-2px] top-[140px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-r"></div>
          
          {/* Screen Content */}
          <div 
            className="absolute top-0 left-0 right-0 bottom-0 m-[12px] bg-black rounded-[38px] overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Slides */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-in-out",
                    currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover select-none pointer-events-none"
                    priority
                    sizes="(max-width: 768px) 375px, 390px"
                    draggable="false"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentSlide === index ? "bg-white w-4" : "bg-white/50"
                  )}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-[-100px] left-0 right-0 text-center">
        <div className="backdrop-blur-md bg-background/30 p-6 rounded-xl shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)]">
          <h3 className="text-xl font-bold mb-2">{slides[currentSlide].title}</h3>
          <p className="text-sm text-muted-foreground">{slides[currentSlide].description}</p>
        </div>
      </div>
    </div>
  )
}

