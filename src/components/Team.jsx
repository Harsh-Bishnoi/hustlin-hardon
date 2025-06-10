import React from 'react'
import Heading from './common/Heading'
import { LeftArrow, RightArrow } from '../utils/icon'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { TEAM_DATA } from '../utils/helper';

const Team = () => {
    return (
        <>
            <div id='team'>
                <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px]">
                    <div className="flex items-center justify-between">
                        <Heading headingClass={"max-sm:!tracking-[-1px] ![text-shadow:2px_2px_4px_#00000040]"} headingText={"Team"} />
                        <div className="flex items-center gap-4 sm:gap-[55px]">
                            <p className='swiper-arrow team-prev-btn cursor-pointer'><LeftArrow /></p>
                            <p className='swiper-arrow team-next-btn cursor-pointer'><RightArrow /></p>
                        </div>
                    </div>
                </div>
                <div className="border-[1.5px] w-full"></div>
                <div className="max-w-[1140px] px-3 xl:px-0.5 mx-auto">
                    <div className="flex">
                        <div className="border"></div>
                        <Swiper
                            navigation={{
                                nextEl: '.team-next-btn',
                                prevEl: '.team-prev-btn',
                            }}
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={3}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                }
                            }} >
                            {TEAM_DATA.map((data, index) => (
                                <SwiperSlide>
                                    <div key={index} className="py-12 sm:py-[53.5px] md:max-w-[570px] h-full px-7 sm:px-14 md:px-7 lg:px-[81.5px] border-r-2 bg-[url('src/assets/images/png/team-swiper-bg-img.png')] bg-cover bg-no-repeat">
                                        <img className='flex justify-center mx-auto' src={data.img} alt="img" />
                                        <h3 className='pt-4 text-center font-extrabold text-3xl sm:text-4xl leading-[100%] text-[#70675F]'>{data.heading}</h3>
                                        <p className='pt-4 text-center leading-[130%] text-black'>{data.para}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="border-[1.5px] w-full"></div>
            </div>
        </>
    )
}

export default Team