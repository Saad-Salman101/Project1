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
    
      <div className='h-screen w-full flex-col justify-between relative '>
        <div className='w-full h-[30%] '></div>
        
        <div className='md:w-[40%] w-[50%] h-[40%] flex justify-start items-center ml-10 lg:ml-32  '>
          <img src='/images/P1ZimoGroup.png' alt='' />
        </div>

        <img src='/images/P1BackLogo.png' alt='' className='absolute left-1/5 bottom-1/3 blur-sm md:blur-lg opacity-90' />
        
        <div className='w-full h-[30%] flex justify-center  items-end '>
              <img src='/images/DownArrow.png' alt='' className='md:w-[80px] w-[40px] cursor-pointer' onClick={() => scrollToSection('page2')}/>
  
        </div>
      </div>
    </>
  );
};

export default Page1;
