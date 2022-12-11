import React from 'react';




const Hero = () => {
    return (
        <div className="flex flex-col justify-center pt-20">
            <div className='w-80 md:w-[570px]'>
                <h1 className="text-3xl font-bold border-b-2 pb-2">About me </h1>
                <p className="py-3">I'm Fatema Summe Nur.I live in Chittagong,Bangladesh. I've completed BSc course.After that I've completed my Web Development Course to develop myself as a Web Developer.</p>
                <p className='mb-4'>Now, I can proudly say that I'm a Front-end Web Developer. I can build awesome and highly responsive websites. My resume is given bellow through which you can know more about me. </p>
                <div className='flex flex-col space-y-3 md:flex-row md:space-y-0'>
                    <a href='resume.pdf' download='Fatema Summenur |Resume.pdf' className='mr-4'>
                        <button className="btn btn-outline">Download My Resume</button>
                    </a>

                    <a href='/#contact'>
                        <button className='btn bg-indigo-300 text-sky-900 hover:text-indigo-300 hover:bg-sky-900'>
                            Hire me
                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Hero;