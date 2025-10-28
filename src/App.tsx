import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainContent from './components/MainContent'
import type { Analysis } from './types/interfaces'
import Section from './components/Section'
import type { IssuesCollection } from './types/interfaces'

const sampleIssues: IssuesCollection = {
  performance: [
    {
      severity: 'critical',
      title: 'Large JavaScript Bundle Size',
      description: 'Your main JavaScript bundle is 2.4 MB, which significantly impacts load time. First Contentful Paint is delayed by 3.2 seconds. This is causing a poor user experience, especially on mobile devices and slower connections.',
      recommendation: 'Implement code splitting and lazy loading for non-critical components. Use dynamic imports to split your bundle into smaller chunks. Consider using tree-shaking to remove unused code. Target a main bundle size under 500 KB.',
    },
    {
      severity: 'critical',
      title: 'Unoptimized Images',
      description: '23 images are not optimized or properly sized. Total image payload is 8.7 MB. Several images are being served at 4x their display size, wasting bandwidth and slowing down page load times significantly.',
      recommendation: 'Convert images to modern formats like WebP or AVIF for better compression. Implement responsive images using srcset and sizes attributes. Add lazy loading to images below the fold. Consider using a CDN with automatic image optimization.',
    },
    {
      severity: 'warning',
      title: 'Render-Blocking Resources',
      description: '5 render-blocking CSS files and 3 synchronous scripts are delaying page rendering by approximately 1.8 seconds. These resources must be downloaded and processed before the browser can display content.',
      recommendation: 'Inline critical CSS directly in the HTML head. Defer non-critical CSS using media queries or JavaScript. Add async or defer attributes to non-critical scripts. Consider using a build tool to extract and inline critical CSS automatically.',
    },
    {
      severity: 'info',
      title: 'Browser Caching Not Configured',
      description: 'Static assets don\'t have appropriate cache headers set, causing unnecessary re-downloads on repeat visits. This impacts return visitor experience and increases server load.',
      recommendation: 'Set Cache-Control headers with max-age of at least 31536000 (1 year) for immutable assets. Use content hashing in filenames for cache busting when files change. Configure your CDN or server to send proper caching headers for all static resources.',
    },
  ],
  seo: [
    {
      severity: 'warning',
      title: 'Missing Meta Descriptions',
      description: '12 out of 45 pages are missing meta descriptions. This affects how your pages appear in search engine results and can reduce click-through rates from search results pages.',
      recommendation: 'Add unique, compelling meta descriptions (150-160 characters) for each page that accurately describe the content and include relevant keywords. Write descriptions that encourage users to click through from search results.',
    },
    {
      severity: 'info',
      title: 'Image Alt Text Incomplete',
      description: '34% of images are missing alt attributes, which impacts both SEO and accessibility. Search engines use alt text to understand image content and index your pages appropriately.',
      recommendation: 'Add descriptive alt text to all meaningful images, incorporating relevant keywords naturally. For decorative images that don\'t add information, use empty alt attributes (alt="") to indicate they should be ignored by screen readers.',
    },
    {
      severity: 'info',
      title: 'Improve Internal Linking Structure',
      description: 'Several important product pages have minimal internal links pointing to them, reducing their discoverability by both users and search engines. Strong internal linking helps distribute page authority throughout your site.',
      recommendation: 'Create a more robust internal linking structure by adding contextual links within content, implementing related product suggestions, and adding category navigation links. Ensure important pages are linked from your homepage or main navigation.',
    },
  ],
  accessibility: [
    {
      severity: 'warning',
      title: 'Color Contrast Issues',
      description: '8 elements have insufficient color contrast ratios (below 4.5:1 for normal text), making text difficult to read for users with visual impairments or when viewing in bright light conditions.',
      recommendation: 'Increase contrast ratios to meet WCAG AA standards: 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold). Use a contrast checker tool to verify all text meets these requirements. Consider adjusting your color palette to ensure accessibility.',
    },
    {
      severity: 'info',
      title: 'Form Labels Missing',
      description: 'The newsletter signup form and search bar don\'t have properly associated labels for screen readers. This makes it difficult for users relying on assistive technology to understand the purpose of these form inputs.',
      recommendation: 'Add proper label elements using the "for" attribute to explicitly associate labels with inputs. Alternatively, use aria-label or aria-labelledby attributes for better screen reader support. Ensure all form controls have accessible names.',
    },
  ],
  bestPractices: [
    {
      severity: 'info',
      title: 'Mixed Content Detected',
      description: 'Some resources are being loaded over HTTP instead of HTTPS. This can trigger browser warnings and reduce user trust in your site\'s security.',
      recommendation: 'Ensure all resources (images, scripts, stylesheets) are loaded over HTTPS. Update any hardcoded HTTP URLs to use HTTPS or protocol-relative URLs. Configure your server to redirect all HTTP requests to HTTPS.',
    },
  ],
};

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



function App() {
  const [count, setCount] = useState(0)
  const [analyses] = useState<Analysis[]>(sampleAnalyses);
  const [activeId, setActiveId] = useState<number>(1);
  // const [urlInput, setUrlInput] = useState<string>('');

  const activeAnalysis = analyses.find(a => a.id === activeId);

  // const handleAnalyze = (): void => {
  //   if (urlInput.trim()) {
  //     alert(`Analyzing: ${urlInput}`);
  //     // In a real app, you would trigger the analysis here
  //   }
  // };

  return (
    <>
      <div>
        <MainContent analysis={activeAnalysis} />
        <Section title={"Hi there"} subtitle={"seo trying"} icon="A" score={80} issues={sampleIssues["performance"]} iconBg="blue" />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
