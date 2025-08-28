import React from 'react';
import { TitleProps } from '../types';

const Title: React.FC<TitleProps> = ({ children, className = "" }) => (
    <h1
        className={`text-[4rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[15vh] font-normal font-samsktrigrama leading-[0.9] lg:leading-[1.1] tracking-[-0.048vh] drop-shadow-2xl relative z-30 bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent overflow-visible ${className}`}
    >
        {children}
    </h1>
);

export default Title;