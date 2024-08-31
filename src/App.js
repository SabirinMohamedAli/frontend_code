import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        switchLanguage={switchLanguage}
      />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/resume" element={<Resume language={language} />} />
        <Route path="/projects" element={<Projects language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;
