import React, { useState } from 'react';

interface FlipCardProps {
  frontImage: string;
  backImage: string;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontImage, backImage, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const animationDelay = `${index * 0.5}s`; // Menghitung delay berdasarkan indeks

  return (
    <div 
      className="flip-card-container" 
      style={{ animationDelay: animationDelay }}
    >
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img 
              className='w-96 cursor-pointer' 
              src={frontImage} 
              alt={`Rangkaian Kegiatan ${index + 1} - Front`} 
            />
          </div>
          <div className="flip-card-back">
            <img 
              className='w-96 cursor-pointer' 
              src={backImage} 
              alt={`Rangkaian Kegiatan ${index + 1} - Back`} 
            />
          </div>
        </div>
      </div>
      
      <style>
        {`
        .flip-card-container {
          perspective: 1000px;
          animation: floatSmooth-10 2s ease-in-out infinite;
        }
        
        .flip-card {
          width: 288px; /* w-72 equivalent */
          height: auto;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }
        
        .flip-card.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .flip-card:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
        
        .flip-card.flipped:hover {
          transform: rotateY(180deg) scale(1.02);
        }
        
        @keyframes floatSmooth-10 {
            0%,
            100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        `}
      </style>
    </div>
  );
};

export { FlipCard };