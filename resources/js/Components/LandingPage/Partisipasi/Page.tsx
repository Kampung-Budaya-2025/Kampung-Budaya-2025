import GradientText from '@/Components/Common/GradientText'
import React from 'react'
import { Link } from "react-router-dom";

const Partisipasi = () => {
    return (
        <div>
            <div className='relative py-36'>
                <img className='absolute z-0 transform bottom-80 -translate-x-1/3 left-0 animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]' src="img/decoration/daun.svg" alt="" />
                <img className='absolute z-0 w-72 transform -translate-x-1/3 left-0 top-96 rotate-30 animate-[floatWithRotateRight-12-3_2s_ease-in-out_infinite]' src="img/decoration/daun.svg" alt="" />
                <div className="absolute z-0 transform bottom-80 translate-x-1/3 right-0 rotate-y-180">
                    <img className="animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]" src="img/decoration/daun.svg" alt="" />
                </div>

                <div className="absolute z-0 w-72 transform translate-x-1/3 right-0 top-96 rotate-y-180 -rotate-30">
                    <img className="animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]" src="img/decoration/daun.svg" alt="" />
                </div>
                <div className=' flex flex-row h-full px-48'>
                    <div className='flex flex-1 flex-col items-center justify-center'>
                        <GradientText className='font-samsktrigrama text-8xl'>
                            Kami Menantikan
                        </GradientText>
                        <GradientText className='font-samsktrigrama text-8xl'>
                            Partisipasimu
                        </GradientText>
                        <p className='text-[#3F170D] text-2xl mt-4 text-center'>
                            Jangan lewatkan lomba-lomba dan forum daerah!
                        </p>
                        <Link
                            to="/register-form"
                            className='my-12 transition-all duration-200 hover:opacity-90 hover:scale-105 text-2xl px-6 py-3 rounded-full'
                            style={{
                                background: "linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)",
                            }}
                        >
                            <span className="text-[#3F170D] font-medium text-2xl px-6 py-5 rounded-full">Daftar Sekarang</span>
                        </Link>
                    </div>
                    <div className='flex flex-1 items-center justify-center relative'>
                        <div className='absolute inset-0 z-0 flex justify-center items-center pb-32'>
                            <img src="img/decoration/candi.svg" alt="" className='object-contain w-128' />
                        </div>
                        <div className='flex flex-row -space-x-18 justify-center items-center z-10 pt-24'>
                            <img className='w-72' src="img/mascot/maskot-cowok.svg" alt="" />
                            <img className='w-72' src="img/mascot/maskot-cewek.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div >
            <img className='w-full rotate-x-180' src="img/decoration/visi-footer.svg" alt="" />
        </div>
    )
}

export default Partisipasi