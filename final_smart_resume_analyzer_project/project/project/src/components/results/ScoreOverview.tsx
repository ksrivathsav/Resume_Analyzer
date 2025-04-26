import React from 'react';
import { DomainScore } from '../../types';

interface ScoreOverviewProps {
  overallScore: number;
  domainScores: DomainScore[];
}

const ScoreOverview: React.FC<ScoreOverviewProps> = ({ overallScore, domainScores }) => {
  // Get score color based on value
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Get progress bar color based on value
  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Overall ATS Score</h2>
      
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="relative w-36 h-36 mb-6 md:mb-0 md:mr-8">
          {/* Circle progress background */}
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="stroke-current text-gray-200"
              fill="none"
              strokeWidth="3"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={`stroke-current ${getScoreColor(overallScore)}`}
              fill="none"
              strokeWidth="3"
              strokeDasharray={`${overallScore}, 100`}
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
            <span className={getScoreColor(overallScore)}>{overallScore}</span>
          </div>
        </div>
        
        <div className="flex-grow">
          <p className="text-lg mb-4">
            {overallScore >= 80 
              ? 'Great job! Your resume is well-optimized for ATS systems.'
              : overallScore >= 60
                ? 'Your resume needs some improvements to perform better with ATS systems.'
                : 'Your resume needs significant improvements to pass ATS screenings.'
            }
          </p>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">80-100: Excellent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-600">60-79: Needs Improvement</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">0-59: Needs Significant Work</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Domain-Specific Scores</h3>
        <div className="space-y-4">
          {domainScores.map((domain) => (
            <div key={domain.domain} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{domain.domainName}</span>
                <span className={`font-medium ${getScoreColor(domain.score)}`}>{domain.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`${getProgressColor(domain.score)} rounded-full h-2 transition-all duration-500 ease-in-out`}
                  style={{ width: `${domain.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreOverview;