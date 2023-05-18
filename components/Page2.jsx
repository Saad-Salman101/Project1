/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';

const Page2 = () => {
  return (
    <>
     <div id="page2" className='flex flex-col w-full min-h-screen bg-black justify-center'>
      <div >
        <div className='flex h-[100vh] w-full justify-between items-center'> 
        <div className='md:w-[20%] w-[15%] h-full  flex items-center'><img src='/images/P2Logo.png' alt='' className='ml-4'  /></div>
        <div className='md:w-[50%] w-[70%] h-full flex-col flex justify-between items-center'>
          <div></div>
          <img src='/images/P2Description.png' alt='' />         
         <Link href='#page3'>
            <a>
              <img src='/images/DownArrow.png' alt='' />
            </a>
          </Link></div>
         <div className='md:w-[20%] w-[5%] '>asasc</div>
         </div>
         
      </div>
     </div>

    </>
  )
}

export default Page2
