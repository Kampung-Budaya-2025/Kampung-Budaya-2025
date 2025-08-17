import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface CardProps {
  onToggle?: (id: number) => void;
  openItemId?: number | null;
}

const FAQCard: React.FC<CardProps> = ({
  onToggle,
  openItemId = null
}) => {
  const [internalOpenId, setInternalOpenId] = useState<number | null>(null);

  // Data FAQ
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Apa itu Kampung Budaya?",
      answer: "Kampung Budaya adalah tempat wisata yang menampilkan kekayaan budaya Indonesia dengan berbagai atraksi tradisional, rumah adat, dan pertunjukan seni budaya."
    },
    {
      id: 2,
      question: "Berapa harga tiket masuk Kampung Budaya?",
      answer: "Harga tiket masuk mulai dari Rp 25.000 untuk dewasa dan Rp 15.000 untuk anak-anak. Tersedia juga paket family dan paket grup dengan harga khusus."
    },
    {
      id: 3,
      question: "Jam operasional Kampung Budaya?",
      answer: "Kampung Budaya buka setiap hari mulai pukul 08.00 - 17.00 WIB. Pada hari libur nasional dan weekend, jam operasional dapat diperpanjang hingga 18.00 WIB."
    },
    {
      id: 4,
      question: "Apa saja fasilitas yang tersedia?",
      answer: "Fasilitas yang tersedia meliputi area parkir luas, toilet, mushola, food court dengan makanan tradisional, toko souvenir, dan area bermain anak."
    },
    {
      id: 5,
      question: "Apakah ada pertunjukan khusus?",
      answer: "Ya, setiap hari terdapat pertunjukan tari tradisional pada pukul 10.00, 14.00, dan 16.00. Pada weekend ada pertunjukan musik gamelan dan workshop membatik."
    }
  ];

  const handleToggle = (id: number) => {
    if (onToggle) {
      onToggle(id);
    } else {
      setInternalOpenId(internalOpenId === id ? null : id);
    }
  };

  const isExpanded = (id: number) => {
    return onToggle ? openItemId === id : internalOpenId === id;
  };

  return (
    <div className="w-full space-y-10">
      {faqData.map((item) => (
        <div key={item.id} className="w-full relative">
          {/* FAQ Card Header */}
          <div
            className="relative flex items-center justify-between cursor-pointer z-20"
            style={{
              width: '648px',
              height: '49px',
              borderRadius: '16px',
              background: '#E1B01B',
              boxShadow: '0 1.775px 3.55px 0 rgba(0, 0, 0, 0.07) inset'
            }}
            onClick={() => handleToggle(item.id)}
          >
            {/* Question Text */}
            <div className="flex-1 px-6 text-left">
              <p className="text-sm font-medium text-[#3F170D] truncate">
                {item.question}
              </p>
            </div>

            {/* Down Arrow Icon */}
            <div className="flex items-center justify-center pr-6">
              <img
                src="/icon/DownArrow.svg" 
                alt="Down Arrow"
                width={20}
                height={10}
                className={`object-contain transition-transform duration-500 ${
                  isExpanded(item.id) ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </div>

          {/* FAQ Answer (Expandable) */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ${
              isExpanded(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ marginTop: '-12px' }}
          >
            <div
              className="px-6 py-4 bg-white border border-[#CD9C1A] border-t-0 relative z-10"
              style={{ 
                width: '648px',
                borderRadius: '0 0 16px 16px',
                paddingTop: '20px'
              }}
            >
              <p className="text-sm text-[#3F170D] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCard;