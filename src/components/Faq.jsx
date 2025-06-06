import React, { useState } from 'react';
import Heading from './common/Heading';
import { FAQ_DATA } from '../utils/helper';
import Description from './common/Description'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="max-w-[1140px] px-3 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px]">
                <div className="flex items-center justify-between">
                    <Heading headingClass="max-sm:!tracking-[-1px]" headingText="Faqs" />
                </div>
            </div>
            <div className="border-y-2 max-xl:px-4 border-solid border-black">
                <div className="max-w-[1140px] mx-auto container border-x-2 border-solid border-black">
                    <div className="w-full">
                        {FAQ_DATA.map((item, index) => (
                            <div key={index} className={`border-b-2 border-black p-[15px] sm:px-[30px] sm:pt-6 sm:pb-[20px] md:pt-8 md:pb-10 md:pr-[44px] ${openIndex === index ? 'md:pb-[24px]' : ''}`}>
                                <button onClick={() => toggleAccordion(index)} className="w-full cursor-pointer flex justify-between items-center text-start font-semibold text-black text-2xl max-md:text-xl max-sm:text-lg" >
                                    <span>{item.heading}</span>
                                    <span className="ml-4 relative w-4 h-4">
                                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-black transform -translate-y-1/2 transition-all duration-300"></span>
                                        <span className={`absolute top-0 left-1/2 h-full w-[2px] bg-black transform -translate-x-1/2 transition-all duration-300 ${openIndex === index ? 'rotate-180 opacity-0' : ''}`}></span>
                                    </span>
                                </button>
                                <Description descriptionClass={`text-base leading-[150%] overflow-hidden transition-all duration-300 max-w-[992px] ${openIndex === index ? 'max-h-screen pt-4' : 'max-h-0'}`} descriptionText={"NFT stands for “Non-fungible token,” which means that it’s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT’s fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a “members-only” card. Hustlin' Hardos works like this"} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;
