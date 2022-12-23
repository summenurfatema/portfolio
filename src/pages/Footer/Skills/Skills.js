import React from 'react';

const Skills = () => {
    return (
        <div className='my-10' id='skills'>

            {/* fs */}
            <div className='space-y-3'>

                <h1 className='text-3xl font-semibold my-7 border-b-2 pb-4'>My Skills</h1>

                <div className=''>
                    <p className='text-xl mb-2'>HTML5</p>
                    <input type="range" min="0" max="100" defaultValue="100" className="range w-80 md:w-96 range-primary" />
                </div>

                <div className=''>
                    <p className='text-xl mb-2'>CSS</p>
                    <input type="range" min="0" max="100" defaultValue="100" className="range w-80 md:w-96 range-primary" />
                </div>

                <div className=''>
                    <p className='text-xl mb-2'>JavaScript</p>
                    <input type="range" min="0" max="100" defaultValue="95" className="range w-80 md:w-96 range-primary" />
                </div>

                <div className=''>
                    <p className='text-xl mb-2'>React</p>
                    <input type="range" min="0" max="100" defaultValue="98" className="range w-80 md:w-96 range-primary" />
                </div>
                <div className=''>
                    <p className='text-xl mb-2'>BootStrap</p>
                    <input type="range" min="0" max="100" defaultValue="100" className="range w-80 md:w-96 range-primary" />
                </div>

                <div className=''>
                    <p className='text-xl mb-2'>Tailwind CSS</p>
                    <input type="range" min="0" max="100" defaultValue="100" className="range w-80 md:w-96 range-primary" />
                </div>
                <div className=''>
                    <p className='text-xl mb-2'>FireBase</p>
                    <input type="range" min="0" max="100" defaultValue="90" className="range w-80 md:w-96 range-primary" />
                </div>
                <div className=''>
                    <p className='text-xl mb-2'>Express</p>
                    <input type="range" min="0" max="100" defaultValue="100" className="range w-80 md:w-96 range-primary" />
                </div>
                <div className=''>
                    <p className='text-xl mb-2'>Node JS</p>
                    <input type="range" min="0" max="100" defaultValue="90" className="range w-80 md:w-96 range-primary" />
                </div>

                <div className=''>
                    <p className='text-xl mb-2'>Express JS</p>
                    <input type="range" min="0" max="100" defaultValue="90" className="range w-80 md:w-96 range-primary" />
                </div>
                <div className=''>
                    <p className='text-xl mb-2'>MongoDB</p>
                    <input type="range" min="0" max="100" defaultValue="60" className="range w-80 md:w-96 range-primary" />
                </div>


            </div>
            {/* fe */}

        </div >
    );
};

export default Skills;