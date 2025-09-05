interface ButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
}

interface ButtonData {
    id: string;
    text: string;
    onClick?: () => void;
    href?: string;
}

interface CardData {
    id: string;
    title: string;
    icon: string;
    date: string;
    category: string
    description: string; // Tambahan untuk deskripsi
    description: string;
    registrationStart?: string;
    registrationEnd?: string;

}

export interface DecorationItem {
    id: string;
    src: string;
    alt: string;
    className: string;
}

export interface DecorationGroup {
    id: string;
    containerClassName: string;
    items: DecorationItem[];
}

export type { ButtonProps, ButtonData, CardData };
