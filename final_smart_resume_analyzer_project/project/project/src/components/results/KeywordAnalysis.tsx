import React, { useState } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import { KeywordMatch } from '../../types';

interface KeywordAnalysisProps {
  keywordMatches: KeywordMatch[];
  missedKeywords: string[];
  overusedKeywords: { keyword: string; count: number }[];
}

const KeywordAnalysis: React.FC<KeywordAnalysisProps> = ({ 
  keywordMatches, 
  missedKeywords, 
  overusedKeywords 
}) => {
  const [activeTab, setActiveTab] = useState('matches');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Keyword Analysis</h2>
      
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 border-b-2 font-medium text-sm ${
            activeTab === 'matches'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('matches')}
        >
          Matches ({keywordMatches.length})
        </button>
        <button
          className={`py-2 px-4 border-b-2 font-medium text-sm ${
            activeTab === 'missed'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('missed')}
        >
          Missing Keywords ({missedKeywords.length})
        </button>
        <button
          className={`py-2 px-4 border-b-2 font-medium text-sm ${
            activeTab === 'overused'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('overused')}
        >
          Overused ({overusedKeywords.length})
        </button>
      </div>
      
      {activeTab === 'matches' && (
        <div>
          <p className="text-gray-600 mb-4">
            These keywords were found in your resume and match the job description or industry standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keywordMatches.map((match) => (
              <div 
                key={match.keyword} 
                className="p-3 bg-green-50 border border-green-100 rounded-md flex items-center"
              >
                <div className="p-1 rounded-full bg-green-100 mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-green-800">{match.keyword}</p>
                  <p className="text-xs text-green-700">
                    Relevance: {match.relevance}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'missed' && (
        <div>
          <p className="text-gray-600 mb-4">
            These important keywords were not found in your resume but are relevant to the position.
          </p>
          
          {missedKeywords.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {missedKeywords.map((keyword) => (
                <div 
                  key={keyword} 
                  className="p-3 bg-red-50 border border-red-100 rounded-md flex items-center"
                >
                  <div className="p-1 rounded-full bg-red-100 mr-3">
                    <X className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="font-medium text-red-800">{keyword}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-green-600 font-medium">
              Great job! Your resume includes all the important keywords for this position.
            </p>
          )}
        </div>
      )}
      
      {activeTab === 'overused' && (
        <div>
          <p className="text-gray-600 mb-4">
            These keywords appear too frequently in your resume, which may trigger ATS spam filters.
          </p>
          
          {overusedKeywords.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {overusedKeywords.map((item) => (
                <div 
                  key={item.keyword} 
                  className="p-3 bg-yellow-50 border border-yellow-100 rounded-md flex items-center"
                >
                  <div className="p-1 rounded-full bg-yellow-100 mr-3">
                    <RotateCcw className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-yellow-800">{item.keyword}</p>
                    <p className="text-xs text-yellow-700">
                      Used {item.count} times
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-green-600 font-medium">
              Your keyword usage is well-balanced. No overused keywords detected.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default KeywordAnalysis;