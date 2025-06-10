import React from 'react'

const Button = ({ onClick, btnText, btnClass }) => {
    return (
        <button onClick={onClick} className={`font-semibold text-sm leading-[100%] px-3.5 py-3 cursor-pointer transition-all duration-600 ease-in-out hover:text-[#FFD600] hover:[box-shadow:inset_0_-100px_0_0_black] uppercase text-black bg-[#FFD600] border-2 border-black ${btnClass}`}>{btnText}</button>
    )
}

export default Button