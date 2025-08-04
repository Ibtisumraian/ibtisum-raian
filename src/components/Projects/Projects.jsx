import React, { useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import ProjectModal from "../ProjectModal/ProjectModal";

const projects = [
  {
    id: 1,
    name: "MediCamp",
    descriptionShort:
      "A MERN stack medical camp management system with role-based access and real-time interactions.",
    descriptionLong:
      "MediCamp is a full-stack Medical Camp Management System built using the MERN stack. It empowers organizers to create and manage health camps, while participants can register, track participation, and provide feedback. The platform includes secure JWT authentication, role-based dashboards, interactive analytics, real-time search, and responsive design for seamless healthcare coordination.",
    image: "https://res.cloudinary.com/deqw8tu5v/image/upload/v1754297827/Screenshot_2025-07-28_060935_auskqe.png",
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS", "Cloudinary", "Recharts"
    ],
    features: [
      "JWT-based secure authentication and role management",
      "Organizer dashboard to create and manage camps",
      "Participant registration and feedback system",
      "Interactive analytics using Recharts",
      "Real-time search and responsive design",
      "Image upload with Cloudinary integration"
    ],
    liveDemo:   'https://medicamp-ce784.web.app/',
    clientCode: 'https://github.com/Ibtisumraian/medicamp',
    serverCode: 'https://github.com/Ibtisumraian/medicamp-server'
  },
  {
    id: 2,
    name: "WhereIsIt",
    descriptionShort:
      "A MERN stack Lost & Found platform with JWT auth and advanced item search.",
    descriptionLong:
      "WhereIsIt is a full-stack Lost & Found web application built using the MERN stack. It allows users to post and browse lost or found items securely using JWT-based authentication. The platform features advanced filtering by tags, categories, and locations, and includes a dedicated admin dashboard for monitoring listings and user activities. The responsive design ensures accessibility on all devices.",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1751277643/Screenshot_2025-06-30_155846_qdmskb.png",
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "JWT", "TailwindCSS"
    ],
    features: [
      "Secure login with JWT and role-based access",
      "Dynamic lost & found item posting system",
      "Advanced search by tags, categories, and location",
      "Admin dashboard for monitoring and reporting",
      "Responsive and modern UI design"
    ],
    liveDemo: "https://whereisit-app.web.app/",
    clientCode: "https://github.com/Ibtisumraian/whereisit",
    serverCode: "https://github.com/ibtisumraian/whereisit-server"
  },
  {
    id: 3,
    name: "Recipe Book",
    descriptionShort:
      "A recipe app with login, dashboard, filters, and beautiful UI animations.",
    descriptionLong:
      "Recipe Book is an elegant recipe management application built with React and Firebase. It enables users to sign in, view and interact with various recipes, and manage their own submissions. With a clean dashboard, category-based filters, dark/light theme toggle, and Lottie animations, it offers a seamless and visually rich experience. Data is stored using Firebase and MongoDB, making the app lightweight yet powerful.",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1751194807/Screenshot_2025-06-29_165058_ybgajh.png",
    technologies: [
      "React", "Firebase", "TailwindCSS", "MongoDB", "Lottie", "React Router"
    ],
    features: [
      "User login and recipe dashboard",
      "Add, edit, and delete personal recipes",
      "Like and filter functionality",
      "Responsive layout with animation",
      "Dark/light mode toggle"
    ],
    liveDemo: "https://recipe-book-bff32.web.app/",
    clientCode: "https://github.com/Ibtisumraian/recipe-book",
    serverCode: "https://github.com/ibtisumraian/recipe-book-server"
  },
  {
    id: 4,
    name: "Espresso Emporium",
    descriptionShort:
      "Coffee inventory system with full CRUD and a sleek café-friendly UI.",
    descriptionLong:
      "Espresso Emporium is a coffee inventory management system built with the MERN stack. It helps café owners manage coffee stock efficiently by supporting full CRUD operations. Each item includes fields for name, supplier, taste, and image. The UI is styled with TailwindCSS, optimized for responsiveness, and designed with clarity and usability in mind. It’s perfect for small to medium businesses needing a simple yet effective inventory tool.",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1751194745/Screenshot_2025-06-29_165731_ehgo0g.png",
    technologies: [
      "React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"
    ],
    features: [
      "Add, update, and delete coffee items",
      "Image upload and preview",
      "Responsive inventory dashboard",
      "Integrated backend with MongoDB",
      "Elegant and functional UI for business use"
    ],
    liveDemo: "https://espresso-emporium-c8f01.web.app/",
    clientCode: "https://github.com/Ibtisumraian/espresso-emporium",
    serverCode: "https://github.com/ibtisumraian/espresso-server"
  }
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: 'easeOut'
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.2, ease: 'easeInOut' }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      className="w-11/12 mx-auto py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="text-center text-white text-3xl sm:text-5xl font-bold mb-16">My Projects</h2>

      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover="hover"
            className="bg-gradient-to-br from-[#62393c] to-[#181e41] rounded-xl overflow-hidden shadow-lg border border-[#ec9956] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col justify-between text-white flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.descriptionShort}</p>

              <div className="flex flex-wrap gap-2 mb-4 max-w-[400px]">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#ec9956]/20 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] cursor-pointer px-4 py-2 rounded-md font-semibold text-white"
                >
                  Details
                </motion.button>
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] px-4 py-2 rounded-md font-semibold text-white flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live
                </motion.a>
                <motion.a
                  href={project.clientCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] px-4 py-2 rounded-md font-semibold text-white flex items-center gap-2"
                >
                  <FaCode /> Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.section>
  );
};

export default Projects;
