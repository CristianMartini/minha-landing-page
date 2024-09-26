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
    {
      role: 'Empregado Doméstico',
      company: 'Beatriz Miranda de Carvalho',
      period: '2019 - 2020',
      responsibilities: [
        'Cuidados com a casa, motorista e copeiro.',
        'Melhoria na gestão de tarefas diárias e otimização de recursos domésticos.',
        'Planejamento e eficiência operacional.',
      ],
      icon: <FaBriefcase size={24} color="#4A5568" />,
    },
    {
      role: 'Empregado Doméstico',
      company: 'Natalie Klein',
      period: '2019',
      responsibilities: [
        'Cuidados com a casa, motorista, copeiro e babá.',
        'Estabelecimento de rotinas eficientes para cuidados infantis e manutenção da casa.',
        'Paciência, comunicação e adaptabilidade.',
      ],
      icon: <FaBriefcase size={24} color="#4A5568" />,
    },
    {
      role: 'Empregado Doméstico',
      company: 'Anna Claudia Bueno Cardoso',
      period: '2017 - 2019',
      responsibilities: [
        'Cuidados com a casa, motorista e copeiro.',
        'Organização eficiente das tarefas domésticas, garantindo um ambiente limpo e funcional.',
        'Gestão de tempo, multitarefa e atenção aos detalhes.',
      ],
      icon: <FaBriefcase size={24} color="#4A5568" />,
    },
    {
      role: 'Auxiliar de Produção',
      company: 'Satiare Alimentos',
      period: '2011 - 2016',
      responsibilities: [
        'Operação de máquinas de produção.',
        'Supervisão e liderança do setor de produção.',
        'Implementação de melhorias no fluxo de produção, aumentando a eficiência em 15%.',
        'Liderança, gerenciamento de equipe e resolução de problemas.',
      ],
      icon: <FaBriefcase size={24} color="#4A5568" />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
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
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div>{exp.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company} | {exp.period}</p>
                <ul className="list-disc list-inside mt-4">
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
