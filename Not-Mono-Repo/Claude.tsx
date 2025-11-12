// import React, { useState } from 'react';


// // Sample data
// const sampleAnalyses: Analysis[] = [
//   {
//     id: 1,
//     url: 'example-store.com',
//     timestamp: '2 minutes ago',
//     scores: { performance: 52, seo: 78, accessibility: 85, overall: 67 },
//     title: 'Example Store - Online Retail Shop',
//     fullUrl: 'https://example-store.com',
//   },
//   {
//     id: 2,
//     url: 'myblog.io',
//     timestamp: '1 hour ago',
//     scores: { performance: 89, seo: 92, accessibility: 88, overall: 90 },
//     title: 'My Personal Blog',
//     fullUrl: 'https://myblog.io',
//   },
//   {
//     id: 3,
//     url: 'startup-landing.com',
//     timestamp: '3 hours ago',
//     scores: { performance: 42, seo: 68, accessibility: 71, overall: 60 },
//     title: 'Startup Landing Page',
//     fullUrl: 'https://startup-landing.com',
//   },
//   {
//     id: 4,
//     url: 'portfolio-site.dev',
//     timestamp: 'Yesterday',
//     scores: { performance: 91, seo: 94, accessibility: 90, overall: 92 },
//     title: 'Portfolio Site',
//     fullUrl: 'https://portfolio-site.dev',
//   },
//   {
//     id: 5,
//     url: 'ecommerce-shop.store',
//     timestamp: '2 days ago',
//     scores: { performance: 73, seo: 81, accessibility: 76, overall: 77 },
//     title: 'E-commerce Shop',
//     fullUrl: 'https://ecommerce-shop.store',
//   },
// ];

// const sampleMetrics: Metric[] = [
//   { title: 'First Contentful Paint', icon: '🎨', value: '3.2', unit: 's', target: '< 1.8s' },
//   { title: 'Largest Contentful Paint', icon: '🖼️', value: '5.1', unit: 's', target: '< 2.5s' },
//   { title: 'Total Blocking Time', icon: '⏱️', value: '890', unit: 'ms', target: '< 200ms' },
//   { title: 'Cumulative Layout Shift', icon: '📐', value: '0.18', unit: '', target: '< 0.1' },
// ];

