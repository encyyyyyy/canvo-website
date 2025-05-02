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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Canvo Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last Updated: {currentDate}</p>
          </div>

          <section className="space-y-8">
            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Canvo is designed with your privacy as the top priority. We believe in complete data privacy, which is why 
                all your data is stored locally on your device. We do not collect, store, or process any of your personal 
                information on our servers.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-6 text-purple-400">Local Data Storage</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">Canvas API Key</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Your Canvas LMS API key is stored securely on your local device only</li>
                    <li>The API key is encrypted and never leaves your device</li>
                    <li>You can remove your API key at any time through the app settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3 text-foreground">Task Management Data</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>All your tasks, assignments, and settings are stored locally on your device</li>
                    <li>Course information is synced directly between your device and Canvas</li>
                    <li>No task or assignment data is ever sent to our servers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">No Data Collection</h2>
              <p className="text-muted-foreground mb-4">We want to be completely transparent:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not collect any personal information</li>
                <li>We do not track your usage or behavior</li>
                <li>We do not use analytics or tracking tools</li>
                <li>We do not store any data on our servers</li>
                <li>All communication is directly between your device and Canvas</li>
              </ul>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Your Data Control</h2>
              <p className="text-muted-foreground mb-4">Since all data is stored locally, you have complete control:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your data directly on your device</li>
                <li>Uninstall the app to remove all stored data</li>
                <li>Your data remains private and under your control at all times</li>
              </ul>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                The only external service Canvo interacts with is Canvas LMS, and this communication happens directly 
                from your device using your provided API key. We do not act as an intermediary for any data transfer.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy periodically to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. Any changes will maintain our commitment to keeping your data local and private.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Us</h2>
              <p className="text-muted-foreground mb-4">For questions about our privacy practices:</p>
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