import React from 'react';

interface MascotProps {
    mascotSrc: string;
    nameSrc: string;
    translateY?: string;
}

const Mascot = ({ mascotSrc, nameSrc, translateY = '-translate-y-5' }: MascotProps) => {
    return (
        <div className={`flex flex-col items-center transform ${translateY}`}>
            <img className='transform z-10 ' src={mascotSrc} alt="Mascot" />
            <img className='w-60 transform -translate-y-1/3' src={nameSrc} alt="Mascot Name" />
        </div>
    );
};

export default Mascot;