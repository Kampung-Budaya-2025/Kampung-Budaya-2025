import React from 'react';
import { DecorationItem } from '../types';

interface SingleDecorationProps {
    decoration: DecorationItem;
    containerClassName?: string;
}

const SingleDecoration: React.FC<SingleDecorationProps> = ({ 
    decoration, 
    containerClassName = '' 
}) => {
    return (
        <div className={containerClassName}>
            <img
                src={decoration.src}
                alt={decoration.alt}
                className={decoration.className}
            />
        </div>
    );
};

export { SingleDecoration };