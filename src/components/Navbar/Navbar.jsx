import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { BiSearch } from 'react-icons/Bi';
import { AiOutlineClose } from 'react-icons/Ai';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    // search bar js
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const searchBtn = () => {
        setIsSearchVisible(!isSearchVisible)
    }
    // navbar toggler btn js
    const [navItemShow, setNavItemShow] = useState(false);
    const handleOpen = () => {
        setNavItemShow(!navItemShow);
    }
    useEffect(() => {
        if (window.innerWidth >= 768) {
            setNavItemShow(true)
        }
        function screenResize() {
            console.log(window.innerWidth);
            if (window.innerWidth >= 768) {
                setNavItemShow(true)
            } else {
                setNavItemShow(false)
            }
        }
        window.addEventListener('resize', screenResize)
    }, [])

    return (
        <>
            <nav className='pt-[15px] pb-4 shadow-navShadow fixed w-full z-10'>
                <div className='max-w-container mx-auto flex items-center px-3 md:px-0'>
                    <a href="#"><img src={logo} alt="logo" /></a>
                    <div className={`navToggle md:ml-auto md:static absolute top-full pb-4 md:pb-0 w-full md:w-max duration-500 bg-navItems md:bg-inherit ${navItemShow ? "right-0" : "right-[-100%]"
                        }`}>
                        <div className='md:flex items-center px-6 md:px-0'>
                            <ul className='md:flex'>
                                <li className='mb-1.5 md:mb-0'><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">Home</a></li>
                                <li className='mb-1.5 md:mb-0'><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">Our services</a></li>
                                <li className='mb-1.5 md:mb-0'><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">About Us</a></li>
                                <li className='mb-1.5 md:mb-0'><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">What’s new?</a></li>
                            </ul>
                            <div className='md:flex inline-table overflow-x-hidden md:overflow-visible'>
                                <div className="flex mt-3 md:mt-0 relative">
                                    {
                                        isSearchVisible ? <input className='input focus:outline-none border-2 border-[#FFEDC9] pl-1.5 md:pl-3 py-2.5 font-raleway text-base font-bold text-[#817382] translate-x-[100%] md:translate-x-[-100%] w-[230px] duration-300 rounded-md absolute top-1/2 right-[93px] md:left-0 translate-y-[-50%]' type="text" placeholder='Search' /> : <input className='input focus:outline-none border-2 border-[#FFEDC9] pl-1.5 md:pl-3 py-2.5 font-raleway text-base font-bold text-[#817382] translate-x-[0%] md:translate-x-[0%] w-0 duration-300 rounded-md absolute top-1/2 right-[90px] md:left-0 translate-y-[-50%]' type="text" placeholder='Search' />

                                    }
                                    <button onClick={searchBtn} className='search pt-[13px] pr-[13px] pb-3.5 pl-3.5 text-2xl text-[#FFAF0F] hover:text-white rounded-md bg-[#FFEDC9] md:mr-[9px] hover:bg-primary duration-500 ease-liner z-[4]'>
                                        {
                                            isSearchVisible ? <AiOutlineClose /> : <BiSearch />
                                        }
                                    </button>
                                </div>
                                <button className='px-5 py-3 bg-[#FFE4D9] rounded-[5px] font-oxanium text-xl font-bold text-primary hover:text-white hover:bg-primary duration-500 ease-liner mt-3 md:mt-0'>
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleOpen} className='ml-auto md:ml-0 block md:hidden px-2 py-2 bg-[#FFE4D9] rounded-[5px] text-xl text-primary hover:text-white hover:bg-primary duration-500 ease-liner cursor-pointer'><FaBars /></div>
                    {/* <div className='navTogglerBtn w-[45px] px-[4px] py-[7px] bg-red-500 h-[45px] flex flex-col justify-between'>
                        <div className='w-full h-[6px] bg-white rounded-[5px]'></div>
                        <div className='w-full h-[6px] bg-white rounded-[5px]'></div>
                        <div className='w-full h-[6px] bg-white rounded-[5px]'></div>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar