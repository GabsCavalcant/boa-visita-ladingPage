"use client"

import { MapPin } from "lucide-react"

export function InteractiveMap() {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden">
      <h3 className="mb-2 text-lg font-bold text-foreground">Mapa Interativo</h3>
      <p className="mb-6 text-sm text-muted-foreground">São João da Boa Vista - SP</p>
      
      {/* Mapa mockado com CSS */}
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border border-blue-200">
        {/* Grid background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        
        {/* Pontos turísticos animados */}
        <div className="absolute left-[15%] top-[25%]">
          <div className="animate-pulse">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="mt-2 text-xs font-semibold text-foreground bg-white px-2 py-1 rounded shadow">Igreja Matriz</div>
          </div>
        </div>
        
        <div className="absolute left-[45%] top-[20%]">
          <div className="animate-pulse" style={{ animationDelay: "0.2s" }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="mt-2 text-xs font-semibold text-foreground bg-white px-2 py-1 rounded shadow">Parque dos Ipês</div>
          </div>
        </div>
        
        <div className="absolute right-[15%] top-[35%]">
          <div className="animate-pulse" style={{ animationDelay: "0.4s" }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="mt-2 text-xs font-semibold text-foreground bg-white px-2 py-1 rounded shadow">Museu</div>
          </div>
        </div>
        
        <div className="absolute left-[30%] bottom-[20%]">
          <div className="animate-pulse" style={{ animationDelay: "0.6s" }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="mt-2 text-xs font-semibold text-foreground bg-white px-2 py-1 rounded shadow">Cachoeira</div>
          </div>
        </div>
        
        <div className="absolute right-[25%] bottom-[15%]">
          <div className="animate-pulse" style={{ animationDelay: "0.8s" }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 shadow-lg">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="mt-2 text-xs font-semibold text-foreground bg-white px-2 py-1 rounded shadow">Teatro</div>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur rounded-lg p-3 shadow-md text-xs">
          <p className="font-semibold text-foreground mb-2">Pontos Turísticos Principais</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span>Religioso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span>Natureza</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <span>Cultura</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
