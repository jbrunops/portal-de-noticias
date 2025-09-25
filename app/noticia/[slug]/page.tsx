import Layout from '@/components/Layout'
import NewsContent from '@/components/NewsContent'
import Sidebar from '@/components/Sidebar'

interface NewsPageProps {
  params: {
    slug: string
  }
}

export default function NewsPage({ params }: NewsPageProps) {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <NewsContent slug={params.slug} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  )
}
