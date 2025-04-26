import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Download, ArrowLeft } from 'lucide-react';
import ScoreOverview from '../components/results/ScoreOverview';
import KeywordAnalysis from '../components/results/KeywordAnalysis';
import DomainScoreCards from '../components/results/DomainScoreCards';
import ImprovementSuggestions from '../components/results/ImprovementSuggestions';
import { AnalysisResult } from '../types';

const ResultsPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve analysis results from sessionStorage
    const storedResults = sessionStorage.getItem('analysisResults');
    
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      // If no results are found, redirect to analysis page
      navigate('/analysis');
    }
    
    setLoading(false);
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="pt-20 pb-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">No Analysis Results</h1>
          <p className="text-gray-600 mb-8">
            No analysis results were found. Please upload your resume to get started.
          </p>
          <button
            onClick={() => navigate('/analysis')}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Start New Analysis
          </button>
        </div>
      </div>
    );
  }

  const handleDownloadReport = () => {
    // Logic to generate and download PDF report
    alert('Report download functionality would be implemented here');
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Resume Analysis Results</h1>
            <p className="text-gray-600">
              Based on ATS algorithms and industry standards
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={handleDownloadReport}
              className="px-4 py-2 rounded-md bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-colors flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </button>
            <button
              onClick={() => navigate('/analysis')}
              className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              New Analysis
            </button>
          </div>
        </div>

        {/* Score Overview */}
        <ScoreOverview 
          overallScore={results.overallScore} 
          domainScores={results.domainScores} 
        />

        {/* Domain Score Cards */}
        <DomainScoreCards domainScores={results.domainScores} />

        {/* Keyword Analysis */}
        <KeywordAnalysis 
          keywordMatches={results.keywordMatches} 
          missedKeywords={results.missedKeywords} 
          overusedKeywords={results.overusedKeywords}
        />

        {/* Improvement Suggestions */}
        <ImprovementSuggestions suggestions={results.suggestions} />
      </div>
    </div>
  );
};

export default ResultsPage;