import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/me.jpg'

const Navbar = () => {
    return (
        <div className='flex flex-col items-center space-y-4 w-96 md:border-r-2'>
            <div className=" rounded-full border-dotted border-4 border-blue-400">
                <img src={img} className="h-40 rounded-full shadow-2xl p-1" alt='' />
            </div>
            <>
                <h1 className='font-semibold text-3xl'>Fatema Summe Nur</h1>
                <p className='font-semibold text-xl border-b pb-5'>Front-end Web Developer</p>
            </>
            <ul className='space-y-4 text-2xl font-semibold pr-7'>


                <li>
                    <button className='btn btn-outline w-full '>

                        <Link to='/'>Home</Link>
                    </button>

                </li>


                <li>
                    <button className='btn btn-outline w-full '>

                        <Link to=''>Education</Link>
                    </button>

                </li>


                <li>
                    <button className='btn btn-outline w-full '>

                        <Link to=''>Projects</Link>
                    </button>

                </li>

                <li>
                    <button className='btn btn-outline w-full '>

                        <Link to='/skills'>Skills</Link>
                    </button>

                </li>


                <li className=''>
                    <button className='btn btn-outline w-full px-16 '>

                        <Link to='/contact'>Contact</Link>
                    </button>

                </li>


            </ul>
        </div>
    );
};

export default Navbar;