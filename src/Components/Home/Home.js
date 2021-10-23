import React from 'react';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import HandMobile from '../HandMobile/HandMobile';
import Hero from '../Hero/Hero';

import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <Contact></Contact>
            <Doctors></Doctors>
            <HandMobile></HandMobile>
            <Hero></Hero>
           
            
        </div>
    );
};

export default Home;