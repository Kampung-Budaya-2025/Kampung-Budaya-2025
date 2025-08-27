import React from 'react'

const MediaPartnerData: string[] = [
    "img/logo/medpart-1.svg",
    "img/logo/medpart-2.svg",
    "img/logo/medpart-3.svg",
    "img/logo/medpart-4.svg",
    "img/logo/medpart-5.svg",
    "img/logo/medpart-6.svg"
]

const MediaPartner: React.FC = () => {
    return (
        <section className='bg-gradient-to-b from-[#E1C476] to-[#B1811B] flex flex-col justify-center items-center gap-24 pt-12 pb-24'>
            <p
                className="text-8xl font-samsktrigrama text-transparent bg-clip-text bg-gradient-to-b from-[#5F3313] to-[#3F170D]">
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
                                className='h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`second-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Third set to ensure complete coverage */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`third-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-56 w-auto object-contain filter transition-all duration-300'
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
                                className='h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`second-right-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                    {/* Third set to ensure complete coverage */}
                    {MediaPartnerData.map((logo: string, index: number) => (
                        <div key={`third-right-${index}`} className='flex-shrink-0 mx-8'>
                            <img
                                src={logo}
                                alt={`Media Partner ${index + 1}`}
                                className='h-56 w-auto object-contain filter transition-all duration-300'
                            />
                        </div>
                    ))}
                </div>
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