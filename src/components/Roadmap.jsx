import React from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import dotImg from '../assets/images/png/timeline-img.png'
import lineImg from '../assets/images/png/timeline-line-img.png'
const Roadmap = () => {
    return (
        <>
            <div id='roadmap'>
                <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px]">
                    <div className="flex items-center justify-between">
                        <Heading headingClass={"max-sm:!tracking-[-1px]"} headingText={"RoadMap"} />
                    </div>
                </div>
                <div className="border-[1.5px]"></div>
                <div className="max-w-[1140px] px-3 xl:px-0 max-[1141px]:max-w-[1023px] max-lg:max-w-[800px] max-[801px]:!max-w-[600px] max-[601px]:!max-w-[375px] max-[1141px]:px-4 mx-auto">
                    <div className="w-full border-x-2 pr-1 border-solid relative pt-[99px] max-md:pt-16 max-sm:pt-10 pl-9 max-lg:pl-24 max-[601px]:!pl-14 max-lg:gap-5 max-lg:pr-4 max-lg:flex max-lg:flex-col border-black">
                        <img src={lineImg} alt="line-img" className="absolute max-[600px]:!h-[1820px] max-[801px]:h-[1650px]  max-[761px]:!h-[1380px] top-[99px] max-md:top-16 max-sm:top-10 left-1/2 max-lg:left-10 h-[1380px] max-[768px]:!h-[1300px] max-[601px]:!left-[6.5%] max-[601px]:max-h-[unset] lg:-translate-x-1/2" />
                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] w-full relative lg:ml-auto" >
                            <div className="absolute top-0 left-[-20%] max-[1280px]:left-[-17.5%] max-[1140px]:left-[-16%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] max-lg:top-0 size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center" >
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 1</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl" >Community Building </p>
                            <Description descriptionClass={"leading-[121%] max-md:text-sm"} descriptionText={"The concept of Hustlin’ Hardos was born a few short weeks ago and we’re currently focused on the most important aspect of the project - COMMUNITY. We are organizing giveaways and events to spread the word around what will be one of the most exciting NFT projects so far. We also aim to reward those driving early engagement for the project in the form of white-list and pre-sale access to the official Hustlin’ Hardo drop. Join us on our Discord channel to see what we are all about!"} />
                        </div>

                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] lg:mt-[-94px] relative w-full" >
                            <div className="absolute top-0 right-[-13.5%] max-[1280px]:right-[-11.2%] max-[1141px]:right-[-8%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center">
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 2</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl" > Minting Event  </p>
                            <Description descriptionClass={"leading-[121%] lg:max-w-[460px] max-md:text-sm"} descriptionText={"Hustlin’ Hardos can be minted and are revealed to the world. There will only ever be 9,999 Hustlin’ Hardos, so this is your chance to get your hands on this unique collectible item, which will become an integral part of your online identity"} />
                        </div>

                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] w-full relative lg:ml-auto" >
                            <div className="absolute top-0 left-[-20%] max-[1280px]:left-[-17.5%] max-[1140px]:left-[-16%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center">
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 3</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl"> Real-Life Raffles</p>
                            <Description descriptionClass={"leading-[121%] max-md:text-sm"} descriptionText={"We will be raffling real-life versions of some of the luxury items worn by Hustlin’ Hardos. For example, one week after the minting event is sold out, we will raffle a Rolex GMT “Batman” among the lucky holders of Hustlin' Hardos wearing that specific watch - so be on the lookout for characters who hold items you would like to own. Each month, we will announce another similar raffle, where Hustlin’ Hardos will get the chance to win items worn by their favorite NFTs "} />
                        </div>

                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] relative lg:mt-[-62px] w-full" >
                            <div className="absolute top-0 right-[-13.5%] max-[1280px]:right-[-11.2%] max-[1141px]:right-[-8%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center">
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 4</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl" > No-Loss Gambling </p>
                            <Description descriptionClass={"leading-[121%] lg:max-w-[460px] max-md:text-sm"} descriptionText={"Each week, we will organize free to enter no-loss gambling, with 25% of royalties being distributed as prize pool in events such as marble races or blackjack/poker tournaments. Imagine being able to bet on your Hustlin’ Hardo in a virtual foot race against your friend’s hardos. Since those events are free to enter, you can’t lose anything - but you can win BIG!"} />
                        </div>

                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] relative w-full lg:ml-auto" >
                            <div className="absolute top-0 left-[-20%] max-[1280px]:left-[-17.5%] max-[1140px]:left-[-16%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center" >
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 5</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl">
                                Hustlin’ Hardettes
                            </p>
                            <Description descriptionClass={"leading-[121%] max-md:text-sm"} descriptionText={"The ethos of Hustlin’ Hardos is to create an authentic and inclusive community where we would celebrate the quirky nature of the finance world. With that objective in mind, we will also launch a brand now collection to celebrate the Hardettes who are an integral part of this community."} />
                        </div>

                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] relative mb-[15px] w-full"   >
                            <div className="absolute top-0 right-[-13.5%] max-[1280px]:right-[-11.2%] max-[1141px]:right-[-8%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center" >
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 6</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl"   >
                                Metaverse Integrations
                            </p>
                            <Description descriptionClass={"leading-[121%] lg:max-w-[460px] max-md:text-sm"} descriptionText={"Both our personal and professional lives are increasingly moving online. Your Huslin’ Hardo will become your gateway to this new reality, acting as your 3D avatar in the metaverse"} />
                        </div>

                        <div
                            className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] w-full relative lg:ml-auto" >
                            <div className="absolute top-0 left-[-20%] max-[1280px]:left-[-17.5%] max-[1140px]:left-[-16%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center">
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 7</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl"  >
                                Future Developments
                            </p>
                            <Description descriptionClass={"leading-[121%] max-md:text-sm"} descriptionText={"It wouldn’t make sense to build one of the best online communities and not actively listen to its suggestions. As such, we also plan to execute against some community-generated ideas, delivering against the priorities of those who made Hustlin’ Hardos a success"} />
                        </div>

                        <div className="max-w-[495px] max-[1141px]:max-w-[450px] max-lg:max-w-[unset] lg:mt-[-5px] relative w-full" >
                            <div
                                className="absolute top-0 right-[-13.5%] max-[1280px]:right-[-11.2%] max-[1141px]:right-[-8%] max-lg:left-[-12.5%] max-[801px]:!left-[-17.5%] size-[59px] max-[601px]:size-9 bg-white border-2 border-solid border-black rounded-full flex justify-center items-center" >
                                <img src={dotImg} className="max-[601px]:w-5 max-[601px]:h-6" alt="dots" />
                            </div>
                            <p className="text-sm pb-2.5">Phase 8</p>
                            <p className="pb-3 font-semibold text-4xl leading-[111%] max-lg:text-3xl max-md:text-2xl">
                                Swapping Individual Attributes
                            </p>
                            <Description descriptionClass={"leading-[100%] max-md:text-sm pb-[99px] max-md:pb-16 max-sm:pb-10"} descriptionText={"Building a wardrobe app where you can secondary sales"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[1.5px]"></div>
        </>
    )
}

export default Roadmap