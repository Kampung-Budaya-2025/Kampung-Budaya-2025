import React from 'react'
import GradientText from '@/Components/Common/GradientText'

const KilasBalik = () => {
  return (
    <section>
      <img className='w-full' src="img/decoration/visi-footer.svg" alt="" />
      <div className='flex flex-col items-center justify-center pt-24 pb-18'>
        <GradientText className='font-samsktrigrama text-[#3F170D] text-8xl'>
          Kilas Balik
        </GradientText>
        <p className='font-samsktrigrama text-[#3F170D] text-8xl'>
          Kampung Budaya 2024
        </p>
      </div>
    </section>
  )
}

export default KilasBalik