import React from 'react';

interface MascotProps {
    mascotSrc: string;
    nameSrc: string;
    translateY?: string;
    className?: string;
    animate?: string; // animasi opsional
}

const Mascot = ({ 
    mascotSrc, 
    nameSrc, 
    translateY = '-translate-y-5', 
    className = '',
    animate = '' // default kosong
}: MascotProps) => {
    return (
        <div className={`flex flex-col items-center transform  ${translateY} ${className} hover-zoom-slow`}>
            <img 
                className={`${animate} transform z-10`} 
                src={mascotSrc} 
                alt="Mascot" 
            />
            <img 
                className="w-36 lg:w-60 transform -translate-y-1/3" 
                src={nameSrc} 
                alt="Mascot Name" 
            />
        </div>
    );
};

export default Mascot;
