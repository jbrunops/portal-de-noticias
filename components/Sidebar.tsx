import Image from 'next/image'

interface MostReadItem {
  id: number
  title: string
  imageUrl: string
  category: string
}

const mostReadItems: MostReadItem[] = [
  {
    id: 1,
    title: "Influenciadora impedida de mudar nome da filha é processada por cartório",
    imageUrl: "/api/placeholder/100/100",
    category: "Variedades"
  },
  {
    id: 2,
    title: "Quem era advogada criminalista executada com 20 tiros em Belo Horizonte",
    imageUrl: "/api/placeholder/100/100",
    category: "Criminalidade"
  },
  {
    id: 3,
    title: "Preso tenta tomar arma de PM, policial civil interfere e baleia agente",
    imageUrl: "/api/placeholder/100/100",
    category: "Segurança"
  },
  {
    id: 4,
    title: "Líder do PCC que jurou ex-delegado Ruy Ferraz, \"Nego Mimo\" é morto pela PM",
    imageUrl: "/api/placeholder/100/100",
    category: "Criminalidade"
  },
  {
    id: 5,
    title: "Gerente é alvo de operação por desvios de R$ 18 milhões no Banco do Brasil",
    imageUrl: "/api/placeholder/100/100",
    category: "Economia"
  }
]

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      {/* Mais Lidas Section */}
      <div>
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-cnn-red mr-2"></div>
          <h2 className="text-xl font-bold text-cnn-dark">
            Mais Lidas
          </h2>
        </div>
        
        <div className="space-y-4">
          {mostReadItems.map((item, index) => (
            <article key={item.id} className="flex space-x-3 group cursor-pointer">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-cnn-dark leading-tight group-hover:text-cnn-red transition-colors">
                  {item.title}
                </h3>
                
                <div className="mt-1">
                  <span className="text-xs text-gray-500">
                    {index + 1}ª mais lida
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-cnn-dark mb-3">
          Receba nossas notícias
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Cadastre-se e receba as principais notícias de Cachoeirinha em seu e-mail.
        </p>
        
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-cnn-red focus:border-transparent"
          />
          <button className="w-full bg-cnn-red text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
            Cadastrar
          </button>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-bold text-cnn-dark mb-4">
          Siga-nos
        </h3>
        
        <div className="flex space-x-3">
          <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          
          <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          
          <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  )
}
