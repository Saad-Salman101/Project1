/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Page3 = () => {
  return (
    <>
    <div className='h-screen w-full flex flex-col justify-between'>
      
      <div className='w-full h-[20%] flex justify-center items-center'>
        <div className='text-black tracking-[2px] text-[30px] uppercase font-lato '>Revolutionary</div>
      </div>
      
      <div className='flex justify-center items-center w-full h-[60%] '>
        <div></div>
        <div className='absolute right-1/2'><img src='/images/P3Line.png' alt=''/></div>
        <div className='w-[70%] relative'><img src='/images/P3Logo.png' alt=''/></div>
        <div></div>
        </div>
        
        <div className='flex justify-center items-start h-[20%]'>
        <div  className='text-black tracking-[2px] text-[30px] font-lato '>The only platform of it`s kind in the world</div>
        </div>

    </div>
      
    </>
  )
}

export default Page3
