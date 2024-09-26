// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 shadow-inner">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-600 dark:text-gray-300 mb-4"
        >
          &copy; 2024 Cristian Martini. Todos os direitos reservados.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/cristianmartini" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
        <motion.div
          className="text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="#hero" className="hover:underline">
            Voltar ao Topo
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
