import React from 'react';

type LetterProps = {
  src: string;
  className?: string;
};

const Letter = ({ src, className = '' }: LetterProps) => (
  <img src={src} alt="" className={className} />
);

export default Letter;