import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface CardProps {
  faqs?: FAQItem[];
  searchQuery?: string;
  onToggle?: (id: number) => void;
  openItemId?: number | null;
}

const FAQCard: React.FC<CardProps> = ({
  faqs,
  searchQuery = "",
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
    },
    {
      id: 6,
      question: "Bagaimana cara menuju ke Kampung Budaya?",
      answer: "Kampung Budaya dapat diakses melalui transportasi umum seperti bus, angkot, atau kendaraan pribadi. Tersedia juga layanan shuttle bus dari pusat kota pada akhir pekan."
    },
    {
      id: 7,
      question: "Apakah ada paket wisata yang tersedia?",
      answer: "Ya, tersedia berbagai paket wisata mulai dari paket half day, full day, hingga paket 2 hari 1 malam yang termasuk akomodasi dan makan."
    },
    {
      id: 8,
      question: "Bolehkah membawa makanan dari luar?",
      answer: "Pengunjung diperbolehkan membawa makanan ringan dan minuman sendiri. Namun untuk menjaga kebersihan, harap membuang sampah pada tempatnya."
    },
    {
      id: 9,
      question: "Apakah ada guide atau pemandu wisata?",
      answer: "Ya, tersedia layanan pemandu wisata professional yang dapat menjelaskan sejarah dan budaya setiap atraksi dengan biaya tambahan Rp 50.000 per grup."
    },
    {
      id: 10,
      question: "Bagaimana cara booking tiket secara online?",
      answer: "Tiket dapat dibeli secara online melalui website resmi atau aplikasi mobile Kampung Budaya. Pembayaran dapat dilakukan via transfer bank atau e-wallet."
    }
  ];

  // Gunakan faqs dari props atau fallback ke default
  const displayFaqs = faqs || faqData;

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

  // Function to highlight search query in text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full space-y-10">
      {displayFaqs.map((item) => (
        <div key={item.id} className="w-full relative">
          {/* FAQ Card Header - Menyamakan dengan lebar SearchField */}
          <div
            className="relative flex items-center justify-between cursor-pointer z-20 w-full max-w-[648px]"
            style={{
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
                {highlightText(item.question, searchQuery)}
              </p>
            </div>

            {/* Down Arrow Icon */}
            <div className="flex items-center justify-center pr-6">
              <img
                src="/icon/down-arrow.svg"
                alt="Down Arrow"
                width={20}
                height={10}
                className={`object-contain transition-transform duration-500 ${
                  isExpanded(item.id) ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          </div>

          {/* FAQ Answer (Expandable) - Menyamakan dengan lebar SearchField */}
          <div
            className={`relative overflow-hidden transition-all duration-700 ${
              isExpanded(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ marginTop: '-12px' }}
          >
            <div
              className="px-6 py-4 bg-white border-1 border-[#CD9C1A] border-t-0 relative z-10 w-full max-w-[648px]"
              style={{ 
                borderRadius: '0 0 16px 16px',
                paddingTop: '20px'
              }}
            >
              <p className="text-sm text-[#3F170D] leading-relaxed">
                {highlightText(item.answer, searchQuery)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCard;