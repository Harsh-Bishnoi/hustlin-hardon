import React from 'react'
import Heading from './common/Heading'

const Roadmap = () => {
    return (
        <>
            <div id='roadmap'>
                <div className="max-w-[1140px] px-3 xl:px-0 mx-auto py-10 sm:py-14 md:py-20 lg:py-[88.5px]">
                    <div className="flex items-center justify-between">
                        <Heading headingClass={"max-sm:!tracking-[-1px]"} headingText={"RoadMap"} />
                    </div>
                </div>
                <div className="border-y-[1.5px]">
                    <div className="max-w-[1140px] mx-auto px-3 xl:px-0">
                        <div className="flex">
                            <div className="border-[1.5px]"></div>
                            Roadmap
                            <div className="border-[1.5px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap