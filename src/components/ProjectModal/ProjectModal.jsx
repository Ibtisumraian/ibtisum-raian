import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.25 } }
};

const closeButtonVariants = {
  hover: { scale: 1.2, color: "#ec9956", transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-lg bg-opacity-70 z-50 flex items-center justify-center p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-[#181e41] text-white rounded-2xl max-w-4xl w-full p-6 relative border border-[#ec9956] shadow-xl flex flex-col"
          style={{ maxHeight: '90vh' }} // limit height to 90% viewport height
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={onClose}
            variants={closeButtonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Close modal"
          >
            <FaTimes />
          </motion.button>

          {/* Content container with scroll */}
          <div className="overflow-y-auto pt-8 pb-4 pr-2" style={{ flexGrow: 1 }}>
            {/* Title */}
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent">
              {project.name}
            </h2>

            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl mb-6 w-full h-auto object-cover border border-gray-700"
            />

            {/* Description */}
            <p className="mb-6 text-gray-300 text-[17px] leading-relaxed">
              {project.descriptionLong}
            </p>

            {/* Features */}
            {project.features?.length > 0 && (
              <div className="mb-5">
                <h3 className="text-xl font-semibold mb-2 text-[#ec9956]">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200 pl-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-5">
              <h3 className="text-xl font-semibold mb-2 text-[#ec9956]">Technology Stack:</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] text-black px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#e9615e] to-[#ec9956] text-white font-medium hover:scale-105 transition-transform"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
