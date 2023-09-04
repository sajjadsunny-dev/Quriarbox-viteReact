import React from 'react'
import { BsPlayFill } from "react-icons/Bs";

const Video = () => {
    return (
        <>
            <section className=''>
                <div className='max-w-container mx-auto'>
                    <div className='w-full bg-video rounded-[16px] overflow-hidden'>
                        <div className="w-full h-full px-[347px] py-[147px] bg-overlay">
                            <div className='h-[86px] w-[86px] rounded-full bg-primary flex items-center justify-center cursor-pointer text-white text-[50px] mx-auto hover:bg-[#DC4200] duration-100'><BsPlayFill /></div>
                            <h5 className='font-oxanium text-[31px] font-bold text-primary text-center mt-[19px] mb-[28px]'>FASTEST DELIVERY</h5>
                            <p className='font-raleway text-[25px] font-regular text-white leading-[120%] text-center'> You can get your valuable item in the fastest period of
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