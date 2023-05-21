/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { scroller } from 'react-scroll';


const Page1 = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
    
      <div className='h-screen w-full flex-col justify-between relative'>
        <div className='w-full h-[30%]'></div>
        <div className='md:w-[30%] w-[50%] h-[30%] flex justify-start items-center ml-4'>
          <img src='/images/P1ZimoGroup.png' alt='' />
        </div>
        <div className='w-full h-[40%] flex justify-center  items-end '>
              <img src='/images/P1BackLogo.png' alt='' className='absolute bottom-1/4 opacity-20' />
  
              <img src='/images/DownArrow.png' alt='' className='md:w-[80px] w-[40px]' onClick={() => scrollToSection('page2')}/>
    

              
        </div>
      </div>
    </>
  );
};

export default Page1;
