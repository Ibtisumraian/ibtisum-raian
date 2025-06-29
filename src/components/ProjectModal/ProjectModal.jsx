import React from "react";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-[#181e41] text-white rounded-2xl max-w-4xl w-full p-6 relative border overflow-y-auto border-[#ec9956] shadow-xl">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-[#ec9956] text-xl"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#e9615e] to-[#ec9956] bg-clip-text text-transparent">
          {project.name}
        </h2>

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="rounded-xl mb-6 w-full h-full object-cover border border-gray-700"
        />

        {/* Description */}
        <p className="mb-6 text-gray-300 text-[17px] leading-relaxed">
          {project.descriptionLong.length > 300
            ? project.descriptionLong.slice(0, 300) + "..."
            : project.descriptionLong}
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
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#e9615e] to-[#ec9956] text-white font-medium hover:scale-105 transition-transform"
            >
              Live Site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-[#ec9956] text-[#ec9956] hover:bg-[#ec9956]/10 transition hover:scale-105"
            >
              GitHub (Client)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
