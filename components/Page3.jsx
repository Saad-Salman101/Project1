/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

const Page3 = () => {
  return (
    <>
    <div id="page3" className='h-screen w-full flex flex-col justify-between'>
      
      <div className='w-full h-[15%] flex justify-center items-center'>
        <div className='text-black tracking-[2px] text-[30px] uppercase font-lato '>Revolutionary</div>
      </div>
      
      <div className='flex justify-center items-center w-full h-[60%] '>
        <div></div>
        <div className='absolute right-1/2'><img src='/images/P3Line.png' alt=''/></div>
        <div className='w-[70%] relative'><img src='/images/P3Logo.png' alt=''/></div>
        <div></div>
        </div>
        
        <div className='flex flex-col justify-center items-center h-[25%]'>
        <div  className='text-black tracking-[2px] text-[30px] font-lato mb-10'>The only platform of it`s kind in the world</div>
        <Link href='#page4' >
            <a>
              <img src='/images/DownArrow.png' alt='' />
            </a>
          </Link>
        </div>

    </div>
      
    </>
  )
}

export default Page3
