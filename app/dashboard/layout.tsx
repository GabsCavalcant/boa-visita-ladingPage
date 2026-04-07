import { Sidebar } from "@/components/dashboard/sidebar"

const mockUser = {
  nome: "Carlos Silva",
  cargo: "Administrador" as const,
  iniciais: "CS",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted">
      <Sidebar user={mockUser} />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}
