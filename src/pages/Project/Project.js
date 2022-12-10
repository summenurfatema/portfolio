import React from 'react';
import furnica from '../../assets/furnica.png'
import quiz from '../../assets/quiz.png'
import learning from '../../assets/learning.png'
import { FaArrowRight } from 'react-icons/fa'

const Project = () => {
    return (
        <div>
            <div className='space-y-2 md:space-y-6'>
                <h1 className='text-2xl text-center border-b-2 mt-14 pb-4'>My Projects</h1>
                <div className='py-4 md:py-10'>
                    <a href="#" className="group relative">
                        <img
                            alt="Developer"
                            src={learning}
                            className="absolute  object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-8">
                            <div className="mt-10 md:mt-28">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <a className='text-2xl text-white' href='https://eloquent-elf-d6f868.netlify.app' >Live site <FaArrowRight className='inline-block' /></a>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                {/* 2 */}
                <div className='pb-5 md:pb-14'>
                    <a href="#" className="group relative">
                        <img
                            alt="Developer"
                            src={quiz}
                            className="absolute  object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-8">



                            <div className="mt-10 md:mt-28">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <a className='text-2xl text-white' href='https://majestic-longma-703fb9.netlify.app/' >Live site <FaArrowRight className='inline-block' /></a>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                {/* 3 */}
                <div>
                    <a href="#" className="group relative">
                        <img
                            alt="Developer"
                            src={furnica}
                            className="absolute  object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-8">
                            <div className="mt-10 md:mt-28">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <a className='text-2xl text-white' href='https://furnica-client.web.app/' >Live site <FaArrowRight className='inline-block' /></a>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>

            </div>
            <button className='btn btn-outline mt-10 md:mt-20'>see more</button>
        </div>

    );
};

export default Project;