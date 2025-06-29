import React, { useState } from "react";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import ProjectModal from "../ProjectModal/ProjectModal";

const projects = [
  {
    id: 1,
    name: "WhereIsIt",
    descriptionShort:
      "A MERN stack Lost & Found platform with JWT auth and advanced item search.",
    descriptionLong:
      "WhereIsIt is a full-stack Lost & Found web application built using the MERN stack. It allows users to post and browse lost or found items securely using JWT-based authentication. The platform features advanced filtering by tags, categories, and locations, and includes a dedicated admin dashboard for monitoring listings and user activities. The responsive design ensures accessibility on all devices.",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1751193601/Screenshot_2025-06-29_163852_yxpny7.png",
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
    id: 2,
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
    id: 3,
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="w-11/12 mx-auto py-20">
      <h2 className="text-center text-white text-3xl sm:text-5xl font-bold mb-16">My Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-[#62393c] to-[#181e41] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#ec9956] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col justify-between text-white">
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
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] px-4 py-2 rounded-md font-semibold text-white hover:scale-105 transition"
                >
                  Details
                </button>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] px-4 py-2 rounded-md font-semibold text-white flex items-center gap-2 hover:scale-105 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.clientCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-b from-[#e9615e] to-[#ec9956] px-4 py-2 rounded-md font-semibold text-white flex items-center gap-2 hover:scale-105 transition"
                >
                  <FaCode /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
