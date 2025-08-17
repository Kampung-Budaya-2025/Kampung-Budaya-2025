import FAQCard from "@/Components/FAQ/FAQCard/FAQCard";
import SearchField from "@/Components/FAQ/SearchField/SearchField";
import React from "react";

const FAQPages = () => {
    return (
        <div className="flex flex-col mx-16 space-y-16 py-16">
            <h1 className="text-7xl text-center">
                Frequently Asked Questions
            </h1>
            <section className="grid grid-cols-5 gap-4">
                <div className="col-span-3 space-y-8 flex flex-col">
                    <div className="flex-shrink-0 mx-6">
                        <SearchField />
                    </div>
                    
                    {/* Scrollable FAQ Container */}
                    <div 
                        className="flex-1 overflow-y-auto pl-2 faq-scroll-custom relative"
                        style={{
                            maxHeight: '300px',
                            scrollbarWidth: 'auto',
                            scrollbarColor: '#E1B01B #3F170D',
                            direction: 'rtl'
                        }}
                    >
                        <div style={{ direction: 'ltr' }}>
                            <FAQCard/>
                        </div>
                    </div>
                </div>
                
                <div className="col-span-2 relative flex items-start justify-center overflow-visible pt-8">
                    {/* Candi Decoration Background */}
                    <div className="relative w-[268px]">
                        <img 
                            src="/decoration/candi-faq.svg"
                            alt="Candi Decoration"
                            className="w-full h-auto object-contain"
                        />
                        
                        {/* Mascot Cowok - Positioned absolutely */}
                        <img 
                            src="/mascot/mascot-cowok.svg"
                            alt="Mascot Cowok"
                            className="absolute w-[200px] h-auto object-contain z-10"
                            style={{
                                bottom: '-100px',
                                left: '-20px'
                            }}
                        />
                        
                        {/* Mascot Cewek - Positioned absolutely */}
                        <img 
                            src="/mascot/mascot-cewek.svg"
                            alt="Mascot Cewek"
                            className="absolute w-[200px] h-auto object-contain z-10"
                            style={{
                                bottom: '-100px',
                                right: '-20px'
                            }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPages;
