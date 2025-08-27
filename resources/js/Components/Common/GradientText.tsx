import React from 'react';

type GradientTextProps = {
    children: React.ReactNode;
    className?: string;
};

const gradientColor = "tracking-[-0.02em] bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent drop-shadow-md";

const GradientText = ({ children, className = '' }: GradientTextProps) => {
    return (
        <p className={`${gradientColor} ${className}`}>
            {children}
        </p>
    );
};

export default GradientText;