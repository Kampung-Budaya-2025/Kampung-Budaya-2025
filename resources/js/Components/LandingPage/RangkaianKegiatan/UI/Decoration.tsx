import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import React from 'react';

const Decorations = () => {
  return (
    <>

      {/* {top decoration} */}
      <FlowerDecoration
        position="absolute top-16 md:top-12 right-0 translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-20 md:w-42 lg:w-48 xl:w-56"
        animation="animate-spin-cw"
      />
      <FlowerDecoration
        position="absolute top-16 md:top-12 left-0 -translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-20 md:w-42 lg:w-48 xl:w-56"
      />
      <FlowerDecoration
        position="absolute top-36 md:hidden right-0"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-20 sm:w-32"
        animation="animate-spin-cw"
      />
      <FlowerDecoration
        position="absolute top-36 md:hidden left-0"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-20 sm:w-32"
      />

      <FlowerDecoration
        position="absolute hidden md:block top-12 right-24"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-24"
        animation="animate-spin-cw"
      />
      <FlowerDecoration
        position="absolute hidden md:block top-52 right-24"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-12"
        animation="animate-spin-cw"
      />

      {/* {side decoration} */}
      <FlowerDecoration
        position="absolute top-9/24 md:hidden right-0 translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-30 sm:w-40"
        animation="animate-spin-cw"
      />
      <FlowerDecoration
        position="absolute top-9/24 md:hidden left-0 -translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-30 sm:w-40"
      />
      <FlowerDecoration
        position="absolute top-15/24 md:top-16/24 lg:hidden right-0 translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-30 sm:w-40 md:w-40"
        animation="animate-spin-cw"
      />
      <FlowerDecoration
        position="absolute top-15/24 md:top-14/24 lg:hidden left-0 -translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-30 sm:w-40 md:w-64"
      />
      <FlowerDecoration
        position="absolute hidden md:block lg:hidden top-15/24 md:top-18/24 lg:hidden left-32 -translate-x-1/2"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-30 sm:w-40 md:w-18"
      />

      <FlowerDecoration
        position="absolute hidden lg:block bottom-12 left-24"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-24"
        animation="animate-spin-cw"
      />
      <FlowerDecoration
        position="absolute hidden xl:block bottom-52 left-24"
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-12"
        animation="animate-spin-cw"
      />
    </>
  );
};

export default Decorations;