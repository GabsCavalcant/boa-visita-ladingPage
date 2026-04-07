"use client"

import { MapPin, Users, Building2, Eye, TrendingUp, Calendar } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"

const visitasData = [
  { mes: "Jan", visitas: 1200 },
  { mes: "Fev", visitas: 1900 },
  { mes: "Mar", visitas: 2400 },
  { mes: "Abr", visitas: 2100 },
  { mes: "Mai", visitas: 2800 },
  { mes: "Jun", visitas: 3200 },
]

const pontosPopulares = [
  { nome: "Igreja Matriz", visitas: 1250, tendencia: "+12%" },
  { nome: "Parque dos Ipês", visitas: 980, tendencia: "+8%" },
  { nome: "Museu Municipal", visitas: 756, tendencia: "+15%" },
  { nome: "Cachoeira do Vale", visitas: 642, tendencia: "+5%" },
  { nome: "Teatro Municipal", visitas: 528, tendencia: "+3%" },
]

const atividadesRecentes = [
  { usuario: "Ana Silva", acao: "Cadastrou novo ponto turístico", tempo: "5 min", iniciais: "AS" },
  { usuario: "Pedro Santos", acao: "Atualizou informações do Museu", tempo: "15 min", iniciais: "PS" },
  { usuario: "Maria Oliveira", acao: "Aprovou avaliação de usuário", tempo: "30 min", iniciais: "MO" },
  { usuario: "João Costa", acao: "Publicou novo evento", tempo: "1 hora", iniciais: "JC" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <DashboardHeader
        title="Dashboard"
        description="Visão geral do sistema Boa Visita"
      />

      <div className="flex-1 p-4 md:p-6">
        {/* Stats Grid */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Pontos Turísticos"
            value={48}
            description="Cadastrados no sistema"
            icon={MapPin}
            variant="primary"
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Visitantes"
            value="12.4k"
            description="Este mês"
            icon={Eye}
            variant="secondary"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            title="Usuários"
            value={2847}
            description="Registrados"
            icon={Users}
            variant="accent"
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            title="Estabelecimentos"
            value={156}
            description="Parceiros"
            icon={Building2}
            variant="default"
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        {/* Charts Row */}
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                Visitas por Mês
              </CardTitle>
              <CardDescription>
                Evolução das visitas aos pontos turísticos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={visitasData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="mes" className="text-xs text-muted-foreground" />
                    <YAxis className="text-xs text-muted-foreground" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="visitas"
                      stroke="#FF004D"
                      strokeWidth={3}
                      dot={{ fill: "#FF004D", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-secondary" />
                Pontos Mais Visitados
              </CardTitle>
              <CardDescription>
                Ranking dos 5 pontos turísticos mais populares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pontosPopulares} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis type="number" className="text-xs text-muted-foreground" />
                    <YAxis
                      type="category"
                      dataKey="nome"
                      width={100}
                      className="text-xs text-muted-foreground"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--background)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="visitas" fill="#FFA100" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Pontos Populares List */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Top 5 Pontos Turísticos</CardTitle>
              <CardDescription>
                Baseado no número de visitas deste mês
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pontosPopulares.map((ponto, index) => (
                  <div
                    key={ponto.nome}
                    className="flex items-center justify-between rounded-lg bg-muted p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{ponto.nome}</p>
                        <p className="text-sm text-muted-foreground">
                          {ponto.visitas.toLocaleString()} visitas
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      {ponto.tendencia}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Atividades Recentes */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-accent-foreground" />
                Atividades Recentes
              </CardTitle>
              <CardDescription>
                Últimas ações realizadas no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {atividadesRecentes.map((atividade, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-lg bg-muted p-3"
                  >
                    <Avatar className="h-9 w-9 border border-border">
                      <AvatarFallback className="bg-background text-sm">
                        {atividade.iniciais}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium text-foreground">
                          {atividade.usuario}
                        </span>{" "}
                        <span className="text-muted-foreground">{atividade.acao}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        há {atividade.tempo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
