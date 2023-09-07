import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/Ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { SlLocationPin } from 'react-icons/sl';
import { BiTime } from 'react-icons/Bi';
import { AiOutlineMail } from 'react-icons/Ai';
import { IoMdCall } from 'react-icons/Io';

const Location = () => {
    return (
        <>
            <section className='my-24 md:mt-[169px] md:mb-[183px]'>
                <div className="max-w-container mx-auto px-3 md:px-0">
                    <div className=''>
                        <h3 className='font-oxanium text-2xl md:text-3xl font-bold text-primary text-center'>SERVICES</h3>
                        <h2 className='font-raleway text-3xl md:text-[40px] font-extrabold text-[#11111D] text-center mb-14 md:mb-[86px] mt-1.5 md:mt-[11px]'>Our services for you</h2>
                    </div>
                    <div className='grid grid-cols-12 md:gap-5'>
                        <div className="col-span-12 md:col-span-7">
                            <iframe class="w-full h-[230px] sm:h-[280px] md:h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233738.88187264823!2d90.09419918060297!3d23.741315419418203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1690881950682!5m2!1sen!2sbd"></iframe>
                        </div>
                        <div className="bg-[#FEFCFA] col-span-12 md:col-span-5 py-8 px-5 sm:py-12 sm:px-10 md:pt-20 md:pl-[85px] md:pb-[88px]">
                            <h4 className='font-raleway text-xl font-bold leading-[120%] text-[#464558] mb-7 md:mb-[37px]'>Contact with us</h4>
                            <ul>
                                <li className='flex items-center mb-4 md:mb-[15px]'>
                                    <span className='text-[27px] text-[#FFAF0F] mr-[13px]'><SlLocationPin /></span>
                                    <h5 className='font-raleway text-base font-regular leading-[120%] text-[#5C5B6C]'>2277 Lorem Ave, San Diego, CA 22553</h5>
                                </li>
                                <li className='flex items-center mb-4 md:mb-[15px]'>
                                    <span className='text-[27px] text-[#FFAF0F] mr-[13px]'><BiTime /></span>
                                    <div>
                                        <h5 className='font-raleway text-base font-regular leading-[120%] text-[#5C5B6C]'>Monday - Friday: 10 am - 10pm</h5>
                                        <h5 className='font-raleway text-base font-regular leading-[120%] text-[#5C5B6C]'>Sunday: 11 am - 9pm</h5>
                                    </div>
                                </li>
                                <li className='flex items-center mb-6 md:mb-[67px]'>
                                    <span className='text-[27px] text-[#FFAF0F] mr-[13px]'><AiOutlineMail /></span>
                                    <a className='font-raleway text-base font-regular leading-[120%] text-[#5C5B6C]' href="mailto:info@quriarbox.com">info@quriarbox.com</a>
                                </li>
                            </ul>
                            <div className='flex'>
                                <a className='text-[22px] text-[#EBEBF5] mr-6 hover:text-primary duration-500' href="#"><FaFacebookSquare /></a>
                                <a className='text-[22px] text-[#EBEBF5] mr-6 hover:text-primary duration-500' href="#"><AiFillInstagram /></a>
                                <a className='text-[22px] text-[#EBEBF5] hover:text-primary duration-500' href="#"><FaTwitterSquare /></a>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-6 md:mt-8'>
                        <a className='w-full sm:w-fit sm:px-16 md:px-28 pt-[22px] pb-[19px] font-oxanium text-[18px] md:text-xl font-bold text-white bg-primary inline-flex items-center justify-center rounded-[6px] border-[1px] border-primary hover:bg-white hover:text-primary duration-500' href="tel:123-456789"><span className='text-[30px] mr-3'><IoMdCall /></span>Call us to delivery  123-456789</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Location