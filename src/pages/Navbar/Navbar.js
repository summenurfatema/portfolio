import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/me.jpg'

const Navbar = () => {
    return (
        <div className='flex flex-col items-center space-y-2 w-96'>
            <div className="">
                <img src={img} className="h-36 rounded-full shadow-2xl border-dashed border-4 border-red-400" alt='' />
            </div>
            <>
                <h1 className='font-bold text-3xl'>Fatema Summe Nur</h1>
                <p className='font-bold text-xl'>Front-end Web Developer</p>
            </>
            <ul className='space-y-4 text-3xl font-semibold'>
                <li className='bg-red-400 px-3 py-2 text-center rounded-lg text-gray-800'><Link to=''>Home</Link></li>
                <li className='bg-red-400 px-3 py-2 text-center rounded-lg text-gray-800'><Link to=''>Education</Link></li>
                <li className='bg-red-400 px-3 py-2 text-center rounded-lg text-gray-800'><Link to=''>Projects</Link></li>
                <li className='bg-red-400 px-3 py-2 text-center rounded-lg text-gray-800'><Link to=''>Skills</Link></li>
                <li className='bg-red-400 px-3 py-2 text-center rounded-lg text-gray-800'><Link to=''>Contact me</Link></li>
                <li className='bg-red-400 px-3 py-2 text-center rounded-lg text-gray-800'><Link to='/resume'>Resume</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;