import Footer from "@/Components/Common/Footer/Footer";
import { Navbar } from "@/Components/Common/Navbar/Navbar";
import React from "react";
import { usePage } from "@inertiajs/react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { url } = usePage();

    return (
        <div className="h-screen bg-gray-50">
            <Navbar currentPath={url} />
            <main className="overflow-hidden">{children}</main>
            <Footer currentPath={url} />
        </div>
    );
};

export default Layout;
