import React from 'react';
import VisiMisiSection from './UI/VisiMisiCard';
import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';

const VisiMisi = () => {
    return (
        <section className='flex flex-col py-48 items-center bg-gradient-to-b from-[#FFFFFF] to-[#E1C476] gap-32 relative'>
            <div className='opacity-20'>
            <FlowerDecoration position='absolute top-24 left-0 -translate-x-1/2 z-0'/>
            <FlowerDecoration position='absolute top-5/12 right-48 translate-x-1/2 z-0'/>
            <FlowerDecoration position='absolute top-3/4 right-0 translate-x-1/2 z-0'/>
            <FlowerDecoration position='absolute top-6/12 left-48 translate-x-1/2 z-0'/>
            <FlowerDecoration position='absolute bottom-0 left-1/2 z-0'/>
            </div>
            
            <div className='relative z-10'>
                <VisiMisiSection 
                    decorationSrc="img/decoration/visi.svg"
                    text="Membangun Harmoni dalam Diversitas Identitas"
                />
            </div>
            <div className='relative z-10'>
                <VisiMisiSection 
                    decorationSrc="img/decoration/misi.svg"
                    text="Membangun Harmoni dalam Diversitas Identitas"
                />
            </div>
        </section>
    );
};

export default VisiMisi;