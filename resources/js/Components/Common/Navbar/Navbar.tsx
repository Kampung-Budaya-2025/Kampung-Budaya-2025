import React, { useState, useCallback, useMemo } from "react";
import { Link } from "@inertiajs/react";

interface NavbarProps {
    className?: string;
    currentPath: string;
}

interface NavigationLink {
    label: string;
    href: string;
    id: string;
}

// Constants - pindahkan ke luar component untuk menghindari re-creation
const NAVIGATION_LINKS: NavigationLink[] = [
    { id: "home", label: "Beranda", href: "/" },
    { id: "galeri", label: "Galeri", href: "/galeri" },
    { id: "faq", label: "FAQ", href: "/faq" },
];

// Sub-components untuk better organization
const NavbarLogo: React.FC = () => (
    <Link href="/" className="flex items-center rounded">
        <img
            src="/icon/logo-kampung-budaya.svg"
            alt="Kampung Budaya Logo"
            className="h-8 lg:h-16 w-auto"
            loading="lazy"
        />
    </Link>
);

const RegisterButton: React.FC<{ isMobile?: boolean }> = ({
    isMobile = false,
}) => (
    <Link
        href="/register-event"
        className={`text-white font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 ${
            isMobile
                ? "w-full px-6 py-3 rounded-lg mt-4 text-center block"
                : "hidden lg:block text-2xl px-8 py-2 rounded-full"
        }`}
        style={{
            background:
                "linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)",
        }}
    >
        Daftar
    </Link>
);

const MobileMenuButton: React.FC<{
    isOpen: boolean;
    onClick: () => void;
}> = ({ isOpen, onClick }) => (
    <button
        onClick={onClick}
        className="lg:hidden p-1 rounded-md text-[#3F170D] hover:text-[#CE9C17] transition-colors duration-200"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        type="button"
    >
        <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            {isOpen ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            )}
        </svg>
    </button>
);

const DesktopNavigation: React.FC<{
    links: NavigationLink[];
    currentPath: string;
}> = ({ links, currentPath }) => (
    <div className="hidden lg:flex items-center space-x-16">
        {links.map((link) => (
            <Link
                key={link.id}
                href={link.href}
                className={`text-2xl transition-all duration-200 rounded px-3 py-2 font-medium ${
                    currentPath === link.href
                        ? "text-[#CE9C17]" // font-semibold dihapus
                        : "text-[#3F170D] hover:text-[#CE9C17]"
                }`}
            >
                {link.label}
            </Link>
        ))}
    </div>
);

const MobileNavigation: React.FC<{
    links: NavigationLink[];
    currentPath: string;
    isOpen: boolean;
    onClose: () => void;
}> = ({ links, currentPath, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t rounded-b-[20px] z-40">
            <div className="px-4 py-6 space-y-3">
                {links.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className={`block font-medium transition-colors duration-200 rounded px-3 py-2 ${
                            currentPath === link.href
                                ? "text-[#CE9C17]"
                                : "text-[#3F170D] hover:text-[#CE9C17]"
                        }`}
                        onClick={onClose}
                    >
                        {link.label}
                    </Link>
                ))}
                <RegisterButton isMobile />
            </div>
        </div>
    );
};

const BatikPattern: React.FC<{ side: "left" | "right" }> = ({ side }) => (
    <div
        className={`hidden lg:block absolute h-full top-0 ${
            side === "left" ? "left-0" : "right-0"
        }`}
    >
        <img
            src={`/background/batik-navbar-${
                side === "left" ? "kiri" : "kanan"
            }.svg`}
            alt="Pattern Batik"
            className={`h-full ${
                side === "left" ? "rounded-bl-[20px]" : "rounded-br-[20px]"
            }`}
            loading="lazy"
        />
    </div>
);

// Main Navbar Component
const Navbar: React.FC<NavbarProps> = ({ className = "", currentPath }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Callbacks
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
    }, []);

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [currentPath]);

    return (
        <nav
            className={`lg:h-[5rem] h-[50px] py-2 fixed top-0 left-0 right-0 rounded-b-[20px] z-50 
                bg-[linear-gradient(90deg,#FFF_0%,#FFF_47.12%,#E1B01B_100%)] 
                lg:bg-[linear-gradient(90deg,#E1B01B_0%,#FFF_25%,#FFF_75%,#E1B01B_100%)] 
    shadow-[0_5px_16px_0_rgba(8,15,52,0.12)] 
    ${className}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <BatikPattern side="left" />
            <BatikPattern side="right" />
            <div className="mx-6 lg:container lg:mx-auto h-full relative">
                <div className="flex items-center justify-between lg:justify-center h-full relative z-10">
                    <div className="flex items-center space-x-16">
                        <NavbarLogo />
                        <DesktopNavigation
                            links={NAVIGATION_LINKS}
                            currentPath={currentPath}
                        />
                        <RegisterButton />
                    </div>

                    <MobileMenuButton
                        isOpen={isMobileMenuOpen}
                        onClick={toggleMobileMenu}
                    />
                </div>

                <MobileNavigation
                    links={NAVIGATION_LINKS}
                    currentPath={currentPath}
                    isOpen={isMobileMenuOpen}
                    onClose={closeMobileMenu}
                />
            </div>
        </nav>
    );
};

export { Navbar };
export type { NavbarProps, NavigationLink };
