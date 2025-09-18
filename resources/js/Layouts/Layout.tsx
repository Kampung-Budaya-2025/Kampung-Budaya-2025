import Footer from "@/Components/Common/Footer/Footer";
import { Navbar } from "@/Components/Common/Navbar/Navbar";
import React from "react";
import { usePage } from "@inertiajs/react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { url, props } = usePage();

    const isMaintenanceMode = (props as any)?.title?.includes(
        "Maintenance Mode"
    );
    const isDirectComingSoon = url === "/coming-soon";

    if (isMaintenanceMode || isDirectComingSoon) {
        return (
            <div className="min-h-screen bg-gray-50">
                <main className="overflow-hidden">{children}</main>
            </div>
        );
    }

    return (
        <div className="h-screen bg-white">
            <Navbar currentPath={url} />
            <main className="overflow-hidden">{children}</main>
            <Footer currentPath={url} />
        </div>
    );
};

export default Layout;
