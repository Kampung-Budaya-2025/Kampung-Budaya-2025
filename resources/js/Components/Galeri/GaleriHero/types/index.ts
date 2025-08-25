export interface BackgroundImageProps {
    src: string;
    alt: string;
    className: string;
    width?: number;
}

export interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export interface SubTitleProps {
    children: React.ReactNode;
    className?: string;
}

export interface ElementPosition {
    ref: React.RefObject<HTMLImageElement | null>;
    isInView: boolean;
    src: string;
    alt: string;
    className: string;
    translateDistance: number;
    transitionDuration: string;
    transitionDelay: string;
    floatDuration: string;
    floatDistance: number;
    rotateAmount?: number;
}

export interface ElementPair {
    kiri: ElementPosition;
    kanan: ElementPosition;
}

export interface ElementConfig {
    translateDistance: number;
    duration: string;
    delay: string;
    floatDuration: string;
    floatDistance: number;
    rotateAmount?: number;
}