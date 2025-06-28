import React from 'react';
import Hero from '../../Hero/Hero';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';

const Home = () => {
    return (
        <div>
            <div>
                <Hero/>
            </div>
            <div id='aboutMe'>
                <AboutMe/>
            </div>
            <div id='mySkills'>
                <Skills/>
            </div>
        </div>
    );
};

export default Home;