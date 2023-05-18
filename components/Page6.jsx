/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Page6 = () => {
  return (
    <>
    <div id='page6' className='h-screen flex justify-between bg-[url("/images/P6Background.png")] bg-cover bg-center bg-no-repeat bg-black'>
      <div className='md:w-[30%]'></div>
      <div className='md:w-[40%] text-white text-[40px] font-lato tracking-[2px] uppercase flex flex-col items-center justify-between'>
        <div></div>
        Cars
        <div>
        <a href='#page7'>
              <img src='/images/DownArrow.png' alt='' />
            </a>
        </div>
        </div>
      <div className='w-[50%] md:w-[30%] flex flex-col justify-end'>
        <div className='mr-3'><img src='/images/P6Image.png' alt=''  className='mr-4 mb-3 '/>
         </div>
          </div>
    </div>
  </>
  )
}

export default Page6
