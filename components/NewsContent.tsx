import Image from 'next/image'

interface NewsContentProps {
  slug: string
}

// Mock data - em produção viria de uma API
const getNewsData = (slug: string) => {
  const newsData: Record<string, any> = {
    'pec-blindagem-lula-vergonha-nacional': {
      title: "Após arquivamento de PEC da Blindagem, Lula diz que proposta era uma \"vergonha nacional\"",
      subtitle: "Presidente comemorou a derrota da proposta no Senado e criticou os defensores da medida",
      author: "Ludmila Candal, da Portal Cachoeirinha",
      publishDate: "24/09/25 às 22:05",
      updateDate: "24/09/25 às 22:05",
      category: "Política",
      mainImage: "/api/placeholder/800/400",
      imageCaption: "Lula durante pronunciamento sobre a PEC da Blindagem Foto: Reprodução / Agência Brasil"
    },
    'leila-pereira-abel-ferreira-palmeiras': {
      title: "Leila Pereira abre o jogo sobre novo contrato de Abel Ferreira no Palmeiras",
      subtitle: "Presidente do clube revela detalhes sobre as negociações com o técnico português",
      author: "Carlos Silva, da Portal Cachoeirinha",
      publishDate: "24/09/25 às 21:30",
      updateDate: "24/09/25 às 21:45",
      category: "Esportes",
      mainImage: "/api/placeholder/800/400",
      imageCaption: "Leila Pereira e Abel Ferreira em reunião Foto: Reprodução / Palmeiras"
    },
    '1': {
      title: "Internacional anuncia a contratação do técnico Ramón Díaz, ex-Corinthians",
      subtitle: "Treinador assinou com o Colorado até o fim da temporada 2026; ele chega para substituir Roger Machado",
      author: "Ludmila Candal, da Portal Cachoeirinha",
      publishDate: "24/09/25 às 22:05",
      updateDate: "24/09/25 às 22:05",
      category: "Esportes",
      mainImage: "/api/placeholder/800/400",
      imageCaption: "Treinador tem 66 anos e comandará o Inter na sequência da temporada Foto: Reprodução / X @SCinternacional"
    }
  }
  
  return newsData[slug] || newsData['1']
}

export default function NewsContent({ slug }: NewsContentProps) {
  const news = getNewsData(slug)
  
  return (
    <article className="bg-white">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <span className="bg-cnn-red text-white px-3 py-1 text-sm font-semibold rounded">
            {news.category}
          </span>
        </div>
        
        <h1 className="text-3xl lg:text-4xl font-bold text-cnn-dark leading-tight mb-4">
          {news.title}
        </h1>
        
        <h2 className="text-xl text-gray-700 leading-relaxed mb-6">
          {news.subtitle}
        </h2>
        
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <span className="font-medium">{news.author}</span>
          <span className="mx-2">•</span>
          <span>{news.publishDate}</span>
          <span className="mx-2">•</span>
          <span>Atualizado {news.updateDate}</span>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-6">
        <div className="relative bg-cnn-red rounded-lg overflow-hidden">
          <Image
            src={news.mainImage}
            alt={news.title}
            width={800}
            height={400}
            className="w-full h-96 object-cover"
          />
          
          {/* Gallery Arrow */}
          <button className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <p className="text-sm text-gray-600 mt-3">
          {news.imageCaption}
        </p>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-800 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <p className="text-gray-800 leading-relaxed mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        <p className="text-gray-800 leading-relaxed mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </article>
  )
}
