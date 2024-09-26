// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce em Laravel',
      description:
        'Desenvolvimento de uma plataforma de comércio eletrônico completa utilizando o framework Laravel para o back-end e Angular para o front-end.',
      technologies: 'Laravel, Angular, MySQL, GitHub, Visual Studio Code',
      link: 'https://github.com/seu-usuario/ecommerce-laravel',
      image: '/assets/images/ecommerce-laravel-screenshot.jpg', // Substitua pelo caminho da sua imagem
    },
    {
      title: 'Aplicativo de E-commerce para Android',
      description:
        'Criação de um aplicativo móvel para e-commerce, permitindo aos usuários navegar e realizar compras diretamente pelo dispositivo Android.',
      technologies: 'Kotlin, Node.js, Android Studio, Firebase',
      link: 'https://github.com/seu-usuario/ecommerce-android',
      image: '/assets/images/ecommerce-android-screenshot.jpg', // Substitua pelo caminho da sua imagem
    },
    {
      title: 'Plataforma Web com React e Next.js',
      description:
        'Desenvolvimento de uma plataforma web moderna utilizando React para a interface do usuário e Next.js para renderização do lado servidor, hospedada na Azure.',
      technologies: 'React, Next.js, Microsoft Azure, GitHub',
      link: 'https://github.com/seu-usuario/plataforma-react',
      image: '/assets/images/plataforma-react-screenshot.jpg', // Substitua pelo caminho da sua imagem
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projetos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Tecnologias Utilizadas:</strong> {project.technologies}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Ver no GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
