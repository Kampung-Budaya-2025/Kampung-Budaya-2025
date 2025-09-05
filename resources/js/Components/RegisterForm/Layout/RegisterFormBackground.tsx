import { ReactNode } from "react";

interface RegisterFormBackgroundProps {
    children: ReactNode;
}

const RegisterFormBackground = ({ children }: RegisterFormBackgroundProps) => {
    return (
        <div
            className="relative min-h-screen px-4 py-4 sm:py-6 lg:py-8"
            style={{
                backgroundImage: "url('/background/background-hero.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            {children}
            <div className='hidden md:block absolute bottom-0 left-0 h-[3vh] w-full bg-[#3F170D] rounded-t-4xl z-20'></div>
        </div>
    );
};

export default RegisterFormBackground;