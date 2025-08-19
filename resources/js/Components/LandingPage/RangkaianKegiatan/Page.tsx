import React from 'react';

const RangkaianKegiatan = () => {
    return (
        <section className='relative h-[80vh] w-full'>
            <img className='absolute left-0 top-0 z-30 transform -translate-y-1/4' src="img/background/batik-triangle.svg" alt="" />
            <img className='absolute right-0 top-0 z-30 rotate-y-180 -translate-y-1/4' src="img/background/batik-triangle.svg" alt="" />
            <div className='w-full h-full px-72 flex'>
                <div className='flex flex-4 flex-col justify-center'>
                    <p className='font-medium text-5xl'>Kampung Budaya</p>
                    <div className='py-6'>
                        <p className='font-bold text-6xl'>Rangkaian Kegiatan</p>
                        <p className='font-bold text-6xl'>Pelestarian Budaya</p>
                    </div>
                    <p className='text-xl'>Dilaksanakan oleh Kementerian Dalam Negeri Eksekutif Mahasiswa Universitas Brawijaya yang didalamnya terdapat rangkaian rangkaian kegiatan seperti: </p>
                    <div className='grid grid-cols-3 gap-x-2 gap-y-2 py-6 font-bold text-xl'>
                        <p>Talkshow</p>
                        <p>Lomba Budaya</p>
                        <p>Gelanggang Budaya</p>
                        <p>Workshop Membatik</p>
                        <p>Parade </p>
                    </div>
                    <p className='text-xl'>Yang menjadikan Kampung Budaya sebagai salah satu panggung terbesar untuk Forda dan komunitas budaya untuk unjuk kemampuan dan meraih prestasi.
                    </p>
                </div>
                <div className='flex flex-3 items-center justify-center'>
                    <div className='relative w-full h-full'> 
                        <img className='absolute inset-0 w-full h-full z-0 object-contain' src="img/decoration/gunungan-daun.svg" alt="" />
                        <img className='absolute z-10 w-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3' src="img/mascot/karakter-obor.svg" alt="" />
                    </div>
                </div>
            </div>

            <img className='absolute w-96 right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 z-30' src="img/decoration/bunga.svg" alt="" />
            <img className='absolute w-96 left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-30' src="img/decoration/bunga.svg" alt="" />
        </section>
    )
}

export default RangkaianKegiatan