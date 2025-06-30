import React from 'react';
import { FaDownload } from 'react-icons/fa';
import BubbleWrapper from '../BubbleWrapper/BubbleWrapper';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      className="w-10/12 mx-auto  pb-32 text-white rounded-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }} // ✅ only animate once
    >
      {/* Profile Image Section (optional) */}
      <div className="flex justify-center mb-16 relative w-fit mx-auto">
        {/* Profile image and dotted design (commented) */}
      </div>

      {/* About Text Section */}
      <Fade direction="up" cascade damping={0.1} triggerOnce>
        <div className="flex flex-col items-center sm:items-start gap-12 text-center sm:text-start mx-auto">
          <motion.h1
            className="text-3xl sm:text-5xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} // ✅ only animate once
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-md sm:text-lg leading-relaxed max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }} // ✅ only animate once
          >
            Hi! I’m Ibtisum Raian, a passionate MERN Stack Developer who loves crafting seamless web experiences from concept to code.
            My journey into the world of programming began with curiosity and quickly evolved into a full-blown passion. Over time,
            I’ve grown from building simple static pages to developing full-stack web applications using MongoDB, Express.js, React, and Node.js.
            <br /><br />
            I genuinely enjoy working on interactive, user-friendly interfaces and scalable backend systems. Problem-solving, building practical
            solutions, and constantly learning are the heart of what drives me as a developer. Whether it’s creating a visually appealing frontend
            or designing a secure and efficient API, I love the entire process of bringing an idea to life through code.
            <br /><br />
            Outside of programming, I have a deep love for reading books — especially those that stretch the mind or offer a fresh perspective on life.
            I also enjoy writing in my diary, which helps me stay grounded and reflect on my thoughts creatively. When I need to unwind, you'll likely
            find me at the billiards table — I absolutely enjoy playing billiards (pool). It sharpens focus and strategy, just like coding does in its own way.
            <br /><br />
            I’m also someone who thrives on exploring new things — whether it’s learning a new technology, experimenting with design,
            or understanding a new culture or perspective. This curiosity keeps me excited, not just in development, but in life as a whole.
            <br /><br />
            Thanks for stopping by! I’m always open to collaborating, learning, and creating something meaningful together.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
            viewport={{ once: true }} // ✅ only animate once
          >
            <BubbleWrapper>
              <a
                href="#projects"
                className="w-fit text-xl sm:text-2xl py-2 px-6 mt-8 rounded-4xl drop-shadow-xl/20 bg-gradient-to-b from-[#e9615e] to-[#ec9956] flex items-center gap-3 cursor-pointer"
              >
                View Projects
              </a>
            </BubbleWrapper>
          </motion.div>
        </div>
      </Fade>
    </motion.div>
  );
};

export default AboutMe;
