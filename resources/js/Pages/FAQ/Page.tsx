import FAQCard from "@/Components/FAQ/FAQCard/FAQCard";
import SearchField from "@/Components/FAQ/SearchField/SearchField";
import React from "react";

const FAQPages = () => {
    return (
        <div className="flex flex-col mx-20">
            <h1 className="text-7xl text-center ">
                Frequently Asked Questions
            </h1>
            <section className="grid grid-cols-5 gap-4">
                <div className="col-span-3 space-y-8">
                    <div>
                        <SearchField />
                    </div>
                    <div>
                        <FAQCard/>
                    </div>
                </div>
                <div className="col-span-2 relative">
                    {/* Candi Decoration Background */}
                    <div className="relative w-full h-full">
                        <img 
                            src="/decoration/candi-decoration.svg"
                            alt="Candi Decoration"
                            className="w-full h-auto object-contain"
                        />
                        
                        {/* Mascot Container */}
                        <div className="absolute inset-0 flex items-end justify-center pb-8">
                            <div className="flex items-end space-x-4">
                                {/* Mascot Cowok */}
                                <img 
                                    src="/mascot/mascot-cowo.svg"
                                    alt="Mascot Cowok"
                                    className="w-24 h-auto object-contain z-10"
                                />
                                
                                {/* Mascot Cewek */}
                                <img 
                                    src="/mascot/mascot-cewe.svg"
                                    alt="Mascot Cewek"
                                    className="w-24 h-auto object-contain z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPages;
