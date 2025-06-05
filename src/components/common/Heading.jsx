import React from 'react'

const Heading = ({headingText, headingClass}) => {
    return (
        <h2 className={`text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[104%] text-black ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading