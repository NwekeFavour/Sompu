"use client"
import { FAQComponent } from "@/components/faqAccordion"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"


const faqs = [
  {
    question: "What makes Sompü different from other link-in-bio platforms?",
    answer:
      "Sompü is specifically designed for African creators, with features that celebrate African culture, support local payment methods, and foster community connections across the continent. We understand the unique challenges and opportunities that African creators face.",
  },
  {
    question: "Is Sompü free to use?",
    answer:
      "Yes! Sompü offers a generous free plan that includes essential features like unlimited links, basic customization, and community access. We also offer premium plans with advanced features like custom domains, detailed analytics, and priority support.",
  },
  {
    question: "Which countries in Africa are supported?",
    answer:
      "Sompü supports creators from all 54 African countries. We're continuously expanding our payment integrations and local features to better serve creators across the entire continent.",
  },
  {
    question: "Can I customize my Sompü page to reflect my cultural background?",
    answer:
      "Sompü offers culturally-inspired themes, color schemes, and design elements that celebrate African heritage. You can customize your page with traditional patterns, colors, and layouts that represent your unique cultural identity.",
  },
  {
    question: "What types of creators use Sompü?",
    answer:
      "Our platform serves a diverse community including musicians, artists, fashion designers, writers, photographers, content creators, entrepreneurs, and many other creative professionals from across Africa.",
  },
  {
    question: "How do I get started with Sompü?",
    answer:
      "Getting started is simple! Click 'Get Started' to create your free account, choose your unique Sompü URL, customize your page with your links and content, and start sharing your Sompü with your audience.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Yes! Premium users can connect their custom domain to their Sompü page, giving you a professional branded experience like yourname.com instead of Sompü.com/yourname.",
  },
  {
    question: "What payment methods do you support for African creators?",
    answer:
      "We support various payment methods popular across Africa including mobile money (M-Pesa, MTN Mobile Money, Airtel Money), local bank transfers, and international options like PayPal and Stripe for creators who need global payment solutions.",
  },
  {
    question: "Do you provide analytics for my Sompü page?",
    answer:
      "Yes! All users get basic analytics showing page views and link clicks. Premium users get detailed insights including visitor demographics, traffic sources, peak engagement times, and conversion tracking.",
  },
  {
    question: "How can I connect with other African creators on the platform?",
    answer:
      "Sompü has a built-in community feature where you can discover other creators, follow their work, collaborate on projects, and participate in community challenges and events celebrating African creativity.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes! We offer email support for all users, with priority support for premium members. Our support team understands the African market and can assist in multiple languages commonly spoken across the continent.",
  },
  {
    question: "Can I integrate Sompü with my social media accounts?",
    answer:
      "Sompü integrates seamlessly with all major social platforms including Instagram, Twitter, TikTok, YouTube, Facebook, and LinkedIn. You can also connect with African-focused platforms and local social networks.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 border rounded-xl border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-emerald-900 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl text-foreground">Sompü</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-muted-foreground font-medium">
              About
            </Link>
            <Link href="/faq" className="text-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button className="sm:flex hidden" variant="ghost" size="sm">
              Sign In
            </Button>
            <Button className="bg-emerald-900 hover:bg-black/70 text-white rounded-md py-2  md:py-3 xl:px-5 lg:px-4 md:px-3 sm:px-3 px-3" size="sm">Get Started</Button>
          </div>
        </div>
      </header>
            </div>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <FAQComponent
            faqs={faqs}
            description="Everything you need to know about Sompü and how it supports African creators"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our support team is here to help you succeed as an African creator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
