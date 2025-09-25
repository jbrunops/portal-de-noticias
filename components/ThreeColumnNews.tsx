import Image from 'next/image'

interface NewsItem {
  title: string
  subtitle: string
  imageUrl: string
  category: string
}

const newsItems: NewsItem[] = [
  {
    title: "TEMPO REAL: River Plate faz 1 a 0 no Palmeiras em decisão por vaga na semifinal da Libertadores",
    subtitle: "Bernard decide, Atlético-MG elimina Bolívar e vai à semi da Sul-Americana",
    imageUrl: "/api/placeholder/400/250",
    category: "Esportes"
  },
  {
    title: "WILLIAM WAACK - Química entre Lula e Donald Trump: Acalma ou piora?",
    subtitle: "Lula diz que abordará qualquer assunto com Trump: \"Não tem limite\"",
    imageUrl: "/api/placeholder/400/250",
    category: "Política"
  },
  {
    title: "Governo de SP declara escassez hídrica e suspende novas outorgas de água",
    subtitle: "Delegado troca tiros com criminoso em Pinheiros, bairro nobre de SP",
    imageUrl: "/api/placeholder/400/250",
    category: "Meio Ambiente"
  }
]

export default function ThreeColumnNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <div className="relative">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className="bg-cnn-red text-white px-2 py-1 text-xs font-semibold rounded">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <h3 className="font-bold text-cnn-dark text-base leading-tight hover:text-cnn-red cursor-pointer transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed hover:text-cnn-red cursor-pointer transition-colors">
              {item.subtitle}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
