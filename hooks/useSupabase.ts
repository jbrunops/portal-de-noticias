import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { 
  mockNews, 
  mockCategories, 
  mockBloggers,
  getAllNews,
  getAllCategories,
  getAllBloggers,
  getNewsBySlug as mockGetNewsBySlug,
  getFeaturedNews as mockGetFeaturedNews,
  getMostReadNews as mockGetMostReadNews,
  getNewsByCategory as mockGetNewsByCategory,
  type NewsItem,
  type Category,
  type Blogger
} from '@/lib/mockData'

export { type NewsItem, type Category, type Blogger }

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
      // Tentar buscar do Supabase primeiro, se falhar usar dados mock
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('publish_date', { ascending: false })

        if (error) throw error
        setNews(data || [])
      } catch (supabaseError) {
        console.log('Usando dados mock devido a erro no Supabase:', supabaseError)
        setNews(getAllNews())
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar notícias')
      // Fallback para dados mock
      setNews(getAllNews())
    } finally {
      setLoading(false)
    }
  }

  const getNewsBySlug = async (slug: string): Promise<NewsItem | null> => {
    try {
      // Tentar Supabase primeiro
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) throw error
      return data
    } catch (err) {
      console.log('Usando dados mock para buscar notícia por slug')
      return mockGetNewsBySlug(slug)
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
      console.log('Usando dados mock para notícias em destaque')
      return mockGetFeaturedNews()
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
      console.log('Usando dados mock para notícias mais lidas')
      return mockGetMostReadNews()
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
      console.log('Usando dados mock para notícias por categoria')
      return mockGetNewsByCategory(categorySlug)
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
      // Tentar Supabase primeiro
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('name')

        if (error) throw error
        setCategories(data || [])
      } catch (supabaseError) {
        console.log('Usando dados mock para categorias')
        setCategories(getAllCategories())
      }
    } catch (err) {
      console.error('Erro ao carregar categorias:', err)
      setCategories(getAllCategories())
    } finally {
      setLoading(false)
    }
  }

  return { categories, loading, fetchCategories }
}

export function useBloggers() {
  const [bloggers, setBloggers] = useState<Blogger[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBloggers()
  }, [])

  const fetchBloggers = async () => {
    try {
      setLoading(true)
      // Por enquanto usar apenas dados mock, pois não temos tabela de bloggers no Supabase
      setBloggers(getAllBloggers())
    } catch (err) {
      console.error('Erro ao carregar blogueiros:', err)
      setBloggers([])
    } finally {
      setLoading(false)
    }
  }

  return { bloggers, loading, fetchBloggers }
}
