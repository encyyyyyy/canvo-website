import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-purple-900/20">
      <div className="container max-w-4xl mx-auto px-4 py-16 md:py-24">
        <Link 
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-12 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="space-y-12">
          <div className="border-b border-purple-500/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Canvo Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last Updated: {currentDate}</p>
          </div>

          <section className="space-y-8">
            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Canvo is committed to protecting your privacy and ensuring the security of your personal information. 
                This privacy policy explains how we collect, use, and safeguard your data when you use the Canvo app.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">Information We Collect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">Canvas API Key</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We collect and securely store your Canvas LMS API key to enable integration with your Canvas account</li>
                    <li>The API key is encrypted and stored securely on our servers</li>
                    <li>You can revoke access to your API key at any time through Canvas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">Task Management Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Task titles, descriptions, due dates, and completion status</li>
                    <li>Course assignment information synced from Canvas</li>
                    <li>Task organization and priority settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">Usage Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Basic analytics about how you use the app's features</li>
                    <li>App performance and diagnostic data to improve stability</li>
                    <li>No personal information is collected for analytics purposes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information solely to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Connect to your Canvas account and sync your course information</li>
                <li>Provide task management functionality</li>
                <li>Improve app performance and user experience</li>
                <li>Fix bugs and technical issues</li>
              </ul>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Data Protection</h2>
              <p className="text-muted-foreground mb-4">We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption of API keys and sensitive data</li>
                <li>Secure HTTPS connections for all data transfers</li>
                <li>Regular security audits and updates</li>
                <li>No sharing of personal data with third parties</li>
              </ul>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Request deletion of your data</li>
                <li>Revoke API access</li>
                <li>Export your data</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Canvo complies with COPPA (Children's Online Privacy Protection Act) and FERPA 
                (Family Educational Rights and Privacy Act). We do not knowingly collect personal 
                information from children under 13 without parental consent.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy periodically. Users will be notified of any 
                material changes.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Us</h2>
              <p className="text-muted-foreground mb-4">For privacy-related questions or concerns:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-muted-foreground">Email:</span>
                  <a 
                    href="mailto:canvohelp@gmail.com" 
                    className="ml-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    canvohelp@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-muted-foreground">Support:</span>
                  <Link 
                    href="/support" 
                    className="ml-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Visit our Support Center
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 