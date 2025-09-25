'use client'

import { useState } from 'react'
import { useNews, useCategories } from '@/hooks/useSupabase'

export default function SupabaseTest() {
  const [testResult, setTestResult] = useState<string>('')
  const { news, loading, error } = useNews()
  const { categories } = useCategories()

  const testConnection = async () => {
    setTestResult('Testando conexão...')
    
    try {
      if (loading) {
        setTestResult('Carregando dados...')
        return
      }
      
      if (error) {
        setTestResult(`Erro: ${error}`)
        return
      }
      
      setTestResult(`✅ Conexão funcionando! Encontradas ${news.length} notícias e ${categories.length} categorias.`)
    } catch (err) {
      setTestResult(`❌ Erro na conexão: ${err}`)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-bold text-cnn-dark mb-4">
        Teste de Conexão Supabase
      </h2>
      
      <button
        onClick={testConnection}
        className="bg-cnn-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors mb-4"
      >
        Testar Conexão
      </button>
      
      {testResult && (
        <div className="p-3 bg-gray-100 rounded-md">
          <p className="text-sm">{testResult}</p>
        </div>
      )}
      
      {news.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Últimas notícias:</h3>
          <ul className="space-y-1">
            {news.slice(0, 3).map((item) => (
              <li key={item.id} className="text-sm text-gray-600">
                • {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
