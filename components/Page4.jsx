/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Element, scroller } from 'react-scroll';
import { Parallax } from 'react-parallax';

const Page4 = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='bg-black'>
    <Parallax bgImage="/images/P4Background.png" strength={500}>
      <Element name="page4" className="section">
        <div
          id="page4"
          className="h-screen flex flex-col justify-between items-center bg-contain bg-center bg-no-repeat "
        >
          <div className="h-1/3 w-full"></div>
          <div className="h-1/3 w-full flex items-center justify-center">
            <img
              src="/images/P4Zimo.png"
              alt=""
              className="opacity-40 blur-sm md:blur-lg"
            />
          </div>
          <div className="h-1/3 flex justify-center items-end">
            <a>
              <img
                src="/images/DownArrow.png"
                alt="Image"
                className="filter-invert md:w-full w-12 cursor-pointer"
                onClick={() => scrollToSection('page5')}
              />
            </a>
          </div>
        </div>
      </Element>
    </Parallax>
    </div>
  );
};

export default Page4;
