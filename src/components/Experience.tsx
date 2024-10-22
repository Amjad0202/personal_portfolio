import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2020 - Present',
    description: 'Leading development of complex web and mobile applications.',
  },
  {
    title: 'Mobile App Developer',
    company: 'Mobile Innovations Ltd.',
    period: 'Mar 2018 - Dec 2019',
    description: 'Developed cross-platform mobile applications using React Native and Flutter.',
  },
  // Add more experiences here
];

const skillLevels = [
  { skill: 'Flutter', level: 90 },
  { skill: 'React Native', level: 85 },
  { skill: 'JavaScript', level: 92 },
  { skill: 'Python', level: 88 },
  { skill: 'Node.js', level: 87 },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-tokyo-night-bg bg-opacity-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold">{exp.title}</h4>
                <p className="text-tokyo-night-accent">{exp.company}</p>
                <p className="text-sm">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Skill Levels</h3>
            {skillLevels.map((skill, index) => (
              <motion.div
                key={skill.skill}
                className="mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span>{skill.skill}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-tokyo-night-bg rounded-full h-2.5">
                  <motion.div
                    className="bg-tokyo-night-accent h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;