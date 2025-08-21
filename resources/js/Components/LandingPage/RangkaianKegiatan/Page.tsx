import GradientText from "@/Components/Common/GradientText"
import { FlipCard } from "./UI/FlipCard"
import Decorations from "./UI/Decoration"

interface CardData {
  front: string
  back: string
}

const RangkaianKegiatan: React.FC = () => {
  const cardData: CardData[] = [
    {
      front: "img/card/cover-rangkaian-1.svg",
      back: "img/card/card-rangkaian-1.svg"
    },
    {
      front: "img/card/cover-rangkaian-2.svg",
      back: "img/card/card-rangkaian-2.svg"
    },
    {
      front: "img/card/cover-rangkaian-3.svg",
      back: "img/card/card-rangkaian-3.svg"
    }
  ]

  return (
    <section className='relative flex flex-col items-center justify-center pt-24 pb-48'>
      <GradientText className='font-samsktrigrama text-8xl'>
        Rangkaian Kegiatan
      </GradientText>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pb-96'>
        {cardData.map((card: CardData, index: number) => (
          <FlipCard
            key={index}
            frontImage={card.front}
            backImage={card.back}
            index={index}
          />
        ))}
      </div>
      
      <Decorations />
    </section>
  )
}

export default RangkaianKegiatan