import React, { useState } from 'react';
import { CardProps } from '../types';
import { useFaqToggle } from '../Hooks/page';
import { faqData } from '../config/contants';

const FAQCard: React.FC<CardProps> = ({
  faqs,
  searchQuery = "",
  onToggle,
  openItemId = null
}) => {
  // const [internalOpenId, setInternalOpenId] = useState<number | null>(null);

  const { handleToggle, isExpanded } = useFaqToggle({ onToggle, openItemId });
  // Data FAQ default (fallback)
  

  // Gunakan faqs dari props atau fallback ke default
  const displayFaqs = faqs || faqData;


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
    <div className="w-full space-y-6 lg:space-y-10">
      {displayFaqs.map((item) => (
        <div key={item.id} className="w-full relative">
          {/* FAQ Card Header - Menyamakan dengan lebar SearchField */}
          <div
            className="relative flex items-center justify-between cursor-pointer z-20 w-full max-w-[340px] md:max-w-[648px] py-3 lg:py-4"
            style={{
              // height: '49px', // HAPUS baris ini agar tinggi mengikuti isi
              borderRadius: '16px',
              background: '#E1B01B',
              boxShadow: '0 1.775px 3.55px 0 rgba(0, 0, 0, 0.07) inset'
            }}
            onClick={() => handleToggle(item.id)}
          >
            {/* Question Text */}
            <div className="flex-1 px-6 text-left max-w-[330px] lg:max-w-[570px]">
              <p className="text-sm font-medium text-[#3F170D] break-words max-w-[310px] lg:max-w-[540px]">
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
              className="px-6 py-4 bg-white border-1 border-[#CD9C1A] border-t-0 relative z-10 w-full max-w-[340px] md:max-w-[648px]"
              style={{ 
                borderRadius: '0 0 16px 16px',
                paddingTop: '20px'
              }}
            >
              <p className="text-sm text-[#CD9C1A] leading-relaxed">
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