'use client'

import { useState, useEffect } from 'react'

interface BreakingNewsItem {
  id: number
  title: string
  time: string
}

const breakingNewsItems: BreakingNewsItem[] = [
  {
    id: 1,
    title: "Última hora: Prefeitura de Cachoeirinha anuncia novo projeto de infraestrutura",
    time: "14:30"
  },
  {
    id: 2,
    title: "Breaking: Inauguração do novo centro esportivo na região",
    time: "13:45"
  },
  {
    id: 3,
    title: "Emergência: Alerta meteorológico para Cachoeirinha e região metropolitana",
    time: "12:20"
  }
]

export default function BreakingNews() {
  const [currentItem, setCurrentItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % breakingNewsItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-cnn-red text-white p-4 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <span className="font-bold text-sm uppercase tracking-wide">
            Breaking News
          </span>
        </div>
        
        <div className="flex-1">
          <p className="font-medium">
            {breakingNewsItems[currentItem].title}
          </p>
        </div>
        
        <div className="text-sm opacity-90">
          {breakingNewsItems[currentItem].time}
        </div>
      </div>
    </div>
  )
}
