import React from 'react';
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,FaGithub, FaGitlab, FaAws, FaKey} from 'react-icons/fa';
import {SiTailwindcss, SiFirebase, SiVercel, SiNetlify, SiBootstrap,SiMongodb, SiMysql, SiFigma, SiCanva, SiFramer, SiChartdotjs,SiDaisyui, SiExpress, SiNpm, SiNextdotjs, SiReacthookform,SiReactrouter, SiReactquery, SiNodedotjs} from 'react-icons/si';
import { TbBrandVite } from "react-icons/tb";

// Skill Item Component
const SkillItem = ({ icon: Icon, name }) => (
  <div className="flex flex-col justify-center items-center text-white  p-4 backdrop-blur-3xl rounded-xl shadow-[#e9615e] shadow-md hover:scale-105 transition-transform duration-300">
    <Icon className="text-4xl mb-2 drop-shadow-[#ec9956] text-[#ec9956]  drop-shadow-xl/40" />
    <p className="text-sm text-center">{name}</p>
  </div>
);

// Skill Group Component
const SkillGroup = ({ title, skills }) => (
  <div className="mb-12">
    <h3 className="text-2xl text-white font-bold mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, idx) => (
        <SkillItem key={idx} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);

// Main Skills Component
const Skills = () => {
  return (
    <section className="w-11/12  mx-auto py-20">
      <h2 className="text-center text-white text-5xl font-bold mb-16">My Skills</h2>

      {/* Frontend Skills */}
      <SkillGroup
        title="Frontend"
        skills={[
          { icon: FaHtml5, name: "HTML5" },
          { icon: FaCss3Alt, name: "CSS3" },
          { icon: FaJs, name: "JavaScript" },
          { icon: FaReact, name: "React" },
          { icon: SiReactrouter, name: "React Router" },
          { icon: SiReacthookform, name: "React Hook Form" },
          { icon: SiReactquery, name: "React Query" },
          { icon: SiNextdotjs, name: "Next.js" },
          { icon: SiTailwindcss, name: "TailwindCSS" },
          { icon: SiBootstrap, name: "Bootstrap" },
          { icon: SiDaisyui, name: "DaisyUI" },
          { icon: SiChartdotjs, name: "Chart.js" },
          { icon: TbBrandVite, name: "Vite" }
        ]}
      />

      {/* Backend Skills */}
      <SkillGroup
        title="Backend"
        skills={[
          { icon: FaNodeJs, name: "Node.js" },
          { icon: SiExpress, name: "Express.js" },
          { icon: FaKey, name: "JWT" },
          { icon: SiNpm, name: "NPM" },
          { icon: SiNodedotjs, name: "Nodemon" }
        ]}
      />

      {/* Database Skills */}
      <SkillGroup
        title="Databases"
        skills={[
          { icon: SiMongodb, name: "MongoDB" },
          { icon: SiMysql, name: "MySQL" },
          { icon: SiFirebase, name: "Firebase" }
        ]}
      />

      {/* Dev Tools & Deployment */}
      <SkillGroup
        title="Dev Tools & Deployment"
        skills={[
          { icon: FaGitAlt, name: "Git" },
          { icon: FaGithub, name: "GitHub" },
        //   { icon: FaGitlab, name: "GitLab" },
          { icon: SiNetlify, name: "Netlify" },
          { icon: SiVercel, name: "Vercel" },
        //   { icon: FaAws, name: "AWS" }
        ]}
      />

      {/* UI/UX & Design Tools */}
      <SkillGroup
        title="UI/UX & Design"
        skills={[
          { icon: SiFigma, name: "Figma" },
          { icon: SiCanva, name: "Canva" },
          { icon: SiFramer, name: "Framer" }
        ]}
      />
    </section>
  );
};

export default Skills;
