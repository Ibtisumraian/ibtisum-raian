import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import BubbleWrapper from '../BubbleWrapper/BubbleWrapper';

const Hero = () => {
  return (
    <div className='w-10/12 mx-auto py-12 overflow-hidden'>
      <div className='flex items-center flex-col-reverse lg:flex-row lg:justify-between gap-3'>
        
        {/* Left - Text Content */}
        <div className='text-white flex flex-col gap-3 text-center lg:text-start'>

          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <h1 className='text-2xl sm:text-5xl 2xl:text-7xl font-bold'>
              Ibtisum Raian
            </h1>
            <h1 className='text-2xl sm:text-5xl 2xl:text-7xl font-bold'>
              Full Stack Developer
            </h1>
            <p className='max-w-[700px] my-8 text-md sm:text-lg'>
              I'm a passionate MERN Stack Developer focused on building high-performance, full-stack web applications. With a strong eye for detail and a love for clean code, I turn complex ideas into seamless digital experiences — from intuitive frontends to robust backends.
            </p>
          </Fade>

          {/* Social Icons */}
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <div className='flex items-center justify-center lg:justify-start gap-5'>
              <a href='https://github.com/Ibtisumraian' target='blank' className='bg-gradient-to-b from-[#e9615e] to-[#ec9956] p-2 rounded-lg text-md sm:text-lg'>
                <FaGithub />
              </a>
              <a href='https://x.com/ib_raian' target='blank' className='bg-gradient-to-b from-[#e9615e] to-[#ec9956] p-2 rounded-lg text-md sm:text-lg'>
                <FaXTwitter />
              </a>
              <a href='https://www.linkedin.com/' target='blank' className='bg-gradient-to-b from-[#e9615e] to-[#ec9956] p-2 rounded-lg text-md sm:text-lg'>
                <FaLinkedin />
              </a>
            </div>
          </Fade>

          {/* Resume Button */}
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <BubbleWrapper>
              <a className="w-fit mx-auto lg:mx-0 text-xl sm:text-2xl py-2 px-6 mt-8 rounded-4xl drop-shadow-xl/20 bg-gradient-to-b from-[#e9615e] to-[#ec9956] flex items-center gap-3 cursor-pointer">
                <FaDownload className='text-sm sm:text-lg' />Resume
              </a>
            </BubbleWrapper>
          </Fade>

        </div>

        {/* Right - Images */}
        <motion.div
          className='flex items-center gap-3'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            className='rounded-t-full rounded-b-full max-h-[750px]'
            src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1751123062/dp001_wntiwg.png"
            alt=""
          />
          <img
            className='h-[300px] hidden lg:block'
            src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1751126278/my-name-removebg-preview_k5rnpe.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;