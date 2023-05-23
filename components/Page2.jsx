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
     <div id="page2" className='flex flex-col w-full min-h-screen md:static   bg-black justify-center'>
      <div >
        <div className='flex h-[100vh] w-full justify-between items-center relative'> 
        <div className='md:w-[20%] w-[50%] ml-0 md:ml-7 md:static absolute top-[-200px] left-1/2 transform -translate-x-1/2 h-full flex items-center'>
  <img src='/images/P2Logo.png' alt='' className='md:ml-32 ml-0' />
</div>
        <div className='md:w-[50%] w-[70%] md:static  absolute top-[2px] right-1/4  h-full flex-col flex justify-between items-center'>
          <div></div>
          {/* <img src='/images/P2Description.png' alt='' className='md:ml-0 ml-10 ' />  */}
          <div  className='md:ml-0 ml-10 font-Lato text-[30px] text-white text-center'>We are the global platform. <br/> Services in over on hundred and twenty countries. </div>        

            <a>
              <img src="/images/DownArrow.png" alt="Image" className="filter-invert md:w-[100%] w-[40px] md:static md:ml-0 ml-6 absolute bottom-1 left-1/2"   onClick={() => scrollToSection('page3')}/>

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
