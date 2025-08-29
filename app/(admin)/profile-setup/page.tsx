"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Upload, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function ProfileSetupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    bio: "",
    location: "",
    profileImage: "",
    category: "",
  })

  const steps = [
    { number: 1, title: "Basic Info", description: "Tell us about yourself" },
    { number: 2, title: "Profile Details", description: "Customize your profile" },
    { number: 3, title: "Category", description: "What do you create?" },
    { number: 4, title: "Complete", description: "You're all set!" },
  ]

  const categories = [
    { name: "Digital Artist", icon: "🎨", description: "Visual art, illustrations, digital paintings" },
    { name: "Music Producer", icon: "🎵", description: "Music creation, beats, audio production" },
    { name: "Fashion Designer", icon: "👗", description: "Clothing, accessories, fashion content" },
    { name: "Content Creator", icon: "📱", description: "Social media, videos, blogging" },
    { name: "Photographer", icon: "📸", description: "Photography, visual storytelling" },
    { name: "Writer", icon: "✍️", description: "Books, articles, poetry, storytelling" },
    { name: "Entrepreneur", icon: "💼", description: "Business, startups, innovation" },
    { name: "Other", icon: "✨", description: "Something unique and creative" },
  ]

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen  bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Sompü</span>
          </Link>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {steps.length}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="flex  items-center justify-center md:gap-0 lg:gap-0  sm:gap-2   mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center ">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep >= step.number
                      ? "bg-primary border-primary text-white"
                      : "!border-muted-foreground/30 !text-muted-foreground"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`sm:w-16 lg:w-30 w-7 h-0.5 mx-2 transition-colors ${
                      currentStep > step.number ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <Card className="border-border shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
              <CardDescription className="text-lg">{steps[currentStep - 1].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Choose your Sompü username</Label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        Sompü.co/
                      </span>
                      <Input
                        id="username"
                        placeholder="your-username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        className="rounded-l-none"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">This will be your unique Sompü URL</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      placeholder="Your full name or brand name"
                      value={formData.displayName}
                      onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Profile Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={formData.profileImage || "/placeholder.svg"} />
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        {formData.displayName.charAt(0) || "?"}
                      </AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Upload className="w-4 h-4" />
                      Upload Profile Photo
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell people about yourself and what you create..."
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">{formData.bio.length}/160 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Lagos, Nigeria 🇳🇬"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Category */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground">
                    Select the category that best describes what you create
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <Card
                        key={category.name}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          formData.category === category.name
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setFormData({ ...formData, category: category.name })}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{category.icon}</span>
                            <div>
                              <h3 className="font-medium text-foreground">{category.name}</h3>
                              <p className="text-sm text-muted-foreground">{category.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Complete */}
              {currentStep === 4 && (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Welcome to Sompü!</h3>
                    <p className="text-muted-foreground">
                      Your profile is ready. Start adding links to share everything you create with the world.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-card/50 to-background rounded-lg p-6 border border-primary/10">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={formData.profileImage || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-br from-primary/20 to-secondary/20">
                          {formData.displayName.charAt(0) || "?"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <h4 className="font-bold text-foreground">{formData.displayName}</h4>
                        <p className="text-sm text-muted-foreground">{formData.bio}</p>
                        <Badge className="mt-1 bg-primary/10 text-primary border-primary/20">{formData.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="gap-2 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-tl from-orange-300 to-green-500 hover:from-orange-300 hover:to-green-400 font-bold"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Link href="/dashboard">
                    <Button className="bg-gradient-to-l from-orange-500 to-green-500 hover:from-orange-300 hover:to-green-400 font-bold">
                      Go to Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
