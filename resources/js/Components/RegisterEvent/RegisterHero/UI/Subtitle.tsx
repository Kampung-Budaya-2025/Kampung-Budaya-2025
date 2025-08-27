import React from 'react';
import { SubTitleProps } from '../types';

const SubTitle: React.FC<SubTitleProps> = ({ children, className = "" }) => (
    <h2
        className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-amaranth font-normal text-[#C88B5F] leading-normal text-center tracking-[-0.02em] drop-shadow-2xl relative z-30 overflow-visible max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[600px] px-4 ${className}`}
    >
        {children}
    </h2>
);

export default SubTitle;