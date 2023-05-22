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
          className="h-screen flex justify-between "
        >
          <div className="md:w-1/3"></div>
          <div className="md:w-2/5 md:ml-0 ml-36 text-white text-4xl font-lato tracking-2px uppercase flex flex-col items-center justify-between">
            <div></div>
            Cars
            <div>
              <img
                src="/images/DownArrow.png"
                alt="Image"
                className="filter-invert md:w-24 w-12 cursor-pointer"
                onClick={() => scrollToSection('page7')}
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-end">
            <div className="mr-3">
              <img src="/images/P6Image.png" alt="" className="mr-4 mb-3" />
            </div>
          </div>
        </div>
      </Element>
    </Parallax>
    </div>
  );
};

export default Page6;
