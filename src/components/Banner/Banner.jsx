import React from 'react'
import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <>
            <section className='h-screen'>
                <div className='max-w-container mx-auto h-full flex items-end'>
                    <div className=' pb-[200px]'>
                        <h1 className='font-raleway font-regular text-[#261134] text-5xl w-[470px]'>A trusted provider of <span className='leading-[120%] font-extrabold'>courier services.</span></h1>
                        <p className='font-raleway font-regular text-[#4D4D4D] text-xl leading-[120%] w-80 mt-4 mb-10'>We deliver your products safely to your home in a reasonable time.</p>
                        <button className='px-5 py-3 bg-primary rounded-[5px] font-oxanium text-xl font-bold text-white hover:text-primary hover:bg-white duration-500 ease-liner'>Get Started</button>
                    </div>
                    <img className='' src={bannerImg} alt="banner image" />
                </div>
            </section>
        </>
    )
}

export default Banner