// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Título da Seção */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sobre Mim
        </motion.h2>

        {/* Conteúdo */}
        <motion.div
          className="text-gray-800 dark:text-gray-200 md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="mb-6">
            Após conhecer minhas habilidades, gostaria de compartilhar um pouco mais sobre minha trajetória e objetivos profissionais.
          </p>
          <p className="mb-6">
            Olá! Eu sou o <span className="font-semibold">Cristian Martini</span>, um desenvolvedor web full-stack em formação, atualmente cursando <span className="font-semibold">Sistemas para Internet</span> no Senac São Paulo. Com uma sólida base em Ciências Contábeis, minha trajetória profissional inclui posições de liderança e gerenciamento, o que me proporcionou habilidades valiosas em comunicação, trabalho em equipe e resolução de problemas.
          </p>
          <p className="mb-6">
            Sou apaixonado por tecnologia e inovação, sempre buscando aprender novas ferramentas e melhorar minhas habilidades para entregar soluções eficientes e de alta qualidade.
          </p>
          <p className="mb-6">
            Meu objetivo profissional é atuar na área de Desenvolvimento Web, onde possa aplicar meus conhecimentos técnicos e contribuir para o desenvolvimento de projetos inovadores, enquanto continuo a crescer e me aprimorar profissionalmente.
          </p>
          {/* Botão de Download do Currículo */}
          <div className="text-center mt-8">
            <motion.a
              href="/assets/Cristian-Martini-Curriculo.pdf" // Substitua pelo caminho do seu PDF
              download
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Baixar Currículo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
