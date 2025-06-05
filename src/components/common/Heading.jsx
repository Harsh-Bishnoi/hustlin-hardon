import React from 'react'

const Heading = (headingText, headingClass) => {
    return (
        <h2 className={`text-[80px] leading-[104%] text-black ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading