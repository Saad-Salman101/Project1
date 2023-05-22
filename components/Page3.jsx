/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element, scroller } from 'react-scroll';

const Page3 = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


  return (
    <>
        <Element name="page3" className="section">
    <div id="page3" className='h-screen w-full flex flex-col justify-center items-center'>
      
      <div className='w-full h-[15%] flex justify-center items-center'>
        <div className='text-black tracking-[2px] text-[30px] uppercase font-lato '>Revolutionary</div>
      </div>
      
      <div className='md:flex flex flex-col justify-center items-center w-[80%] md:h-[60%] h-[30%] relative '>
  <div className=' absolute mb-16  top-20 right-1/4 md:top-1/2 md:left-3'><img src='/images/P3Logo.png' alt='' /></div>
  <div className='absolute    right-1/6'><img src='/images/P3Line.png' alt='' className='transform rotate-90 md:rotate-0' /></div>
  <div className='   absolute mb-3  right-1/4 bottom-20 md:bottom-1/3  md:right-2'><img src='/images/P3Logo2.png' alt='' /></div>
</div>
        
        <div className='flex flex-col justify-center items-center h-[25%]'>
        <div  className='text-black text-center tracking-[2px] text-[30px] font-lato md:mb-10 mb-64 md:mr-0 mr-4 md:ml-0 ml-4'>
          The only platform of it`s kind in the world.</div>

            <a>
            <img src='/images/DownArrow.png' alt='' className='md:w-[80px] w-[40px]' onClick={() => scrollToSection('page4')}/>
            </a>

        </div>

    </div>
      </Element>
    </>
  )
}

export default Page3
