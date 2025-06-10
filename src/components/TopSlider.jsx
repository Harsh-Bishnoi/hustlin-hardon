import React from 'react'
import Marquee from "react-fast-marquee";
const TopSlider = () => {
    return (
        <>
            <div className="bg-black h-13 py-[13.5px] max-w-[1920px] mx-auto">
                <Marquee pauseOnHover>
                    <div className="flex gap-15.5 max-md:gap-14 max-sm:gap-7">
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">S&P</p>
                            <p className="text-[#FF0000] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FF0000] py-[2.5px] px-1.5">-1.01%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">Shanghai</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.87%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">FTSE 100</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.13%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">ASD 100</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.13%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">Brent Crude Oil</p>
                            <p className="text-[#FF0000] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FF0000] py-[2.5px] px-1.5">-0.24%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">DSC</p>
                            <p className="text-[#FF0000] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FF0000] py-[2.5px] px-1.5">-0.24%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">AXD 100</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.13%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">Euro/Doller</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.03%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">S&P</p>
                            <p className="text-[#FF0000] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FF0000] py-[2.5px] px-1.5">-1.01%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">Shanghai</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.87%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">FTSE 100</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1"> +0.13%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">ASD 100</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.13%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">Brent Crude Oil</p>
                            <p className="text-[#FF0000] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FF0000] py-[2.5px] px-1.5">-0.24%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">DSC</p>
                            <p className="text-[#FF0000] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FF0000] py-[2.5px] px-1.5">-0.24%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">AXD 100</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.13%</p>
                        </div>
                        <div className="flex items-center gap-[7px]">
                            <p className="text-white leading-[130%] whitespace-nowrap">Euro/Doller</p>
                            <p className="text-[#FFD600] text-sm leading-[130%] uppercase rounded-[5px] border border-[#FFD600] py-[2.5px] px-1">+0.03%</p>
                        </div>
                    </div>
                </Marquee >
            </div >
        </>
    )
}

export default TopSlider