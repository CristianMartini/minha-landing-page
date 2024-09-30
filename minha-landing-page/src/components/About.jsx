// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Sobre Mim
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src="/assets/images/cristian-photo.jpg"
            alt="Cristian Martini"
            className="w-48 h-48 rounded-full mb-8 md:mb-0 md:mr-8 object-cover shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-lg mb-4">
              Sou um desenvolvedor web em formação, atualmente cursando Sistemas para Internet no Senac São Paulo, com uma sólida base em Ciências Contábeis. Tenho experiência em desenvolvimento full-stack, utilizando tecnologias como Laravel, Angular, React e Next.js. Minha trajetória profissional inclui posições de liderança e gerenciamento de tarefas, o que me proporcionou habilidades interpessoais valiosas como comunicação eficaz, trabalho em equipe e resolução de conflitos.
            </p>
            <p className="text-lg">
              Estou em busca de oportunidades na área de Desenvolvimento Web onde possa aplicar meus conhecimentos técnicos e continuar a crescer profissionalmente. Sou apaixonado por tecnologia e inovação, sempre buscando aprender novas ferramentas e melhorar minhas habilidades para entregar soluções eficientes e de alta qualidade.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
