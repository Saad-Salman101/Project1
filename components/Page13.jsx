/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Element} from 'react-scroll';

const Page13 = () => {
  return (
    <>
    <Element name="page13" className="section">
    <div id='page13' className='h-screen w-full flex-col  '>
      <div className='w-full h-[30%]'></div>
      <div className=' md:h-[20%] h-[10%] flex justify-center md:w-[70%] w-[50%] ml-20 mb-96'><img src='/images/P13Logo.png' alt='' /></div>
      <div className='w-full h-[50%] flex flex-col  items-center '>
        <div></div>
        <div className='text-[black] text-[20px] md:text-[30px] font-lato tracking-[2px] text-center mb-5'>
          Document-signing technology <br/> that lets you sign documents online.
        </div>
        <div className='w-full flex-col justify-between '>
          <div></div>
          
          <div className='w-full flex justify-end items-center'>
            <div className='flex flex-col md:mr-10 md:mb-5 '>
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