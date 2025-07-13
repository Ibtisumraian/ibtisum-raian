import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
  FaDownload, FaGithub, FaLink, FaEnvelope, FaPhone, FaExternalLinkAlt, FaCode, FaHome 
} from 'react-icons/fa';

// Main Resume Component
const Resume = () => {
  // Path to the resume file in the `public` folder
  const resumeUrl = '/ibtisum_raian_resume.pdf';

  const projects = [
    {
      name: 'WhereIsIt – Lost & Found Platform',
      description: 'A full-stack lost and found web app where users can post and search for items with images and details. It features secure authentication, search filters, and a responsive, animated UI.',
      features: [
        'Secure user authentication using JWT and Firebase.',
        'Users can post lost or found items with images and details.',
        'Search functionality with filtering by category and location.',
        'Fully responsive design with animations and intuitive UI.'
      ],
      liveSite: 'https://whereisit-app.web.app/',
      clientCode: 'https://github.com/Ibtisumraian/whereisit',
      serverCode: 'https://github.com/ibtisumraian/whereisit-server'
    },
    {
      name: 'Recipe Book App',
      description: 'A modern web app that lets users explore, create, and manage recipes with secure authentication and an interactive UI. It offers advanced filtering, personalized experiences, and a responsive design.',
      features: [
        'User authentication with Firebase (register, login, logout).',
        'Add, edit, delete, and like recipes (CRUD operations).',
        'Real-time filtering and search functionality.',
        'Dark/light mode toggle and interactive UI using Lottie React.'
      ],
      liveSite: 'https://recipe-book-bff32.web.app/',
      clientCode: 'https://github.com/Ibtisumraian/recipe-book',
      serverCode: 'https://github.com/ibtisumraian/recipe-book-server'
    }
  ];

  return (
    <motion.section
      // Added `relative` for positioning child elements
      className="relative w-11/12 lg:w-4/5 xl:w-2/3 mx-auto py-20 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* --- Back to Home Button (Top Left) --- */}
      <Link to="/" className="absolute top-8 left-0 sm:left-4 md:left-0">
          <motion.button
              className="flex items-center gap-2 bg-[#ec9956]/10 border border-[#ec9956]/50 text-white font-semibold text-sm py-2 px-4 rounded-lg shadow-lg backdrop-blur-sm hover:bg-[#ec9956]/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
          >
              <FaHome />
              <span>Home</span>
          </motion.button>
      </Link>

      <div className="text-center mb-12 pt-8"> {/* Added pt-8 to give space for the home button */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">My Resume</h2>
        <motion.a
          href={resumeUrl}
          download="Ibtisum_Raian_Resume.pdf"
          className="inline-block bg-gradient-to-r from-[#e9615e] to-[#ec9956] text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="flex items-center gap-3">
            <FaDownload />
            <span>Download Resume</span>
          </div>
        </motion.a>
      </div>

      {/* Resume Content Box */}
      <div className="bg-gradient-to-br from-[#62393c]/30 to-[#181e41]/30 p-6 sm:p-8 rounded-xl backdrop-blur-xl border border-[#ec9956]/50 shadow-lg">
        <header className="text-center border-b border-gray-600 pb-6 mb-6">
            <h1 className="text-4xl font-bold">Ibtisum Raian</h1>
            <p className="text-xl text-[#ec9956] font-semibold mt-1">Full Stack Developer</p>
             <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-gray-300">
                <a href="mailto:ibtisumraian@gmail.com" className="flex items-center gap-2 hover:text-[#ec9956] transition-colors"><FaEnvelope /> ibtisumraian@gmail.com</a>
                <span className="flex items-center gap-2"><FaPhone /> +8801323861148</span>
                 <a href="https://github.com/Ibtisumraian" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ec9956] transition-colors"><FaGithub /> github.com/Ibtisumraian</a>
                <a href="https://ibtisum-raian.web.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ec9956] transition-colors"><FaLink /> ibtisum-raian.web.app</a>
             </div>
        </header>

        <main className="space-y-8">
            {/* Career Objective */}
            <div>
                <h3 className="text-2xl font-bold text-[#ec9956] mb-3">Career Objective</h3>
                <p className="text-gray-300 leading-relaxed">
                    I believe every application tells a story, and as a Full Stack Developer, I am dedicated to making it a compelling one...
                </p>
            </div>

            {/* Skills, Projects, Education, etc. remain the same... */}
            {/* Skills */}
            <div>
                <h3 className="text-2xl font-bold text-[#ec9956] mb-3">Skills</h3>
                <div className='space-y-2'>
                    <p><strong className="font-semibold text-gray-100">Technical:</strong> HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, Firebase, JWT, AWS, Git, GitHub, React Router, React Query, Tailwind CSS, Framer Motion, Figma.</p>
                    <p><strong className="font-semibold text-gray-100">Interpersonal:</strong> Effective communication, team collaboration, adaptability, active listening, time management, critical thinking, problem-solving, leadership initiative.</p>
                </div>
            </div>
            
            {/* Projects */}
            <div>
                <h3 className="text-2xl font-bold text-[#ec9956] mb-4">Projects</h3>
                <div className="space-y-8">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-[#ec9956] pl-4">
                      <h4 className="text-lg font-bold">{project.name}</h4>
                      <p className="text-gray-300 mt-1 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#ec9956] transition-colors"><FaExternalLinkAlt /> Live Site</a>
                        <a href={project.clientCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#ec9956] transition-colors"><FaCode /> Client Code</a>
                        <a href={project.serverCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[#ec9956] transition-colors"><FaCode /> Server Code</a>
                      </div>
                      <h5 className="font-semibold text-gray-200">Major Features:</h5>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 mt-1 text-sm">
                        {project.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
            </div>

            {/* Education & Languages */}
            <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div>
                    <h3 className="text-2xl font-bold text-[#ec9956] mb-3">Education</h3>
                    <p className="font-bold">Bachelor’s Degree, English Language and Literature</p>
                    <p className="text-gray-300">National University | Bangladesh</p>
                    <p className="text-gray-400 text-sm">2024 – Present</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#ec9956] mb-3">Languages</h3>
                    <p><strong className="font-semibold text-gray-100">Bengali:</strong> Native proficiency</p>
                    <p><strong className="font-semibold text-gray-100">English:</strong> Professional working proficiency</p>
                </div>
            </div>
        </main>
      </div>

    </motion.section>
  );
};

export default Resume;