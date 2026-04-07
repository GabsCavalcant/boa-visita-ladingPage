import { GraduationCap, Building2, Landmark } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const equipeIFSP = [
  { nome: "Prof. Dr. João Silva", cargo: "Coordenador do Projeto", iniciais: "JS" },
  { nome: "Profa. Dra. Maria Santos", cargo: "Orientadora", iniciais: "MS" },
  { nome: "Lucas Oliveira", cargo: "Desenvolvedor", iniciais: "LO" },
  { nome: "Ana Carolina", cargo: "Designer UX/UI", iniciais: "AC" },
]

const equipePrefeitura = [
  { nome: "Carlos Alberto", cargo: "Secretário de Turismo", iniciais: "CA" },
  { nome: "Fernanda Lima", cargo: "Diretora de Turismo", iniciais: "FL" },
  { nome: "Roberto Mendes", cargo: "Analista de Projetos", iniciais: "RM" },
]

export function TeamSection() {
  return (
    <section id="envolvidos" className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-medium text-secondary">
            Equipe
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Envolvidos no Projeto
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Uma parceria entre instituição de ensino e poder público para transformar
            o turismo da nossa cidade.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* IFSP */}
          <Card className="border-border bg-card">
            <CardHeader className="border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-foreground">IFSP - Campus São João da Boa Vista</CardTitle>
                  <p className="text-sm text-muted-foreground">Instituto Federal de São Paulo</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-muted-foreground">
                O Instituto Federal de São Paulo contribui com conhecimento técnico,
                inovação e desenvolvimento de soluções tecnológicas para o projeto.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {equipeIFSP.map((membro) => (
                  <div key={membro.nome} className="flex items-center gap-3 rounded-lg bg-muted p-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                        {membro.iniciais}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{membro.nome}</p>
                      <p className="text-xs text-muted-foreground">{membro.cargo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prefeitura */}
          <Card className="border-border bg-card">
            <CardHeader className="border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                  <Landmark className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-foreground">Prefeitura Municipal</CardTitle>
                  <p className="text-sm text-muted-foreground">Departamento de Turismo</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-6 text-muted-foreground">
                A Prefeitura Municipal, através do Departamento de Turismo, fornece
                suporte institucional, dados e conhecimento local para o projeto.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {equipePrefeitura.map((membro) => (
                  <div key={membro.nome} className="flex items-center gap-3 rounded-lg bg-muted p-3">
                    <Avatar className="h-10 w-10 border-2 border-secondary/20">
                      <AvatarFallback className="bg-secondary/20 text-sm font-medium text-secondary">
                        {membro.iniciais}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-foreground">{membro.nome}</p>
                      <p className="text-xs text-muted-foreground">{membro.cargo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-xl bg-background p-8">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">IFSP</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Building2 className="h-6 w-6 text-secondary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Prefeitura SJBV</span>
          </div>
        </div>
      </div>
    </section>
  )
}
