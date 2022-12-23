import React from 'react';

const FrontOfCard = ({ children }) => {
    return (
        <div>
            <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
                {children}
            </div>
        </div>
    );
};

export default FrontOfCard;