import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;