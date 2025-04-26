import React, { useState, useRef } from 'react';
import { Upload, FileText, X } from 'lucide-react';

interface ResumeUploaderProps {
  onUpload: (text: string) => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFileError('');
    
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      setFileError('Please upload a PDF, DOC, DOCX, or TXT file');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFileError('File size should be less than 5MB');
      return;
    }
    
    setFileName(file.name);
    
    // Read file content
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      
      // In a real app, we would process different file types differently
      // For this demo, we'll just use the text content directly
      onUpload(text);
    };
    reader.readAsText(file);
  };

  const clearFile = () => {
    setFileName('');
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onUpload('');
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : fileName 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        {!fileName ? (
          <div className="space-y-2">
            <div className="flex justify-center">
              <Upload className="h-10 w-10 text-gray-400" />
            </div>
            <p className="text-gray-600">
              Drag and drop your resume here, or <span className="text-blue-600 font-medium">browse files</span>
            </p>
            <p className="text-sm text-gray-500">
              Supports PDF, DOC, DOCX, TXT (Max 5MB)
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-3">
            <FileText className="h-6 w-6 text-green-600" />
            <span className="text-green-700 font-medium">{fileName}</span>
          </div>
        )}
      </div>

      {fileError && (
        <p className="text-red-600 text-sm">{fileError}</p>
      )}

      {fileName && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={clearFile}
            className="text-sm text-gray-600 hover:text-red-600 flex items-center"
          >
            <X className="h-4 w-4 mr-1" />
            Remove file
          </button>
        </div>
      )}

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ResumeUploader;