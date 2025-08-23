import React from "react";
import ListLomba from '@/Components/Galeri/ListLomba/page';

interface ListCardProps {
    title: string;
    icon: string;
    className?: string;
}

const ListCard: React.FC<ListCardProps> = ({ 
    title = "Kolaborasi Musik", 
    icon = "/icon/kolaborasi-musik.svg", 
    className = "" 
}) => {
    return (
        <div 
            className={`relative w-[290px] h-[440px] bg-[url('/decoration/card-list-lomba.svg')] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center overflow-hidden ${className}`}
        >
            {/* Icon */}
            <div className="flex items-center justify-center mb-4 z-10">
                <img 
                    src={icon} 
                    alt={title} 
                    className="w-35 h-35 object-contain"
                />
            </div>
            
            {/* Title */}
            <h1 className="text-center text-[#3F170D] text-2xl px-4 leading-tight z-10 max-w-full">
                {title}
            </h1>
        </div>
    );
};

export { ListCard , ListLomba};