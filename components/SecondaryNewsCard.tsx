import Image from 'next/image'

interface SecondaryNewsCardProps {
  title: string
  imageUrl: string
  category: string
  hasGallery?: boolean
}

export default function SecondaryNewsCard({ 
  title, 
  imageUrl, 
  category, 
  hasGallery = false 
}: SecondaryNewsCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="relative">
        <a href="/noticia/leila-pereira-abel-ferreira-palmeiras">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          />
        </a>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-cnn-red text-white px-2 py-1 text-xs font-semibold rounded">
            {category}
          </span>
        </div>

        {/* Gallery Indicators */}
        {hasGallery && (
          <div className="absolute bottom-3 right-3 flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-cnn-dark text-base leading-tight hover:text-cnn-red cursor-pointer transition-colors">
          {title}
        </h3>
      </div>
    </article>
  )
}
