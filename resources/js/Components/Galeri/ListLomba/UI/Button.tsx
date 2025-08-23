import { ButtonProps } from "../types";
const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
    return (
        <button 
            className={`h-auto w-[160px] text-white py-2 px-4 rounded-[40px] bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;