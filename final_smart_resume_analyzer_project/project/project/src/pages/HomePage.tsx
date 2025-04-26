import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Resume ATS Checker
            </h1>
            <p className="text-xl mb-8">
              Check if your resume is optimized for job applications
            </p>
            <Link
              to="/analysis"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
            >
              Check Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">What We Check</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border rounded-lg">
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Angular, Vue, JavaScript</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-bold mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, Java, Databases</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-bold mb-2">DevOps</h3>
              <p className="text-gray-600">Docker, AWS, CI/CD, Kubernetes</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-bold mb-2">Machine Learning</h3>
              <p className="text-gray-600">TensorFlow, PyTorch, Data Science</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Check Your Resume?</h2>
          <Link
            to="/analysis"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;