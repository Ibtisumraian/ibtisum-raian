import React from 'react';
import Hero from '../../Hero/Hero';
import AboutMe from '../../AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <div>
                <Hero/>
            </div>
            <div id='aboutMe'>
                <AboutMe/>
            </div>
        </div>
    );
};

export default Home;