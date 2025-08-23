interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
}

interface ButtonData {
    id: string;
    text: string;
    onClick?: () => void;
}

interface CardData {
    id: string;
    title: string;
    icon: string;
}

export type { ButtonProps, ButtonData, CardData };