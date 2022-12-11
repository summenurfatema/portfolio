import React from 'react';
import { FaSkiing } from 'react-icons/fa';
import Contect from '../Contect/Contect';
import Project from '../Project/Project';
import Skills from '../Footer/Skills/Skills'

import Hero from './Hero';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div className='mb-14'>

            <Hero />
            <Education />
            <Project />
            <Skills />

            <Contect />


        </div>
    );
};

export default Home;