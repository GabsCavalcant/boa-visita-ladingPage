"use client"

import { useState } from "react"
import { Search, MapPin, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const pontosTuristicos = [
  { id: 1, nome: "Igreja Matriz", categoria: "Religioso", endereco: "Centro Histórico" },
  { id: 2, nome: "Parque dos Ipês", categoria: "Natureza", endereco: "Av. Principal, 500" },
  { id: 3, nome: "Museu Municipal", categoria: "Cultura", endereco: "Rua das Artes, 123" },
  { id: 4, nome: "Cachoeira do Vale", categoria: "Natureza", endereco: "Estrada Rural, km 12" },
  { id: 5, nome: "Teatro Municipal", categoria: "Cultura", endereco: "Praça Central, 45" },
  { id: 6, nome: "Mirante da Serra", categoria: "Natureza", endereco: "Serra da Mantiqueira" },
  { id: 7, nome: "Casa de Cultura", categoria: "Cultura", endereco: "Rua Histórica, 78" },
  { id: 8, nome: "Praça da Bandeira", categoria: "Lazer", endereco: "Centro" },
]

const categorias = ["Todos", "Natureza", "Cultura", "Religioso", "Lazer"]

export function HeroSection() {
  const [busca, setBusca] = useState("")
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")

  const pontosFiltrados = pontosTuristicos.filter((ponto) => {
    const matchBusca = ponto.nome.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = categoriaAtiva === "Todos" || ponto.categoria === categoriaAtiva
    return matchBusca && matchCategoria
  })

  return (
    <section className="relative bg-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Descubra</span>{" "}
            <span className="text-primary">São João da Boa Vista</span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Explore os melhores pontos turísticos, restaurantes e atrações da nossa cidade
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[400px_1fr]">
          {/* Lista com Filtro */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar ponto turístico..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <Button
                  key={categoria}
                  variant={categoriaAtiva === categoria ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoriaAtiva(categoria)}
                  className={categoriaAtiva === categoria ? "" : "border-border"}
                >
                  <Filter className="mr-1 h-3 w-3" />
                  {categoria}
                </Button>
              ))}
            </div>

            <ScrollArea className="h-[400px] rounded-lg border border-border bg-background p-2">
              <div className="flex flex-col gap-2">
                {pontosFiltrados.map((ponto) => (
                  <Card
                    key={ponto.id}
                    className="cursor-pointer border-border transition-all hover:border-primary hover:shadow-md"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-foreground">{ponto.nome}</h3>
                          <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {ponto.endereco}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={
                            ponto.categoria === "Natureza"
                              ? "bg-green-100 text-green-800"
                              : ponto.categoria === "Cultura"
                              ? "bg-blue-100 text-blue-800"
                              : ponto.categoria === "Religioso"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-accent text-accent-foreground"
                          }
                        >
                          {ponto.categoria}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {pontosFiltrados.length === 0 && (
                  <p className="py-8 text-center text-muted-foreground">
                    Nenhum ponto turístico encontrado
                  </p>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Mapa */}
          <div className="relative min-h-[400px] overflow-hidden rounded-xl border border-border bg-background shadow-lg lg:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-background">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Mapa Interativo</h3>
                  <p className="text-sm text-muted-foreground">São João da Boa Vista - SP</p>
                </div>
              </div>
              {/* Pontos no mapa */}
              <div className="absolute left-[20%] top-[30%] h-4 w-4 animate-pulse rounded-full bg-primary shadow-lg" />
              <div className="absolute left-[45%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-secondary shadow-lg" />
              <div className="absolute left-[70%] top-[40%] h-4 w-4 animate-pulse rounded-full bg-accent shadow-lg" />
              <div className="absolute left-[35%] top-[60%] h-4 w-4 animate-pulse rounded-full bg-primary shadow-lg" />
              <div className="absolute left-[60%] top-[70%] h-4 w-4 animate-pulse rounded-full bg-secondary shadow-lg" />
              <div className="absolute left-[25%] top-[75%] h-4 w-4 animate-pulse rounded-full bg-accent shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
