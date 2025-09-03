"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setupProfile } from "@/features/setup/setup";
import { toast } from "react-toastify";
import ProtectedRoute from "@/components/protectedRoute";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Upload, Heart } from "lucide-react";

// Example categories
const categories = [
  { name: "Developer", icon: "💻", description: "Code & build" },
  { name: "Designer", icon: "🎨", description: "Design & UI/UX" },
  { name: "Writer", icon: "✍️", description: "Content & blogs" },
];

const steps = [
  { number: 1, title: "Basic Info", description: "Choose username & display name" },
  { number: 2, title: "Profile Details", description: "Add photo, bio & location" },
  { number: 3, title: "Category", description: "Select what describes you best" },
  { number: 4, title: "Complete", description: "Finish setting up your profile" },
];

export default function ProfileSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    displayName: "",
    bio: "",
    location: "",
    profileImage: null as File | null,
    category: "",
  });

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.setup);

  const handleNext = () => currentStep < steps.length && setCurrentStep((s) => s + 1);
  const handlePrev = () => currentStep > 1 && setCurrentStep((s) => s - 1);

  // 🔹 Submit profile data
  const handleSubmit = () => {
    if (!formData.username || !formData.displayName) {
      toast.error("Username and Display Name are required!");
      return;
    }

    const fd = new FormData();
    fd.append("username", formData.username);
    fd.append("displayName", formData.displayName);
    fd.append("bio", formData.bio);
    fd.append("location", formData.location);
    fd.append("category", formData.category);
    if (formData.profileImage) fd.append("profileImage", formData.profileImage);

    dispatch(setupProfile(fd))
      .unwrap()
      .then(() => {
        toast.success("Profile setup completed 🎉");
      })
      .catch((err) => {
        toast.error(typeof err === "string" ? err : err.message || "Something went wrong");
      });
  };

  // 🔹 Handle object URL cleanup for image preview
  useEffect(() => {
    return () => {
      if (formData.profileImage) {
        URL.revokeObjectURL(URL.createObjectURL(formData.profileImage));
      }
    };
  }, [formData.profileImage]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-900 to-emerald-200 from-40% rounded-lg flex items-center justify-center shadow-sm">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Sompü</span>
            </Link>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                      currentStep >= step.number
                        ? "bg-primary border-primary text-white"
                        : "border-muted-foreground/30 text-muted-foreground"
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
                      className={`w-16 h-0.5 mx-2 ${
                        currentStep > step.number ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Card with step content */}
            <Card className="border-border shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
                <CardDescription className="text-lg">
                  {steps[currentStep - 1].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1 */}
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
                          onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                          }
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input
                        id="displayName"
                        placeholder="Your full name or brand name"
                        value={formData.displayName}
                        onChange={(e) =>
                          setFormData({ ...formData, displayName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage
                          src={
                            formData.profileImage
                              ? URL.createObjectURL(formData.profileImage)
                              : "/placeholder.svg"
                          }
                        />
                        <AvatarFallback>{formData.displayName.charAt(0) || "?"}</AvatarFallback>
                      </Avatar>
                      <label className="cursor-pointer">
                        <Upload className="w-4 h-4 inline-block mr-2" />
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              profileImage: e.target.files?.[0] || null,
                            })
                          }
                        />
                        Upload Profile Photo
                      </label>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={4}
                      />
                      <p className="text-xs text-muted-foreground">{formData.bio.length}/160</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Lagos, Nigeria 🇳🇬"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {currentStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <Card
                        key={category.name}
                        onClick={() => setFormData({ ...formData, category: category.name })}
                        className={`cursor-pointer transition-all ${
                          formData.category === category.name
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{category.icon}</span>
                            <div>
                              <h3 className="font-medium">{category.name}</h3>
                              <p className="text-sm text-muted-foreground">{category.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Step 4 */}
                {currentStep === 4 && (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Welcome to Sompü!</h3>
                    <div className="bg-gradient-to-br from-card/50 to-background rounded-lg p-6 border border-primary/10">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={
                              formData.profileImage
                                ? URL.createObjectURL(formData.profileImage)
                                : "/placeholder.svg"
                            }
                          />
                          <AvatarFallback>{formData.displayName.charAt(0) || "?"}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-bold">{formData.displayName}</h4>
                          <p className="text-sm text-muted-foreground">{formData.bio}</p>
                          <Badge>{formData.category}</Badge>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="bg-gradient-to-l from-teal-900 to-teal-500"
                    >
                      {loading ? "Saving..." : "Save Profile"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              {currentStep > 1 && <Button variant="outline" onClick={handlePrev}>Previous</Button>}
              {currentStep < steps.length && <Button onClick={handleNext}>Next</Button>}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
