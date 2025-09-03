const DecorationSection: React.FC = () => (
    <div className="lg:col-span-2 hidden lg:flex items-start justify-center py-4">
        <div className="relative">
            {/* Candi Decoration */}
            <img
                src="/decoration/candi-faq.svg"
                alt="Candi Decoration"
                className="w-full max-w-[40vh] h-auto object-contain"
            />

            {/* Mascot Cowok */}
            <img
                src="/mascot/mascot-cowok.svg"
                alt="Mascot Cowok"
                className="absolute max-w-[30vh] lg:max-w-[30vh] h-auto object-contain z-10"
                style={{ bottom: "-17vh", left: "-2vh" }}
            />

            {/* Bubble Decoration Left */}
            <img
                src="/decoration/bubble-left.svg"
                alt="Bubble Left"
                height={40}
                className="h-[4vh] absolute top-[35.2vh] -left-[8.8vh] z-20"
            />

            {/* Mascot Cewek */}
            <img
                src="/mascot/mascot-cewek.svg"
                alt="Mascot Cewek"
                className="absolute max-w-[30vh] lg:max-w-[30vh] h-auto object-contain z-10"
                style={{ bottom: "-17vh", right: "-4.5vh" }}
            />

            {/* Bubble Decoration Right */}
            <img
                src="/decoration/bubble-right.svg"
                alt="Bubble Right"
                height={40}
                className="h-[4vh] absolute top-[35.2vh] -right-[8.8vh] z-20"
            />
        </div>
    </div>
);

export default DecorationSection;