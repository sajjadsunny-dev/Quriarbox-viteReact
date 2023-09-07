import React from 'react'
import { BsPlayFill } from "react-icons/Bs";

const Video = () => {
    return (
        <>
            <section className=''>
                <div className='max-w-container mx-auto px-3 md:px-0'>
                    <div className='w-full bg-video bg-start md:bg-center bg-cover rounded-[16px] overflow-hidden'>
                        <div className="w-full h-full px-5 pt-7 pb-16 sm:px-20 sm:py-16 md:px-[347px] md:py-[147px] bg-overlay">
                            <div className='h-[50px] md:h-[86px] w-[50px] md:w-[86px] rounded-full bg-primary flex items-center justify-center cursor-pointer text-white text-4xl md:text-[50px] mx-auto hover:bg-[#DC4200] duration-100'><BsPlayFill /></div>
                            <h5 className='font-oxanium text-2xl md:text-[31px] font-bold text-primary text-center mt-3 mb-4 md:mt-[19px] md:mb-[28px]'>FASTEST DELIVERY</h5>
                            <p className='font-raleway text-lg md:text-[25px] font-regular text-white leading-[120%] text-center'> You can get your valuable item in the fastest period of
                                time with safety. Because your emergency
                                is our first priority.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video