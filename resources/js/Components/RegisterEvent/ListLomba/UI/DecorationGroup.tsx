import React from 'react';
import { DecorationGroup as DecorationGroupType } from '../types';

interface DecorationGroupProps {
    decoration: DecorationGroupType;
}

const DecorationGroup: React.FC<DecorationGroupProps> = ({ decoration }) => {
    return (
        <div className={decoration.containerClassName}>
            {decoration.items.map((item) => (
                <div key={item.id}>
                    <img
                        src={item.src}
                        alt={item.alt}
                        className={item.className}
                    />
                </div>
            ))}
        </div>
    );
};

export { DecorationGroup };