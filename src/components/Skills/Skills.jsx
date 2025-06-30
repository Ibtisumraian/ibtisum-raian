import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiExpress,
  SiFigma
} from 'react-icons/si';

import { motion } from 'framer-motion';

// Descriptions
const skillDescriptions = {
  HTML5: 'Markup language for structuring content on the web, essential for page layouts and SEO.',
  CSS3: 'Style sheet language used for designing beautiful, responsive, and animated websites.',
  JavaScript: 'Core programming language of the web, enabling dynamic functionality, logic, and interactivity.',
  React: 'Modern JavaScript library for building responsive and scalable user interfaces using components.',
  MySQL: 'Relational database management system for storing and managing structured data.',
  'Node.js': 'Server-side runtime environment for building scalable backend services using JavaScript.',
  'Express.js': 'Minimal and flexible Node.js framework for building RESTful APIs and web applications.',
  MongoDB: 'NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.',
  Firebase: 'Google platform for building apps with authentication, real-time databases, and hosting.',
  TailwindCSS: 'Utility-first CSS framework for rapidly building custom designs directly in HTML/JSX.',
  Git: 'Version control system to manage code changes and collaborate with others.',
  GitHub: 'Hosting service for Git repositories, enabling code sharing, collaboration, and deployment.',
  Figma: 'Web-based design tool for UI/UX design, prototyping, and real-time collaboration.'
};

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

// Skill Item
const SkillItem = ({ icon: Icon, name }) => (
  <motion.div
    variants={item}
    className="flex flex-col text-white p-4 backdrop-blur-3xl rounded-xl shadow-[#e9615e] shadow-md hover:scale-105 transition-transform duration-300"
  >
    <div className='flex items-center gap-3'>
      <Icon className="text-4xl mb-2 text-[#ec9956] drop-shadow-[#ec9956] drop-shadow-xl/40" />
      <p className="text-sm font-semibold text-center mb-1">{name}</p>
    </div>
    <p className="text-xs text-gray-300">{skillDescriptions[name]}</p>
  </motion.div>
);

// Skill Group
const SkillGroup = ({ skills }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {skills.map((skill, idx) => (
        <SkillItem key={idx} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </motion.div>
);

// Main Skills Component
const Skills = () => {
  return (
    <motion.section
      className="w-11/12 mx-auto py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-white text-3xl sm:text-5xl font-bold mb-16">
        My Skills
      </h2>

      <SkillGroup
        skills={[
          { icon: FaHtml5, name: 'HTML5' },
          { icon: FaCss3Alt, name: 'CSS3' },
          { icon: FaJs, name: 'JavaScript' },
          { icon: FaReact, name: 'React' },
          { icon: SiMysql, name: 'MySQL' },
          { icon: FaNodeJs, name: 'Node.js' },
          { icon: SiExpress, name: 'Express.js' },
          { icon: SiMongodb, name: 'MongoDB' },
          { icon: SiFirebase, name: 'Firebase' },
          { icon: SiTailwindcss, name: 'TailwindCSS' },
          { icon: FaGitAlt, name: 'Git' },
          { icon: FaGithub, name: 'GitHub' },
          { icon: SiFigma, name: 'Figma' },
        ]}
      />
    </motion.section>
  );
};

export default Skills;
