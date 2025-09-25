import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export interface NewsItem {
  id: number
  title: string
  content: string
  excerpt: string
  category: string
  author: string
  publish_date: string
  image_url: string
  slug: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  color: string
}

export function useNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('publish_date', { ascending: false })

      if (error) throw error
      setNews(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar notícias')
    } finally {
      setLoading(false)
    }
  }

  const getNewsBySlug = async (slug: string): Promise<NewsItem | null> => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) throw error
      return data
    } catch (err) {
      console.error('Erro ao buscar notícia:', err)
      return null
    }
  }

  const getFeaturedNews = async (): Promise<NewsItem[]> => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('is_featured', true)
        .order('publish_date', { ascending: false })
        .limit(5)

      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Erro ao buscar notícias em destaque:', err)
      return []
    }
  }

  const getMostReadNews = async (): Promise<NewsItem[]> => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('views', { ascending: false })
        .limit(5)

      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Erro ao buscar notícias mais lidas:', err)
      return []
    }
  }

  const getNewsByCategory = async (categorySlug: string): Promise<NewsItem[]> => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('category', categorySlug)
        .order('publish_date', { ascending: false })

      if (error) throw error
      return data || []
    } catch (err) {
      console.error('Erro ao buscar notícias por categoria:', err)
      return []
    }
  }

  return {
    news,
    loading,
    error,
    fetchNews,
    getNewsBySlug,
    getFeaturedNews,
    getMostReadNews,
    getNewsByCategory
  }
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name')

      if (error) throw error
      setCategories(data || [])
    } catch (err) {
      console.error('Erro ao carregar categorias:', err)
    } finally {
      setLoading(false)
    }
  }

  return { categories, loading, fetchCategories }
}
