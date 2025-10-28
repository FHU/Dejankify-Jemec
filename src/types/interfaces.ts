// Types and Interfaces
export interface Scores {
  performance: number;
  seo: number;
  accessibility: number;
  overall: number;
}


export interface Analysis {
  id: number;
  url: string;
  timestamp: string;
  scores: Scores;
  title: string;
  fullUrl: string;
}

export interface Metric {
  title: string;
  icon: string;
  value: string;
  unit: string;
  target: string;
}

export type IssueSeverity = 'critical' | 'warning' | 'info';

export interface Issue {
  severity: IssueSeverity;
  title: string;
  description: string;
  recommendation: string;
}

export interface IssuesCollection {
  performance: Issue[];
  seo: Issue[];
  accessibility: Issue[];
  bestPractices: Issue[];
}

export type ScoreColorClass = 'excellent' | 'good' | 'fair' | 'poor';


// Component Props Interfaces
export interface SidebarProps {
  analyses: Analysis[];
  activeId: number;
  onSelectAnalysis: (id: number) => void;
  urlInput: string;
  setUrlInput: (value: string) => void;
  onAnalyze: () => void;
}

export interface HistoryItemProps {
  analysis: Analysis;
  isActive: boolean;
  onClick: () => void;
}

export interface ScoreCircleProps {
  score: number;
  label: string;
  sublabel: string;
}

export interface MetricCardProps {
  metric: Metric;
}

export interface IssueItemProps {
  issue: Issue;
}

export interface SectionProps {
  title: string;
  subtitle: string;
  icon: string;
  score: number;
  issues: Issue[];
  iconBg: string;
}

export interface ScoreNumberProps {
  score: number;
}

export interface MainContentProps {
  analysis: Analysis | undefined;
}
