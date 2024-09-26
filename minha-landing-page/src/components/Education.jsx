// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educations = [
    {
      degree: 'Sistemas para Internet',
      institution: 'Senac São Paulo',
      period: '2º Semestre de 2022 - 2º Semestre de 2024 (Cursando 5º Semestre)',
      details: 'Principais Disciplinas: HTML, CSS, JavaScript, PHP, Laravel, Angular, React, Next.js, Node.js, Kotlin, Android Studio, Segurança da Informação, Start-up, Cloud - Azure.',
      icon: <FaGraduationCap size={24} color="#4A5568" />,
    },
    {
      degree: 'Bacharel em Ciências Contábeis',
      institution: 'Centro de Ensino Superior de Realeza - CESREAL',
      period: 'Fevereiro de 2013 - Dezembro de 2016',
      details: '',
      icon: <FaGraduationCap size={24} color="#4A5568" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Educação
        </motion.h2>
        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div>{edu.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution} | {edu.period}</p>
                {edu.details && <p className="mt-4">{edu.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
