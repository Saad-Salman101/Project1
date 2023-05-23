/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element, scroller } from 'react-scroll';

const Page3sub = () => {

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
    <div id="page3" className='h-screen w-full flex flex-col justify-between items-center'>
      
      <div className='w-full h-[15%] flex justify-center items-center'>
        <div className='text-black tracking-[2px] text-[30px] uppercase font-lato '>Revolutionary</div>
      </div>
      
      <div className='md:flex flex md:flex-row flex-col justify-around items-center  md:h-[60%] h-[700px] w-[90%] md:w-[70%]'>
  <div className=' mb-[-400px] md:mb-0 mr-3 '><img src='/images/P3Logo.png' alt='' /></div>
  <div className=' w-[20%] ml-20'><img src='/images/P3Line.png ' alt='' className='transform rotate-90 md:rotate-0 ' /></div>
  <div className=' mt-[-400px] md:mt-0 ml-3   '><img src='/images/P3Logo2.png' alt='' /></div>
</div>
        
        <div className='flex flex-col justify-center items-center mt-5 h-[23%]'>
        <div  className='text-black text-center tracking-[2px] text-[30px] font-lato '>
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

export default Page3sub
