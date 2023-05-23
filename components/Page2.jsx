/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element, scroller} from 'react-scroll';

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
     <div id="page2" className='flex flex-col w-full min-h-screen md:static  relative bg-black justify-center'>
      <div >
        <div className='flex flex-col h-[100vh] w-full justify-between '> 
          <div className='h-[30%] w-full '></div>

          <div className='h-[40%] w-full  flex flex-col md:flex-row md:justify-around md:items-center justify-center items-center'>

            <div className=' md:mb-0 mb-10'><img src='/images/P2Logo.png' alt='' className=''  /></div>
            <div  className=' font-Lato text-[30px] text-white text-center'>We are the global platform. <br/> Services in over on hundred and twenty countries. </div>
            <div></div>

          </div>

          <div className='h-[30%] w-full flex flex-row justify-center items-end'>
          <div className=''>
              <img src="/images/DownArrow.png" alt="Image" className="filter-invert md:w-[100%] w-[40px] cursor-pointer"   onClick={() => scrollToSection('page3')}/>

            </div>
            </div>
         </div>
         
      </div>
     </div>
     </Element>
    </>
  )
}

export default Page2
