import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Busify',
    description: `Busify - Public Transport Service Tracking and Tickets Booking Application

Busify is a collaborative project developed during the "Fundamentals of Software Engineering" module in Semester 02 at the Institute of Technology, University of Moratuwa. It is designed to enhance public transportation services in Sri Lanka by offering real-time bus tracking and seamless ticket booking. With features such as passenger profiles, ticket booking and cancellation, and service ratings, Busify aims to make commuting more convenient for passengers. I contributed to the project’s development, which was built using HTML5, CSS3, JavaScript, PHP, and MySQL, focusing on both the frontend and backend.`,
    image: 'src\assets\busify.png',
    techStack: ['PHP', 'CSS', 'HTML', 'JavaScript'],
    demoLink: 'https://demo-link-1.com',
    githubLink: 'https://github.com/yourusername/project1',
    category: 'Web',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    image: '/path-to-project2-image.jpg',
    techStack: ['Flutter', 'Firebase'],
    demoLink: 'https://demo-link-2.com',
    githubLink: 'https://github.com/yourusername/project2',
    category: 'Mobile',
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="mb-8 flex justify-center space-x-4">
          {['All', 'Web', 'Mobile'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category ? 'bg-tokyo-night-accent text-tokyo-night-bg' : 'bg-tokyo-night-bg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-tokyo-night-accent text-tokyo-night-bg px-2 py-1 rounded-full text-sm mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-tokyo-night-accent hover:underline">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-tokyo-night-accent hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;