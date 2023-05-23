/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page10 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether to trigger animations only once
    });
  }, []);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className='bg-black'>
    <Parallax bgImage="/images/P10Background.png" strength={500}>
      <Element name="page10" className="section">
        <div
          id="page10"
          className="min-h-screen flex justify-center items-center "
        >
          <div className="text-white flex flex-col justify-between text-4xl font-lato tracking-2px uppercase h-screen">
            <div className="h-1/3 w-full"></div>
            <div className="h-1/3 flex justify-center items-center" data-aos="fade-up">private islands</div>
            <div className="h-1/3 flex justify-center items-end">
              <img
                src="/images/DownArrow.png"
                alt="Image"
                className="filter-invert md:w-24 w-12 cursor-pointer"
                onClick={() => scrollToSection('page11')}
              />
            </div>
          </div>
        </div>
      </Element>
    </Parallax>
    </div>
  );
};

export default Page10;
