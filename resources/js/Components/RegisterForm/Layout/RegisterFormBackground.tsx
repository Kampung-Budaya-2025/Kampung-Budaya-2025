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
        </div>
    );
};

export default RegisterFormBackground;