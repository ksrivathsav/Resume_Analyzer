import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Check Resume', path: '/analysis' },
    { title: 'Results', path: '/results' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container px-4 mx-auto flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <FileText className="h-6 w-6" />
          <span>ResumeATS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 text-sm ${
                location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
              onClick={closeMenu}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;