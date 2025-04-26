import React from 'react';
import { Terminal, Database, Server, Brain } from 'lucide-react';
import { DomainScore } from '../../types';

interface DomainScoreCardsProps {
  domainScores: DomainScore[];
}

const DomainScoreCards: React.FC<DomainScoreCardsProps> = ({ domainScores }) => {
  // Map domain to icon
  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'frontend':
        return <Terminal className="h-8 w-8 text-blue-600" />;
      case 'backend':
        return <Database className="h-8 w-8 text-teal-600" />;
      case 'devops':
        return <Server className="h-8 w-8 text-purple-600" />;
      case 'ml':
        return <Brain className="h-8 w-8 text-orange-600" />;
      default:
        return <Terminal className="h-8 w-8 text-blue-600" />;
    }
  };

  // Get score color based on value
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get background color based on domain
  const getBackgroundColor = (domain: string) => {
    switch (domain) {
      case 'frontend':
        return 'bg-blue-50';
      case 'backend':
        return 'bg-teal-50';
      case 'devops':
        return 'bg-purple-50';
      case 'ml':
        return 'bg-orange-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {domainScores.map((domain) => (
        <div 
          key={domain.domain} 
          className={`rounded-lg shadow-md p-6 ${getBackgroundColor(domain.domain)}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {getDomainIcon(domain.domain)}
              <h3 className="text-xl font-bold ml-3">{domain.domainName}</h3>
            </div>
            <div className={`text-2xl font-bold ${getScoreColor(domain.score)}`}>
              {domain.score}%
            </div>
          </div>
          
          <div className="space-y-3">
            {domain.strengths.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Strengths</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {domain.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {domain.weaknesses.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Areas to Improve</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                  {domain.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DomainScoreCards;