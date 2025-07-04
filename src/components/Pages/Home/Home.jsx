import React from 'react';
import Hero from '../../Hero/Hero';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <div id='hero'>
                <Hero/>
            </div>
            <div id='aboutMe'>
                <AboutMe/>
            </div>
            <div id='mySkills'>
                <Skills/>
            </div>
            <div id='projects'>
                <Projects/>
            </div>
            <div id='contact'>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;