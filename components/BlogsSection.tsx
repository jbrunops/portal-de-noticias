import Image from 'next/image'

interface Blogger {
  name: string
  bio: string
  imageUrl: string
}

const bloggers: Blogger[] = [
  {
    name: "Caio Junqueira",
    bio: "Petrobras se frustra com pedidos sobre margem equatorial",
    imageUrl: "/api/placeholder/100/100"
  },
  {
    name: "Iuri Pitta",
    bio: "Senado deixa Câmara sozinha ao rejeitar PEC da Blindagem",
    imageUrl: "/api/placeholder/100/100"
  },
  {
    name: "Clarissa Oliveira",
    bio: "Planalto está otimista com COP30 e já fala em recorde de turistas",
    imageUrl: "/api/placeholder/100/100"
  },
  {
    name: "Priscila Yazbek",
    bio: "Lula disse que fará o máximo por paz na Ucrânia, diz Zelensky",
    imageUrl: "/api/placeholder/100/100"
  },
  {
    name: "Pedro Venceslau",
    bio: "Advogado de Zambelli: esperamos posição de ministro italiano",
    imageUrl: "/api/placeholder/100/100"
  }
]

export default function BlogsSection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-cnn-red">
            Blogs e colunas.
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bloggers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {bloggers.map((blogger, index) => (
            <div key={index} className="text-center">
              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-cnn-red">
                  <Image
                    src={blogger.imageUrl}
                    alt={blogger.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-bold text-cnn-dark text-base mb-2">
                {blogger.name}
              </h3>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {blogger.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
