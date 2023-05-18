/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Page6 = () => {
  return (
    <>
    <div className='h-screen flex justify-between bg-[url("/images/P6Background.png")] bg-cover bg-black'>
      <div className='w-[30%]'></div>
      <div className='w-[40%] text-white text-[40px] font-lato tracking-[2px] uppercase flex items-center justify-center'>Cars</div>
      <div className='w-[30%] flex flex-col justify-end'>
        <div className='mr-3'><img src='/images/P6Image.png' alt=''  className='mr-4 mb-3  bg-slate-900 opacity-90 rounded-2xl'/>
         </div>
          </div>
    </div>
  </>
  )
}

export default Page6
