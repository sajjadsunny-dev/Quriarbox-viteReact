import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { BiSearch } from 'react-icons/Bi';
import { AiOutlineClose } from 'react-icons/Ai';

const Navbar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const searchBtn = () => {
        setIsSearchVisible(!isSearchVisible)
    }
    return (
        <>
            <nav className='pt-[15px] pb-4 shadow-navShadow fixed w-full z-10'>
                <div className='max-w-container mx-auto flex items-center'>
                    <a href="#"><img src={logo} alt="logo" /></a>
                    <div className='ml-auto'>
                        <div className='flex items-center'>
                            <ul className='flex '>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">Home</a></li>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">Our services</a></li>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">About Us</a></li>
                                <li><a className='font-raleway text-base font-extrabold text-[#817382] mr-12 hover:text-primary duration-300' href="#">What’s new?</a></li>
                            </ul>
                            <div className='flex'>
                                {isSearchVisible && (
                                    <input className='input focus:outline-none border-2 border-[#FFEDC9] pl-3.5 font-raleway text-base font-bold text-[#817382]' type="text" placeholder='Search' />
                                )
                                }
                                <button onClick={searchBtn} className='search pt-[13px] pr-[13px] pb-3.5 pl-3.5 text-2xl text-[#FFAF0F] hover:text-white rounded-md bg-[#FFEDC9] mr-[9px] hover:bg-primary duration-500 ease-liner'>
                                    {
                                        isSearchVisible ? <AiOutlineClose /> : <BiSearch />
                                    }
                                </button>
                                <button className='px-5 py-3 bg-[#FFE4D9] rounded-[5px] font-oxanium text-xl font-bold text-primary hover:text-white hover:bg-primary duration-500 ease-liner'>
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar