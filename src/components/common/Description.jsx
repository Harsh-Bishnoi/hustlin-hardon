import React from 'react'

const Description = (descriptionClass, descriptionText) => {
    return (
        <p className={`leading-[100%] text-black ${descriptionClass}`}>{descriptionText}</p>
    )
}

export default Description