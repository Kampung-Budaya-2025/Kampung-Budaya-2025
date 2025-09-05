import GradientText from "@/Components/Common/GradientText";
import { FlipCard } from "./UI/FlipCard";
import Decorations from "./UI/Decoration";
import { useInView } from "@/Hooks/UseInView";

interface CardData {
    front: string;
    back: string;
}

const RangkaianKegiatan: React.FC = () => {
    const cardData: CardData[] = [
        {
            front: "img/card/cover-rangkaian-1.svg",
            back: "img/card/card-rangkaian-1-new.svg",
        },
        {
            front: "img/card/cover-rangkaian-2.svg",
            back: "img/card/card-rangkaian-2-new.svg",
        },
        {
            front: "img/card/cover-rangkaian-3.svg",
            back: "img/card/card-rangkaian-3-new.svg",
        },
    ];

    // hook inView
    const { ref, isInView } = useInView<HTMLElement>();

    return (
        <section
            ref={ref}
            className={`relative flex flex-col items-center justify-center pt-24 pb-24 lg:pb-48 transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
        >
            {/* Title */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                <GradientText className="text-center font-samsktrigrama text-7xl md:text-8xl">
                    Rangkaian
                </GradientText>
                <GradientText className="text-center font-samsktrigrama text-7xl md:text-8xl">
                    Kegiatan
                </GradientText>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-y-108 md:grid-cols-2 md:gap-y-96 lg:grid-cols-3 gap-8 mt-8 pb-96">
                {cardData.map((card: CardData, index: number) => (
                    <FlipCard
                        key={index}
                        frontImage={card.front}
                        backImage={card.back}
                        index={index}
                        className={
                            index === 2
                                ? "md:col-span-2 md:justify-self-center lg:col-span-1"
                                : ""
                        }
                    />
                ))}
            </div>

            <Decorations />
        </section>
    );
};

export default RangkaianKegiatan;
