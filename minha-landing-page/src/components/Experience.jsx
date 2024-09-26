// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'Empregado Doméstico',
      company: 'Anna Claudia Bueno Cardoso',
      period: 'Atualmente',
      responsibilities: [
        'Cuidados com a casa, motorista e copeiro.',
        'Manutenção constante da qualidade e organização do lar.',
        'Desenvolvimento de habilidades de condução e confiabilidade.',
      ],
      icon: <FaBriefcase size={24} color="#4A5568" />,
    },
    // ... Outras experiências
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experiência Profissional
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex items-start space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className="text-gray-800 dark:text-gray-200">{exp.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside mt-4 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
