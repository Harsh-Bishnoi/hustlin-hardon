import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import newsMan from '../assets/images/png/news-man-img.png'
const BreakingNews = () => {
    return (
        <>
            <div id='about'>
                <div className="flex justify-center items-center pt-9 sm:pt-[67px] flex-col">
                    <div className="max-w-[1140px] px-3 xl:px-0">
                        <Heading headingClass={"xl:!text-7xl md:!text-6xl sm:!text-4xl !text-2xl !leading-[140%] pb-9 sm:pb-[67px] ![text-shadow:2px_2px_4px_#00000040]"} headingText={'“BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"'} />
                    </div>
                    <div className="border w-full"></div>
                    <div className="max-w-[1140px] lg:border-l-[2.5px] px-3 xl:px-7.5">
                        <div className="flex flex-row flex-wrap -mx-3 items-center">
                            <div className="px-3 w-full lg:w-6/12 mx-auto lg:my-0 my-5 flex ">
                                <div className='lg:max-w-[475px]'>
                                    <h4 className='leading-[100%] text-black '>March 1, 2022 by Editor Hardo</h4>
                                    <Description descriptionClass={"text-lg leading-[130%] py-4 text-black"} descriptionText="Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/ finance world, hustler culture and web3 aesthetics. Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories - all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities" />
                                    <a className='underline leading-[100%] hover:text-[#55ACEE]' href="">Read More...</a>
                                </div>
                            </div>
                            <div className=" w-full  lg:w-6/12 mx-auto px-3">
                                <div className="flex justify-center">
                                    <div className="lg:border"></div>
                                    <img className="w-full max-w-[570px] pointer-events-none pb-5 lg:pb-0" src={newsMan} alt="man-img" />
                                    <div className="lg:border"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border w-full"></div>
                </div>
            </div>
        </>
    )
}

export default BreakingNews