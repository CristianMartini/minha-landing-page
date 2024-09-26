// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiKotlin, SiNextdotjs, SiAngular, SiLaravel } from 'react-icons/si';
import { FaUserFriends, FaLightbulb, FaChalkboardTeacher, FaAdjust, FaHandshake, FaClock, FaShieldAlt } from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
    { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: 'Docker', icon: <FaDocker size={40} color="#2496ED" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38B2AC" /> },
    { name: 'Kotlin', icon: <SiKotlin size={40} color="#0095D5" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} color="#000000" /> },
    { name: 'Angular', icon: <SiAngular size={40} color="#DD0031" /> },
    { name: 'Laravel', icon: <SiLaravel size={40} color="#FF2D20" /> },
  ];

  const softSkills = [
    { name: 'Comunicação Eficaz', icon: <FaChalkboardTeacher size={24} /> },
    { name: 'Trabalho em Equipe', icon: <FaUserFriends size={24} /> },
    { name: 'Liderança', icon: <FaLightbulb size={24} /> },
    { name: 'Adaptabilidade', icon: <FaAdjust size={24} /> },
    { name: 'Resolução de Conflitos', icon: <FaHandshake size={24} /> },
    { name: 'Gestão de Tempo', icon: <FaClock size={24} /> },
    { name: 'Confiabilidade e Respeito', icon: <FaShieldAlt size={24} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Habilidades
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Habilidades Técnicas */}
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">Técnicas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  {skill.icon}
                  <p className="mt-2 text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Habilidades Comportamentais */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">Comportamentais</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-blue-500 dark:text-blue-400">{skill.icon}</div>
                  <p className="text-gray-800 dark:text-gray-200">{skill.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
