import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook } from 'react-icons/fa';

function Navbar({ language, switchLanguage }) { // Removed theme and toggleTheme
  return (
    <nav className="bg-primary text-white flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold" style={{color: '#EBCA4C'}}>
          thaprina
        </Link>
      </div>
      <div className="flex items-center space-x-8"> {/* Space increased for better alignment */}
        <Link to="/" className="hover:bg-secondary px-3 py-2 rounded">
          {language === 'en' ? 'Home' : 'Guriga'}
        </Link>
        <Link to="/about" className="hover:bg-secondary px-3 py-2 rounded">
          {language === 'en' ? 'About' : 'Ku Saabsan'}
        </Link>
        <Link to="/resume" className="hover:bg-secondary px-3 py-2 rounded">
          {language === 'en' ? 'Resume' : 'CV'}
        </Link>
        <Link to="/projects" className="hover:bg-secondary px-3 py-2 rounded">
          {language === 'en' ? 'Projects' : 'Mashruucyada'}
        </Link>
        <Link to="/contact" className="hover:bg-secondary px-3 py-2 rounded">
          {language === 'en' ? 'Contact' : 'La Xiriir'}
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {/* Social Icons */}
        <a
          href="https://github.com/SabirinMohamedAli"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary"
        >
          <FaGithub size={24} /> {/* Adjusted icon size */}
        </a>
        <a
          href="https://facebook.com/your-facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary"
        >
          <FaFacebook size={24} /> {/* Adjusted icon size */}
        </a>
        {/* Language Switch */}
        <button
          onClick={() => switchLanguage('en')}
          className={`px-2 py-1 rounded ${
            language === 'en' ? 'bg-secondary text-primary' : 'bg-primary'
          } hover:bg-accent`}
        >
          EN
        </button>
        <button
          onClick={() => switchLanguage('so')}
          className={`px-2 py-1 rounded ${
            language === 'so' ? 'bg-secondary text-primary' : 'bg-primary'
          } hover:bg-accent`}
        >
          SO
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
