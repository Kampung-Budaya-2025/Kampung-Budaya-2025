import React from 'react';

const BackgroundSection = () => (
  <>
    {/* Background batik atas */}
    <img 
      className='absolute top-0 w-full object-cover' 
      src="img/background/batik-horizontal.svg" 
      alt="Motif Batik" 
    />
    
    {/* Background batik bawah */}
    <img 
      className='absolute bottom-[22vh] w-full object-cover rotate-180' 
      src="img/background/batik-horizontal.svg" 
      alt="Motif Batik" 
    />
    
    {/* Curve dan background putih */}
    <div className='w-full absolute bottom-0 z-20'>
      <img 
        className='w-full object-cover' 
        src="img/background/curve.svg" 
        alt="Motif Batik" 
      />
      <div className='bg-white w-full h-[22vh]'></div>
    </div>
    
    {/* Background batikan */}
    <img 
      className='w-full absolute bottom-0 transform z-30' 
      src="img/background/batikan.svg" 
      alt="" 
    />
  </>
);

export default BackgroundSection;