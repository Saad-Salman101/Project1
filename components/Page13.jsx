/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element} from 'react-scroll';

const Page13 = () => {
  return (
    <>
    <Element name="page13" className="section">
    <div id='page13' className='h-screen w-full flex-col  '>
      <div className='w-full h-[30%]'></div>
      <div className=' h-[20%] flex justify-center md:w-[70%] w-[50%] ml-20'><img src='/images/P13Logo.png' alt='' /></div>
      <div className='w-full h-[50%] flex flex-col justify-between items-center '>
        <div></div>
        <div className='text-[#737373] text-[30px] font-lato tracking-[2px] text-center'>
          Document-signing technology that lets you sign documents online.
        </div>
        <div className='w-full flex-col justify-between '>
          <div></div>
          
          <div className='w-full flex justify-end items-center'>
            <div className='flex flex-col wd:mr-10 wd:mb-5'>
              <div className='flex md:ml-0 ml-2'>
                <img src='/images/P13SmallLogo.png' alt='' />
                <img src='/images/P13Sign.png' alt='' className='md:ml-20 ml-10'/>
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