import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Navbar/Navbar';

const Main = () => {
    return (

        <div className='flex flex-col md:flex-row container mx-auto px-10 py-7 space-x-10 '>
            <Navbar></Navbar>

            <Outlet />


        </div>

    );
};

export default Main;