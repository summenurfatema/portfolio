import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/me.jpg'

const Navbar = () => {

    // const [dark, setDark] = useState(true)

    // const handleDark = () => {
    //     setDark(!dark)
    //     //localStorage.setItem('dark',!dark)
    // }

    // useEffect(() => {
    //     if (dark) {
    //         document.querySelector("html").setAttribute("data-theme", "dark")

    //     }
    //     else {
    //         document.querySelector("html").setAttribute("data-theme", "cupcake")
    //     }
    // }, [dark])


    return (
        <div className='flex flex-col items-center space-y-4 w-96 md:border-r-2'>
            {/* <input type="checkbox" onClick={handleDark} className="toggle toggle-success" /> */}

            <div className=" rounded-full border-dotted border-4 border-indigo-300 relative">



                <img src={img} className="h-44 rounded-full shadow-2xl p-1" alt='' />
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

                        <a href='/#education'>Education</a>
                    </button>

                </li>


                <li>
                    <button className='btn btn-outline w-full '>

                        <a href='/#projects'>Projects</a>
                    </button>

                </li>

                <li>
                    <button className='btn btn-outline w-full '>

                        <a href='/#skills'>Skills</a>
                    </button>

                </li>
                <li>
                    <button className='btn btn-outline w-full '>

                        <Link to='/blog'>Blog</Link>
                    </button>

                </li>


                <li className=''>
                    <button className='btn btn-outline w-full px-16 '>

                        <a href='/#contact' className=''>Contact</a>
                    </button>

                </li>


            </ul>
        </div>
    );
};

export default Navbar;