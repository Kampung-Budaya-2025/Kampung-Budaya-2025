import React from 'react';

type VisiMisiSectionProps = {
    decorationSrc: string;
    text: string;
    isFading: boolean; 
}

const VisiMisiSection = ({ decorationSrc, text, isFading }: VisiMisiSectionProps) => {
    return (
        <div className='w-full relative'>
            <img 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-8 lg:-translate-y-18 w-48 lg:w-120 z-10' 
                src={decorationSrc} 
                alt="Decoration" 
            />
            <div className='h-48 lg:h-96 w-full flex justify-between px-6 lg:px-24'>
                <img 
                    className='w-12 lg:w-24 h-full object-cover object-left flex-shrink-0' 
                    src="img/background/visimisi.svg" 
                    alt="" 
                />
                <div className="h-full flex-1 min-w-0 flex justify-center"> {/* Added flex and justify-center */}
                    <div className="w-full h-full flex items-center justify-center
                        bg-gradient-to-r from-[#B18116] via-[#E1B01B] to-[#B18116]
                        border-[#3F170D] border-y-2 lg:border-y-4">
                        <div className="w-full px-4 flex justify-center"> {/* Added flex justify-center */}
                            <p className={`w-full max-w-max block
                                pt-4 sm:pt-2 lg:pt-12 text-center font-samsktrigrama 
                                text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl text-[#3F170D]
                                transition-opacity duration-500 ease-in-out
                                ${isFading ? 'opacity-0' : 'opacity-100'}
                            `}>
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
                <img 
                    className='w-12 lg:w-24 h-full object-cover object-left rotate-y-180 flex-shrink-0' 
                    src="img/background/visimisi.svg" 
                    alt="" 
                />
            </div>
        </div>
    );
};

export default VisiMisiSection;