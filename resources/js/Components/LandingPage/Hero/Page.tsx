import React from 'react';
import FlowerSection from './UI/FlowerSection';
import CandiSection from './UI/CandiSection';
import TitleSection from './UI/TitleSectionn';
import BackgroundSection from './UI/BackgroundSection';
import { flowerAnimation } from '../../Common/Flower/FlowerAnimation';
import VisiMisi from '../VisiMisi/Page';

const Hero = () => {
  return (
    <section>
      <div className='relative h-[122vh] w-full overflow-hidden'>
        <BackgroundSection />
        <FlowerSection />
        <TitleSection />
        <CandiSection />
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: flowerAnimation }} />
    </section>
  );
};

export default Hero;