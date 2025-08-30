import React from 'react';

type VisiMisiSectionProps = {
    decorationSrc: string;
    text: string;
};

const VisiMisiSection = ({ decorationSrc, text }: VisiMisiSectionProps) => {
    return (
        <div className='w-full relative'>
            <img 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-8 lg:-translate-y-18 w-48 lg:w-120 z-10' 
                src={decorationSrc} 
                alt="Decoration" 
            />
            <div className='h-48 lg:h-96 w-full flex items-start px-6 lg:px-24'>
                <img 
                    className='w-12 lg:w-24 h-full object-cover object-left' 
                    src="img/background/visimisi.svg" 
                    alt="" 
                />
                <div className='h-full w-full'>
                    <div className='flex items-center justify-center h-full flex-1 bg-gradient-to-r from-[#B18116] via-[#E1B01B] to-[#B18116] border-[#3F170D] border-y-2 lg:border-y-4'>
                        <p className='lg:pt-18 text-center font-samsktrigrama text-5xl lg:text-8xl text-[#3F170D]'>
                            {text}
                        </p>
                    </div>
                </div>
                <img 
                    className='w-12 lg:w-24  h-full object-cover object-left rotate-y-180' 
                    src="img/background/visimisi.svg" 
                    alt="" 
                />
            </div>
        </div>
    );
};

export default VisiMisiSection;