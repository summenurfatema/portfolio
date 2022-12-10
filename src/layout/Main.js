import React from 'react';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Navbar/Navbar';

const Main = () => {
    return (
        <div className='flex container mx-auto px-10 py-7 space-x-10'>
            <Navbar></Navbar>
            <div>
                <Home />
            </div>
        </div>
    );
};

export default Main;