"use client"

interface RankingItem {
  rank: number
  name: string
  visits: number
  growth: number
  category: string
}

const rankEmojis = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"]

export function TopPointsRanking({ items }: { items: RankingItem[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm h-full">
      <h3 className="mb-6 text-lg font-bold text-foreground">Pontos Mais Visitados</h3>
      
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.rank} 
            className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/50 to-transparent hover:from-muted transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-2xl">{rankEmojis[item.rank - 1]}</span>
              <div className="min-w-0">
                <p className="font-semibold text-foreground truncate">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.visits.toLocaleString()} visitas</p>
              </div>
            </div>
            
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                +{item.growth}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
