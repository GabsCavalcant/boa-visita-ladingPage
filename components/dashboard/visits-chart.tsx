"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface VisitsChartProps {
  data: Array<{ month: string; visits: number }>
}

export function VisitsChart({ data }: VisitsChartProps) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-bold text-foreground">Visitas por Mês</h3>
      <p className="mb-6 text-sm text-muted-foreground">Evolução das visitas aos pontos turísticos</p>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="month" className="text-xs text-muted-foreground" />
            <YAxis className="text-xs text-muted-foreground" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}
              cursor={{ stroke: "var(--primary)" }}
            />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#FF6B6B"
              strokeWidth={3}
              dot={{ fill: "#FF6B6B", r: 5 }}
              activeDot={{ r: 7 }}
              fillOpacity={1}
              fill="url(#colorVisits)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
