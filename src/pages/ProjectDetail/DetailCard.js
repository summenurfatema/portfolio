import React from 'react';

const DetailCard = ({ project }) => {
    const { img1, img2, img3, projectName, lst1, lst2, lst3, lst4, lst5, live, git, server } = project
    //w-full object-cover transition duration-500 group-hover:scale-105
    return (
        <div className='rounded-lg border-2 my-7 px-3 py-4 hover:shadow-lg hover:shadow-slate-50'>
            <h1 className='text-center text-2xl font-semibold mb-3'>{projectName}</h1>
            <div className="h-60 carousel carousel-vertical rounded-box bg-white">
                <div className="carousel-item h-full  transition duration-500 hover:scale-105">
                    <img src={img1} id='item1' className=' transition duration-500 hover:scale-105' alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img2} id='item2' className=' transition duration-500 hover:scale-105 hover:text-sm' alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img3} id='item3' className=' transition duration-500 hover:scale-105' alt='' />
                </div>
            </div>
            <ul className='list-disc pl-7 mb-7'>
                <p className='pl-0 text-2xl font-semibold my-2'>Features:</p>
                <li>{lst1}</li>
                <li>{lst2}</li>
                <li>{lst3}</li>
                <li>{lst4}</li>
                <li>{lst5}</li>
            </ul>
            <div className='flex flex-col items-center space-y-3 md:flex-row md:space-x-5'>
                <button className='btn btn-outline mt-3'>
                    <a className='text-base' href={live}>Live website</a>
                </button>
                <button className='btn btn-outline'>
                    <a className='text-base' href={git}>Github</a>
                </button>
                <button className='btn btn-outline'>
                    <a className='text-base' href={server}>Server</a>
                </button>
            </div>

        </div>
    );
};

export default DetailCard;
