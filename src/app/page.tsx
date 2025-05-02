import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import WhyChooseUs from "@/components/why-choose-us"
import Download from "@/components/download"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import ParallaxBackground from "@/components/parallax-background"
import Floating3DElements from "@/components/floating-3d-elements"

export default function Home() {
  return (
    <main className="relative overflow-hidden w-full">
      <ParallaxBackground />
      <Floating3DElements />
      <Header />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Download />
      <Faq />
      <Footer />
    </main>
  )
}

