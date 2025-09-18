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

// Tidak ada layout custom, biarkan Layout.tsx yang menangani logic layoutnya
export default ComingSoonPage;