// const sampleIssues: IssuesCollection = {
//   performance: [
//     {
//       severity: 'critical',
//       title: 'Large JavaScript Bundle Size',
//       description: 'Your main JavaScript bundle is 2.4 MB, which significantly impacts load time. First Contentful Paint is delayed by 3.2 seconds. This is causing a poor user experience, especially on mobile devices and slower connections.',
//       recommendation: 'Implement code splitting and lazy loading for non-critical components. Use dynamic imports to split your bundle into smaller chunks. Consider using tree-shaking to remove unused code. Target a main bundle size under 500 KB.',
//     },
//     {
//       severity: 'critical',
//       title: 'Unoptimized Images',
//       description: '23 images are not optimized or properly sized. Total image payload is 8.7 MB. Several images are being served at 4x their display size, wasting bandwidth and slowing down page load times significantly.',
//       recommendation: 'Convert images to modern formats like WebP or AVIF for better compression. Implement responsive images using srcset and sizes attributes. Add lazy loading to images below the fold. Consider using a CDN with automatic image optimization.',
//     },
//     {
//       severity: 'warning',
//       title: 'Render-Blocking Resources',
//       description: '5 render-blocking CSS files and 3 synchronous scripts are delaying page rendering by approximately 1.8 seconds. These resources must be downloaded and processed before the browser can display content.',
//       recommendation: 'Inline critical CSS directly in the HTML head. Defer non-critical CSS using media queries or JavaScript. Add async or defer attributes to non-critical scripts. Consider using a build tool to extract and inline critical CSS automatically.',
//     },
//     {
//       severity: 'info',
//       title: 'Browser Caching Not Configured',
//       description: 'Static assets don\'t have appropriate cache headers set, causing unnecessary re-downloads on repeat visits. This impacts return visitor experience and increases server load.',
//       recommendation: 'Set Cache-Control headers with max-age of at least 31536000 (1 year) for immutable assets. Use content hashing in filenames for cache busting when files change. Configure your CDN or server to send proper caching headers for all static resources.',
//     },
//   ],
//   seo: [
//     {
//       severity: 'warning',
//       title: 'Missing Meta Descriptions',
//       description: '12 out of 45 pages are missing meta descriptions. This affects how your pages appear in search engine results and can reduce click-through rates from search results pages.',
//       recommendation: 'Add unique, compelling meta descriptions (150-160 characters) for each page that accurately describe the content and include relevant keywords. Write descriptions that encourage users to click through from search results.',
//     },
//     {
//       severity: 'info',
//       title: 'Image Alt Text Incomplete',
//       description: '34% of images are missing alt attributes, which impacts both SEO and accessibility. Search engines use alt text to understand image content and index your pages appropriately.',
//       recommendation: 'Add descriptive alt text to all meaningful images, incorporating relevant keywords naturally. For decorative images that don\'t add information, use empty alt attributes (alt="") to indicate they should be ignored by screen readers.',
//     },
//     {
//       severity: 'info',
//       title: 'Improve Internal Linking Structure',
//       description: 'Several important product pages have minimal internal links pointing to them, reducing their discoverability by both users and search engines. Strong internal linking helps distribute page authority throughout your site.',
//       recommendation: 'Create a more robust internal linking structure by adding contextual links within content, implementing related product suggestions, and adding category navigation links. Ensure important pages are linked from your homepage or main navigation.',
//     },
//   ],
//   accessibility: [
//     {
//       severity: 'warning',
//       title: 'Color Contrast Issues',
//       description: '8 elements have insufficient color contrast ratios (below 4.5:1 for normal text), making text difficult to read for users with visual impairments or when viewing in bright light conditions.',
//       recommendation: 'Increase contrast ratios to meet WCAG AA standards: 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold). Use a contrast checker tool to verify all text meets these requirements. Consider adjusting your color palette to ensure accessibility.',
//     },
//     {
//       severity: 'info',
//       title: 'Form Labels Missing',
//       description: 'The newsletter signup form and search bar don\'t have properly associated labels for screen readers. This makes it difficult for users relying on assistive technology to understand the purpose of these form inputs.',
//       recommendation: 'Add proper label elements using the "for" attribute to explicitly associate labels with inputs. Alternatively, use aria-label or aria-labelledby attributes for better screen reader support. Ensure all form controls have accessible names.',
//     },
//   ],
//   bestPractices: [
//     {
//       severity: 'info',
//       title: 'Mixed Content Detected',
//       description: 'Some resources are being loaded over HTTP instead of HTTPS. This can trigger browser warnings and reduce user trust in your site\'s security.',
//       recommendation: 'Ensure all resources (images, scripts, stylesheets) are loaded over HTTPS. Update any hardcoded HTTP URLs to use HTTPS or protocol-relative URLs. Configure your server to redirect all HTTP requests to HTTPS.',
//     },
//   ],
// };

// // Helper function to get score color class
// const getScoreColorClass = (score: number): ScoreColorClass => {
//   if (score >= 90) return 'excellent';
//   if (score >= 80) return 'good';
//   if (score >= 50) return 'fair';
//   return 'poor';
// };



// // Components
// const Sidebar: React.FC<SidebarProps> = ({ 
//   analyses, 
//   activeId, 
//   onSelectAnalysis, 
//   urlInput, 
//   setUrlInput, 
//   onAnalyze 
// }) => {
//   return (
//     <div className="w-[340px] bg-white border-r border-gray-200 flex flex-col shadow-lg">
//       <div className="p-7 border-b border-gray-200 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
//         <div className="text-xl font-bold mb-1.5 flex items-center gap-2">
//           <span>⚡</span>
//           <span>Dejankify My Site</span>
//         </div>
//         <div className="text-sm opacity-90">Performance & SEO Analyzer</div>
//       </div>

//       <div className="p-6 border-b border-gray-200 bg-gray-50">
//         <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
//           Analyze Website
//         </div>
//         <input
//           type="text"
//           className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all bg-white"
//           placeholder="https://example.com"
//           value={urlInput}
//           onChange={(e) => setUrlInput(e.target.value)}
//         />
//         <button
//           onClick={onAnalyze}
//           className="w-full mt-3 px-4 py-3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
//         >
//           <span>🔍</span>
//           <span>Run Analysis</span>
//         </button>
//       </div>

//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="px-3 py-2 pb-4 text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center justify-between">
//           <span>Analysis History</span>
//           <span className="bg-gray-200 px-2 py-0.5 rounded-lg font-semibold">{analyses.length}</span>
//         </div>

//         {analyses.map((analysis) => (
//           <HistoryItem
//             key={analysis.id}
//             analysis={analysis}
//             isActive={analysis.id === activeId}
//             onClick={() => onSelectAnalysis(analysis.id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const HistoryItem: React.FC<HistoryItemProps> = ({ analysis, isActive, onClick }) => {
//   const getScoreBadgeClass = (score: number): string => {
//     if (score >= 80) return 'bg-green-100 text-green-800';
//     if (score >= 50) return 'bg-yellow-100 text-yellow-800';
//     return 'bg-red-100 text-red-800';
//   };

//   return (
//     <div
//       onClick={onClick}
//       className={`p-3.5 mb-2.5 rounded-lg cursor-pointer transition-all border-2 ${
//         isActive
//           ? 'bg-indigo-50 border-indigo-500 shadow-md'
//           : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:translate-x-0.5'
//       }`}
//     >
//       <div className="text-sm font-semibold text-gray-900 mb-1.5 truncate">
//         {analysis.url}
//       </div>
//       <div className="text-xs text-gray-600 mb-2">
//         {analysis.timestamp}
//       </div>
//       <div className="flex gap-1.5 flex-wrap">
//         <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${getScoreBadgeClass(analysis.scores.performance)}`}>
//           Perf: {analysis.scores.performance}
//         </span>
//         <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${getScoreBadgeClass(analysis.scores.seo)}`}>
//           SEO: {analysis.scores.seo}
//         </span>
//         <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded ${getScoreBadgeClass(analysis.scores.accessibility)}`}>
//           A11y: {analysis.scores.accessibility}
//         </span>
//       </div>
//     </div>
//   );
// };

// const ScoreCircle: React.FC<ScoreCircleProps> = ({ score, label, sublabel }) => {
//   const colorClass = getScoreColorClass(score);
  
//   const colorStyles: Record<ScoreColorClass, { bg: string; text: string; gradient: string }> = {
//     excellent: {
//       bg: 'bg-green-100',
//       text: 'text-green-800',
//       gradient: 'bg-gradient-to-br from-green-500 to-green-600',
//     },
//     good: {
//       bg: 'bg-green-100',
//       text: 'text-green-800',
//       gradient: 'bg-gradient-to-br from-green-400 to-green-500',
//     },
//     fair: {
//       bg: 'bg-yellow-100',
//       text: 'text-yellow-800',
//       gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500',
//     },
//     poor: {
//       bg: 'bg-red-100',
//       text: 'text-red-800',
//       gradient: 'bg-gradient-to-br from-red-400 to-red-500',
//     },
//   };

//   const styles = colorStyles[colorClass];

//   return (
//     <div className="flex items-center gap-3.5">
//       <div className={`relative w-[68px] h-[68px] rounded-full flex items-center justify-center text-[22px] font-extrabold ${styles.bg} ${styles.text} before:content-[''] before:absolute before:inset-[-4px] before:rounded-full before:p-1 before:${styles.gradient} before:-z-10`}>
//         {score}
//       </div>
//       <div className="flex flex-col gap-0.5">
//         <div className="text-sm font-bold text-gray-900">{label}</div>
//         <div className="text-[13px] text-gray-600 font-medium">{sublabel}</div>
//       </div>
//     </div>
//   );
// };

// const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
//   return (
//     <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
//       <div className="flex justify-between items-center mb-3">
//         <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
//           {metric.title}
//         </div>
//         <span className="text-xl">{metric.icon}</span>
//       </div>
//       <div className="text-[32px] font-extrabold text-gray-900 mb-1">
//         {metric.value}
//         <span className="text-sm text-gray-600 font-medium">{metric.unit}</span>
//       </div>
//       <div className="text-sm text-gray-600 font-medium">Target: {metric.target}</div>
//     </div>
//   );
// };

// const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
//   interface SeverityConfig {
//     borderColor: string;
//     bgColor: string;
//     iconBg: string;
//     icon: string;
//   }

//   const severityConfig: Record<IssueSeverity, SeverityConfig> = {
//     critical: {
//       borderColor: 'border-l-red-500',
//       bgColor: 'bg-red-50 hover:bg-red-100',
//       iconBg: 'bg-red-500',
//       icon: '!',
//     },
//     warning: {
//       borderColor: 'border-l-orange-500',
//       bgColor: 'bg-orange-50 hover:bg-orange-100',
//       iconBg: 'bg-orange-500',
//       icon: '⚠',
//     },
//     info: {
//       borderColor: 'border-l-blue-500',
//       bgColor: 'bg-blue-50 hover:bg-blue-100',
//       iconBg: 'bg-blue-500',
//       icon: 'ℹ',
//     },
//   };

//   const config = severityConfig[issue.severity];

//   return (
//     <div className={`flex gap-4 p-4 rounded-lg border-l-4 ${config.borderColor} ${config.bgColor} transition-all hover:translate-x-0.5`}>
//       <div className="flex-shrink-0">
//         <div className={`w-8 h-8 rounded-lg ${config.iconBg} text-white flex items-center justify-center text-base font-bold`}>
//           {config.icon}
//         </div>
//       </div>
//       <div className="flex-1">
//         <div className="text-[15px] font-bold text-gray-900 mb-2">
//           {issue.title}
//         </div>
//         <div className="text-sm text-gray-700 leading-relaxed mb-3">
//           {issue.description}
//         </div>
//         <div className="text-[13px] text-gray-900 bg-white p-3 rounded-lg border border-gray-200 leading-relaxed">
//           <div className="font-bold text-indigo-600 mb-1.5 flex items-center gap-1.5">
//             <span>💡</span>
//             <span>Recommendation</span>
//           </div>
//           {issue.recommendation}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Section: React.FC<SectionProps> = ({ title, subtitle, icon, score, issues, iconBg }) => {
//   const getScoreBgClass = (score: number): string => {
//     if (score >= 80) return 'bg-green-100 text-green-800';
//     if (score >= 50) return 'bg-yellow-100 text-yellow-800';
//     return 'bg-red-100 text-red-800';
//   };

//   return (
//     <div className="bg-white rounded-2xl p-7 mb-7 shadow-sm border border-gray-200">
//       <div className="flex items-center gap-3.5 mb-6 pb-5 border-b-2 border-gray-100">
//         <div className={`w-[42px] h-[42px] rounded-lg ${iconBg} flex items-center justify-center text-xl flex-shrink-0`}>
//           {icon}
//         </div>
//         <div className="flex-1">
//           <h2 className="text-xl font-extrabold text-gray-900 mb-1">{title}</h2>
//           <div className="text-[13px] text-gray-600">{subtitle}</div>
//         </div>
//         <div className={`text-[28px] font-extrabold px-4 py-2 rounded-lg ${getScoreBgClass(score)}`}>
//           {score}
//         </div>
//       </div>

