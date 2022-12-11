import React from 'react';

const Blog = () => {
    return (
        <div className='pl-10 pt-16 md:pl-32 md:pt-60'>
            <div className='flex  justify-center items-center uppercase text-2xl'>
                <p>C</p>
                <div className='w-5 h-5 border-dotted border-4 rounded-full animate-spin'></div>
                <p>m</p>
                <p>i</p>
                <p>n</p>
                <p>g</p>
                <p className='pl-5'>s</p>
                <div className='w-5 h-5 border-dotted border-4 rounded-full animate-spin'></div>
                <div className='w-5 h-5 border-dotted border-4 rounded-full animate-spin'></div>
                <p>n</p>
            </div>
        </div>
    );
};

export default Blog;