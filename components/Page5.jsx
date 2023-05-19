/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Page5 = () => {
  return (
    <>
    <div id='page5' className='min-h-screen  flex justify-center items-center bg-[url("/images/P5Background.png")] bg-cover bg-center bg-no-repeat bg-black'>
      <div className='text-white flex flex-col justify-between text-[40px] font-lato tracking-[2px] uppercase h-[100vh] '>
        <div className='h-[35%] w-full '></div>
        <div className='h-[30%] flex justify-center items-center'>real estate </div>
        <div className='h-[35%] flex justify-center items-end '> <a href='#page6'><img src="/images/DownArrow.png" alt="Image" className="filter-invert" />
            </a></div>
         </div>
    </div>
  </>
  )
}

export default Page5
