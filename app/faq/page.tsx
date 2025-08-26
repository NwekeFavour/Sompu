import { FAQComponent } from "@/components/faqAccordion"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What makes sompu different from other link-in-bio platforms?",
    answer:
      "sompu is specifically designed for African creators, with features that celebrate African culture, support local payment methods, and foster community connections across the continent. We understand the unique challenges and opportunities that African creators face.",
  },
  {
    question: "Is sompu free to use?",
    answer:
      "Yes! sompu offers a generous free plan that includes essential features like unlimited links, basic customization, and community access. We also offer premium plans with advanced features like custom domains, detailed analytics, and priority support.",
  },
  {
    question: "Which countries in Africa are supported?",
    answer:
      "sompu supports creators from all 54 African countries. We're continuously expanding our payment integrations and local features to better serve creators across the entire continent.",
  },
  {
    question: "Can I customize my sompu page to reflect my cultural background?",
    answer:
      "sompu offers culturally-inspired themes, color schemes, and design elements that celebrate African heritage. You can customize your page with traditional patterns, colors, and layouts that represent your unique cultural identity.",
  },
  {
    question: "What types of creators use sompu?",
    answer:
      "Our platform serves a diverse community including musicians, artists, fashion designers, writers, photographers, content creators, entrepreneurs, and many other creative professionals from across Africa.",
  },
  {
    question: "How do I get started with sompu?",
    answer:
      "Getting started is simple! Click 'Get Started' to create your free account, choose your unique sompu URL, customize your page with your links and content, and start sharing your sompu with your audience.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Yes! Premium users can connect their custom domain to their sompu page, giving you a professional branded experience like yourname.com instead of sompu.com/yourname.",
  },
  {
    question: "What payment methods do you support for African creators?",
    answer:
      "We support various payment methods popular across Africa including mobile money (M-Pesa, MTN Mobile Money, Airtel Money), local bank transfers, and international options like PayPal and Stripe for creators who need global payment solutions.",
  },
  {
    question: "Do you provide analytics for my sompu page?",
    answer:
      "Yes! All users get basic analytics showing page views and link clicks. Premium users get detailed insights including visitor demographics, traffic sources, peak engagement times, and conversion tracking.",
  },
  {
    question: "How can I connect with other African creators on the platform?",
    answer:
      "sompu has a built-in community feature where you can discover other creators, follow their work, collaborate on projects, and participate in community challenges and events celebrating African creativity.",
  },
  {
    question: "Is there customer support available?",
    answer:
      "Yes! We offer email support for all users, with priority support for premium members. Our support team understands the African market and can assist in multiple languages commonly spoken across the continent.",
  },
  {
    question: "Can I integrate sompu with my social media accounts?",
    answer:
      "sompu integrates seamlessly with all major social platforms including Instagram, Twitter, TikTok, YouTube, Facebook, and LinkedIn. You can also connect with African-focused platforms and local social networks.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div>
          <Header />
      </div>

      {/* FAQ Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <FAQComponent
            faqs={faqs}
            description="Everything you need to know about sompu and how it supports African creators"
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
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">sompu</span>
              </div>
              <p className="text-muted-foreground">Connecting African creators with the world, one link at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 sompu. Made with ❤️ for African creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
