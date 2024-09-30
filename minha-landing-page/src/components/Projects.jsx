// src/components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Novo componente que vamos criar

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce em Laravel',
      description:
        'Desenvolvimento de uma plataforma de comércio eletrônico completa utilizando o framework Laravel para o back-end e Angular para o front-end.',
      technologies: ['Laravel', 'Angular', 'MySQL', 'GitHub', 'Visual Studio Code'],
      link: 'https://github.com/CristianMartini/ecommerce-laravel',
      image: '/assets/images/ecommerce-laravel-screenshot.jpg', // Certifique-se de que a imagem existe
    },
    {
      title: 'Aplicativo de E-commerce para Android',
      description:
        'Criação de um aplicativo móvel para e-commerce, permitindo aos usuários navegar e realizar compras diretamente pelo dispositivo Android.',
      technologies: ['Kotlin', 'Node.js', 'Android Studio', 'Firebase'],
      link: 'https://github.com/CristianMartini/ecommerce-android',
      image: '/assets/images/ecommerce-android-screenshot.jpg', // Certifique-se de que a imagem existe
    },
    {
      title: 'Plataforma Web com React e Next.js',
      description:
        'Desenvolvimento de uma plataforma web moderna utilizando React para a interface do usuário e Next.js para renderização do lado servidor, hospedada na Azure.',
      technologies: ['React', 'Next.js', 'Microsoft Azure', 'GitHub'],
      link: 'https://github.com/CristianMartini/plataforma-react',
      image: '/assets/images/plataforma-react-screenshot.jpg', // Certifique-se de que a imagem existe
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-white dark:text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projetos
        </motion.h2>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
