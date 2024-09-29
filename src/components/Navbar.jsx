import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ language, switchLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary text-white flex flex-col lg:flex-row justify-between items-center p-4">
      <div className="flex items-center justify-between w-full lg:w-auto mb-4 lg:mb-0">
        <Link to="/" className="text-2xl font-bold" style={{ color: '#EBCA4C' , fontSize:'35px' , fontStyle:'italic' }}>
          sapirina
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl lg:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto lg:flex ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        <Link to="/" className="hover:bg-secondary px-3 py-2 rounded">
          {language === 'en' ? 'Home' : 'Home'}
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
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <a
            href="https://github.com/SabirinMohamedAli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FaGithub size={24} /> {/* Adjusted icon size */}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100077115147759"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            <FaFacebook size={24} /> {/* Adjusted icon size */}
          </a>
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
      </div>
    </nav>
  );
}

export default Navbar;
