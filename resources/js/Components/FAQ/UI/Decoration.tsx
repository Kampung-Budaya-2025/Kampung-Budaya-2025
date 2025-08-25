const DecorationSection: React.FC = () => (
    <div className="lg:col-span-2 flex items-start justify-center py-4">
        <div className="relative">
            {/* Candi Decoration */}
            <img
                src="/decoration/candi-faq.svg"
                alt="Candi Decoration"
                className="w-full max-w-[268px] h-auto object-contain"
            />

            {/* Mascot Cowok */}
            <img
                src="/mascot/mascot-cowok.svg"
                alt="Mascot Cowok"
                className="absolute w-[180px] lg:w-[200px] h-auto object-contain z-10"
                style={{ bottom: "-105px", left: "-15px" }}
            />

            {/* Bubble Decoration Left */}
            <img
                src="/decoration/bubble-left.svg"
                alt="Bubble Left"
                height={25}
                className="h-8 absolute top-60 -left-17 z-20"
            />

            {/* Mascot Cewek */}
            <img
                src="/mascot/mascot-cewek.svg"
                alt="Mascot Cewek"
                className="absolute w-[180px] lg:w-[200px] h-auto object-contain z-10"
                style={{ bottom: "-105px", right: "-35px" }}
            />

            {/* Bubble Decoration Right */}
            <img
                src="/decoration/bubble-right.svg"
                alt="Bubble Right"
                height={25}
                className="h-8 absolute top-60 -right-22 z-20"
            />
        </div>
    </div>
);

export default DecorationSection;