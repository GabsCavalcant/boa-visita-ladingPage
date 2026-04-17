"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    setFormData({ nome: "", email: "", mensagem: "" })
  }

  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
            Contato
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-2xl text-background/70 text-pretty">
            Tem dúvidas, sugestões ou quer saber mais sobre o projeto? Fale conosco!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formulário */}
          <Card className="border-0 bg-background/5">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="nome" className="mb-2 block text-sm font-medium text-background">
                    Nome
                  </label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="border-background/20 bg-background/10 text-background placeholder:text-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-background">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-background/20 bg-background/10 text-background placeholder:text-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-background">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Sua mensagem..."
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="border-background/20 bg-background/10 text-background placeholder:text-background/50"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-background">Endereço</h3>
                <p className="text-background/70">
                  Av. Marginal, 585 - Jardim Primavera
                  <br />
                  São João da Boa Vista - SP, 13870-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Mail className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-background">E-mail</h3>
                <p className="text-background/70">contato@boavisita.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                <Phone className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-background">Telefone</h3>
                <p className="text-background/70">(19) 3631-0000</p>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-15 w-15 items-center justify-center rounded-lg bg-white">
              <img src="/logo.svg" alt="Logo" className="h-50 w-50" />
            </div>
          </div>
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Boa Visita. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-background/60">
            <Link href="#" className="hover:text-background">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-background">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
