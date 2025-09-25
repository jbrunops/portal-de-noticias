'use client'

import { useState } from 'react'
import { useNews } from '@/hooks/useSupabase'
import Link from 'next/link'

export default function NewsListPage() {
  const { news, loading } = useNews()
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNews = news.filter(newsItem =>
    newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsItem.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cnn-red mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando notícias...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notícias</h1>
          <p className="text-gray-600">Gerencie todas as notícias do portal</p>
        </div>
        <Link
          href="/admin/news/new"
          className="bg-cnn-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Nova Notícia
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Buscar notícias por título ou categoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cnn-red focus:border-transparent"
        />
      </div>

      {/* News List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredNews.length} notícia{filteredNews.length !== 1 ? 's' : ''} encontrada{filteredNews.length !== 1 ? 's' : ''}
          </h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {filteredNews.map((newsItem) => (
            <div key={newsItem.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {newsItem.category}
                    </span>
                    {newsItem.is_featured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Destaque
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {newsItem.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {newsItem.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>Por {newsItem.author}</span>
                    <span>•</span>
                    <span>{new Date(newsItem.publish_date).toLocaleDateString('pt-BR')}</span>
                    <span>•</span>
                    <span>{newsItem.views} visualizações</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <Link
                    href={`/noticia/${newsItem.slug}`}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Ver
                  </Link>
                  <button className="text-green-600 hover:text-green-800 text-sm">
                    Editar
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm">
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            {searchTerm ? 'Nenhuma notícia encontrada para sua busca.' : 'Nenhuma notícia cadastrada.'}
          </div>
        )}
      </div>
    </div>
  )
}
