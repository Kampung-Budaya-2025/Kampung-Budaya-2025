import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    href,
    className = "",
}) => {
    // Adjust width based on text length for the longer formulir text
    const isLongText = text.length > 15;
    const baseClassName = `flex items-center justify-center h-[42px] md:h-[6.8vh] ${
        isLongText 
            ? 'w-[180px] md:w-[38vh] text-lg md:text-[2.5vh] px-2' 
            : 'w-[120px] md:w-[26.4vh] text-xl md:text-[3vh]'
    } text-white rounded-[40px] bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-all duration-200 hover:scale-105 ${className}`;

    // If href is provided, render as a link
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClassName}
            >
                {text}
            </a>
        );
    }

    // Otherwise, render as a button with onClick
    return (
        <button className={baseClassName} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
