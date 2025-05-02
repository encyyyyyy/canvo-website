import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, FileQuestion, ArrowLeft } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-purple-900/20">
      <div className="container px-4 py-16 md:py-24">
        <Link 
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Center</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We're here to help you get the most out of Canvo. Find the support option that works best for you.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Email Support */}
          <div className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-2xl font-semibold">Email Support</h2>
            <p className="text-muted-foreground">
              Have a question or need assistance? Our support team is ready to help.
            </p>
            <Button 
              asChild
              className="w-full bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              <Link href="mailto:canvohelp@gmail.com">
                Contact Support
              </Link>
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <FileQuestion className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-2xl font-semibold">FAQ</h2>
            <p className="text-muted-foreground">
              Find quick answers to common questions about using Canvo.
            </p>
            <Button 
              asChild
              className="w-full bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              <Link href="/#faq">
                View FAQ
              </Link>
            </Button>
          </div>

          {/* Community Support */}
          <div className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 space-y-4">
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-purple-500" />
            </div>
            <h2 className="text-2xl font-semibold">Community</h2>
            <p className="text-muted-foreground">
              Join our community to connect with other users and share tips.
            </p>
            <Button 
              asChild
              className="w-full bg-primary/90 hover:bg-primary shadow-[0_4px_14px_0_rgba(139,92,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(139,92,246,0.6)] transition-all duration-300"
            >
              <Link href="https://github.com/nicholasconoplia/student-todo-list/" target="_blank">
                Join Community
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 p-8 bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Support Hours</h2>
          <p className="text-muted-foreground mb-4">
            Our support team is available Monday through Friday, 9:00 AM to 5:00 PM EST.
            We strive to respond to all inquiries within 24 hours.
          </p>
          <div className="text-muted-foreground">
            <p>Email: canvohelp@gmail.com</p>
            <p className="mt-2">For urgent matters, please include "URGENT" in your email subject line.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 