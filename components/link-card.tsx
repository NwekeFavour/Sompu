"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, Eye, Edit, Trash2, GripVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LinkCardProps {
  title: string
  url: string
  clicks: number
  isActive: boolean
  icon?: string
}

export function LinkCard({ title, url, clicks, isActive, icon }: LinkCardProps) {
  return (
    <Card className="group bg-green-200/10 hover:shadow-md transition-all duration-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
            <GripVertical className="w-4 h-4 text-muted-foreground" />
          </div>

          <div className="w-10 h-10 bg-gradient-to-br !from-primary/10 !to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-lg">{icon || "🔗"}</span>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate">{title}</h3>
            <p className="text-sm text-muted-foreground truncate">{url}</p>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant={isActive ? "default" : "secondary"} className="text-xs">
              {isActive ? "Active" : "Inactive"}
            </Badge>

            <div className="text-sm text-muted-foreground">
              <Eye className="w-3 h-3 inline mr-1" />
              {clicks}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
