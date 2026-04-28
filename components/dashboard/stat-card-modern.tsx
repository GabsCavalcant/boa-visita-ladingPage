"use client"

import { LucideIcon } from "lucide-react"

interface StatCardModernProps {
  icon: LucideIcon
  label: string
  value: string | number
  trend?: string
  trendIsPositive?: boolean
  colorClass: string
}

export function StatCardModern({
  icon: Icon,
  label,
  value,
  trend,
  trendIsPositive = true,
  colorClass,
}: StatCardModernProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${colorClass} p-6 text-white shadow-lg transition-transform hover:scale-105`}>
      {/* Background accent */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-xl" />
      
      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div className={`rounded-lg bg-white/20 p-3 backdrop-blur-sm`}>
            <Icon className="h-6 w-6" />
          </div>
          {trend && (
            <span className={`text-sm font-semibold ${trendIsPositive ? "text-green-200" : "text-red-200"}`}>
              {trendIsPositive ? "↑" : "↓"} {trend}
            </span>
          )}
        </div>
        
        <p className="text-sm font-medium opacity-90">{label}</p>
        <p className="mt-2 text-3xl font-bold">{value}</p>
      </div>
    </div>
  )
}
