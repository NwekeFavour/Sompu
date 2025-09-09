"use client"
import { LinkCard } from "@/components/link-card"
import LinkCardProps from "@/components/link-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, BarChart3, Users, Eye, ExternalLink } from "lucide-react"
import Image from "next/image"
import ProtectedRoute from "@/components/protectedRoute"

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { GetProfile } from "@/features/setup/setup";
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useAppSelector((state) => state.setup);

  useEffect(() => {
    dispatch(GetProfile());
  }, [dispatch]);

  // Example links fallback if no data
  const links = data?.links || [];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Profile Preview Card */}
          <div className="mb-8">
            {loading ? (
              <Skeleton className="h-32 w-full mb-8" />
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : data ? (
              <Card className="bg-gradient-to-br from-green-600/25 !to-emerald-100/50 to-50% border-emerald-700">
                <CardContent className="p-6">
                  <div className="sm:flex items-center justify-between mb-4">
                    <div className="sm:flex items-center gap-4">
                      <div className="rounded-full w-16 h-16 border-emerald-800 border-2 flex items-center sm:mb-0 mb-5 sm:justify-center">
                        <Image
                          width={60}
                          height={60}
                          src={data.profileImage}
                          alt="Sompu-Profile"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-foreground">{data.displayName || "No Name"}</h1>
                        <p className="text-muted-foreground">{data.bio || "No bio"}</p>
                        <Badge className="mt-1 bg-green-300/20 text-green-600 !border-primary/20">
                          {data.username ? `Sompü.co/${data.username}` : "No username"}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2 border-emerald-800 sm:w-fit w-full flex justify-center sm:mt-0 mt-7 hover:bg-emerald-800 hover:text-white bg-transparent">
                      <ExternalLink className="w-4 h-4" />
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))
            ) : (
              <>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{data?.views ?? "-"}</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Link Clicks</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">{data?.clicks ?? "-"}</div>
                    <p className="text-xs text-muted-foreground">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Links</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{links.filter((l: LinkCardProps) => l.isActive).length}</div>
                    <p className="text-xs text-muted-foreground">out of {links.length} total</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">CTR</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-500">{data?.ctr ?? "-"}</div>
                    <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          {/* Links Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Your Links</h2>
                <p className="text-muted-foreground">Manage and organize your links</p>
              </div>
              <Button className="bg-gradient-to-l from-emerald-900 to-teal-500 hover:from-emerald-800 hover:to-emerald-700 from-50% font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Add Link
              </Button>
            </div>

            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full mb-2" />
              ))
            ) : (
                <div className="space-y-3">
                {links.map((link: LinkCardProps, index: number) => (
                  <LinkCard key={index} {...link} />
                ))}
                </div>
            )}

            {/* Empty State for when no links */}
            {!loading && links.length === 0 && (
              <Card className="!border-dashed !border-2 !border-muted-foreground/25">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                    <Plus className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No links yet</h3>
                  <p className="text-muted-foreground text-center mb-4 max-w-sm">
                    Start building your Sompü by adding your first link. Share your social media, portfolio, or any
                    content you create.
                  </p>
                  <Button className="bg-gradient-to-r from-emerald-900 to-teal-500 hover:from-emerald-800 hover:to-emerald-700 from-50%">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Link
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
