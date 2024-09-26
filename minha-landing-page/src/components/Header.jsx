// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import { FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Persistir a escolha do tema no localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Cristian Martini</h1>
        <nav>
          <Scrollspy
            items={['about', 'skills', 'projects', 'experience', 'education', 'contact']}
            currentClassName="text-blue-500 dark:text-blue-400"
            className="flex space-x-4"
            offset={-100}
          >
            <li>
              <a href="#about" className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#skills" className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Projetos
              </a>
            </li>
            <li>
              <a href="#experience" className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Experiência
              </a>
            </li>
            <li>
              <a href="#education" className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Educação
              </a>
            </li>
            <li>
              <a href="#contact" className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Contato
              </a>
            </li>
          </Scrollspy>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/cristianmartini" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
