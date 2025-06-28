import React from 'react';
import { FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssLine } from 'react-icons/ri';
import { SiCss3, SiExpress, SiFirebase, SiMongodb } from 'react-icons/si';
import { TbLetterE, TbLetterESmall, TbLetterX, TbLetterXSmall } from 'react-icons/tb';

const Skills = () => {
  return (
    <div>
      <section className="w-10/12 mx-auto py-20">
        <h2 className="text-center text-white text-5xl font-bold mb-10">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-white text-center">
          
          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p > <IoLogoHtml5 className='text-5xl'/></p>
            <p className="text-lg font-medium">HTML5</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><SiCss3 className='text-5xl'/></p>
            <p className="text-lg font-medium">CSS3</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><IoLogoJavascript className='text-5xl'/></p>
            <p className="text-lg font-medium">JavaScript</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><FaReact className='text-5xl'/></p>
            <p className="text-lg font-medium">React</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><FaNodeJs className='text-5xl'/></p>
            <p className="text-lg font-medium">Node.js</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p className='flex'><SiExpress className="w-10 h-10 text-white" /></p>
            <p className="text-lg font-medium">Express.js</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><SiMongodb  className='text-5xl'/></p>
            <p className="text-lg font-medium">MongoDB</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><SiFirebase className='text-5xl'/></p>
            <p className="text-lg font-medium">Firebase</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><RiTailwindCssLine className='text-5xl'/></p>
            <p className="text-lg font-medium">Tailwind CSS</p>
          </div>

          <div className="bg-gradient-to-b from-[#ec9956] to-[#e9615e] flex flex-col justify-center items-center rounded-xl py-4 px-3 shadow-md hover:scale-105 transition-transform duration-300">
            <p><FaGitAlt className='text-5xl'/></p>
            <p className="text-lg font-medium">Git</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Skills;
