import { Target, Eye, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Sobre o Projeto
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Conheça o <span className="text-primary">Boa Visita</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Uma plataforma desenvolvida para promover e facilitar o turismo em São João da Boa Vista,
            conectando visitantes às melhores experiências da cidade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-border bg-card transition-all hover:border-primary hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Missão</h3>
              <p className="text-muted-foreground">
                Facilitar o acesso à informação turística e promover o desenvolvimento
                econômico local através do turismo sustentável.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-all hover:border-secondary hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência em plataformas de turismo municipal, tornando São João
                da Boa Vista um destino reconhecido nacionalmente.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card transition-all hover:border-accent hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Valores</h3>
              <p className="text-muted-foreground">
                Inovação, sustentabilidade, valorização da cultura local e
                compromisso com a experiência do visitante.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-xl bg-muted p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                São João da Boa Vista
              </h3>
              <p className="mb-4 text-muted-foreground">
                Localizada no interior de São Paulo, nossa cidade é conhecida por sua
                rica história, belas paisagens naturais e hospitalidade única. Com
                clima agradável e uma cultura vibrante, é o destino perfeito para
                quem busca tranquilidade sem abrir mão de boas experiências.
              </p>
              <p className="text-muted-foreground">
                O projeto Boa Visita nasceu da parceria entre o IFSP e a Prefeitura
                Municipal, unindo tecnologia e turismo para valorizar nosso patrimônio.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <span className="text-2xl font-bold text-primary-foreground">SJBV</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">São João da Boa Vista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
