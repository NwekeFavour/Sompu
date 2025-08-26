import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Globe, Zap, ArrowRight, Heart } from "lucide-react"
import AfricanSmile from "@/public/images/african-w-smiling.webp"
import AfricanProducer from "@/public/images/african-producer.webp"
import AfricanFashion from "@/public/images/african-w-fashion.webp" 
import { Header } from "@/components/header"
import { FAQComponent } from "@/components/faqAccordion"
import { Footer } from "@/components/footer"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="relative bg-[#0B0C10] py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Celebrating African Creativity
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Connect Your
              <span className="text-primary block">African Story</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
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
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Cultural Showcase</CardTitle>
                <CardDescription>
                  Highlight your African heritage with customizable themes and cultural elements
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <CardTitle>Community First</CardTitle>
                <CardDescription>
                  Connect with fellow African creators and build meaningful relationships
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-black" />
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
              <Card key={index} className="border-border hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-square bg-muted">
                  <img
                    src={typeof creator.image === "string" ? creator.image : creator.image.src || "/placeholder.svg"}
                    alt={creator.name}
                    className="w-full h-full object-cover"
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
              <Button size="lg" className="text-lg px-8">
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
