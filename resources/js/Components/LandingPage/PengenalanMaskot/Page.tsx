import React from 'react'

const PengengalanMaskot = () => {
    return (
        <section className='h-[85vh] relative px-72'>
            <div className='flex flex-row h-full justify-center items-center'>
                <div className='relative flex-2 h-full '>
                    <img className='absolute z-0 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3' src="img/background/ukiran.svg" alt="" />
                    <div className='flex justify-center items-center w-full h-full'>
                        <div className='flex flex-col transform -translate-y-5 translate-x-15 items-center'>
                            <img className='transform translate-x-5' src="img/mascot/maskot-cowok.svg" alt="" />
                            <img className='w-72 transform -translate-y-1/3' src="img/mascot/Rangga.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center transform -translate-x-15'>
                            <img className='transform -translate-x-5' src="img/mascot/maskot-cewek.svg" alt="" />
                            <img className='w-72 transform -translate-y-1/3' src="img/mascot/Raras.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 flex-col items-center justify-center gap-6'>
                    <img src="img/decoration/ukiran.svg" alt="" />
                    <p className='text-6xl font-semibold'>Pengenalan</p>
                    <p className='text-6xl font-semibold'>MASKOT</p>
                    <img className='rotate-180' src="img/decoration/ukiran.svg" alt="" />
                </div>
            </div>
            <img className='absolute left-0 bottom-0 z-30 transform rotate-x-180 translate-y-1/2' src="img/background/batik-triangle.svg" alt="" />
            <img className='absolute right-0 bottom-0 z-30 rotate-y-180 rotate-x-180 transform translate-y-1/2' src="img/background/batik-triangle.svg" alt="" />

        </section>
    )
}

export default PengengalanMaskot