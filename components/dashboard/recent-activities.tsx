"use client"

import { Activity, CheckCircle, MapPin, Plus } from "lucide-react"

interface Activity {
  id: string
  user: string
  action: string
  time: string
  type: "add" | "update" | "approve" | "publish"
}

const activityIcons = {
  add: Plus,
  update: Activity,
  approve: CheckCircle,
  publish: MapPin,
}

export function RecentActivities({ activities }: { activities: Activity[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-bold text-foreground">Atividades Recentes</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = activityIcons[activity.type]
          const colorMap = {
            add: "bg-blue-100 text-blue-600",
            update: "bg-purple-100 text-purple-600",
            approve: "bg-green-100 text-green-600",
            publish: "bg-orange-100 text-orange-600",
          }
          
          return (
            <div key={activity.id} className="flex items-start gap-4 rounded-lg p-3 hover:bg-muted transition-colors">
              <div className={`rounded-full p-2 ${colorMap[activity.type]}`}>
                <IconComponent className="h-4 w-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-semibold text-foreground">{activity.user}</span>
                  <span className="text-muted-foreground"> {activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
