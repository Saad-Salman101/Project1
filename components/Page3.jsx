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
    <div id="page3" className='h-screen w-full flex flex-col justify-between'>
      
      <div className='w-full h-[15%] flex justify-center items-center'>
        <div className='text-black tracking-[2px] text-[30px] uppercase font-lato '>Revolutionary</div>
      </div>
      
      <div className='flex justify-center items-center w-full h-[60%] '>
        <div></div>
        <div className='absolute right-1/2'><img src='/images/P3Line.png' alt=''/></div>
        <div className='w-[70%] relative'><img src='/images/P3Logo.png' alt=''/></div>
        <div></div>
        </div>
        
        <div className='flex flex-col justify-center items-center h-[25%]'>
        <div  className='text-black tracking-[2px] text-[30px] font-lato mb-10 md:mr-0 mr-4 md:ml-0 ml-4'>
          The only platform of it`s kind in the world</div>

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
