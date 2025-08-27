import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Target, Award, Lightbulb } from "lucide-react"
import { FAQComponent } from "@/components/faqAccordion"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
        <Header/>
      {/* Hero Section */}
      <section className="relative bg-teal-900/65 py-38 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-teal-950/5 via-background from-90% to-teal-200/5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Heart className="w-4 h-4 mr-2 text-black" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Empowering African
              <span className="text-black/90 block">Creativity Worldwide</span>
            </h1>
            <p className="text-xl text-white opacity-75 mb-8 max-w-3xl mx-auto leading-relaxed">
              sompu was born from a simple belief: African creators deserve a platform that truly understands and
              celebrates their unique stories, culture, and creative vision.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-900" />
                </div>
                <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  To provide African creators with the tools, platform, and community they need to showcase their work,
                  connect with audiences, and build sustainable creative careers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-amber-600" />
                </div>
                <CardTitle className="text-2xl mb-4">Our Vision</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  A world where African creativity is recognized, celebrated, and supported globally, breaking down
                  barriers and creating opportunities for creators across the continent.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-amber-950" />
                </div>
                <CardTitle className="text-2xl mb-4">Our Values</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Authenticity, community, cultural pride, and innovation guide everything we do. We believe in
                  celebrating diversity while fostering unity among African creators.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                sompu was founded in 2024 by a team of African entrepreneurs and creators who experienced firsthand
                the challenges of building an online presence while staying true to their cultural identity.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {`We noticed that existing link-in-bio platforms didn't adequately serve the unique needs of African
                creators. From limited payment options to lack of cultural customization, these platforms felt
                disconnected from the vibrant, diverse creative landscape across Africa.`}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {`That's when we decided to build something different. sompu isn't just another link platform – it's a
                celebration of African creativity, designed by Africans for Africans, with features that truly
                understand and support the continent's creative ecosystem.`}
              </p>
              <p className="text-lg leading-relaxed">
                {`Today, we're proud to serve thousands of creators across all 54 African countries, helping them share
                their stories, grow their audiences, and build thriving creative businesses.`}
              </p>
            </div>
          </div>
        </div>
      </section>    
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

      {/* Team Values */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {`We're more than a platform, we're a movement celebrating African creativity`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Cultural Authenticity</h3>
              <p className="text-muted-foreground">
                Built with deep understanding of African cultures, traditions, and creative expressions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
              <p className="text-muted-foreground">
                Fostering connections and collaborations between creators across the continent
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Made with Love</h3>
              <p className="text-muted-foreground">
                Every feature is crafted with passion and dedication to serving African creators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {`Be part of the movement that's transforming how African creativity is shared with the world`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-teal-800 to-teal-950 hover:from-teal-950/90 hover:to-teal-800/90">
                Start Creating Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
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
