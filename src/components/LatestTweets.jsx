import React from 'react'
import Heading from './common/Heading'
import { LeftArrow, RightArrow, Twitter } from '../utils/icons'
import { LATEST_TWEETS_DATA } from '../utils/helper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const LatestTweets = () => {
    return (
        <>
            <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[89.5px]">
                <div className="flex items-center justify-between">
                    <Heading headingClass={"max-sm:!tracking-[-1px] uppercase ![text-shadow:2px_2px_4px_#00000040]"} headingText={"Latest Tweets"} />
                    <div className="flex items-center gap-4 sm:gap-[55px]">
                        <p className='swiper-arrow prev-btn cursor-pointer'><LeftArrow /></p>
                        <p className='swiper-arrow next-btn cursor-pointer'><RightArrow /></p>
                    </div>
                </div>
            </div>
            <div className="border-[1.5px] w-full"></div>
            <div className="max-w-[1140px] px-3 xl:px-0.5 mx-auto">
                <div className="flex">
                    <div className="border-l-2"></div>
                    <Swiper
                        navigation={{
                            nextEl: '.next-btn',
                            prevEl: '.prev-btn',
                        }}
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={3}
                        loop={true}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 1,
                            },
                            0: {
                                slidesPerView: 1,
                            }
                        }} >
                        {LATEST_TWEETS_DATA.map((data, index) => (
                            <SwiperSlide>
                                <div key={index} className="py-[47px] px-[25px] border-r-2 w-full h-full lg:max-w-[381px]">
                                    <h3 className='text-4xl font-semibold leading-[111%] text-black'>{data.heading}</h3>
                                    <div className="flex items-center pt-[13px] gap-[11px]">
                                        <a className='latest-twitter' href="https://x.com/" target='blank'><Twitter /></a>
                                        <p className='text-sm leading-[100%] text-black'>{data.date}</p>
                                    </div>
                                    <p className='leading-[100%] pt-[13px] pb-[15px]'>{data.para}</p>
                                    <a className='text-sm leading-[100%] underline hover:text-[#55ACEE] transition-all duration-200 ease-linear' href="">Read More...</a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="border-[1.5px] w-full"></div>
        </>
    )
}

export default LatestTweets