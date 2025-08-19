import React, { useState, useCallback, useMemo } from "react";
import { Link } from "@inertiajs/react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
    className?: string;
    currentPath?: string;
}

interface NavLink {
    label: string;
    href: string;
    id: string;
}

const Navbar: React.FC<NavbarProps> = ({
    className = "",
    currentPath = "",
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Memoize navigation links untuk performa
    const navigationLinks: NavLink[] = useMemo(
        () => [
            { id: "home", label: "Beranda", href: "/" },
            { id: "about", label: "Galeri", href: "/galeri" },
            { id: "contact", label: "FAQ", href: "/faq" },
        ],
        []
    );

    // Callback untuk toggle mobile menu
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    // Function untuk check active link
    const isActiveLink = useCallback(
        (href: string) => {
            return currentPath === href;
        },
        [currentPath]
    );

    return (
        <nav
            className={`h-auto py-4 shadow-md fixed top-0 left-0 right-0 rounded-b-[20px] z-50 ${className}`}
            style={{
                background:
                    "linear-gradient(90deg, #E1B01B 0%, #FFF 25%, #FFF 75%, #E1B01B 100%)",
            }}
        >
            <div className="container mx-auto h-full">
                <div>
                    <img
                        src="/background/batik-navbar-kiri.svg"
                        alt="Pattern Batik"
                        className="absolute h-full top-0 left-0 rounded-bl-[20px]"
                    />
                </div>
                <div className="flex items-center justify-between lg:justify-center h-full">
                    <div className="flex items-center space-x-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center rounded">
                            <img
                                src="/icon/logo-kampung-budaya.svg"
                                alt="Kampung Budaya Logo"
                                className="h-12 w-auto"
                                loading="lazy"
                            />
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-10">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`text-2xl text-[#3F170D] transition-colors duration-200 focus:outline-none  rounded px-2 py-1 ${
                                        isActiveLink(link.href) ? "" : ""
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Button */}
                        <button
                            className="hidden lg:block text-white text-2xl px-6 py-1 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
                            style={{
                                background:
                                    "linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)",
                            }}
                            type="button"
                        >
                            Daftar
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation menu"
                        type="button"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div>
                    <img
                        src="/background/batik-navbar-kanan.svg"
                        alt="Pattern Batik"
                        className="absolute h-full top-0 right-0 rounded-br-[20px]"
                    />
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t rounded-b-[20px]">
                        <div className="px-4 py-4 space-y-3">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`block font-medium transition-colors duration-200 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-2 ${
                                        isActiveLink(link.href)
                                            ? "text-blue-600 font-semibold bg-blue-50"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                className="w-full text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:opacity-90 mt-4"
                                style={{
                                    background:
                                        "linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)",
                                }}
                                type="button"
                            >
                                Daftar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export { Navbar, NavLink };
