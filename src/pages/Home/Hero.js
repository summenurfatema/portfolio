import React from 'react';




const Hero = () => {
    return (
        <div className="flex flex-col justify-center pt-20">
            <div className='w-80 md:w-[570px]'>
                <h1 className="text-3xl font-bold border-b-2 pb-2">About me </h1>
                <p className="py-6">I'm Fatema Summe Nur.I love coding.I completed the Web Development Course to develop myself as a Web Developer.Now,I can proudly say that I'm a Front-end Web Developer. I can build awesome and highly responsive websites. My resume is given bellow where you can know more about me. </p>
                <a href='resume.pdf' download='resume.pdf'>
                    <button className="btn btn-outline">Download My Resume</button>
                </a>
            </div>
        </div>

    );
};

export default Hero;