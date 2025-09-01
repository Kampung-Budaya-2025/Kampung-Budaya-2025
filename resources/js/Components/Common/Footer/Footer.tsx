import React, { useMemo } from "react";
import { Link } from "@inertiajs/react";

interface NavLink {
    id: string;
    label: string;
    href: string;
}

interface SocialLink {
    id: string;
    label: string;
    href: string;
    icon: React.ReactNode;
}

// Social Media Icons Components
const TwitterIcon: React.FC<{ className?: string }> = ({
    className = "w-8 h-8",
}) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({
    className = "w-8 h-8",
}) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({
    className = "w-8 h-8",
}) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({
    className = "w-8 h-8",
}) => (
    <svg
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
    >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);

// Constants
const NAVIGATION_LINKS: NavLink[] = [
    { id: "galeri", label: "Galeri", href: "/galeri" },
    { id: "faq", label: "FAQ", href: "/faq" },
    { id: "pendaftaran", label: "Pendaftaran", href: "/register-event" },
];

const SOCIAL_LINKS: SocialLink[] = [
    {
        id: "twitter",
        label: "Follow us on Twitter",
        href: "https://x.com/kampungbudaya_",
        icon: <TwitterIcon />,
    },
    {
        id: "youtube",
        label: "Subscribe to our YouTube channel",
        href: "https://www.youtube.com/@kampungbudayaub6001",
        icon: <YouTubeIcon />,
    },
    {
        id: "tiktok",
        label: "Follow us on TikTok",
        href: "https://www.tiktok.com/@kampungbudayaub",
        icon: <TikTokIcon />,
    },
    {
        id: "instagram",
        label: "Follow us on Instagram",
        href: "https://www.instagram.com/kampungbudaya_ub/",
        icon: <InstagramIcon />,
    },
];

// Sub-components
const BrandTitle: React.FC = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Link
            href="/"
            onClick={handleClick}
            className="block focus:outline-none rounded"
        >
            <h1
                className="max-w-[18.5rem] lg:max-w-full text-[3.25rem] lg:text-[4rem] text-center leading-[1] lg:text-start font-samsktrigrama transition-opacity duration-200"
                style={{
                    backgroundImage:
                        "",
                }}
            >
                <span className="block lg:inline bg-[linear-gradient(180deg,#FDEFC5_0%,#CD9C1A_64.66%,#B1811B_100%)] bg-clip-text text-transparent">Kampung Budaya</span>
                <span className="block lg:inline bg-[linear-gradient(180deg,#FDEFC5_0%,#CD9C1A_64.66%,#B1811B_100%)] bg-clip-text text-transparent"> 2025</span>

            </h1>
        </Link>
    );
};

const NavigationMenu: React.FC<{ currentPath: string }> = ({ currentPath }) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const isActiveLink = (href: string) => {
        return currentPath === href;
    };

    return (
        <nav aria-label="Footer navigation">
            <ul className="flex flex-col lg:flex-row items-center text-center lg:text-center lg:items-center lg:mt-6 gap-12 lg:gap-16">
                {NAVIGATION_LINKS.map((link) => (
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            onClick={handleClick}
                            className={`transition-colors duration-200 text-3xl rounded px-1 py-1 focus:outline-none ${
                                isActiveLink(link.href)
                                    ? "text-yellow-400"
                                    : "text-[#FCF0AB] hover:text-yellow-400"
                            }`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const SocialMediaLinks: React.FC = () => (
    <div className="flex space-x-6" role="list" aria-label="Social media links">
        {SOCIAL_LINKS.map((link) => (
            <a
                key={link.id}
                href={link.href}
                className="text-[#CE9C17] bg-white hover:text-yellow-400 transition-colors duration-200 p-3 hover:bg-white/10 rounded-full focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                role="listitem"
            >
                {link.icon}
            </a>
        ))}
    </div>
);

const Copyright: React.FC = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <div className="mt-8 pt-6 border-t-2 border-[#CE9C17] text-center">
            <p className="text-[0.75rem] lg:text-xl text-[#FCF0AB]">
                Copyright {currentYear} Made with{" "}
                <span className="text-red-400" aria-label="love">
                    ♡
                </span>{" "}
                by IT Kampung Budaya
            </p>
        </div>
    );
};

const BatikBackground: React.FC = () => (
    <div className="hidden lg:block absolute lg:bottom-0 left-0 w-full z-0" aria-hidden="true">
        <img
            src="/background/batik-footer.svg"
            alt=""
            className="w-full h-auto object-cover pointer-events-none"
            loading="lazy"
        />
    </div>
);

const BatikBackgroundMobile: React.FC = () => (
    <div className="block lg:hidden absolute bottom-0 left-0 w-full z-0" aria-hidden="true">
        <img
            src="/background/batik-footer-mobile.svg"
            alt=""
            className="w-full h-auto object-cover pointer-events-none"
            loading="lazy"
        />
    </div>
);

// Main Footer Component
const Footer: React.FC<{ currentPath?: string }> = ({ currentPath = "/" }) => {
    return (
        <footer className="relative h-[852px] lg:h-[26rem] text-white bg-[linear-gradient(180deg,#3F170D_0%,#5F3313_100%)] overflow-hidden">
            <BatikBackground />
            <BatikBackgroundMobile />

            <div className="relative z-10 py-20 lg:py-24 px-12 sm:px-20 lg:px-28">
                <div className="mx-auto max-w-full">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center space-y-12 lg:space-y-0">
                        {/* Brand Section */}
                        <div className="lg:w-1/3">
                            <BrandTitle />
                        </div>

                        {/* Navigation and Social Section */}
                        <div className="flex flex-col sm:flex-col lg:flex-row items-center lg:items-center sm:justify-between lg:justify-between space-y-10 w-full lg:w-2/3 gap-8 sm:gap-16 ">
                            <NavigationMenu currentPath={currentPath} />
                            <SocialMediaLinks />
                        </div>
                    </div>

                    <Copyright />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
