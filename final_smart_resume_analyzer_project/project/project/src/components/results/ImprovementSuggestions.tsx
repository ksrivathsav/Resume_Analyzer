import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { Suggestion } from '../../types';

interface ImprovementSuggestionsProps {
  suggestions: Suggestion[];
}

const ImprovementSuggestions: React.FC<ImprovementSuggestionsProps> = ({ suggestions }) => {
  const [openSuggestion, setOpenSuggestion] = useState<number | null>(null);

  const toggleSuggestion = (index: number) => {
    setOpenSuggestion(openSuggestion === index ? null : index);
  };

  // Group suggestions by priority
  const highPriority = suggestions.filter(item => item.priority === 'high');
  const mediumPriority = suggestions.filter(item => item.priority === 'medium');
  const lowPriority = suggestions.filter(item => item.priority === 'low');

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6">Improvement Suggestions</h2>
      
      {highPriority.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            High Priority
          </h3>
          <div className="space-y-3">
            {highPriority.map((suggestion, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50"
                  onClick={() => toggleSuggestion(index)}
                >
                  <span className="font-medium">{suggestion.title}</span>
                  {openSuggestion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openSuggestion === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">{suggestion.description}</p>
                    
                    {suggestion.examples && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                        <div className="bg-white p-3 rounded border border-gray-200 text-sm text-gray-700">
                          {suggestion.examples}
                        </div>
                      </div>
                    )}
                    
                    {suggestion.action && (
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-800">{suggestion.action}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {mediumPriority.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            Medium Priority
          </h3>
          <div className="space-y-3">
            {mediumPriority.map((suggestion, index) => (
              <div 
                key={index + highPriority.length} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50"
                  onClick={() => toggleSuggestion(index + highPriority.length)}
                >
                  <span className="font-medium">{suggestion.title}</span>
                  {openSuggestion === index + highPriority.length ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openSuggestion === index + highPriority.length && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">{suggestion.description}</p>
                    
                    {suggestion.examples && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                        <div className="bg-white p-3 rounded border border-gray-200 text-sm text-gray-700">
                          {suggestion.examples}
                        </div>
                      </div>
                    )}
                    
                    {suggestion.action && (
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-800">{suggestion.action}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {lowPriority.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Low Priority
          </h3>
          <div className="space-y-3">
            {lowPriority.map((suggestion, index) => (
              <div 
                key={index + highPriority.length + mediumPriority.length} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50"
                  onClick={() => toggleSuggestion(index + highPriority.length + mediumPriority.length)}
                >
                  <span className="font-medium">{suggestion.title}</span>
                  {openSuggestion === index + highPriority.length + mediumPriority.length ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openSuggestion === index + highPriority.length + mediumPriority.length && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">{suggestion.description}</p>
                    
                    {suggestion.examples && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
                        <div className="bg-white p-3 rounded border border-gray-200 text-sm text-gray-700">
                          {suggestion.examples}
                        </div>
                      </div>
                    )}
                    
                    {suggestion.action && (
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-800">{suggestion.action}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImprovementSuggestions;