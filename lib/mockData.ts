// Dados mock para testar o sistema enquanto não temos acesso de escrita ao Supabase

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
  views: number
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  slug: string
  color: string
  description: string
}

export interface Blogger {
  id: number
  name: string
  bio: string
  image_url: string
  social_links: Record<string, string>
}

export const mockCategories: Category[] = [
  {
    id: 1,
    name: "Política Local",
    slug: "politica-local",
    color: "#CC0000",
    description: "Notícias sobre política municipal e regional"
  },
  {
    id: 2,
    name: "Economia Regional",
    slug: "economia-regional",
    color: "#0066CC",
    description: "Economia local e desenvolvimento regional"
  },
  {
    id: 3,
    name: "Esportes",
    slug: "esportes",
    color: "#00AA00",
    description: "Esportes locais e regionais"
  },
  {
    id: 4,
    name: "Cultura",
    slug: "cultura",
    color: "#AA6600",
    description: "Eventos culturais e manifestações artísticas"
  },
  {
    id: 5,
    name: "Saúde",
    slug: "saude",
    color: "#CC6600",
    description: "Saúde pública e bem-estar"
  }
]

export const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "Prefeitura de Cachoeirinha anuncia novo projeto de infraestrutura urbana",
    slug: "prefeitura-cachoeirinha-projeto-infraestrutura",
    content: "A Prefeitura de Cachoeirinha apresentou hoje um ambicioso projeto de infraestrutura urbana que promete transformar a cidade nos próximos anos. O plano inclui a modernização de vias principais, implementação de ciclovias e melhorias no sistema de drenagem pluvial. O investimento previsto é de R$ 50 milhões, com recursos provenientes do governo federal e contrapartida municipal. O prefeito destacou que o projeto foi desenvolvido com base em estudos técnicos e consulta popular, priorizando as necessidades mais urgentes da população. As obras devem começar no primeiro trimestre do próximo ano, com prazo de conclusão estimado em 24 meses.",
    excerpt: "Projeto de R$ 50 milhões inclui modernização de vias, ciclovias e sistema de drenagem",
    category: "Política Local",
    author: "Maria Silva, Portal Cachoeirinha",
    publish_date: "2024-09-24T22:05:00Z",
    image_url: "/api/placeholder/800/400",
    is_featured: true,
    views: 1250,
    created_at: "2024-09-24T22:05:00Z",
    updated_at: "2024-09-24T22:05:00Z"
  },
  {
    id: 2,
    title: "Inauguração do novo centro esportivo movimenta a cidade",
    slug: "inauguracao-centro-esportivo-cachoeirinha",
    content: "Cachoeirinha celebrou neste final de semana a inauguração do novo centro esportivo municipal, um investimento de R$ 8 milhões que oferece estrutura completa para prática de diversas modalidades esportivas. O complexo conta com quadras poliesportivas, piscina semiolímpica, academia popular e espaços para atividades ao ar livre. Durante a cerimônia de abertura, foram realizadas demonstrações de basquete, vôlei e natação, envolvendo atletas locais de todas as idades. O secretário de esportes destacou que o centro representa um marco no desenvolvimento esportivo da cidade e deve atender cerca de 5.000 pessoas por mês.",
    excerpt: "Complexo de R$ 8 milhões oferece quadras, piscina e academia para a comunidade",
    category: "Esportes",
    author: "João Santos, Portal Cachoeirinha",
    publish_date: "2024-09-23T15:30:00Z",
    image_url: "/api/placeholder/800/400",
    is_featured: true,
    views: 980,
    created_at: "2024-09-23T15:30:00Z",
    updated_at: "2024-09-23T15:30:00Z"
  },
  {
    id: 3,
    title: "Feira do Livro atrai milhares de visitantes em Cachoeirinha",
    slug: "feira-livro-cachoeirinha-visitantes",
    content: "A 15ª edição da Feira do Livro de Cachoeirinha foi um sucesso absoluto, atraindo mais de 15 mil visitantes durante os cinco dias de evento. Realizada na Praça Central, a feira reuniu mais de 50 expositores, incluindo editoras, livrarias locais e autores independentes. A programação incluiu lançamentos de livros, sessões de autógrafos, contação de histórias para crianças e debates literários. Destaque para a participação de escritores regionais que apresentaram suas obras mais recentes. O evento também contou com atividades culturais paralelas, como apresentações musicais e teatrais, consolidando-se como um dos principais eventos culturais da região metropolitana.",
    excerpt: "Evento reuniu 15 mil visitantes e 50 expositores em cinco dias de programação",
    category: "Cultura",
    author: "Ana Costa, Portal Cachoeirinha",
    publish_date: "2024-09-22T18:45:00Z",
    image_url: "/api/placeholder/800/400",
    is_featured: false,
    views: 750,
    created_at: "2024-09-22T18:45:00Z",
    updated_at: "2024-09-22T18:45:00Z"
  },
  {
    id: 4,
    title: "Unidade de Saúde da Família amplia atendimento na zona norte",
    slug: "usf-zona-norte-cachoeirinha-amplia-atendimento",
    content: "A Unidade de Saúde da Família (USF) do bairro Jardim América, na zona norte de Cachoeirinha, ampliou significativamente seu atendimento com a chegada de novos profissionais e equipamentos. A unidade agora conta com dois médicos clínicos gerais, um pediatra, uma ginecologista, enfermeiros e técnicos de enfermagem. Foram instalados novos equipamentos de diagnóstico, incluindo aparelho de ultrassom e eletrocardiograma. A ampliação permite que a USF atenda mais de 8.000 famílias cadastradas, com consultas agendadas e atendimento de emergência. O secretário de saúde destacou que a medida faz parte do plano de fortalecimento da atenção básica no município.",
    excerpt: "Nova equipe médica e equipamentos ampliam atendimento para 8.000 famílias",
    category: "Saúde",
    author: "Carlos Mendes, Portal Cachoeirinha",
    publish_date: "2024-09-21T14:20:00Z",
    image_url: "/api/placeholder/800/400",
    is_featured: false,
    views: 650,
    created_at: "2024-09-21T14:20:00Z",
    updated_at: "2024-09-21T14:20:00Z"
  },
  {
    id: 5,
    title: "Cooperativa local investe em energia solar e reduz custos operacionais",
    slug: "cooperativa-energia-solar-cachoeirinha",
    content: "A Cooperativa de Crédito de Cachoeirinha implementou um sistema de energia solar fotovoltaica em sua sede, tornando-se a primeira instituição financeira da região a adotar essa tecnologia sustentável. O investimento de R$ 120 mil incluiu a instalação de 80 painéis solares e um sistema de armazenamento de energia. A iniciativa deve reduzir a conta de energia elétrica em até 70%, resultando em uma economia anual estimada em R$ 45 mil. Além dos benefícios econômicos, o projeto contribui para a redução da pegada de carbono da instituição. A cooperativa planeja estender o projeto para suas outras unidades e incentivar associados a adotarem tecnologias sustentáveis.",
    excerpt: "Investimento de R$ 120 mil em painéis solares deve gerar economia de 70% na conta de luz",
    category: "Economia Regional",
    author: "Roberto Lima, Portal Cachoeirinha",
    publish_date: "2024-09-20T16:15:00Z",
    image_url: "/api/placeholder/800/400",
    is_featured: false,
    views: 580,
    created_at: "2024-09-20T16:15:00Z",
    updated_at: "2024-09-20T16:15:00Z"
  }
]

export const mockBloggers: Blogger[] = [
  {
    id: 1,
    name: "Caio Junqueira",
    bio: "Jornalista especializado em política local com mais de 10 anos de experiência",
    image_url: "/api/placeholder/100/100",
    social_links: {
      twitter: "@caiojunqueira",
      linkedin: "caio-junqueira"
    }
  },
  {
    id: 2,
    name: "Iuri Pitta",
    bio: "Repórter de economia e desenvolvimento regional",
    image_url: "/api/placeholder/100/100",
    social_links: {
      twitter: "@iuripitta",
      instagram: "iuri_pitta"
    }
  },
  {
    id: 3,
    name: "Clarissa Oliveira",
    bio: "Especialista em cultura e eventos da região metropolitana",
    image_url: "/api/placeholder/100/100",
    social_links: {
      twitter: "@clarissa_oliveira",
      facebook: "clarissa.oliveira"
    }
  },
  {
    id: 4,
    name: "Priscila Yazbek",
    bio: "Repórter de esportes com foco em atletismo e futebol local",
    image_url: "/api/placeholder/100/100",
    social_links: {
      twitter: "@priscilayazbek",
      instagram: "priscila_yazbek"
    }
  },
  {
    id: 5,
    name: "Pedro Venceslau",
    bio: "Colunista de saúde pública e bem-estar comunitário",
    image_url: "/api/placeholder/100/100",
    social_links: {
      twitter: "@pedrovenceslau",
      linkedin: "pedro-venceslau"
    }
  }
]

// Funções auxiliares para simular queries do Supabase
export const getNewsBySlug = (slug: string): NewsItem | null => {
  return mockNews.find(news => news.slug === slug) || null
}

export const getFeaturedNews = (): NewsItem[] => {
  return mockNews.filter(news => news.is_featured)
}

export const getMostReadNews = (): NewsItem[] => {
  return [...mockNews].sort((a, b) => b.views - a.views).slice(0, 5)
}

export const getNewsByCategory = (categorySlug: string): NewsItem[] => {
  return mockNews.filter(news => 
    mockCategories.find(cat => cat.slug === categorySlug)?.name === news.category
  )
}

export const getAllNews = (): NewsItem[] => {
  return mockNews
}

export const getAllCategories = (): Category[] => {
  return mockCategories
}

export const getAllBloggers = (): Blogger[] => {
  return mockBloggers
}
