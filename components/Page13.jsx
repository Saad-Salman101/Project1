/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { Element} from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Page13 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether to trigger animations only once
    });
  }, []);

  return (
    <>
    <Element name="page13" className="section">
    <div id='page13' className='h-[100vh] w-full flex-col flex justify-between '>
      <div className='w-full h-[30%] '></div>

      <div className=' h-[20%]  flex flex-row justify-center items-center md:w-full  '>
        <div className='w-[50%]  flex justify-center items-center' data-aos="fade-down"><img src='/images/P13Logo.png' alt='' /> </div>
        </div>

      <div className='w-full h-[50%] flex flex-col  items-center justify-end   mb-5'>
        <div></div>
        <div className='text-[black] text-[20px] md:text-[30px] font-lato tracking-[2px] text-center mb-3' data-aos="fade-up">
          Document-signing technology that lets you sign documents online.
        </div>
        <div className='w-full flex-col justify-between '>
          <div></div>
          
          <div className='w-full flex justify-between md:justify-between lg:justify-between items-center '>
            <div></div>
            <div></div>
            <div className='flex flex-col md:mr-10 md:mb-5 ' data-aos="fade-up">
              <div className='flex md:ml-0 ml-2 justify-end'>
                <img src='/images/P13SmallLogo.png' alt='' className=''/>
                <img src='/images/P13Sign.png' alt='' className='md:ml-20 ml-10 '/>
              </div>
              <div>
              <img src='/images/P13Line.png' alt=''/>
              </div>
              <div className='flex justify-end'>
              <img src='/images/P13Code.png' alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </Element>
    </>
  )
}

export default Page13