import React from 'react';
import Slider from '../Slider/Slider';
import Hero from './Hero';
import Section from './Section';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <Slider></Slider>
            <Section></Section>
        </div>
    );
};

export default Home;