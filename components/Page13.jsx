/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Page13 = () => {
  return (
    <>
    <div id='page13' className='h-screen w-full flex-col  '>
      <div className='w-full h-[30%]'></div>
      <div className='w-full h-[20%] flex justify-center '><img src='/images/P13Logo.png' alt='' /></div>
      <div className='w-full h-[50%] flex flex-col justify-between items-center '>
        <div></div>
        <div className='text-[#737373] text-[30px] font-lato tracking-[2px]'>
          Document-signing technology that lets you sign documents online.
        </div>
        <div className='w-full flex-col justify-between '>
          <div></div>
          <div className='w-full flex justify-end items-center'>
            <div className='flex flex-col mr-10 mb-5'>
              <div className='flex'>
                <img src='/images/P13SmallLogo.png' alt='' />
                <img src='/images/P13Sign.png' alt='' className='ml-20'/>
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
    </>
  )
}

export default Page13