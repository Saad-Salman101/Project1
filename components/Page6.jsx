/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Element, scroller } from 'react-scroll';
import { Parallax } from 'react-parallax';

const Page6 = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='bg-black'>
    <Parallax bgImage="/images/P6Background.png" strength={500}>
      <Element name="page6" className="section">
        <div
          id="page6"
          className="h-screen flex flex-col justify-between "
        >
          <div className="md:h-1/4 bg-slate-400"></div>
          <div className="md:h-2/4 md:ml-0  text-white text-center text-4xl font-lato tracking-2px uppercase flex flex-col items-center justify-between">
            <div>Cars</div>
            

          </div>
          <div className="h-1/3 w-full flex items-end justify-between">
            <div className='w-[40%]'></div>
          <div>
              <img
                src="/images/DownArrow.png"
                alt="Image"
                className="filter-invert md:w-24 w-12 cursor-pointer ml-20"
                onClick={() => scrollToSection('page7')}
              />
            </div>
            <div className="mr-3">
              <img src="/images/P6Image.png" alt="" className="mr-4 mb-3 md:w-[70%] w-full" />
            </div>
          </div>
        </div>
      </Element>
    </Parallax>
    </div>
  );
};

export default Page6;
