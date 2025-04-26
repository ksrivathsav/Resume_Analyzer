import React from 'react';

interface JobDescriptionInputProps {
  onChange: (text: string) => void;
}

const JobDescriptionInput: React.FC<JobDescriptionInputProps> = ({ onChange }) => {
  return (
    <div>
      <textarea
        className="w-full min-h-[200px] p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
        placeholder="Paste the job description here to get tailored recommendations..."
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
      <p className="mt-2 text-sm text-gray-500">
        Adding a job description helps us analyze keyword matches and provide more targeted recommendations.
      </p>
    </div>
  );
};

export default JobDescriptionInput;