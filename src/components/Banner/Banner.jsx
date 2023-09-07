import React from 'react'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <>
            <section className='h-screen'>
                <div className='max-w-container mx-auto px-3 md:px-0 h-full flex items-center md:items-end relative'>
                    <div className='md:pb-44'>
                        <h1 className='font-raleway font-regular text-[#261134] text-4xl md:text-5xl md:w-[470px]'>A trusted provider of <br></br><span className='leading-[120%] font-extrabold'>courier services.</span></h1>
                        <p className='font-raleway font-regular text-[#4D4D4D] text-lg md:text-xl leading-[120%] w-80 mt-4 mb-10 sm:mt-2 sm:mb-5 md:mt-4 md:mb-10'>We deliver your products safely to your home in a reasonable time.</p>
                        <button className='px-5 py-3 bg-primary rounded-[5px] font-oxanium text-xl font-bold text-white hover:text-primary hover:bg-white duration-500 ease-liner'>Get Started</button>
                    </div>
                    <img className='absolute right-0 bottom-0 md:translate-x-24 sm:w-[500px] md:w-fit' src={bannerImg} alt="banner image" />
                </div>
            </section>
        </>
    )
}

export default Banner