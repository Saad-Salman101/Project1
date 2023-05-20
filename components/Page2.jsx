/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element, scroller } from 'react-scroll';

const Page2 = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
    <Element name="page2" className="section">
     <div id="page2" className='flex flex-col w-full min-h-screen bg-black justify-center'>
      <div >
        <div className='flex h-[100vh] w-full justify-between items-center'> 
        <div className='md:w-[20%] w-[15%] h-full  flex items-center'><img src='/images/P2Logo.png' alt='' className='ml-4'  /></div>
        <div className='md:w-[50%] w-[70%] h-full flex-col flex justify-between items-center'>
          <div></div>
          <img src='/images/P2Description.png' alt='' className='md:ml-0 ml-10' />         

            <a>
              <img src="/images/DownArrow.png" alt="Image" className="filter-invert md:w-[100%] w-[40px]"   onClick={() => scrollToSection('page3')}/>

            </a>

          </div>
         <div className='md:w-[20%] w-[5%] '></div>
         </div>
         
      </div>
     </div>
     </Element>
    </>
  )
}

export default Page2
