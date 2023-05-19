/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Page4 = () => {
  return (
    <>
      <div id="page4" className='h-screen flex flex-col  justify-between items-center bg-[url("/images/b5.png")] bg-contain bg-center bg-no-repeat bg-black'>

        <div className='h-[35%] w-full'>

        </div>
        <div className='h-[30%] w-full flex items-center justify-center'>
        <img src='/images/P4Zimo2.png' alt=''  className='opacity-40'/>
        </div>
        <div className='h-[35%] w-full flex flex-col justify-end items-center'>
          <Link href='#page5'  >
            <a>
            <img src="/images/DownArrow.png" alt="Image" className="filter-invert" />
            </a>
          </Link>
        </div>


      </div>



    </>
  )
}

export default Page4
