import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, Zap, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ResumeATS</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We help technical professionals optimize their resumes for Applicant Tracking Systems
            to increase interview rates and land more job offers.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At ResumeATS, we understand the challenges faced by job seekers in today's competitive technical job market. 
              Our mission is to level the playing field by providing advanced ATS optimization tools specifically tailored 
              for technical roles across frontend, backend, DevOps, and machine learning domains.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that talented professionals shouldn't miss out on opportunities simply because their resumes 
              aren't properly optimized for automated screening systems. Our powerful analysis tools help you create 
              an ATS-friendly resume that showcases your skills effectively to both algorithms and human recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Resume</h3>
              <p className="text-gray-600">
                Upload your resume in PDF, DOCX, or TXT format
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-gray-600">
                Our system analyzes your resume against ATS criteria
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-teal-100 p-4 rounded-full mb-4">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Domain-Specific Scoring</h3>
              <p className="text-gray-600">
                Get scores for different technical domains
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
              <p className="text-gray-600">
                Receive actionable suggestions to improve your resume
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Domains */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Technical Domain Expertise</h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Our system is specifically designed to analyze resumes across these technical domains:
            </p>
            
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Frontend Development</h3>
                <p className="text-gray-700 mb-4">
                  We analyze for key frontend frameworks, libraries, and technologies including React, Angular, Vue, 
                  JavaScript, TypeScript, CSS frameworks, accessibility standards, and more.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-teal-600">Backend Development</h3>
                <p className="text-gray-700 mb-4">
                  Our system checks for backend languages, frameworks, database technologies, API design, 
                  authentication systems, and server management skills.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">DevOps</h3>
                <p className="text-gray-700 mb-4">
                  We look for containerization, orchestration, CI/CD pipelines, cloud platforms, infrastructure 
                  as code, monitoring, and security best practices.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Machine Learning</h3>
                <p className="text-gray-700 mb-4">
                  Our analysis includes ML frameworks, data processing, model training, NLP, computer vision, 
                  and deployment of ML models into production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Resume?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started now and increase your chances of landing your dream technical role.
          </p>
          <Link
            to="/analysis"
            className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors inline-block"
          >
            Check Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;