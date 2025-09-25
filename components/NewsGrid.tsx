import Image from 'next/image'

interface GridNewsItem {
  title: string
  imageUrl: string
  category: string
}

const gridNewsItems: GridNewsItem[] = [
  {
    title: "\"Bolsonaro vai ser beneficiado\", diz relator do PL da Anistia",
    imageUrl: "/api/placeholder/200/150",
    category: "Política"
  },
  {
    title: "Trump troca retrato de Biden na Casa Branca por \"caneta automática\"",
    imageUrl: "/api/placeholder/200/150",
    category: "Internacional"
  },
  {
    title: "Internacional anuncia a contratação do técnico Ramón Díaz, ex-Corinthians",
    imageUrl: "/api/placeholder/200/150",
    category: "Esportes"
  },
  {
    title: "Exímia Bar, em SP, está entre os 100 melhores do mundo por: V&G",
    imageUrl: "/api/placeholder/200/150",
    category: "Gastronomia"
  },
  {
    title: "Petrobras se frustra com novos pedidos do Ibama sobre margem equatorial",
    imageUrl: "/api/placeholder/200/150",
    category: "Economia"
  },
  {
    title: "Marido de executiva também estava no show do Coldplay com outra mulher",
    imageUrl: "/api/placeholder/200/150",
    category: "Variedades"
  },
  {
    title: "Filho de secretário agride menina de 3 anos no Rio de Janeiro",
    imageUrl: "/api/placeholder/200/150",
    category: "Criminalidade"
  },
  {
    title: "Nova lei municipal aprovada em Cachoeirinha beneficia pequenos empresários",
    imageUrl: "/api/placeholder/200/150",
    category: "Local"
  }
]

export default function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {gridNewsItems.map((item, index) => (
        <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="relative">
            <a href={`/noticia/${index + 1}`}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={200}
                height={150}
                className="w-full h-32 object-cover hover:opacity-90 transition-opacity duration-200 cursor-pointer"
              />
            </a>
            
            {/* Category Badge */}
            <div className="absolute top-2 left-2">
              <span className="bg-cnn-red text-white px-2 py-1 text-xs font-semibold rounded">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="p-3">
            <h4 className="font-bold text-cnn-dark text-sm leading-tight hover:text-cnn-red cursor-pointer transition-colors">
              {item.title}
            </h4>
          </div>
        </article>
      ))}
    </div>
  )
}
