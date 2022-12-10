import React from 'react';
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <div className="flex">

            <h1 className="text-5xl font-bold">Hey there!</h1>
            <p className="py-6">I'm Fatema Summe Nur. I'm a MERN Stack Web Developer</p>
            <a href='resume.pdf' download='resume.pdf'>
                <button className="btn bg-red-400">Download My Resume</button>
            </a>
        </div>

    );
};

export default Hero;