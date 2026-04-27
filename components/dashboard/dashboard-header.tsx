"use client"

import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface DashboardHeaderProps {
  title: string
  description?: string
}

export function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-[#FFFFFF] via-[#FFC93E] via-[#FFC93E] via-[#FFC93E] to-[#FF004D] backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="hidden flex-col md:flex">
          <h1 className="text-xl font-bold text-foreground">{title}</h1>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="flex flex-1 items-center gap-4 md:flex-initial">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
            <Input
              placeholder="Buscar..."
              className="w-[300px] pl-10 placeholder:text-white/70"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-white" />
            <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-white">
              3
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  )
}
