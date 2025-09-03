import ComingSoonSection from "@/Components/ComingSoon/ComingSoonSection/page";
import React from "react";

interface ComingSoonPageComponent extends React.FC {
    layout?: (page: React.ReactNode) => React.ReactNode;
}

const ComingSoonPage: ComingSoonPageComponent = () => {
    return (
        <>
            <ComingSoonSection />
        </>
    );
};

ComingSoonPage.layout = (page: React.ReactNode) => (
    <div className="min-h-screen bg-gray-50">
        <main className="overflow-hidden">{page}</main>
    </div>
);

export default ComingSoonPage;
