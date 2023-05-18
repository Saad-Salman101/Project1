/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import Link from 'next/link';

const Page1 = () => {
  return (
    <>
      <div className='h-screen w-full flex-col justify-between'>
        <div className='w-full h-[30%]'></div>
        <div className='md:w-[30%] w-[50%] h-[30%] flex justify-start items-center ml-4'>
          <img src='/images/P1ZimoGroup.png' alt='' />
        </div>
        <div className='w-full h-[30%] flex justify-center items-end'>

            <a href='#page2'>
              <img src='/images/DownArrow.png' alt='' />
            </a>

        </div>
      </div>
    </>
  );
};

export default Page1;
