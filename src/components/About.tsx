import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const developerProfile = {
    name: "Mohamed Amjad",
    role: "Full Stack | Mobile Developer",
    email: "mamamjadali@gmail.com",
    expertise: "Mobile & Web Development",
    currentFocus: "Flutter & React Native Development",
    tagline: "Turning Ideas into Reality with Clean Code"
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">{developerProfile.name}</h3>
            <p className="mb-4">{developerProfile.role}</p>
            <p className="mb-4">Email: {developerProfile.email}</p>
            <p className="mb-4">Expertise: {developerProfile.expertise}</p>
            <p className="mb-4">Current Focus: {developerProfile.currentFocus}</p>
            <p className="mb-4 italic">"{developerProfile.tagline}"</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="mb-4">
              As a passionate Full Stack and Mobile Developer, I specialize in creating robust and scalable applications
              across various platforms. With expertise in both frontend and backend technologies, I bring a holistic
              approach to software development, ensuring seamless integration and optimal performance.
            </p>
            <p className="mb-4">
              My experience spans from crafting intuitive user interfaces with React and Vue.js to building powerful
              backend systems using Node.js, Python, and Java. In the mobile realm, I excel in developing
              cross-platform applications with Flutter and React Native, as well as native Android and iOS development.
            </p>
            <p className="font-bold">Fun fact: "I turn coffee into code ☕"</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;