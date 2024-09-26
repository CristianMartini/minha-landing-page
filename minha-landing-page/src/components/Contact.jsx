// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contato
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Formulário de Contato */}
          <motion.form
            className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md"
            action="mailto:cristianmartini.sp@gmail.com"
            method="post"
            encType="text/plain"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Nome:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Mensagem:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
            >
              Enviar
            </button>
          </motion.form>

          {/* Informações de Contato */}
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-col space-y-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} className="text-blue-500" />
              <a href="mailto:cristianmartini.sp@gmail.com" className="text-lg text-gray-700 hover:underline">
                cristianmartini.sp@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone size={24} className="text-blue-500" />
              <a href="tel:+5511941798931" className="text-lg text-gray-700 hover:underline">
                (11) 94179-8931
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin size={24} className="text-blue-700" />
              <a href="https://linkedin.com/in/cristianmartini" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">
                linkedin.com/in/cristianmartini
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
