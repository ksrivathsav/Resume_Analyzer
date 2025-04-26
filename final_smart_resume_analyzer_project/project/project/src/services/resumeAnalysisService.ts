import { AnalysisResult, DomainScore, KeywordMatch, Suggestion } from '../types';

// Simulate resume analysis - in a real app, this would call a backend API
export const analyzeResume = async (
  resumeText: string,
  jobDescription: string,
  domains: string[]
): Promise<AnalysisResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return mock analysis result
  return getMockAnalysisResult(domains);
};

// Helper function to generate mock analysis result
const getMockAnalysisResult = (domains: string[]): AnalysisResult => {
  const domainScores: DomainScore[] = [];
  
  if (domains.includes('frontend')) {
    domainScores.push({
      domain: 'frontend',
      domainName: 'Frontend',
      score: 78,
      strengths: [
        'Strong React.js experience',
        'Good CSS/SCSS skills',
        'JavaScript framework proficiency'
      ],
      weaknesses: [
        'Missing TypeScript experience',
        'Limited accessibility mentions',
        'No state management examples'
      ]
    });
  }
  
  if (domains.includes('backend')) {
    domainScores.push({
      domain: 'backend',
      domainName: 'Backend',
      score: 65,
      strengths: [
        'Node.js experience',
        'Database knowledge',
        'RESTful API implementation'
      ],
      weaknesses: [
        'No mention of caching strategies',
        'Limited API security details',
        'Missing microservice architecture experience'
      ]
    });
  }
  
  if (domains.includes('devops')) {
    domainScores.push({
      domain: 'devops',
      domainName: 'DevOps',
      score: 42,
      strengths: [
        'Docker experience',
        'Basic CI/CD knowledge'
      ],
      weaknesses: [
        'No Kubernetes experience mentioned',
        'Missing infrastructure as code',
        'Limited cloud platform specifics',
        'No monitoring or observability tools'
      ]
    });
  }
  
  if (domains.includes('ml')) {
    domainScores.push({
      domain: 'ml',
      domainName: 'Machine Learning',
      score: 81,
      strengths: [
        'TensorFlow and PyTorch experience',
        'Strong data processing skills',
        'Model deployment knowledge',
        'Computer vision projects'
      ],
      weaknesses: [
        'Limited NLP experience'
      ]
    });
  }
  
  // Calculate overall score
  const overallScore = Math.round(
    domainScores.reduce((acc, domain) => acc + domain.score, 0) / domainScores.length
  );
  
  // Generate mock keyword matches
  const keywordMatches: KeywordMatch[] = [
    { keyword: 'React', relevance: 95 },
    { keyword: 'JavaScript', relevance: 90 },
    { keyword: 'TypeScript', relevance: 85 },
    { keyword: 'Node.js', relevance: 80 },
    { keyword: 'REST API', relevance: 75 },
    { keyword: 'TensorFlow', relevance: 70 },
    { keyword: 'Docker', relevance: 65 }
  ];
  
  // Generate mock missed keywords
  const missedKeywords: string[] = [
    'Redux',
    'Kubernetes',
    'AWS',
    'CI/CD',
    'GraphQL'
  ];
  
  // Generate mock overused keywords
  const overusedKeywords = [
    { keyword: 'Developed', count: 12 },
    { keyword: 'Implemented', count: 8 },
    { keyword: 'Team player', count: 5 }
  ];
  
  // Generate mock suggestions
  const suggestions: Suggestion[] = [
    {
      title: 'Add measurable achievements',
      description: 'Your resume lists responsibilities but lacks quantifiable achievements. Add metrics to demonstrate impact.',
      examples: 'Instead of "Developed a React application", try "Developed a React application that increased user engagement by 35% and reduced load time by 40%".',
      action: 'Add 2-3 measurable outcomes for each position.',
      priority: 'high'
    },
    {
      title: 'Improve ATS-friendly formatting',
      description: 'Your resume uses complex formatting that may confuse ATS systems.',
      examples: 'Use standard section headings like "Experience," "Education," and "Skills." Avoid tables, columns, and graphics.',
      action: 'Simplify formatting and use standard section headers.',
      priority: 'high'
    },
    {
      title: 'Incorporate missing technical keywords',
      description: 'Add relevant technical keywords that are missing from your resume.',
      examples: 'Include terms like "Redux", "Kubernetes", "AWS" and "CI/CD" where appropriate.',
      action: 'Review the missing keywords list and incorporate relevant ones into your experience.',
      priority: 'medium'
    },
    {
      title: 'Reduce keyword redundancy',
      description: 'Some terms appear too frequently in your resume, which can trigger ATS spam filters.',
      examples: 'Instead of repeatedly using "Developed" or "Implemented", use varied action verbs like "Engineered", "Architected", "Created", "Built", etc.',
      action: 'Use a wider variety of action verbs and technical terminology.',
      priority: 'medium'
    },
    {
      title: 'Add a technical skills section',
      description: 'Create a dedicated technical skills section to improve keyword matching.',
      examples: 'Group skills by category: "Languages: JavaScript, TypeScript, Python" | "Frameworks: React, Node.js, Express"',
      action: 'Add a clearly labeled skills section with categorized technical skills.',
      priority: 'low'
    }
  ];
  
  return {
    overallScore,
    domainScores,
    keywordMatches,
    missedKeywords,
    overusedKeywords,
    suggestions
  };
};