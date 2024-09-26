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
    // ... Outras formações
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
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
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className="text-gray-800 dark:text-gray-200">{edu.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.institution} | {edu.period}</p>
                {edu.details && <p className="mt-4 text-gray-700 dark:text-gray-300">{edu.details}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
