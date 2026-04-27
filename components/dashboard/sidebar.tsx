"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MapPin,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  Building2,
  BarChart3,
  FileText,
  Bell,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: MapPin, label: "Pontos Turísticos", href: "/dashboard/pontos" },
  { icon: Users, label: "Usuários", href: "/dashboard/usuarios" },
  { icon: Building2, label: "Estabelecimentos", href: "/dashboard/estabelecimentos" },
  { icon: BarChart3, label: "Relatórios", href: "/dashboard/relatorios" },
  { icon: FileText, label: "Conteúdo", href: "/dashboard/conteudo" },
  { icon: Bell, label: "Notificações", href: "/dashboard/notificacoes" },
  { icon: Settings, label: "Configurações", href: "/dashboard/configuracoes" },
]

interface SidebarProps {
  user: {
    nome: string
    cargo: "Gestor" | "Administrador"
    iniciais: string
  }
}

export function Sidebar({ user }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={cn(
      "flex h-full flex-col bg-gradient-to-b from-[#FFFFFF] via-[#FFA100] via-[#FFC93E] to-[#FF004D] text-sidebar-foreground",
      !isMobile && (collapsed ? "w-[70px]" : "w-[260px]"),
      "transition-all duration-300"
    )}>
      {/* Header com nome do usuário */}
      <div className=" p-4">
        <div className={cn(
          "flex items-center gap-3",
          collapsed && !isMobile && "justify-center"
        )}>
          <Avatar className="h-10 w-10 border-2 border-sidebar-primary">
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground font-medium">
              {user.iniciais}
            </AvatarFallback>
          </Avatar>
          {(!collapsed || isMobile) && (
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-semibold text-sidebar-foreground">
                {user.nome}
              </span>
              <span className="text-xs text-sidebar-foreground/60">{user.cargo}</span>
            </div>
          )}
        </div>
      </div>

      {/* Logo */}
      <div className={cn(
        "flex items-center gap-2 p-4",
        collapsed && !isMobile && "justify-center"
      )}>
        <img src="/logo.svg" alt="Logo" className="h-35 w-35 mx-auto" />
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-2">
        <TooltipProvider delayDuration={0}>
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const menuLink = (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-black"
                      : "text-black/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    collapsed && !isMobile && "justify-center px-2"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {(!collapsed || isMobile) && <span>{item.label}</span>}
                </Link>
              )

              if (collapsed && !isMobile) {
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <li>{menuLink}</li>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-foreground text-background">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                )
              }

              return <li key={item.href}>{menuLink}</li>
            })}
          </ul>
        </TooltipProvider>
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-2">
        <TooltipProvider delayDuration={0}>
          {collapsed && !isMobile ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-center text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-foreground text-background">
                Sair
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-black/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <LogOut className="h-5 w-5" />
              Sair
            </Button>
          )}
        </TooltipProvider>
      </div>

      {/* Toggle Button (desktop only) */}
      {!isMobile && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-md hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="relative hidden lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <SidebarContent isMobile />
        </SheetContent>
      </Sheet>
    </>
  )
}
