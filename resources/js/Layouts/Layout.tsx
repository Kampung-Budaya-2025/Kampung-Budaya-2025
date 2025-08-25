import Footer from '@/Components/Common/Footer/Footer';
import { Navbar } from '@/Components/Common/Navbar/Navbar';
import React from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    
    return (
        <div className="h-screen bg-gray-50">
            <Navbar currentPath={location.pathname} />
            <main className="overflow-hidden">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;