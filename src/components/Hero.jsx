import React from 'react'
import heroImg from '../assets/images/png/hero-img.png'
const Hero = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col">
                <div className="max-w-[1140px]">
                    <h1 className='font-modernofb xl:text-[157px] md:text-8xl sm:text-6xl whitespace-nowrap py-5 max-lg:py-4 max-md:py-3 max-sm:py-2 text-center text-5xl leading-[100%] text-black'>THE HUSTLIN’ HARDOS.</h1>
                </div>
                <div className="border-[1.5px] w-full"></div>
                <img className='w-full max-h-[476px] pointer-events-none' src={heroImg} alt="" />
                <div className="border-[1.5px] w-full"></div>
            </div>
        </>
    )
}

export default Hero