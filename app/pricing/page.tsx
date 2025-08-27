import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Check, Star, Zap, Crown, Users } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header  />

      {/* Hero Section */}
      <section className="relative bg-teal-900/65 py-38 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-950/5 via-background from-90% to-teal-200/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-white/20 to-teal-950/20 text-white border-primary/20"
            >
              <Star className="w-4 h-4 mr-2" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black opacity-25% mb-6 leading-tight">
              Choose Your
              <span className="text-transparent  bg-gradient-to-r to-75% from-black to-teal-950 bg-clip-text block">
                Creator Plan
              </span>
            </h1>
            <p className="text-xl text-white opacity-65 mb-8 max-w-2xl mx-auto leading-relaxed">
              Start free and upgrade as you grow. All plans include our core features designed specifically for African
              creators.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-200/25 to-emerald-100/25 relative">
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for new creators getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">Free</span>
                  <span className="text-muted-foreground">/forever</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "1 AfriLink page",
                    "Unlimited links",
                    "Basic analytics",
                    "African-inspired themes",
                    "Mobile optimized",
                    "Community support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-6 bg-gradient-to-r from-70% from-teal-700 text-white hover:text-white to-teal-950 border border-primary/20  hover:from-teal-950/90 hover:to-teal-800/90"
                  variant="outline"
                >
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            {/* <Card className="border-teal-800 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 relative">*/}
            <Card className="border-teal-800 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-200/25 to-emerald-100/25 relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r  from-emerald-900 to-emerald-800 to-75% text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Creator Pro</CardTitle>
                <CardDescription>For serious creators building their brand</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Everything in Starter",
                    "Custom domain",
                    "Advanced analytics",
                    "Priority themes",
                    "Email capture",
                    "Remove AfriLink branding",
                    "Priority support",
                    "Social media scheduling",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-teal-800 to-teal-950 hover:from-teal-950/90 hover:to-teal-800/90">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-200/25 to-emerald-100/25 relative">
              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Business</CardTitle>
                <CardDescription>For established creators and agencies</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">$29</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Everything in Creator Pro",
                    "Multiple team members",
                    "Advanced integrations",
                    "Custom CSS",
                    "A/B testing",
                    "Conversion tracking",
                    "Dedicated support",
                    "White-label options",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-6 bg-gradient-to-r from-70% from-teal-700 text-white hover:text-white to-teal-950 border border-primary/20  hover:from-teal-950/90 hover:to-teal-800/90"
                  variant="outline"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about AfriLink pricing</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change plans anytime?",
                  answer:
                    "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
                },
                {
                  question: "Is there a free trial for paid plans?",
                  answer:
                    "Yes, we offer a 14-day free trial for both Creator Pro and Business plans. No credit card required to start your trial.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, PayPal, and mobile money payments popular across Africa including M-Pesa, MTN Mobile Money, and Airtel Money.",
                },
                {
                  question: "Do you offer discounts for African creators?",
                  answer:
                    "Yes! We offer special pricing for creators in certain African countries and student discounts. Contact our support team to learn more about available discounts.",
                },
                {
                  question: "What happens if I cancel my subscription?",
                  answer:
                    "You can cancel anytime. Your account will remain active until the end of your billing period, then automatically switch to our free Starter plan.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-border bg-gradient-to-br from-[#f3f8f4] to-[#fbfff3] from-90%">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-black opacity-75 mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Creator Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of African creators who are already using AfriLink to share their stories with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-gradient-to-r from-teal-800 to-teal-950 hover:from-teal-950/90 hover:to-teal-800/90 shadow-lg"
              >
                Start Free Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary/20 hover:bg-primary/5 hover:border-primary/40 bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer  />
    </div>
  )
}
