import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Palette, Camera, Mic } from "lucide-react"

export default function TemplatesPage() {
  const templates = [
    {
      id: "afrofuturism",
      name: "Afrofuturism",
      description: "Sleek black background with neon accents and geometric patterns",
      preview: "/african-woman-digital-artist-smiling.png",
      category: "Tech & Digital Art",
      colors: ["#000000", "#10B981", "#8B5CF6", "#EC4899"],
      username: "kemiadebayo",
    },
    {
      id: "heritage",
      name: "Heritage",
      description: "Warm earth tones with traditional African textile patterns",
      preview: "/african-woman-fashion-designer-colorful-fabrics.png",
      category: "Fashion & Culture",
      colors: ["#F59E0B", "#DC2626", "#059669", "#92400E"],
      username: "amaraokafor",
    },
    {
      id: "minimalist-safari",
      name: "Minimalist Safari",
      description: "Clean design with subtle wildlife elements and earth tones",
      preview: "/african-man-music-producer-headphones.png",
      category: "Photography & Travel",
      colors: ["#F5F5F4", "#F59E0B", "#059669", "#78716C"],
      username: "davidmwangi",
    },
    {
      id: "urban-lagos",
      name: "Urban Lagos",
      description: "Vibrant street art inspired design with bold colors",
      preview: "/african-man-music-producer-headphones.png",
      category: "Entertainment & Comedy",
      colors: ["#EAB308", "#DC2626", "#2563EB", "#FFFFFF"],
      username: "tundebakare",
    },
    {
      id: "vibrant-market",
      name: "Vibrant Market",
      description: "Energetic marketplace design with warm gradients and cultural elements",
      preview: "/african-woman-fashion-designer-colorful-fabrics.png",
      category: "Business & Commerce",
      colors: ["#EAB308", "#F97316", "#DC2626", "#FFFFFF"],
      username: "adunnimarket",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-6xl mx-auto p-6 pt-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profile Templates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of authentic African-inspired templates designed specifically for creators across
            the continent.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {template.category.includes("Tech") && <Palette className="w-8 h-8" />}
                      {template.category.includes("Fashion") && <Palette className="w-8 h-8" />}
                      {template.category.includes("Photography") && <Camera className="w-8 h-8" />}
                      {template.category.includes("Entertainment") && <Mic className="w-8 h-8" />}
                      {template.category.includes("Business") && <Palette className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {template.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>

                {/* Color Palette */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Colors:</span>
                  <div className="flex gap-1">
                    {template.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href={`/templates/${template.id}/${template.username}`}>
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Use Template
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">More Templates Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            {"We're working on more authentic African-inspired templates including Royal Elegance, Nature's Child, and Diaspora Connect themes."}
          </p>
          <Button variant="outline">Request Custom Template</Button>
        </div>
      </div>
    </div>
  )
}
