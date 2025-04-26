import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, X, Check, AlertCircle } from 'lucide-react';
import ResumeUploader from '../components/analysis/ResumeUploader';
import JobDescriptionInput from '../components/analysis/JobDescriptionInput';
import DomainSelector from '../components/analysis/DomainSelector';
import { analyzeResume } from '../services/resumeAnalysisService';

const AnalysisPage = () => {
  const navigate = useNavigate();
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleResumeUpload = (text: string) => {
    setResumeText(text);
    setError('');
  };

  const handleJobDescriptionChange = (text: string) => {
    setJobDescription(text);
  };

  const handleDomainChange = (domains: string[]) => {
    setSelectedDomains(domains);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!resumeText) {
      setError('Please upload your resume');
      return;
    }
    
    if (selectedDomains.length === 0) {
      setError('Please select at least one domain');
      return;
    }
    
    try {
      setIsAnalyzing(true);
      
      // Call analysis service
      const results = await analyzeResume(resumeText, jobDescription, selectedDomains);
      
      // Store results in sessionStorage to pass to results page
      sessionStorage.setItem('analysisResults', JSON.stringify(results));
      
      // Navigate to results page
      navigate('/results');
    } catch (err) {
      setError('An error occurred during analysis. Please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Analyze Your Resume</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload your resume and job description to get personalized ATS compatibility feedback
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Upload Your Resume
            </h2>
            <ResumeUploader onUpload={handleResumeUpload} />
            
            {resumeText && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Resume uploaded successfully</span>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select Technical Domains</h2>
            <p className="text-gray-600 mb-4">
              Choose the domains that match your target job to receive specialized feedback
            </p>
            <DomainSelector onDomainChange={handleDomainChange} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Job Description (Optional)</h2>
            <p className="text-gray-600 mb-4">
              Paste the job description to get tailored recommendations for this specific role
            </p>
            <JobDescriptionInput onChange={handleJobDescriptionChange} />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isAnalyzing}
              className={`px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center ${
                isAnalyzing ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isAnalyzing ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Resume
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnalysisPage;