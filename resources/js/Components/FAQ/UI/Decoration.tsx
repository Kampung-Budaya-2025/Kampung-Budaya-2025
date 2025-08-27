const DecorationSection: React.FC = () => (
    <div className="lg:col-span-2 hidden lg:flex items-start justify-center py-4">
        <div className="relative">
            {/* Candi Decoration */}
            <img
                src="/decoration/candi-faq.svg"
                alt="Candi Decoration"
                className="w-full max-w-[400px] h-auto object-contain"
            />

            {/* Mascot Cowok */}
            <img
                src="/mascot/mascot-cowok.svg"
                alt="Mascot Cowok"
                className="absolute max-w-[300px] lg:max-w-[300px] h-auto object-contain z-10"
                style={{ bottom: "-17vh", left: "-2vh" }}
            />

            {/* Bubble Decoration Left */}
            <img
                src="/decoration/bubble-left.svg"
                alt="Bubble Left"
                height={40}
                className="h-10 absolute top-88 -left-17 z-20"
            />

            {/* Mascot Cewek */}
            <img
                src="/mascot/mascot-cewek.svg"
                alt="Mascot Cewek"
                className="absolute max-w-[300px] lg:max-w-[300px] h-auto object-contain z-10"
                style={{ bottom: "-17vh", right: "-4.5vh" }}
            />

            {/* Bubble Decoration Right */}
            <img
                src="/decoration/bubble-right.svg"
                alt="Bubble Right"
                height={40}
                className="h-10 absolute top-88 -right-22 z-20"
            />
        </div>
    </div>
);

export default DecorationSection;