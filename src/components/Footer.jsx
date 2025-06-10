import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="max-w-[1140px] mx-auto">
            <p className='leading-[100%] text-center py-6 sm:pt-8'>© Hustlin' Hardos {currentYear}</p>
        </div>
    )
}

export default Footer