//       <div className="flex flex-col gap-4">
//         {issues.map((issue, index) => (
//           <IssueItem key={index} issue={issue} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const MainContent: React.FC<MainContentProps> = ({ analysis }) => {
//   if (!analysis) {
//     return (
//       <div className="flex-1 flex items-center justify-center bg-gray-50">
//         <div className="text-center text-gray-500 p-12">
//           <div className="text-6xl mb-6 opacity-30">⚡</div>
//           <div className="text-xl font-semibold text-gray-900 mb-2">No Analysis Selected</div>
//           <div className="text-sm">Enter a URL and run an analysis to get started</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
//       <div className="px-10 py-8 bg-white border-b border-gray-200">
//         <div className="text-sm text-gray-600 mb-2 flex items-center gap-2">
//           <span>Analyzing:</span>
//           <span className="bg-gray-100 px-2.5 py-1 rounded font-mono text-[13px]">
//             {analysis.fullUrl}
//           </span>
//         </div>
//         <h1 className="text-[28px] font-extrabold text-gray-900 mb-5">
//           {analysis.title}
//         </h1>

//         <div className="flex gap-7">
//           <ScoreCircle 
//             score={analysis.scores.overall} 
//             label="Overall Score" 
//             sublabel="Needs Improvement" 
//           />
//           <ScoreCircle 
//             score={analysis.scores.performance} 
//             label="Performance" 
//             sublabel="Poor" 
//           />
//           <ScoreCircle 
//             score={analysis.scores.seo} 
//             label="SEO" 
//             sublabel="Good" 
//           />
//           <ScoreCircle 
//             score={analysis.scores.accessibility} 
//             label="Accessibility" 
//             sublabel="Very Good" 
//           />
//         </div>
//       </div>

//       <div className="flex-1 overflow-y-auto px-10 py-8">
//         <div className="grid grid-cols-4 gap-5 mb-8">
//           {sampleMetrics.map((metric, index) => (
//             <MetricCard key={index} metric={metric} />
//           ))}
//         </div>

//         <Section
//           title="Performance Issues"
//           subtitle="4 issues found requiring attention"
//           icon="⚡"
//           score={analysis.scores.performance}
//           issues={sampleIssues.performance}
//           iconBg="bg-gradient-to-br from-indigo-500 to-purple-600"
//         />

//         <Section
//           title="SEO Optimization"
//           subtitle="3 opportunities to improve search visibility"
//           icon="🔍"
//           score={analysis.scores.seo}
//           issues={sampleIssues.seo}
//           iconBg="bg-gradient-to-br from-green-500 to-green-600"
//         />

//         <Section
//           title="Accessibility"
//           subtitle="2 issues affecting user experience"
//           icon="♿"
//           score={analysis.scores.accessibility}
//           issues={sampleIssues.accessibility}
//           iconBg="bg-gradient-to-br from-orange-500 to-orange-600"
//         />

//         <Section
//           title="Best Practices"
//           subtitle="General web development standards"
//           icon="✓"
//           score={82}
//           issues={sampleIssues.bestPractices}
//           iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
//         />
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const App: React.FC = () => {
//   const [analyses] = useState<Analysis[]>(sampleAnalyses);
//   const [activeId, setActiveId] = useState<number>(1);
//   const [urlInput, setUrlInput] = useState<string>('');

//   const activeAnalysis = analyses.find(a => a.id === activeId);

//   const handleAnalyze = (): void => {
//     if (urlInput.trim()) {
//       alert(`Analyzing: ${urlInput}`);
//       // In a real app, you would trigger the analysis here
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       <Sidebar
//         analyses={analyses}
//         activeId={activeId}
//         onSelectAnalysis={setActiveId}
//         urlInput={urlInput}
//         setUrlInput={setUrlInput}
//         onAnalyze={handleAnalyze}
//       />
//       <MainContent analysis={activeAnalysis} />
//     </div>
//   );
// };

// export default App;