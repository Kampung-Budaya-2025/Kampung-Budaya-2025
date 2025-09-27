import React from 'react';
import { Link } from "@inertiajs/react";

const RegisterButton = ({ className = '' }) => {
    const combinedClassName = `
        transition-all duration-200 
        hover:opacity-90 hover:scale-105  px-6 py-3 
        rounded-full ${className}
    `;

    return (
        <Link
            href="/register-form"
            className={combinedClassName.trim()} 
            style={{
                background: "linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)",
            }}
        >
            <span className="text-[#3F170D] font-medium text-xl lg:text-2xl lg:px-6 py-5 rounded-full">
                Daftar Sekarang
            </span>
        </Link>
    );
};

export default RegisterButton;