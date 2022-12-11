import React from 'react';

const DetailCard = ({ project }) => {
    const { img1, img2, img3, projectName } = project
    //w-full object-cover transition duration-500 group-hover:scale-105
    return (
        <div>
            <div className="h-60 carousel carousel-vertical rounded-box bg-white">
                <div className="carousel-item h-full  transition duration-500 hover:scale-105">
                    <img src={img1} id='item1' className=' transition duration-500 hover:scale-105' alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img2} id='item2' className=' transition duration-500 hover:scale-105 hover:text-sm' alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img3} id='item3' className=' transition duration-500 group-hover:scale-105' alt='' />
                </div>
            </div>


        </div>
    );
};

export default DetailCard;
