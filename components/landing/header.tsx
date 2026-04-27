"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-gradient-to-r from-[#FFFFFF] via-[#FFC93E] to-[#FFA100] backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-35 w-35" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link href="#envolvidos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Envolvidos
          </Link>
          <Link href="#contato" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/cadastro">Cadastrar</Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link href="#sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Sobre
            </Link>
            <Link href="#envolvidos" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Envolvidos
            </Link>
            <Link href="#contato" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contato
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link href="/cadastro">Cadastrar</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
