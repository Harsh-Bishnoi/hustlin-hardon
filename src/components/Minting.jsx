import React, { useState } from 'react'
import Heading from './common/Heading'
import Description from './common/Description'
import newsMan from '../assets/images/png/news-man-img.png'
import { TRISTIQUE_DATA } from '../utils/helper'
import Button from './common/Button'

const Minting = () => {
    const [count, setCount] = useState(100)
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <>
            <div id='minting'>
                <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px] ![text-shadow:2px_2px_4px_#00000040]">
                    <Heading headingText={"Minting"} />
                </div>
                <div className="border-y-2 border-solid max-xl:px-3 border-black">
                    <div className="max-w-[1140px] max-lg:border-none mx-auto border-x-2 border-solid border-black" >
                        <div className="w-full flex justify-center max-lg:flex-col max-lg:py-5 max-lg:gap-3 items-center" >
                            <div className="lg:max-w-[570px] px-[25px] max-lg:px-0 w-full" >
                                <div className="lg:max-w-[438px]">
                                    <Description descriptionClass={"leading-[140%] text-black"} descriptionText="Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3." />
                                    <div className="min-h-[49px] border-2 mt-[15px] border-solid flex border-black max-sm:max-w-[170px] max-w-[238px]" >
                                        <button onClick={decrement} className="text-4xl cursor-pointer max-md:text-3xl px-6 max-sm:px-3 max-sm:text-2xl font-semibold" >
                                            -
                                        </button>
                                        <p className="min-w-[109px] max-sm:min-w-24 border-x-2 border-solid border-black flex justify-center items-center text-4xl max-md:text-3xl px-6 max-sm:px-4 max-sm:text-2xl font-semibold">
                                            {count}
                                        </p>
                                        <button onClick={increment} className="text-4xl cursor-pointer max-md:text-3xl px-6 max-sm:px-3 max-sm:text-2xl font-semibold" >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <Button btnClass={"mt-[35px]"} btnText={"Mint Now"} />
                                <p className="text-lg font-semibold leading-[100%] text-[#00A106] pt-9"> Time Left </p>
                                <p className="text-4xl font-semibold leading-[100%] pt-2 text-[#FF0000]">40:15:12:10</p>
                            </div>
                            <img src={newsMan} alt="man-img" className="max-w-[570px] pointer-events-none max-lg:border-none max-lg:w-full border-l-2 border-solid border-black" />
                        </div>
                    </div>
                </div>
                <div className="max-w-[832px] px-3 py-[21px] justify-between gap-5 sm:gap-7 lg:gap-10 items-center flex flex-wrap mx-auto">
                    {TRISTIQUE_DATA.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <p className="text-2xl leading-[111%] max-lg:text-xl max-md:text-lg max-sm:text-sm">{item}</p>
                            <p className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-sm font-semibold leading-[111%]">42</p>
                        </div>
                    ))}
                </div>
                <div className="border-[1.5px]"></div>
            </div>
        </>
    )
}

export default Minting