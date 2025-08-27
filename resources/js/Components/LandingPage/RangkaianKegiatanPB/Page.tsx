import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import GradientText from '@/Components/Common/GradientText';
import React from 'react';

const gradientColor = "tracking-[-0.02em] bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent";

const RangkaianKegiatanPB: React.FC = () => {
    return (
        <section className='relative h-[90vh] w-full overflow-visible'>
            <img className='absolute left-0 top-0 z-30 transform -translate-y-1/4' src="img/background/batik-triangle.svg" alt="" />
            <img className='absolute right-0 top-0 z-30 rotate-y-180 -translate-y-1/4' src="img/background/batik-triangle.svg" alt="" />
            
            <div className='w-full h-full px-56 flex overflow-visible'>
                <div className='flex flex-4/6 flex-col justify-center'>
                    <p className='font-medium text-5xl text-[#3F170D] font-samsktrigrama'>Kampung Budaya</p>
                    <div className='py-2'>
                        <GradientText className='text-8xl font-samsktrigrama'>
                            Rangkaian Kegiatan
                        </GradientText>
                        <GradientText className='text-8xl font-samsktrigrama'>
                            Pelestarian Budaya
                        </GradientText>
                    </div>
                    <p className='text-xl text-[#7A4D17]'>Dilaksanakan oleh Kementerian Dalam Negeri Eksekutif Mahasiswa Universitas Brawijaya yang didalamnya terdapat rangkaian rangkaian kegiatan seperti: </p>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-2 py-6 font-bold text-[20px]'>
                        <GradientText>Talkshow</GradientText>
                        <GradientText>Lomba Budaya</GradientText>
                        <GradientText>Gelanggang Budaya</GradientText>
                        <GradientText>Workshop Membatik</GradientText>
                        <GradientText>Parade</GradientText>
                    </div>
                    <p className='text-xl text-[#7A4D17]'>Yang menjadikan Kampung Budaya sebagai salah satu panggung terbesar untuk Forda dan komunitas budaya untuk unjuk kemampuan dan meraih prestasi.</p>
                </div>
                
                <div className='flex flex-2/6 items-center justify-center relative overflow-visible'>
                    {/* Container untuk background gunungan dengan overflow visible */}
                    <div className='relative w-full h-full flex items-center justify-center overflow-visible'>
                        {/* Background gunungan daun sebagai elemen terpisah */}
                        <div
                            className='absolute inset-0 w-[125%] h-[125%] -translate-x-[10%] -translate-y-[10%] overflow-visible'
                            style={{
                                backgroundImage: 'url(img/decoration/gunungan-daun.svg)',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                zIndex: 1
                            }}
                        />
                        
                        {/* Mascot dan bubble di atas background */}
                        <img
                            className='relative z-10 w-[60%] pt-12'
                            src="img/mascot/karakter-obor.svg"
                            alt="Karakter Obor"
                        />
                        
                        <img 
                            className='absolute z-20 w-32 top-2/5 left-1/5 transform -translate-x-1/2 -translate-y-1/2' 
                            src="img/card/bubble-welcome.svg" 
                            alt="Bubble Welcome" 
                        />
                        <img 
                            className='absolute z-20 w-32 bottom-2/5 right-1/5 transform translate-x-1/2 translate-y-1/2' 
                            src="img/card/bubble-happy.svg" 
                            alt="Bubble Happy" 
                        />
                    </div>
                </div>
            </div>

            <FlowerDecoration 
                position='right-0 bottom-0 translate-x-1/2 translate-y-1/2'
                size='w-64'
                zIndex='z-30'
            />
            <FlowerDecoration 
                position='left-0 bottom-0 -translate-x-1/2 translate-y-1/2'
                size='w-64'
                zIndex='z-30'
            />
        </section>
    )
}

export default RangkaianKegiatanPB