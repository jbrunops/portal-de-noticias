import Image from 'next/image'
import SecondaryNewsCard from './SecondaryNewsCard'

export default function MainNewsSection() {
  const relatedItems = [
    "PEC da Blindagem provoca crise interna em partidos",
    "Alcolumbre descarta votação em plenário e anuncia arquivamento da PEC da Blindagem",
    "Veja quem são os 26 senadores que votaram para derrubar PEC da Blindagem"
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main News - Left Side */}
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {/* Main Title */}
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            <a 
              href="/noticia/pec-blindagem-lula-vergonha-nacional" 
              className="text-cnn-dark hover:text-cnn-red transition-colors duration-200"
            >
              Após arquivamento de PEC da Blindagem, Lula diz que proposta era uma "vergonha nacional"
            </a>
          </h1>
          
          {/* Related Items */}
          <div className="space-y-2">
            {relatedItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-cnn-red rounded-full"></div>
                </div>
                <p className="text-gray-700 text-sm lg:text-base hover:text-cnn-red cursor-pointer transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary News - Right Side */}
      <div className="lg:col-span-1">
        <SecondaryNewsCard
          title="Leila Pereira abre o jogo sobre novo contrato de Abel Ferreira no Palmeiras"
          imageUrl="/api/placeholder/400/300"
          category="Esportes"
          hasGallery={true}
        />
      </div>
    </div>
  )
}
