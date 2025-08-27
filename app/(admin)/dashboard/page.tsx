import { LinkCard } from "@/components/link-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, BarChart3, Users, Eye, ExternalLink } from "lucide-react"
import AfricanSmile from "../../../public/images/african-w-smiling.webp"
import Image from "next/image"
export default function DashboardPage() {
  const links = [
    {
      title: "My Art Portfolio",
      url: "https://amara-art.com",
      clicks: 1247,
      isActive: true,
      icon: "🎨",
    },
    {
      title: "Instagram",
      url: "https://instagram.com/amara_creates",
      clicks: 892,
      isActive: true,
      icon: "📱",
    },
    {
      title: "Shop My Prints",
      url: "https://shop.amara-art.com",
      clicks: 634,
      isActive: true,
      icon: "🛒",
    },
    {
      title: "YouTube Channel",
      url: "https://youtube.com/amaracreates",
      clicks: 423,
      isActive: false,
      icon: "📺",
    },
    {
      title: "Book a Commission",
      url: "https://calendly.com/amara-art",
      clicks: 156,
      isActive: true,
      icon: "📅",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Preview Card */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-[#edfcf1] to-[#fbfff3] border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Image
                      src={AfricanSmile.src}
                      alt="Profile"
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">@amara_creates</h1>
                    <p className="text-muted-foreground">Digital Artist from Lagos 🇳🇬</p>
                    <Badge className="mt-1 bg-green-300/20 text-green-600 !border-primary/20">
                      sompu.co/amara_creates
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <ExternalLink className="w-4 h-4" />
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3,352</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">2,847</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Links</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">4</div>
              <p className="text-xs text-muted-foreground">out of 5 total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CTR</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">84.9%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Links Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Your Links</h2>
              <p className="text-muted-foreground">Manage and organize your links</p>
            </div>
            <Button className="bg-gradient-to-l from-orange-500 to-green-500 hover:from-orange-300 hover:to-green-400 font-bold">
              <Plus className="w-4 h-4 mr-2" />
              Add Link
            </Button>
          </div>

          <div className="space-y-3">
            {links.map((link, index) => (
              <LinkCard key={index} {...link} />
            ))}
          </div>

          {/* Empty State for when no links */}
          {links.length === 0 && (
            <Card className="!border-dashed !border-2 !border-muted-foreground/25">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No links yet</h3>
                <p className="text-muted-foreground text-center mb-4 max-w-sm">
                  Start building your sompu by adding your first link. Share your social media, portfolio, or any
                  content you create.
                </p>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Link
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
