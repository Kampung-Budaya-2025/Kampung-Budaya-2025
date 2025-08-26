import React from 'react'
import Mascot from './UI/Mascot'

const PengenalanMaskot = () => {
    return (
        <section className='h-[85vh] relative px-72'>
            <div className='flex flex-row h-full justify-center items-center'>
                <div className='flex flex-3 relative h-full '>
                    <img 
                        className='absolute w-[150%] z-0 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3' 
                        src="img/background/ukiran.svg" 
                        alt="" 
                    />                    <div className='flex justify-center items-center w-full h-full -space-x-24'>
                        <Mascot 
                            mascotSrc="img/mascot/maskot-cowok.svg"
                            nameSrc="img/mascot/Rangga.svg"
                        />
                        <div className='pb-2'>

                        <Mascot 
                            mascotSrc="img/mascot/maskot-cewek.svg"
                            nameSrc="img/mascot/Raras.svg"
                            translateY="transform"
                        />
                        </div>
                    </div>
                </div>
                <div className='flex flex-2 flex-col items-center justify-center gap-2 text-[#3F170D]'>
                    <img src="img/decoration/ukiran.svg" alt="" />
                    <p className='text-8xl font-samsktrigrama bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent'>
                        Pengenalan
                    </p>
                    <p className='text-8xl font-samsktrigrama bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent'>
                        MASKOT
                    </p>
                    <img className='rotate-180' src="img/decoration/ukiran.svg" alt="" />
                </div>
            </div>
            <img className='absolute left-0 bottom-0 z-30 transform rotate-x-180 translate-y-1/2' src="img/background/batik-triangle.svg" alt="" />
            <img className='absolute right-0 bottom-0 z-30 rotate-y-180 rotate-x-180 transform translate-y-1/2' src="img/background/batik-triangle.svg" alt="" />

        </section>
    )
}

export default PengenalanMaskot