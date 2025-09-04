import React from "react";

// Loading fallback component
export const ComponentLoader: React.FC = () => (
    <div className="flex items-center justify-center py-8">
        <div className="w-6 h-6 border-2 rounded-full border-amber-500 border-t-transparent animate-spin" />
    </div>
);
