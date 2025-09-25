import Layout from '@/components/Layout'
import BreakingNews from '@/components/BreakingNews'
import MainNewsSection from '@/components/MainNewsSection'
import SecondaryNewsCard from '@/components/SecondaryNewsCard'
import ThreeColumnNews from '@/components/ThreeColumnNews'
import NewsGrid from '@/components/NewsGrid'
import BlogsSection from '@/components/BlogsSection'

export default function HomePage() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Breaking News */}
        <BreakingNews />
        
        {/* Main News Section - Topo */}
        <MainNewsSection />
        
        {/* Three Column News Section */}
        <ThreeColumnNews />
        
        {/* News Grid - Bottom */}
        <NewsGrid />
        
        {/* Blogs and Columns Section */}
        <BlogsSection />
      </div>
    </Layout>
  )
}
