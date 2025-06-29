import React from 'react';
import { FaDownload } from 'react-icons/fa';

const AboutMe = () => {
    return (
        // bg-[#36283F]
        <div className="w-10/12 mx-auto pt-16 pb-32  text-white rounded-xl ">
            {/* Profile Image Section */}
            <div className="flex justify-center mb-16 relative w-fit mx-auto">
                {/* Left Dotted Design */}
                {/* <div className="absolute left-5 top-5 w-32 h-32 -translate-x-6 -translate-y-6 z-0 opacity-30">
                    <div className="w-full h-full grid grid-cols-5 gap-1">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                        ))}
                    </div>
                </div> */}

                {/* Main Circular Image */}
                {/* <div className="relative z-10 rounded-full overflow-hidden  ">
                    <img
                        className="w-60 h-60 object-cover bg-gray-100"
                        src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1751135611/IMG_20220617_202016-removebg-preview_g1j9fr.png"
                        alt="Ibtisum Raian"
                    />
                </div> */}

                {/* Right Dotted Design */}
                {/* <div className="absolute -right-0 -bottom-0 w-32 h-32 translate-x-6 translate-y-6 z-0 opacity-30">
                    <div className="w-full h-full grid grid-cols-5 gap-1">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                        ))}
                    </div>
                </div> */}
            </div>

            {/* About Text Section */}
            <div className=" flex flex-col items-center sm:items-start gap-12 text-center sm:text-start  mx-auto">
                <h1 className="text-3xl sm:text-5xl font-bold ">About Me</h1>
                <p className="text:md sm:text-lg  leading-relaxed">
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
                </p>
                <div>
                    <a className="w-fit text-xl sm:text-2xl py-2 px-6 mt-8 rounded-4xl drop-shadow-xl/20  bg-gradient-to-b from-[#e9615e]  to-[#ec9956] flex items-center gap-3 cursor-pointer"> <FaDownload className='text-sm sm:text-lg' />Download CV</a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
