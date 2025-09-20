import { ReactNode } from "react";

interface RegisterFormBackgroundProps {
    children: ReactNode;
    showDesktopDecoration?: boolean;
}

const RegisterFormBackground = ({
    children,
    showDesktopDecoration = true,
}: RegisterFormBackgroundProps) => {
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
            {showDesktopDecoration && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden min-[480px]:flex justify-center z-0">
                    <img
                        src="/decoration/back-dekstop.svg"
                        alt="Dekorasi Bawah Desktop"
                        className="w-full h-auto"
                        style={{
                            maxWidth: "100vw",
                            minWidth: "100vw",
                            objectFit: "cover",
                        }}
                    />
                </div>
            )}
            <div className="hidden md:block absolute bottom-0 left-0 h-[3vh] w-full bg-[#3F170D] rounded-t-4xl z-20"></div>
        </div>
    );
};

export default RegisterFormBackground;
