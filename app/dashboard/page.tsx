"use client"

import { useState } from "react"
import { MapPin, Users, Building2, Eye, BarChart3 } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatCardModern } from "@/components/dashboard/stat-card-modern"
import { VisitsChart } from "@/components/dashboard/visits-chart"
import { InteractiveMap } from "@/components/dashboard/interactive-map"
import { TopPointsRanking } from "@/components/dashboard/top-points-ranking"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { Button } from "@/components/ui/button"

const visitasData = [
  { month: "Jan", visits: 1200 },
  { month: "Fev", visits: 1900 },
  { month: "Mar", visits: 2400 },
  { month: "Abr", visits: 2100 },
  { month: "Mai", visits: 2800 },
  { month: "Jun", visits: 3200 },
]

const pontosPopulares = [
  { rank: 1, name: "Igreja Matriz", visits: 1250, growth: 12, category: "Religioso" },
  { rank: 2, name: "Parque dos Ipês", visits: 980, growth: 8, category: "Natureza" },
  { rank: 3, name: "Museu Municipal", visits: 756, growth: 15, category: "Cultura" },
  { rank: 4, name: "Cachoeira do Vale", visits: 642, growth: 5, category: "Natureza" },
  { rank: 5, name: "Teatro Municipal", visits: 528, growth: 3, category: "Cultura" },
]

const atividadesRecentes = [
  {
    id: "1",
    user: "Ana Silva",
    action: "cadastrou novo ponto turístico",
    time: "há 5 minutos",
    type: "add" as const,
  },
  {
    id: "2",
    user: "Pedro Santos",
    action: "atualizou informações do Museu",
    time: "há 15 minutos",
    type: "update" as const,
  },
  {
    id: "3",
    user: "Maria Oliveira",
    action: "aprovou avaliação de usuário",
    time: "há 30 minutos",
    type: "approve" as const,
  },
  {
    id: "4",
    user: "João Costa",
    action: "publicou novo evento",
    time: "há 1 hora",
    type: "publish" as const,
  },
]

export default function DashboardPage() {
  const [viewMode, setViewMode] = useState<"chart" | "map">("chart")

  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="Dashboard"
        description="Visão geral do sistema Boa Visita"
      />

      <div className="flex-1 space-y-6 p-4 md:p-6">
        {/* Stats Cards - Top */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCardModern
            icon={Eye}
            label="👀 Visitantes este mês"
            value="12.4k"
            trend="8%"
            trendIsPositive
            colorClass="from-blue-500 to-blue-600"
          />
          <StatCardModern
            icon={MapPin}
            label="📍 Pontos turísticos"
            value={48}
            trend="12%"
            trendIsPositive
            colorClass="from-red-500 to-red-600"
          />
          <StatCardModern
            icon={Users}
            label="👥 Usuários registrados"
            value="2.8k"
            trend="15%"
            trendIsPositive
            colorClass="from-purple-500 to-purple-600"
          />
          <StatCardModern
            icon={Building2}
            label="🏢 Estabelecimentos parceiros"
            value={156}
            trend="3%"
            trendIsPositive
            colorClass="from-orange-500 to-orange-600"
          />
        </div>

        {/* Main Content - 70/30 Layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Side - 70% */}
          <div className="space-y-6">
            {/* Toggle Button */}
            <div className="flex items-center gap-2 rounded-lg bg-card p-1 border border-border shadow-sm w-fit">
              <Button
                onClick={() => setViewMode("chart")}
                variant={viewMode === "chart" ? "default" : "ghost"}
                size="sm"
                className="rounded-md"
              >
                📊 Gráfico
              </Button>
              <Button
                onClick={() => setViewMode("map")}
                variant={viewMode === "map" ? "default" : "ghost"}
                size="sm"
                className="rounded-md"
              >
                🗺️ Mapa
              </Button>
            </div>

            {/* Chart/Map Container */}
            <div className="min-h-[500px]">
              {viewMode === "chart" && <VisitsChart data={visitasData} />}
              {viewMode === "map" && <InteractiveMap />}
            </div>
          </div>

          {/* Right Side - 30% */}
          <div>
            <TopPointsRanking items={pontosPopulares} />
          </div>
        </div>

        {/* Bottom - Recent Activities */}
        <div>
          <RecentActivities activities={atividadesRecentes} />
        </div>
      </div>
    </div>
  )
}
