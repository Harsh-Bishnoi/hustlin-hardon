import { useState, useEffect } from 'react';
import { HEADER_LINK, SOCIAL_LINK } from '../utils/helper';
import CommonButton from './common/CommonButton';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        const newState = !menuOpen;
        setMenuOpen(newState);
        document.body.classList.toggle("overflow-hidden", newState);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const linkClick = () => {
        setMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
    };

    return (
        <>
            <nav className='px-3 my-2'>
                <div className="max-w-[1140px] mx-auto">
                    <div className="flex justify-between items-center max-w-[658px] ml-auto">
                        <a href="/" className="font-modernofb text-2xl leading-[100%] text-black">
                            Hustlin' Hardos
                        </a>
                        <div
                            onClick={toggleNavbar}
                            className="z-50 md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
                        >
                            <span className={`block h-1 rounded-3xl bg-black transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-1 rounded-3xl bg-black transition-transform duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-1 rounded-3xl bg-black transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                        <ul className={`list-unstyled flex gap-4.5 justify-center items-center max-md:flex-col max-md:w-full max-md:min-h-screen max-md:fixed max-md:justify-center max-md:bottom-0 max-md:right-[-100%] max-md:top-0 z-3 max-md:items-center max-md:bg-[#f1f1f1] duration-300 ease-in-out transition-all mb-0 ${menuOpen ? '!right-0' : ''}`}>
                            {SOCIAL_LINK.map((item, index) => (
                                <li key={index} className='hover:scale-110 duration-200 transition-all ease-linear'><a href={item.link} target='_blank'>{<item.svg />}</a></li>
                            ))}
                            <li>
                                <CommonButton btnText={"Connect Wallet"} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="w-full mt-[15px] border-t-2 border-b-2 border-solid border-black">
                <div className="max-w-[561px] justify-center items-center flex mx-auto">
                    {HEADER_LINK.map((item, index) => (
                        <a key={index} className={`px-6 uppercase hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap max-md:text-sm max-sm:text-xs border-solid py-[7px] max-sm:py-1 max-sm:px-2 border-black ${index === 0 ? 'border-x-2' : 'border-r-2'}`}
                            href={item.link}> {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;