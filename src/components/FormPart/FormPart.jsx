import React from 'react'
import formIlustrator from '../../assets/formIlustrator.png'
import { FaPaperPlane } from 'react-icons/fa';

const FormPart = () => {
    return (
        <>
            <section>
                <div className="max-w-container m-auto px-3">
                    <div className='w-full md:w-[872px] mx-auto grid grid-cols-2 gap-6'>
                        <div className='col-span-2 sm:col-span-1 pb-[31px]'>
                            <img src={formIlustrator} alt="formIlustrator" />
                            <h3 className='font-oxanium text-2xl sm:text-base md:text-2xl font-bold text-primary mt-[13px]'>REQUEST A CALLBACK</h3>
                            <h2 className='font-raleway text-[39px] sm:text-3xl md:text-[39px] font-extrabold text-[#222132] mb-[9px] mt-5 sm :leading-[110%]'>We will contact in the shortest time.</h2>
                            <p className='font-raleway text-[25px] sm:text-2xl md:text-[25px] font-semibold text-[#9291A1] leading-[120%]'>Monday to Friday, 9am-5pm.</p>
                        </div>
                        <div className='col-span-2 sm:col-span-1'>
                            <form className='h-full flex flex-col justify-center'>
                                <input className='focus:outline-none py-[15px] pl-[19px] font-raleway text-base text-regular leading-[120%] text-[#9291A1] border-[1px] border-[#C5C5D2] focus:border-[#C5C5D2] focus:border-2 rounded-[8px] mb-4' type="text" placeholder='Name' />

                                <input className='focus:outline-none py-[15px] pl-[19px] font-raleway text-base text-regular leading-[120%] text-[#9291A1] border-[1px] border-[#C5C5D2] focus:border-[#C5C5D2] focus:border-2 rounded-[8px] mb-4' type="email" placeholder='Email' />

                                <textarea className='h-[154px] focus:outline-none py-[15px] pl-[19px] font-raleway text-base text-regular leading-[120%] text-[#9291A1] border-[1px] border-[#C5C5D2] resize-none focus:border-[#C5C5D2] focus:border-2 rounded-[8px] mb-8 md:mb-[54px]' type="text" placeholder='Message'></textarea>

                                <button className='py-3 bg-primary border-2 border-primary rounded-[5px] font-oxanium text-2xl font-bold text-white flex items-center justify-center hover:text-primary hover:bg-white duration-500'>Send Message<span className='ml-2.5'><FaPaperPlane /></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormPart