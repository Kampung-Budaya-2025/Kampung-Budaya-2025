import React from 'react';

const BackgroundSection = () => (
    <>
        {/* Gambar atas untuk desktop */}
        <img 
            className='absolute top-12 md:top-8 object-none md:w-full md:object-cover hidden md:block' 
            src="img/background/batik-horizontal.svg" 
            alt="Motif Batik" 
        />
        
        {/* Gambar atas untuk mobile */}
        <img 
            className='absolute transform -translate-y-1/4 sm:-translate-y-3/8 w-full object-cover md:hidden' 
            src="img/background/batik-mobile.svg" 
            alt="Motif Batik" 
        />

        {/* Gambar bawah untuk desktop */}
        <img 
            className='absolute bottom-[22vh] w-full object-cover rotate-180 hidden md:block' 
            src="img/background/batik-horizontal.svg" 
            alt="Motif Batik" 
        />
        
        {/* Gambar bawah untuk mobile */}
        <img 
            className='absolute bottom-[30vh] sm:bottom-[24vh] w-full object-cover rotate-180 md:hidden transform translate-y-1/4' 
            src="img/background/batik-mobile.svg" 
            alt="Motif Batik" 
        />

        {/* Curve dan background putih */}
        <div className='w-full absolute bottom-0 z-20'>
            <img 
                className='w-full object-cover' 
                src="img/background/curve.svg" 
                alt="Motif Batik" 
            />
            <div className='bg-white w-full h-[16vh] md:h-[22vh]'></div>
        </div>
        
        {/* Background batikan untuk desktop */}
        <img 
            className='w-full absolute bottom-16 lg:bottom-8 xl:bottom-0 transform z-30 hidden md:block' 
            src="img/background/batikan.svg" 
            alt="" 
        />

        {/* Background batikan untuk mobile */}
        <img 
            className='w-full absolute bottom-8 lg:bottom-0 transform z-30 md:hidden px-6 sm:px-12' 
            src="img/background/batikan-mobile.svg" 
            alt="" 
        />
    </>
);

export default BackgroundSection;