export interface KeywordMatch {
  keyword: string;
  relevance: number;
}

export interface DomainScore {
  domain: string;
  domainName: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
}

export interface Suggestion {
  title: string;
  description: string;
  examples?: string;
  action?: string;
  priority: 'high' | 'medium' | 'low';
}

export interface AnalysisResult {
  overallScore: number;
  domainScores: DomainScore[];
  keywordMatches: KeywordMatch[];
  missedKeywords: string[];
  overusedKeywords: { keyword: string; count: number }[];
  suggestions: Suggestion[];
}