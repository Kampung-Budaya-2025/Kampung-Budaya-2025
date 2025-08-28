import React from 'react';
import { SubTitleProps } from '../types';

const SubTitle: React.FC<SubTitleProps> = ({ children, className = "" }) => (
    <h2
        className={`text-[0.875rem] sm:text-lg md:text-[2.4vh] lg:text-[3vh] xl:text-[3.5vh] font-amaranth font-normal text-[#C88B5F] leading-normal text-center tracking-[-0.02em] drop-shadow-2xl relative z-30 overflow-visible w-full sm:max-w-[80vw] md:max-w-[70vw] lg:w-[40vw] ${className}`}
    >
        {children}
    </h2>
);

export default SubTitle;