import React from 'react'
import businessServices from '../../assets/businessServices.png'
import statewideServices from '../../assets/statewideServices.png'
import personalServices from '../../assets/personalServices.png'

const Services = () => {
    return (
        <>
            <section className='md:mt-[168px] my-24 md:mb-48'>
                <div className='max-w-container mx-auto px-3 md:px-0'>
                    <div className=''>
                        <h3 className='font-oxanium text-2xl md:text-3xl font-bold text-primary text-center'>SERVICES</h3>
                        <h2 className='font-raleway text-3xl md:text-[40px] font-extrabold text-[11111D] text-center mb-14 md:mb-[86px] mt-1.5 md:mt-[11px]'>Our services for you</h2>
                    </div>
                    <div className='grid md:grid-cols-3 gap-6'>

                        <div className='w-full bg-white px-10 md:px-[61px] py-8 md:pt-[67px] md:pb-[49px] rounded-xl shadow-cardShadow'>
                            <img className='mx-auto' src={businessServices} alt="businessServices" />
                            <h4 className='font-raleway text-[25px] font-extrabold text-#464558 text-center mt-4 md:mt-7'>Business Services</h4>
                            <p className='font-raleway text-base font-regular text-[#7B7A8B] mt-3 mb-4 md:mt-8 md:mb-9'>We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.</p>
                            <ul>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center mb-3'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Corporate goods</li>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center mb-3'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Shipment</li>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Accesories</li>
                            </ul>
                            <button className='font-oxanium text-xl font-bold text-primary py-3 w-full border-[1px] border-primary rounded-md mt-7 md:mt-[60px] hover:bg-primary hover:text-white duration-500'>Learn more</button>
                        </div>

                        <div className='w-full bg-white px-10 md:px-[61px] py-8 md:pt-[67px] md:pb-[49px] rounded-xl shadow-cardShadow'>
                            <img className='mx-auto' src={statewideServices} alt="businessServices" />
                            <h4 className='font-raleway text-[25px] font-extrabold text-#464558 text-center mt-4 md:mt-7'>Statewide Services</h4>
                            <p className='font-raleway text-base font-regular text-[#7B7A8B] mt-3 mb-4 md:mt-8 md:mb-9'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                            <ul>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center mb-3'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Personal items</li>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center mb-3'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Percels</li>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Documents</li>
                            </ul>
                            <button className='font-oxanium text-xl font-bold text-primary py-3 w-full border-[1px] border-primary rounded-md mt-7 md:mt-[60px] hover:bg-primary hover:text-white duration-500'>Learn more</button>
                        </div>

                        <div className='w-full bg-white px-10 md:px-[61px] py-8 md:pt-[67px] md:pb-[49px] rounded-xl shadow-cardShadow'>
                            <img className='mx-auto' src={personalServices} alt="businessServices" />
                            <h4 className='font-raleway text-[25px] font-extrabold text-#464558 text-center mt-4 md:mt-7'>Personal Services</h4>
                            <p className='font-raleway text-base font-regular text-[#7B7A8B] mt-3 mb-4 md:mt-8 md:mb-9'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time..</p>
                            <ul>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center mb-3'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Gifts</li>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center mb-3'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Package</li>
                                <li className='font-raleway text-base font-regular text-[#7B7A8B] flex items-center'><div className='w-[7px] h-[7px] bg-primary rounded mr-3'></div>Documents</li>
                            </ul>
                            <button className='font-oxanium text-xl font-bold text-primary py-3 w-full border-[1px] border-primary rounded-md mt-7 md:mt-[60px] hover:bg-primary hover:text-white duration-500'>Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services