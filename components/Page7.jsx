/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Element, scroller } from 'react-scroll';
import { Parallax } from 'react-parallax';

const Page7 = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='bg-black'>
    <Parallax bgImage="/images/P7Background.png" strength={500}>
      <Element name="page7" className="section">
        <div
          id="page7"
          className="min-h-screen flex justify-center items-center "
        >
          <div className="text-white flex flex-col justify-between text-4xl font-lato tracking-2px uppercase h-screen">
            <div className="h-1/3 w-full"></div>
            <div className="h-1/3 flex justify-center items-center">yachts</div>
            <div className="h-1/3 flex justify-center items-end">
              <img
                src="/images/DownArrow.png"
                alt="Image"
                className="filter-invert md:w-24 w-12 cursor-pointer"
                onClick={() => scrollToSection('page8')}
              />
            </div>
          </div>
        </div>
      </Element>
    </Parallax>
    </div>
  );
};

export default Page7;
