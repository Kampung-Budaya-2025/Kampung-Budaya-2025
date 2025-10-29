import React from 'react'

const MediaPartnerData: string[] = [
    "img/logo/sponsor/sponsor-1.svg",
    "img/logo/sponsor/sponsor-2.svg",
    "img/logo/sponsor/sponsor-3.svg",
    "img/logo/sponsor/sponsor-4.svg",
    "img/logo/sponsor/sponsor-5.svg",
    "img/logo/sponsor/sponsor-6.svg",
    "img/logo/sponsor/sponsor-7.svg",
    "img/logo/sponsor/sponsor-8.svg",
    "img/logo/sponsor/sponsor-9.svg",
    "img/logo/sponsor/sponsor-10.svg",
    "img/logo/sponsor/sponsor-11.svg",
    "img/logo/sponsor/sponsor-12.svg",
    "img/logo/sponsor/sponsor-13.svg",
    "img/logo/sponsor/sponsor-14.svg",
    "img/logo/sponsor/sponsor-15.svg",
]

const MediaPartner: React.FC = () => {
    return (
        <section className='bg-gradient-to-b from-[#E1C476] to-[#B1811B] flex flex-col justify-center items-center gap-8 lg:gap-24 pt-12'>
            <p
                className="text-5xl px-24 text-center lg:text-8xl font-samsktrigrama text-transparent bg-clip-text bg-gradient-to-b from-[#5F3313] to-[#3F170D]">
                Sponsors and Media Partner
            </p>
            {/* First scroll row - Left to Right */}
            <div className='w-full overflow-hidden'>
                <div className='flex animate-scroll-left'>
                    {/* First set of logos */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`first-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`second-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Third set to ensure complete coverage */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`third-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Second scroll row - Right to Left */}
            <div className='w-full overflow-hidden'>
                <div className='flex animate-scroll-right'>
                    {/* First set of logos */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`first-right-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`second-right-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Third set to ensure complete coverage */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`third-right-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='lg:hidden w-full overflow-hidden'>
                <div className='flex animate-scroll-left'>
                    {/* First set of logos */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`first-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`second-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Third set to ensure complete coverage */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`third-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-42 lg:h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='h-[10vh] w-full bg-[#3F170D] rounded-t-4xl'>
            </div>

            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
          width: max-content;
        }
        
        .animate-scroll-right {
          animation: scroll-right 15s linear infinite;
          width: max-content;
        }
        
      `}</style>
        </section>
    )
}

export default MediaPartner