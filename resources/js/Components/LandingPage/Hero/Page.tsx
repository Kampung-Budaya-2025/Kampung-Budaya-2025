import React from 'react';

const Hero = () => {
    const styleContent = `
        @keyframes spin-ccw {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes spin-cw {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }

        .animate-spin-cw {
            animation: spin-cw 15s linear infinite;
        }

        .animate-spin-ccw {
            animation: spin-ccw 15s linear infinite;
        }
    `;

    return (
        <section>
            <div className='relative h-[122vh] w-full overflow-hidden'>
                <img className='absolute top-0 w-full object-cover' src="img/background/batik-horizontal.svg" alt="Motif Batik" />
                <div id='flower'>
                    <div id='flower_left'>
                        <img className='absolute left-0 top-0 transform -translate-x-1/3 -translate-y-1/3 z-10 w-96 object-contain animate-spin-ccw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute left-56 top-0 transform -translate-y-1/2 z-10 w-64 object-contain animate-spin-ccw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute left-64 top-36 transform z-10 w-20 object-contain animate-spin-ccw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute left-128 top-8 transform z-10 w-20 object-contain animate-spin-ccw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                    </div>
                    <div id='flower_mid'>
                        <img className='absolute left-96 right-0 bottom-[22vh] transform z-20 translate-y-2/3 w-48 object-contain mx-auto animate-spin-ccw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute left-0 right-0 bottom-[22vh] transform z-20 translate-y-1/2 w-64 object-contain mx-auto animate-spin-cw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute left-0 right-96 bottom-[22vh] transform z-20 translate-y-2/3 w-48 object-contain mx-auto animate-spin-ccw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                    </div>
                    <div id='right'>
                        <img className='absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3 z-10 w-96 object-contain animate-spin-cw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute right-56 top-0 transform -translate-y-1/2 z-10 w-64 object-contain animate-spin-cw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute right-64 top-36 transform z-10 w-20 object-contain animate-spin-cw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                        <img className='absolute right-128 top-8 transform z-10 w-20 object-contain animate-spin-cw' src="img/decoration/bunga.svg" alt="Dekorasi Bunga" />
                    </div>
                </div>
                <div id='candi'>
                    <div id='candi_left'>
                        <img className='absolute left-0 bottom-[22vh] transform z-10 object-contain' src="img/decoration/candi-hero-3.svg" alt="Dekorasi Candi" />
                        <img className='absolute left-12 bottom-[22vh] transform z-10 object-contain' src="img/decoration/candi-hero-2.svg" alt="Dekorasi Candi" />
                        <img className='absolute left-0 bottom-[22vh] transform z-10 object-contain' src="img/decoration/candi-hero-1.svg" alt="Dekorasi Candi" />
                    </div>
                    <div id='candi_right'>
                        <img className='rotate-y-180 absolute right-0 bottom-[22vh] transform z-10 object-contain' src="img/decoration/candi-hero-3.svg" alt="Dekorasi Candi" />
                        <img className='absolute right-12 bottom-[22vh] transform z-10 object-contain' src="img/decoration/candi-hero-2.svg" alt="Dekorasi Candi" />
                        <img className='rotate-y-180 absolute right-0 bottom-[22vh] transform z-10 object-contain' src="img/decoration/candi-hero-1.svg" alt="Dekorasi Candi" />
                    </div>
                </div>
                <div id='title' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-96'>
                    <div id='kampung' className='flex justify-center gap-1'>
                        <img src="img/letters/K.svg" alt="" />
                        <img src="img/letters/a_1.svg" alt="" />
                        <img src="img/letters/m.svg" alt="" />
                        <img className='transform translate-y-1/5' src="img/letters/p.svg" alt="" />
                        <img src="img/letters/u.svg" alt="" />
                        <img className='transform translate-y-1/20' src="img/letters/n.svg" alt="" />
                        <img className='transform translate-y-1/4' src="img/letters/g.svg" alt="" />
                    </div>
                    <div id='budaya' className='flex justify-center gap-1'>
                        <img src="img/letters/B.svg" alt="" />
                        <img src="img/letters/u_2.svg" alt="" />
                        <img className='transform -translate-y-1/7' src="img/letters/d.svg" alt="" />
                        <img src="img/letters/a_2.svg" alt="" />
                        <img className='transform translate-y-1/5' src="img/letters/y.svg" alt="" />
                        <img className='transform translate-y-1/10' src="img/letters/a_3.svg" alt="" />
                    </div>
                    <div id='2025' className='flex justify-center gap-3 pr-24'>
                        <img src="img/letters/2.svg" alt="" />
                        <img src="img/letters/0.svg" alt="" />
                        <img src="img/letters/2_2.svg" alt="" />
                        <img src="img/letters/5.svg" alt="" />
                    </div>
                </div>
                <img className='absolute bottom-[22vh] w-full object-cover rotate-180' src="img/background/batik-horizontal.svg" alt="Motif Batik" />
                <div className='w-full absolute bottom-0 z-20'>
                    <img className='w-full object-cover' src="img/background/curve.svg" alt="Motif Batik" />
                    <div className='bg-white w-full h-[22vh]'>
                    </div>
                </div>
                <img className='w-full absolute bottom-0 transform z-30' src="img/background/batikan.svg" alt="" />
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: styleContent }} />
        </section>
    );
};

export default Hero;