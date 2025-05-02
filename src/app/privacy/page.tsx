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
      <div className="container px-4 py-16 md:py-24">
        <Link 
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <article className="prose prose-invert prose-purple max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Canvo Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: {currentDate}</p>

          <h2>Introduction</h2>
          <p>
            Canvo is committed to protecting your privacy and ensuring the security of your personal information. 
            This privacy policy explains how we collect, use, and safeguard your data when you use the Canvo app.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Canvas API Key</h3>
          <ul>
            <li>We collect and securely store your Canvas LMS API key to enable integration with your Canvas account</li>
            <li>The API key is encrypted and stored securely on our servers</li>
            <li>You can revoke access to your API key at any time through Canvas</li>
          </ul>

          <h3>Task Management Data</h3>
          <ul>
            <li>Task titles, descriptions, due dates, and completion status</li>
            <li>Course assignment information synced from Canvas</li>
            <li>Task organization and priority settings</li>
          </ul>

          <h3>Usage Data</h3>
          <ul>
            <li>Basic analytics about how you use the app's features</li>
            <li>App performance and diagnostic data to improve stability</li>
            <li>No personal information is collected for analytics purposes</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information solely to:</p>
          <ul>
            <li>Connect to your Canvas account and sync your course information</li>
            <li>Provide task management functionality</li>
            <li>Improve app performance and user experience</li>
            <li>Fix bugs and technical issues</li>
          </ul>

          <h2>Data Protection</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul>
            <li>Encryption of API keys and sensitive data</li>
            <li>Secure HTTPS connections for all data transfers</li>
            <li>Regular security audits and updates</li>
            <li>No sharing of personal data with third parties</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Revoke API access</li>
            <li>Export your data</li>
            <li>Contact us with privacy concerns</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Canvo complies with COPPA (Children's Online Privacy Protection Act) and FERPA 
            (Family Educational Rights and Privacy Act). We do not knowingly collect personal 
            information from children under 13 without parental consent.
          </p>

          <h2>Changes to Privacy Policy</h2>
          <p>
            We may update this privacy policy periodically. Users will be notified of any 
            material changes.
          </p>

          <h2>Contact Us</h2>
          <p>For privacy-related questions or concerns:</p>
          <ul>
            <li>Email: <a href="mailto:canvohelp@gmail.com" className="text-purple-400 hover:text-purple-300">canvohelp@gmail.com</a></li>
            <li>Support: <Link href="/support" className="text-purple-400 hover:text-purple-300">Visit our Support Center</Link></li>
          </ul>
        </article>
      </div>
    </div>
  )
} 