/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Page4 = () => {
  return (
    <>
 <div className='realtive h-[100vh] w-screen flex-col justify-center items-center bg-black z-[-10] overflow-hidden'>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}> 
            <div ><img src='/images/P4Background.png' alt='' className='absolute bottom-[5px] z-[0] '/> </div>
        <div className='absolute bottom-1/2 left-[100px] bg-black opacity-10 backdrop-blur-lg'><img src='/images/P4Zimo.png' alt=' '/></div>
        </div>
    </div> 

      
    </>
  )
}

export default Page4
