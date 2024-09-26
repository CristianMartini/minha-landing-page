// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-background.jpg')" }} // Substitua pelo caminho da sua imagem
    >
      <div className="container mx-auto text-center text-white bg-black bg-opacity-50 p-10 rounded-lg">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Desenvolvedor Web
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Transformando ideias em soluções digitais inovadoras.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-flex items-center bg-blue-500 dark:bg-blue-700 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Veja meus projetos <FaArrowDown className="ml-2" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
