import React from 'react'
import footerLogo from '../../assets/footerLogo.png'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#222132]'>
                <div className='py-[84px]'>
                    <div className='max-w-container mx-auto flex justify-between items-center'>
                        <div className=''>
                            <h2 className='font-raleway text-[39px] font-extrabold text-white leading-[110%]'>Get an update every week</h2>
                            <p className='font-raleway text-base font-regular text-[#C5C5D2] leading-[145%] w-[470px] mt-3'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                        </div>
                        <div>
                            <h4 className='font-oxanium text-lg font-bold text-primary mb-[13px]'>SUBSCRIBE TO NEWSLETTER</h4>
                            <form className=''>
                                <input className='w-[396px] focus:outline-none border-[1px] border-[#C5C5D2] py-[15px] pl-[18px] bg-transparent rounded-[5px] font-raleway text-base font-regular text-white leading-[120%]' type="text" placeholder='Enter your mail' />
                                <button className='font-oxanium text-xl font-bold text-white rounded-[5px] bg-primary px-5 py-3 duration-500 hover:bg-white hover:text-primary ml-4'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='bg-[#2F2E41] pt-[50px] pb-14'>
                    <div className='max-w-container mx-auto flex justify-between items-center'>
                        <div>
                            <img src={footerLogo} alt="footerLogo" />
                            <p className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mt-[18px] w-[190px]'>The most trusted Courier
                                company in your area.</p>
                        </div>
                        <div className='flex'>
                            <ul className=''>
                                <h5 className='font-oxanium text-xl font-bold text-white mb-[22px]'>Other links</h5>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Blogs</a></li>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Movers website</a></li>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Traffic Update</a></li>
                            </ul>
                            <ul className='ml-[136px]'>
                                <h5 className='font-oxanium text-xl font-bold text-white mb-[22px]'>Services</h5>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Corporate goods</a></li>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Artworks</a></li>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'>Documents<a href="#"></a></li>
                            </ul>
                            <ul className='ml-[126px]'>
                                <h5 className='font-oxanium text-xl font-bold text-white mb-[22px]'>Customer Care</h5>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">About Us</a></li>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Contact US</a></li>
                                <li className='font-raleway text-base font-semibold text-[#9291A1] leding-[22px] mb-[7px] hover:text-primary duration-500'><a href="#">Get Update</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-[30px]'>
                    <div className='max-w-container mx-auto flex justify-between'>
                        <h5 className='font-raleway text-[13px] font-medium text-[#DBDBE9]'>All rights Reserved © Your Company, 2021</h5>
                        <h5 className='font-raleway text-[13px] font-medium text-[#DBDBE9]'>Made with heart by <span className='font-extrabold text-primary'>ThemeWagon</span></h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer