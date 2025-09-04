import React from 'react';

const BackgroundSection = () => (
    <>
        {/* Gambar atas untuk desktop */}
        <img
            className='absolute top-12 md:top-8 object-none h-[30vh] w-full md:object-cover hidden md:block animate-slide-in-top'
            src="img/background/batik-horizontal.svg"
            alt="Motif Batik"
        />

        {/* Gambar atas untuk mobile */}
        <img
            className='absolute transform -translate-y-1/4 sm:-translate-y-3/8 w-full object-cover md:hidden animate-slide-in-top'
            src="img/background/batik-mobile.svg"
            alt="Motif Batik"
        />

        {/* Gambar bawah untuk desktop */}
        {/* Gambar bawah untuk desktop */}
        <img
            className='absolute bottom-[16vh] object-none h-[30vh] w-full md:object-cover hidden md:block rotate-180 animate-slide-in-top'
            src="img/background/batik-horizontal.svg"
            alt="Motif Batik"
        />

        {/* Gambar bawah untuk mobile */}
        <img
            className='absolute transform bottom-[16vh] w-full object-cover md:hidden rotate-180 animate-slide-in-top'
            src="img/background/batik-mobile.svg"
            alt="Motif Batik"
        />

        {/* Curve dan background putih */}
        <div className='w-full absolute bottom-0 z-10'>
            <img
                className='w-full object-cover'
                src="img/background/curve.svg"
                alt="Motif Batik"
            />
            <div className='bg-white w-full h-[16vh] md:h-[22vh] hidden md:block'></div>
            <div className='bg-white md:hidden'>
                {/* Background batikan untuk mobile */}
                <img
                    className='w-full block pt-[2vh] h-[16vh] px-6 sm:px-18'
                    src="img/background/batikan-mobile.svg"
                    alt=""
                />
            </div>
        </div>

        {/* Background batikan untuk desktop */}
        <img
            className='w-full absolute bottom-16 lg:bottom-8 xl:bottom-0 transform z-30 hidden md:block'
            src="img/background/batikan.svg"
            alt=""
        />

        {/* Container untuk background mobile non-absolut */}

    </>
);

export default BackgroundSection;