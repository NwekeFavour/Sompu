import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Globe, Zap, ArrowRight, CheckCircle, Heart, Award, Play } from "lucide-react"
import AfricanSmile from "@/public/images/african-w-smiling.webp"
import AfricanProducer from "@/public/images/african-producer.webp"
import AfricanFashion from "@/public/images/african-w-fashion.webp" 
import { FAQComponent } from "@/components/faqAccordion"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Header } from "@/components/header";
import Link from "next/link"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header/>
      {/* Hero Section */}
      <section className="relative bg-teal-900/65 py-38 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-950/5 via-background from-90% to-teal-200/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="w-4 h-4 mr-2 text-yellow-500 blink-zap" />
              Celebrating African Creativity
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Connect Your
              <span className="text-primary block">African Story</span>
            </h1>
            <p className="text-xl text-white opacity-75 mb-8 max-w-2xl mx-auto leading-relaxed">
              The premier platform for African creators to showcase their work, connect with their audience, and
              celebrate the rich diversity of African culture and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Explore Creators
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="creators"  className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for African Creators</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to showcase your creativity and connect with your community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-[blue]/20 to-[white]/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-900" />
                </div>
                <CardTitle>Cultural Showcase</CardTitle>
                <CardDescription>
                  Highlight your African heritage with customizable themes and cultural elements
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-800/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-900" />
                </div>
                <CardTitle>Community First</CardTitle>
                <CardDescription>
                  Connect with fellow African creators and build meaningful relationships
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-orange-700" />
                </div>
                <CardTitle>Premium Features</CardTitle>
                <CardDescription>Advanced analytics, custom domains, and priority support for creators</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured African Creators</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing creators from across the continent
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Amara Okafor",
                role: "Digital Artist",
                location: "Lagos, Nigeria",
                image: AfricanSmile,
              },
              {
                name: "Kwame Asante",
                role: "Music Producer",
                location: "Accra, Ghana",
                image: AfricanProducer,
              },
              {
                name: "Zara Mwangi",
                role: "Fashion Designer",
                location: "Nairobi, Kenya",
                image: AfricanFashion,
              },
            ].map((creator, index) => (
              <Card key={index} className="border-border !hover:shadow-lg !transition-shadow overflow-hidden">
                <div className="!aspect-square !bg-muted">
                  <Image
                    src={typeof creator.image === "string" ? creator.image : creator.image.src || "/placeholder.svg"}
                    alt={creator.name}
                    width={400}
                    height={400}
                    className="w-full h-full !object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{creator.name}</CardTitle>
                  <CardDescription>
                    <span className="text-primary font-medium">{creator.role}</span>
                    <br />
                    {creator.location}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose sompu Section */}
      <div className="py-20 bg-gradient-to-br !from-green-100/20  from-75% !to-background">
        <section>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose sompu?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {"More than just a link-in-bio tool - we're built specifically for the African creative community"}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Celebrate African Heritage</h3>
                    <p className="text-muted-foreground">
                      Showcase your work with themes inspired by African art, patterns, and cultural elements that tell
                      your story.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[orange]/90 to-[#fff]/70 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 !text-shadow-amber-500 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Lightning Fast Setup</h3>
                    <p className="text-muted-foreground">
                      Get your sompu up and running in under 5 minutes. No technical skills required - just your
                      creativity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[blue]/20 to-[white]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Global Reach, Local Heart</h3>
                    <p className="text-muted-foreground">
                      Connect with audiences worldwide while staying true to your African roots and cultural identity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-600/10 to-amber-600/10 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-orange-400 rounded-full flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">@kemi_creates</h4>
                          <p className="text-sm text-muted-foreground">Photographer • Lagos</p>
                        </div>
                      </div>
                      <Badge className="bg-primary/10 text-primary">Pro</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-[green]/10 from-89% to-[primary]/5 rounded-lg p-4 flex items-center justify-between">
                        <span className="font-medium text-foreground">📸 Photography Portfolio</span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-gradient-to-r from-orange-200/50 from-90% to-[secondary]/5 rounded-lg p-4 flex items-center justify-between">
                        <span className="font-medium text-foreground">🛒 Print Shop</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </div>
                      <div className="bg-gradient-to-r from-[green]/5 from-89% to-[primary]/5 rounded-lg p-4 flex items-center justify-between">
                        <span className="font-medium text-foreground">📱 Instagram</span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-gradient-to-r from-orange-200/50 from-90% to-[secondary]/5 rounded-lg p-4 flex items-center justify-between">
                        <span className="font-medium text-foreground">💌 Book a Session</span>
                        <ArrowRight className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="py-30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start free and upgrade as you grow. No hidden fees, no surprises.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-600/25 !to-background p-6">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                  <div className="text-4xl font-bold text-foreground mb-2">Free</div>
                  <CardDescription>Perfect for getting started</CardDescription>
                </CardHeader>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Unlimited links</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Basic themes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">sompu branding</span>
                  </div>
                </div>
                <Button className="w-full hover:bg-teal-950 hover:text-white bg-transparent" variant="outline">
                  Get Started Free
                </Button>
              </Card>
              <Card className="border-teal-800 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-700 to-teal-100 text-white">
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Creator Pro</CardTitle>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    $9<span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <CardDescription>For serious creators</CardDescription>
                </CardHeader>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Everything in Starter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Premium African themes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Custom branding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Analytics dashboard</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-l from-teal-500 to-green-500 hover:from-teal-100 hover:to-green-400 font-bold">
                  Start Pro Trial
                </Button>
              </Card>
              <Card className="border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-600/25 !to-background p-6">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Business</CardTitle>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    $29<span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Everything in Pro</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Team collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Priority support</span>
                  </div>
                </div>
                <Button className="w-full hover:bg-teal-950 hover:text-white bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/pricing" className="text-primary hover:text-primary/80 font-medium hover:underline">
                View detailed pricing →
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="xl:py-40 lg:py-36 md:py-32 sm:py-30 py-26 bg-muted/30">
        <FAQComponent
          faqs={[
            {
              question: "What is Sompu?",
              answer: "Sompu is an all-in-one bio page that helps creators and businesses connect their TikTok, Instagram, YouTube, music, events, and more in one beautiful, customizable link."
            },
            {
              question: "Who can use Sompu?",
              answer: "Anyone! Whether you’re an artist, influencer, small business owner, or content creator, Sompu makes it easy to share all your links and grow your audience."
            },
            {
              question: "Is Sompu free to use?",
              answer: "Yes! Sompu offers a free version with essential features. We also provide premium options for users who want advanced customization and analytics."
            }
          ]}
        />
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600/10 to-amber-600/10 via-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Share Your Story with the World?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of African creators who are already using sompu to showcase their work, connect with
              their audience, and grow their creative businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/profile-setup">
                <Button className="w-full bg-teal-950 text-white hover:bg-transparent" variant="outline" size={"lg"}>

                  Create Your sompu Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary/20 hover:bg-primary/5 hover:border-primary/40 bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Free to start • No credit card required • Set up in under 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join the African Creator Community</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with thousands of creators across Africa. Share your story, discover new talent, and celebrate the
              diversity of African creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 bg-emerald-950 hover:bg-emerald-800">
                Create Your Profile
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Browse Community
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Active Creators</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">54</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Profile Views</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                <div className="text-muted-foreground">Connections Made</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
