import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'An advanced e-commerce platform built with React and Node.js.',
    link: 'https://github.com/SabirinMohamedAli/-Spring-Boot-Application-with-PostgreSQL',
  },
  {
    title: 'not sure',
    description: 'A full-featured health tracking app built with React Native.',
    link: 'https://github.com/SabirinMohamedAli/E-Commerce',
  },
  {
    title: 'not sure',
    description: 'A task management application with Spring Boot and PostgreSQL.',
    link: 'https://github.com/SabirinMohamedAli/task-manager',
  },
  {
    title: 'not sure',
    description: 'A personal portfolio website to showcase my skills and projects.',
    link: 'https://github.com/SabirinMohamedAli/portfolio-website',
  },
];

function Projects({ language }) {
  return (
    <div className="p-8">
      <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: '#E5CB90' }}>
        {language === 'en' ? 'My Projects' : 'Mashruucyada Aniga'}
      </h2>
      <p className="text-lg mb-12 text-center" style={{ color: '#EBCA4C' }}>
        {language === 'en'
          ? 'Here are some of the projects I have worked on. Click on the titles to view the code on GitHub.'
          : 'Halkan waxaa ku yaal qaar ka mid ah mashruucyada aan ka shaqeeyey. Guji cinwaanada si aad u aragto koodhka GitHub.'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
            style={{ backgroundColor: '#EBCA4C', color: '#1E0236' }} // Swapped background and text colors
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold underline hover:text-gray-800"
            >
              {language === 'en' ? 'View on GitHub' : 'Eeg GitHub-ka'}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
