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
            <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px]">
                <div className="flex items-center justify-between">
                    <Heading headingClass="max-sm:!tracking-[-1px]" headingText="Faqs" />
                </div>
            </div>
            <div className="border-y-2 max-xl:px-4 border-solid border-black">
                <div className="max-w-[1140px] mx-auto container border-x-2 border-solid border-black">
                    <div className="w-full">
                        {FAQ_DATA.map((item, index) => (
                            <div key={index} className={`border-b-2 border-black p-[15px] sm:px-[30px] sm:pt-6 sm:pb-[20px] md:pt-8 md:pb-10 md:pr-[44px] ${openIndex === index ? 'md:pb-[24px]' : ''}`}>
                                <button onClick={() => toggleAccordion(index)} className="w-full outline-0 cursor-pointer flex justify-between items-center text-start font-semibold text-black text-2xl max-md:text-xl max-sm:text-lg" >
                                    <span>{item.heading}</span>
                                    <span className={`min-w-2 min-h-0.5 sm:min-w-0.5 sm:min-h-3 bg-black relative after:absolute after:w-full after:h-full after:bg-black after:rotate-90 after:transition-all after:duration-400  ${openIndex === index ? 'after:hidden sm:rotate-90' : ''}`}></span>
                                </button>
                                <Description descriptionClass={`text-base leading-[150%] overflow-hidden transition-all duration-700 ease-in-out max-w-[992px] ${openIndex === index ? 'max-h-[330px] pt-4 opacity-100' : 'max-h-0 pt-0 opacity-0'}`} descriptionText={"NFT stands for “Non-fungible token,” which means that it’s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT’s fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a “members-only” card. Hustlin' Hardos works like this"} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;