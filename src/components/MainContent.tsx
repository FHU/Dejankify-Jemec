import type { MainContentProps, Analysis} from "../types/interfaces"

// Sample data
const sampleAnalyses: Analysis[] = [
  {
    id: 1,
    url: 'example-store.com',
    timestamp: '2 minutes ago',
    scores: { performance: 52, seo: 78, accessibility: 85, overall: 67 },
    title: 'Example Store - Online Retail Shop',
    fullUrl: 'https://example-store.com',
  },
  {
    id: 2,
    url: 'myblog.io',
    timestamp: '1 hour ago',
    scores: { performance: 89, seo: 92, accessibility: 88, overall: 90 },
    title: 'My Personal Blog',
    fullUrl: 'https://myblog.io',
  },
  {
    id: 3,
    url: 'startup-landing.com',
    timestamp: '3 hours ago',
    scores: { performance: 42, seo: 68, accessibility: 71, overall: 60 },
    title: 'Startup Landing Page',
    fullUrl: 'https://startup-landing.com',
  },
  {
    id: 4,
    url: 'portfolio-site.dev',
    timestamp: 'Yesterday',
    scores: { performance: 91, seo: 94, accessibility: 90, overall: 92 },
    title: 'Portfolio Site',
    fullUrl: 'https://portfolio-site.dev',
  },
  {
    id: 5,
    url: 'ecommerce-shop.store',
    timestamp: '2 days ago',
    scores: { performance: 73, seo: 81, accessibility: 76, overall: 77 },
    title: 'E-commerce Shop',
    fullUrl: 'https://ecommerce-shop.store',
  },
];



const MainContent: React.FC<MainContentProps> = ({ analysis }) => {
  if (!analysis) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-500 p-12">
          <div className="text-6xl mb-6 opacity-30">⚡</div>
          <div className="text-xl font-semibold text-gray-900 mb-2">No Analysis Selected</div>
          <div className="text-sm">Enter a URL and run an analysis to get started</div>
        </div>
      </div>
    );
  }
}
  export default MainContent