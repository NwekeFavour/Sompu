import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, Mail, MessageCircle, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-teal-900/65 py-38 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-950/5 via-background from-90% to-teal-200/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-gradient-to-r from-secondary/20 to-primary/20 text-white border-primary/20"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              We're Here to Help
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get in Touch with
              <span className="text-black opacity-50 block">
                sompu Support
              </span>
            </h1>
            <p className="text-white opacity-75 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions about sompu? Need help with your creator profile? Our team is here to support African
              creators every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-card/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:border-primary/20 bg-gradient-to-br from-card to-background text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Get detailed help via email. We typically respond within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-teal-950 font-medium">support@sompu.com</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:border-secondary/20 bg-gradient-to-br from-card to-background text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat with our support team in real-time during business hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full hover:bg-teal-800 bg-teal-950 text-white">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:border-primary/20 bg-gradient-to-br from-card to-background text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Phone Support</CardTitle>
                <CardDescription>Speak directly with our team for urgent matters and technical issues.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-teal-950 font-medium">+234 (0) 800 sompu</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're committed to supporting
                African creators worldwide.
              </p>

              <Card className="border-border bg-gradient-to-br from-[#edfcf1] to-[#fbfff3] from-20%">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                        <Input placeholder="Enter your first name" className="border-border" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                        <Input placeholder="Enter your last name" className="border-border" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="border-border" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                      <Input placeholder="What can we help you with?" className="border-border" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea
                        placeholder="Tell us more about your question or how we can help..."
                        className="border-border min-h-[120px]"
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r  from-teal-800 to-teal-950 hover:from-teal-950/90 hover:to-teal-800/90"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-teal-800 mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're based in Lagos, Nigeria, but we support African creators worldwide. Here's how you can reach us.
              </p>

              <div className="space-y-6">
                <Card className="border-border bg-gradient-to-br from-[#edfcf1] to-[#fbfff3] from-20%">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-700/20 to-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Our Office</h3>
                        <p className="text-muted-foreground">
                          123 Victoria Island
                          <br />
                          Lagos, Nigeria
                          <br />
                          West Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-to-br from-[#edfcf1] to-[#fbfff3] from-20%">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-200/80 to-amber-600/10 from-50% rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM (WAT)
                          <br />
                          Saturday: 10:00 AM - 4:00 PM (WAT)
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-gradient-to-br from-20% from-[#edfcf1] to-[#fbfff3]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 from-80% to-teal-300/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Social Media</h3>
                        <p className="text-muted-foreground mb-3">Follow us for updates and creator spotlights</p>
                        <div className="flex space-x-3">
                          <a href="#" className="text-emerald-800 hover:text-emerald-900/80 transition-colors">
                            Twitter
                          </a>
                          <a href="#" className="text-emerald-800 hover:text-emerald-900/80 transition-colors">
                            Instagram
                          </a>
                          <a href="#" className="text-emerald-800 hover:text-emerald-900/80 transition-colors">
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer  />
    </div>
  )
}
